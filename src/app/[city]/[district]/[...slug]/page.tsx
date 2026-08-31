import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { regions } from '@/data/regions';
import { services, seoServiceKeywords } from '@/data/services';
import { seoRegions, SeoRegion } from '@/data/seo/regions';
import { seoServices, ALL_SEO_SERVICES, SeoService } from '@/data/seo/services';
import { isFactoryComboEnabled } from '@/data/seo/factoryActiveCombinations';
import { factoryServices } from '@/data/seo/factoryServices';
import { generateLandingPageData } from '@/lib/seo-builder';
import { getLandingMetadata, getArticleJsonLd, getBreadcrumbJsonLd, DOMAIN, BRAND_NAME, INDEXED_DONG_COMBINATIONS, CONTACT_PHONE, DEFAULT_OG_IMAGE } from '@/lib/seo';
import LandingTemplate from '@/components/LandingTemplate';
import MainTemplate from '@/components/MainTemplate';
import MoveInCleaningTemplate from '@/components/MoveInCleaningTemplate';
import { serviceContentMap } from '@/data/seo/serviceContentMap';

export const dynamicParams = true;

type Props = {
  params: Promise<{ city: string; district: string; slug: string[] }>;
};

function getRegionAndService(city: string, district: string, slug: string[]) {
  if (!slug || slug.length === 0) return { region: null, service: null, seoRegion: null, seoService: null };
  const decodedDistrict = decodeURIComponent(district);
  const decodedSlug = slug.map(s => decodeURIComponent(s));
  
  if (decodedSlug.length !== 1 && decodedSlug.length !== 2) {
    return { region: null, service: null, seoRegion: null, seoService: null };
  }

  const MOVE_IN_OUT_SLUGS = [
    'move-in-cleaning',
    'moving-cleaning'
  ];

  const GENERAL_CLEANING_SLUGS = ALL_SEO_SERVICES
    .map(s => s.serviceSlug)
    .filter(slug => !MOVE_IN_OUT_SLUGS.includes(slug));

  let service = null;
  let region = null;

  if (decodedSlug.length === 1) {
    const serviceSlug = decodedSlug[0];
    if (!GENERAL_CLEANING_SLUGS.includes(serviceSlug) && !MOVE_IN_OUT_SLUGS.includes(serviceSlug)) {
      return { region: null, service: null, seoRegion: null, seoService: null };
    }

    service = seoServiceKeywords.find(s => s.serviceSlug === serviceSlug && s.indexStatus === 'index');
    if (!service) {
      const fs = ALL_SEO_SERVICES.find(s => s.serviceSlug === serviceSlug);
      if (fs) {
        service = {
          id: fs.serviceSlug,
          serviceNameKo: fs.serviceNameKo,
          serviceSlug: fs.serviceSlug,
          indexStatus: 'noindex',
          faq: fs.faqSet.map(f => ({ question: f.q, answer: f.a }))
        } as any;
      }
    }
    if (!service) return { region: null, service: null, seoRegion: null, seoService: null };
    
    region = regions.find(r => {
      if (r.regionSlug !== city || r.subDistrictSlug !== 'all' || r.indexStatus !== 'index') return false;
      const suffix = r.district.endsWith('시') ? '-si' : '-gu';
      return (
        r.districtSlug === decodedDistrict ||
        (city !== 'incheon' && `${r.districtSlug}${suffix}` === decodedDistrict)
      );
    });
    if (!region) return { region: null, service: null, seoRegion: null, seoService: null };
  } else {
    const subDistrictSlug = decodedSlug[0];
    const serviceSlug = decodedSlug[1];
    if (!GENERAL_CLEANING_SLUGS.includes(serviceSlug) && !MOVE_IN_OUT_SLUGS.includes(serviceSlug)) {
      return { region: null, service: null, seoRegion: null, seoService: null };
    }

    service = seoServiceKeywords.find(s => s.serviceSlug === serviceSlug && s.indexStatus === 'index');
    if (!service) {
      const fs = ALL_SEO_SERVICES.find(s => s.serviceSlug === serviceSlug);
      if (fs) {
        service = {
          id: fs.serviceSlug,
          serviceNameKo: fs.serviceNameKo,
          serviceSlug: fs.serviceSlug,
          indexStatus: 'noindex',
          faq: fs.faqSet.map(f => ({ question: f.q, answer: f.a }))
        } as any;
      }
    }
    if (!service) return { region: null, service: null, seoRegion: null, seoService: null };
    
    region = regions.find(r => 
      r.regionSlug === city && 
      r.districtSlug === decodedDistrict && 
      r.subDistrictSlug === subDistrictSlug &&
      r.indexStatus === 'index'
    );
    if (!region) return { region: null, service: null, seoRegion: null, seoService: null };
    
    const isMoveOrMoving = MOVE_IN_OUT_SLUGS.includes(serviceSlug);
    
    if (isMoveOrMoving) {
      if (!['seoul', 'incheon', 'gyeonggi'].includes(city)) {
        return { region: null, service: null, seoRegion: null, seoService: null };
      }
    } else {
      const combo = `${decodedDistrict}-${subDistrictSlug}-${service.id}`;
      if (!INDEXED_DONG_COMBINATIONS.includes(combo)) {
        return { region: null, service: null, seoRegion: null, seoService: null };
      }
    }
  }

  const targetDistrictSlug = region.districtSlug;
  const subDistrictSlug = decodedSlug.length > 1 ? decodedSlug[0] : 'all';

  let seoRegion = seoRegions.find(r => 
    r.citySlug === city && 
    r.districtSlug === targetDistrictSlug && 
    r.neighborhoodSlug === subDistrictSlug
  );
  
  const seoService = ALL_SEO_SERVICES.find(s => s.serviceSlug === service.serviceSlug);
  
  if (!seoRegion && region) {
      seoRegion = {
          cityNameKo: region.city,
          citySlug: region.regionSlug,
          districtNameKo: region.district,
          districtSlug: region.districtSlug,
          neighborhoodNameKo: region.subDistrict,
          neighborhoodSlug: region.subDistrictSlug,
          displayNameKo: region.subDistrict === '전지역' ? region.district : region.subDistrict,
          regionType: region.subDistrict === '전지역' ? 'district' : 'neighborhood',
          localCharacteristics: region.localDescription,
          commonBuildingTypes: region.buildingCharacteristics,
          commercialCharacteristics: '혼합형',
          cleaningDemandContext: '일반적인 청소 수요',
          nearbyAreas: [],
          relatedAreaLinks: region.subDistrict === '전지역' 
            ? regions
                .filter(r => r.districtSlug === region.districtSlug && r.subDistrictSlug !== 'all')
                .slice(0, 5)
                .map(r => ({ name: `${r.subDistrict} 청소`, url: `/${r.regionSlug}/${r.districtSlug}/${r.subDistrictSlug}` }))
            : regions
                .filter(r => r.districtSlug === region.districtSlug && r.subDistrictSlug !== 'all' && r.subDistrictSlug !== region.subDistrictSlug)
                .slice(0, 3)
                .map(r => ({ name: `${r.subDistrict} 청소`, url: `/${r.regionSlug}/${r.districtSlug}/${r.subDistrictSlug}` }))
      };
  }

  let finalSeoService = seoService;
  if (!finalSeoService && service) {
      finalSeoService = {
          serviceNameKo: service.serviceNameKo,
          serviceSlug: service.serviceSlug,
          mainProblem: service.commonProblems.join(', '),
          targetPlaces: service.targetBuildings,
          contaminationTypes: service.commonProblems,
          preCheckItems: service.preCheckItems,
          estimateFactors: ['현장 오염도', '면적', '작업 난이도'],
          faqSet: service.faq.map((f: any) => ({ q: f.question, a: f.answer })),
          relatedServices: [],
          heroDescriptionTemplate: '{{displayNameKo}}의 {{commonBuildingTypes}}에 최적화된 청소 서비스',
          ctaHook: '빠른 견적 상담',
          thumbnailImage: service.imageUrl || '',
          ogImage: service.imageUrl || '',
          altBase: service.serviceNameKo
      };
  }

  if (region && service) {
      const isFactory = factoryServices.some(fs => fs.serviceSlug === service.serviceSlug);
      if (isFactory) {
          const isEnabled = isFactoryComboEnabled(region.regionSlug, region.districtSlug, service.serviceSlug);
          service.indexStatus = isEnabled ? 'index' : 'noindex';
      }
  }

  return { region, service, seoRegion, seoService: finalSeoService };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, district, slug } = await params;
  const { region, service } = getRegionAndService(city, district, slug);

  if (!region || !service) {
    notFound();
  }

  return getLandingMetadata(region.districtSlug, region.subDistrictSlug, service.id, district);
}

export default async function LandingPage({ params }: Props) {
  const { city, district, slug } = await params;
  const { region, service, seoRegion, seoService } = getRegionAndService(city, district, slug);

  if (!region || !service || !seoService) {
    notFound();
  }

  const regionName = region.subDistrict === '전지역' ? region.district : region.subDistrict;

  // 신규 랜딩 페이지 데이터 생성
  const landingData = (seoRegion && seoService) ? generateLandingPageData(seoRegion, seoService) : null;

  const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
  const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
  const isMoveOrMoving = isMoveIn || isMoving;
  const pageFaqWorkName = isMoveIn ? '입주청소' : '이사청소';

  // 작업명별로 serviceContentMap의 FAQ 연계
  const serviceContent = serviceContentMap[service.serviceSlug] || {
    serviceName: service.serviceNameKo,
    faqItems: service.faq.map((f: any) => ({
      q: f.question.replace('{service}', service.serviceNameKo).replace('{region}', regionName),
      a: f.answer.replace('{service}', service.serviceNameKo).replace('{region}', regionName)
    }))
  };

  const faqList = serviceContent.faqItems.map((item, idx) => {
    let questionText = item.q.replace(/\{\{지역명\}\}/g, regionName).replace(/\{\{작업명\}\}/g, service.serviceNameKo);
    let answerText = item.a.replace(/\{\{지역명\}\}/g, regionName).replace(/\{\{작업명\}\}/g, service.serviceNameKo);
    
    // 첫 번째 FAQ 질문에 지역명과 작업명이 자연스럽게 포함되도록 조절
    if (idx === 0) {
      if (!questionText.includes(regionName)) {
        questionText = `${regionName} ${questionText}`;
      }
      if (!questionText.includes(service.serviceNameKo)) {
        questionText = questionText.replace('청소', service.serviceNameKo);
      }
    }
    return { q: questionText, a: answerText };
  });

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqList.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };

  // 작업명별 title 후킹 문구 및 meta description 템플릿
  const HOOK_PHRASES: Record<string, string> = {
    'exterior-cleaning': '건물 외벽 오염·빗물자국 정리',
    'window-cleaning': '상가·건물 유리창 오염 정리',
    'fire-cleaning': '그을음·냄새·오염 복구 청소',
    'floor-wax-coating': '바닥 세척·코팅 관리',
    'floor-waxing': '바닥 세척·코팅 관리',
    'awning-cleaning': '매장 어닝 먼지·오염 정리',
    'signboard-cleaning': '상가 간판·전면유리 정리',
    'sign-cleaning': '상가 간판·전면유리 정리',
    'interior-post-cleaning': '공사분진·잔먼지 정리',
    'interior-after-cleaning': '공사분진·잔먼지 정리',
    'construction-completion-cleaning': '신축·리모델링 현장 분진 정리',
    'completion-cleaning': '신축·리모델링 현장 분진 정리',
    'hood-cleaning': '주방 후드 기름때 정리',
    'hoarder-house-cleaning': '생활폐기물·악취 정리',
    'hoarding-cleaning': '생활폐기물·악취 정리',
    'special-cleaning': '일반 청소로 어려운 오염 정리',
    'floor-cleaning': '바닥 오염·잔먼지 정리',
    'move-in-cleaning': '욕실·주방·베란다 검수',
    'moving-cleaning': '욕실·주방·베란다 정리',
    'office-cleaning': '업무 공간 분진 및 바닥 오염 정리',
    'store-cleaning': '매장 바닥 및 유리창 오염 정리',
    'factory-cleaning': '작업장 바닥 분진 및 기름때 정리',
    'building-cleaning': '로비·계단 등 공용부 외부 오염 정리',
    'flood-cleaning': '물 유입 피해 복구 및 오염수 정리',
    'warehouse-cleaning': '적재 공간 먼지 및 바닥 오염 정리',
    'hospital-cleaning': '진료실·대기실 위생 및 바닥 오염 정리'
  };

  const DESC_TEMPLATES: Record<string, string> = {
    'signboard-cleaning': '상가 간판, 전면 유리, 어닝의 먼지·빗물 자국·매연 때를 현장 상태에 맞춰 안내합니다.',
    'sign-cleaning': '상가 간판, 전면 유리, 어닝의 먼지·빗물 자국·매연 때를 현장 상태에 맞춰 안내합니다.',
    'window-cleaning': '상가, 사무실, 건물 유리창의 먼지, 물때, 유막, 외부 오염 상태를 기준으로 청소 범위를 안내합니다.',
    'interior-post-cleaning': '공사 분진, 바닥 잔먼지, 창틀 먼지, 수납장 내부 오염 등 인테리어 후 남기 쉬운 오염을 정리합니다.',
    'interior-after-cleaning': '공사 분진, 바닥 잔먼지, 창틀 먼지, 수납장 내부 오염 등 인테리어 후 남기 쉬운 오염을 정리합니다.',
    'move-in-cleaning': '입주 전 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 신축 분진을 입주일 기준으로 확인합니다.',
    'moving-cleaning': '이사 전후 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 바닥 잔먼지를 집 상태에 맞춰 확인합니다.',
    'office-cleaning': '사무실 업무 공간, 회의실, 탕비실의 바닥 찌든 때와 누적된 먼지를 현장 상태에 맞춰 정리합니다.',
    'store-cleaning': '상가 매장의 첫인상을 결정하는 바닥 오염, 전면 유리, 출입구 및 집기 주변의 먼지를 청결하게 관리합니다.',
    'factory-cleaning': '공장 작업장의 찌든 기름때, 설비 주변 분진, 대형 공간의 오염 상태를 고려해 맞춤 세척을 진행합니다.',
    'building-cleaning': '건물 로비, 계단, 복도 등 공용부의 유동 오염과 외부 먼지를 체계적으로 관리하여 청결함을 유지합니다.',
    'flood-cleaning': '갑작스러운 침수로 인한 잔여 물기 제거, 바닥 오염 세정, 오염수 및 폐기물 정리와 악취 제거를 지원합니다.',
    'warehouse-cleaning': '물류 창고 적재 공간의 묵은 먼지, 분진, 바닥 오염을 정리하고 장기 보관 공간의 환경을 쾌적하게 개선합니다.',
    'hospital-cleaning': '병원 진료실, 대기실, 복도 등 공용부의 위생 상태를 점검하고 멸균 및 바닥 오염 정밀 세정을 실시합니다.'
  };

  const isDistrictLevel = region.subDistrict === '전지역';
  const shortDistrict = region.district.replace(/(구|시)$/, '');
  const isIncheon = region.regionSlug === 'incheon';
  const requestedWithSuffix = district.endsWith('-gu') || district.endsWith('-si');
  let representativeArea = '';
  if (!isDistrictLevel) {
    // 동/읍/면 단위 페이지
    const neighborhoodName = region.subDistrict;
    const districtName = region.district;

    if (region.regionSlug === 'seoul') {
      representativeArea = neighborhoodName;
    } else if (region.regionSlug === 'incheon') {
      const isConflictIncheon = ['논현동', '신흥동'].includes(neighborhoodName);
      representativeArea = isConflictIncheon ? `인천 ${neighborhoodName}` : neighborhoodName;
    } else {
      const isConflictGyeonggi = ['문산읍', '신흥동', '중앙동', '역삼동', '신교동', '성남동', '태평동', '수진동', '단대동', '상대원동'].includes(neighborhoodName);
      representativeArea = isConflictGyeonggi ? `${districtName.replace(/(시|군)$/, '')} ${neighborhoodName}` : neighborhoodName;
    }
  } else {
    // 구 / 시 단위 페이지
    if (requestedWithSuffix) {
      const cleanDistrict = region.district.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
      representativeArea = region.districtSlug === 'gwangju-si' ? '경기 광주시' : (isIncheon ? `인천 ${cleanDistrict}` : cleanDistrict);
    } else {
      const cleanShortDistrict = shortDistrict.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
      representativeArea = region.districtSlug === 'gwangju-si' ? '경기 광주' : cleanShortDistrict;
    }
  }

  const workName = service.serviceNameKo;
  const hookPhrase = HOOK_PHRASES[service.serviceSlug] || '청소 전문 서비스';
  
  const isNewService = [
    'office-cleaning',
    'store-cleaning',
    'factory-cleaning',
    'building-cleaning',
    'flood-cleaning',
    'warehouse-cleaning',
    'hospital-cleaning'
  ].includes(service.serviceSlug);

  const title = isNewService
    ? `${representativeArea} ${workName} 전문 | ${BRAND_NAME}`
    : `${representativeArea} ${workName} | ${hookPhrase} - ${BRAND_NAME}`;

  let descDetail = DESC_TEMPLATES[service.serviceSlug];
  if (!descDetail) {
    descDetail = `${service.shortDescription}를`;
  }
  
  const description = isNewService
    ? `${representativeArea} ${workName}가 필요한 현장의 오염 상태, 작업 범위, 공간 특성을 확인해 상담 방향을 안내합니다. 사진과 위치를 보내주시면 작업 가능 여부를 확인합니다.`
    : `${representativeArea} ${workName} 상담. ${descDetail} 현장 상태에 맞춰 안내합니다.`;
  
  const path = region.subDistrictSlug === 'all'
    ? `/${region.regionSlug}/${district}/${service.serviceSlug}`
    : `/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`;
  
  let canonicalPath = path;
  if (region.regionSlug !== 'incheon' && isDistrictLevel) {
    if (!requestedWithSuffix) {
      const suffix = region.district.endsWith('시') ? '-si' : '-gu';
      canonicalPath = `/${region.regionSlug}/${region.districtSlug}${suffix}/${service.serviceSlug}`;
    }
  }
  
  const url = `${DOMAIN}${canonicalPath}`;
  
  const articleJsonLd = getArticleJsonLd(title, description, url);
  
  // 입주청소/이사청소용 Breadcrumb 계층 구조 처리 (서울, 인천, 경기 다중 광역권 대응)
  let breadcrumbJsonLd;
  if (isMoveOrMoving) {
    const parentDistrictName = region.district;
    
    // 대표지역명 바인딩 변수 재계산 (동 단위 충돌 방지 및 구/시 suffix 대응 완료)
    let representativeArea = '';
    const isIncheon = region.regionSlug === 'incheon';

    if (!isDistrictLevel) {
      const neighborhoodName = region.subDistrict;
      if (region.regionSlug === 'seoul') {
        representativeArea = neighborhoodName;
      } else if (region.regionSlug === 'incheon') {
        const isConflictIncheon = ['논현동', '신흥동'].includes(neighborhoodName);
        representativeArea = isConflictIncheon ? `인천 ${neighborhoodName}` : neighborhoodName;
      } else {
        const isConflictGyeonggi = ['문산읍', '신흥동', '중앙동', '역삼동', '신교동', '성남동', '태평동', '수진동', '단대동', '상대원동'].includes(neighborhoodName);
        representativeArea = isConflictGyeonggi ? `${parentDistrictName.replace(/(시|군)$/, '')} ${neighborhoodName}` : neighborhoodName;
      }
    } else {
      if (requestedWithSuffix) {
        const cleanDistrict = region.district.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
        representativeArea = isIncheon ? `인천 ${cleanDistrict}` : cleanDistrict;
      } else {
        const cleanShortDistrict = shortDistrict.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
        representativeArea = cleanShortDistrict;
      }
    }

    const cityMetaName = region.regionSlug === 'seoul' ? '서울권' : region.regionSlug === 'incheon' ? '인천' : '경기';

    breadcrumbJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': '홈',
          'item': DOMAIN
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': '수도권 입주·이사청소 통합 허브',
          'item': `${DOMAIN}/move-in-cleaning/seoul`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': cityMetaName,
          'item': `${DOMAIN}/move-in-cleaning/seoul`
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': parentDistrictName,
          'item': `${DOMAIN}/keyword-hub/${region.regionSlug}-${region.districtSlug}`
        },
        {
          '@type': 'ListItem',
          'position': 5,
          'name': `${representativeArea} ${workName}`,
          'item': url
        }
      ]
    };
  } else {
    breadcrumbJsonLd = getBreadcrumbJsonLd(regionName, service.serviceNameKo, url);
  }

  // 입주청소/이사청소 전용 Service & Organization 통합 구조화 데이터 정의
  const serviceJsonLd = isMoveOrMoving ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'CleaningService',
    'name': (() => {
      let representativeArea = '';
      const isIncheon = region.regionSlug === 'incheon';
      if (!isDistrictLevel) {
        const neighborhoodName = region.subDistrict;
        if (region.regionSlug === 'seoul') {
          representativeArea = neighborhoodName;
        } else if (region.regionSlug === 'incheon') {
          const isConflictIncheon = ['논현동', '신흥동'].includes(neighborhoodName);
          representativeArea = isConflictIncheon ? `인천 ${neighborhoodName}` : neighborhoodName;
        } else {
          const isConflictGyeonggi = ['문산읍', '신흥동', '중앙동', '역삼동', '신교동', '성남동', '태평동', '수진동', '단대동', '상대원동'].includes(neighborhoodName);
          representativeArea = isConflictGyeonggi ? `${region.district.replace(/(시|군)$/, '')} ${neighborhoodName}` : neighborhoodName;
        }
      } else {
        if (requestedWithSuffix) {
          const cleanDistrict = region.district.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
          representativeArea = isIncheon ? `인천 ${cleanDistrict}` : cleanDistrict;
        } else {
          const cleanShortDistrict = shortDistrict.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
          representativeArea = cleanShortDistrict;
        }
      }
      return `${representativeArea} ${pageFaqWorkName}`;
    })(),
    'description': description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': BRAND_NAME,
      'telephone': CONTACT_PHONE,
      'priceRange': '₩₩',
      'image': DEFAULT_OG_IMAGE,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Seoul',
        'addressCountry': 'KR'
      }
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': region.district === regionName ? region.district : `${region.district} ${regionName}`
    }
  } : null;

  // 입주청소/이사청소 서비스인 경우 전용 템플릿 반환
  if (isMoveOrMoving) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        {serviceJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
          />
        )}
        {seoRegion && (
          <MoveInCleaningTemplate data={landingData || {} as any} regionObj={{ ...seoRegion, displayNameKo: representativeArea }} currentService={seoService} />
        )}
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {landingData ? (
        <LandingTemplate 
          data={{
            ...landingData,
            faqBlock: faqList.map(item => ({ q: item.q, a: item.a }))
          }} 
          regionObj={{ ...seoRegion, displayNameKo: representativeArea }} 
          currentService={seoService} 
        />
      ) : (
        <MainTemplate region={regionName} service={service.serviceNameKo} regionObj={region} />
      )}
    </>
  );
}

export async function generateStaticParams() {
  const params: { city: string; district: string; slug: string[] }[] = [];

  const guRegions = regions.filter(r => r.subDistrictSlug === 'all');
  const activeServices = seoServiceKeywords.filter(s => s.indexStatus === 'index');

  guRegions.forEach(region => {
    activeServices.forEach(service => {
      // 1. 행정단위 제거형 (e.g. gangnam)
      params.push({
        city: region.regionSlug,
        district: region.districtSlug,
        slug: [service.serviceSlug]
      });

      // 2. 행정단위 포함형 (e.g. gangnam-gu, bucheon-si - 인천 제외)
      if (region.regionSlug !== 'incheon') {
        const suffix = region.district.endsWith('시') ? '-si' : '-gu';
        params.push({
          city: region.regionSlug,
          district: `${region.districtSlug}${suffix}`,
          slug: [service.serviceSlug]
        });
      }
    });
  });

  // 동 단위 조합(INDEXED_DONG_COMBINATIONS 및 이사/입주 동 단위)은 빌드 타임 메모리/스택 오버플로우 방지를 위해
  // generateStaticParams에서 제외하며, dynamicParams = true 설정에 따라 최초 사용자 접속 시 온디맨드로 실시간 정적 렌더링(ISG)됩니다.

  return params;
}
