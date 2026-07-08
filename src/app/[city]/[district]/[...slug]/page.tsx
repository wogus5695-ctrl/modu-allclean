import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { seoRegions, SeoRegion } from '@/data/seo/regions';
import { seoServices, SeoService } from '@/data/seo/services';
import { generateLandingPageData } from '@/lib/seo-builder';
import { getLandingMetadata, getArticleJsonLd, getBreadcrumbJsonLd, DOMAIN, BRAND_NAME, INDEXED_DONG_COMBINATIONS, CONTACT_PHONE, DEFAULT_OG_IMAGE } from '@/lib/seo';
import LandingTemplate from '@/components/LandingTemplate';
import MainTemplate from '@/components/MainTemplate';
import MoveInCleaningTemplate from '@/components/MoveInCleaningTemplate';

export const dynamicParams = false;

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

  let service = null;
  let region = null;

  if (decodedSlug.length === 1) {
    const serviceSlug = decodedSlug[0];
    service = services.find(s => s.serviceSlug === serviceSlug && s.indexStatus === 'index');
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
    service = services.find(s => s.serviceSlug === serviceSlug && s.indexStatus === 'index');
    if (!service) return { region: null, service: null, seoRegion: null, seoService: null };
    
    region = regions.find(r => 
      r.regionSlug === city && 
      r.districtSlug === decodedDistrict && 
      r.subDistrictSlug === subDistrictSlug &&
      r.indexStatus === 'index'
    );
    if (!region) return { region: null, service: null, seoRegion: null, seoService: null };
    
    const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
    const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
    const isMoveOrMoving = isMoveIn || isMoving;
    
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
  
  const seoService = seoServices.find(s => s.serviceSlug === service.serviceSlug);
  
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
          faqSet: service.faq.map(f => ({ q: f.question, a: f.answer })),
          relatedServices: [],
          heroDescriptionTemplate: '{{displayNameKo}}의 {{commonBuildingTypes}}에 최적화된 청소 서비스',
          ctaHook: '빠른 견적 상담',
          thumbnailImage: service.imageUrl || '',
          ogImage: service.imageUrl || '',
          altBase: service.serviceNameKo
      };
  }

  return { region, service, seoRegion, seoService: finalSeoService };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, district, slug } = await params;
  const { region, service } = getRegionAndService(city, district, slug);

  if (!region || !service) {
    return {};
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

  // FAQPage JSON-LD 처리 (화면과 100% 동일하게 일원화)
  const isMoveIn = service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning';
  const isMoving = service.id === 'moving' || service.serviceSlug === 'moving-cleaning';
  const isMoveOrMoving = isMoveIn || isMoving;
  const workName = isMoveIn ? '입주청소' : '이사청소';

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': isMoveOrMoving ? [
      {
        '@type': 'Question',
        'name': `${regionName} ${workName}는 ${isMoveIn ? '입주' : '이사'} 며칠 전에 하는 게 좋나요?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': isMoveIn 
            ? '가구가 들어오기 전 빈집 상태에서 진행하는 것이 가장 좋습니다. 보통 입주일 1~3일 전 작업을 권장하며, 일정이 촉박한 경우 상담 시 가능 여부를 확인합니다.'
            : '가구나 짐이 없는 완전히 비어있는 집 상태에서 구석구석 정밀 클리닝이 진행되도록 이사일 기준 1~3일 전 일정을 잡고 완료하시는 것을 추천합니다.'
        }
      },
      {
        '@type': 'Question',
        'name': '욕실과 주방 오염도 따로 확인하나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '욕실은 물때, 배수구, 수전 주변을 중심으로 확인하고, 주방은 싱크대, 수납장, 조리대 주변의 생활오염을 중심으로 확인합니다.'
        }
      },
      {
        '@type': 'Question',
        'name': '베란다와 창틀도 포함되나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '베란다 바닥, 배수구 주변, 창틀 틈새 먼지는 입주 후 직접 정리하기 번거로운 구간입니다. 현장 상태와 견적 범위에 따라 상담 시 포함 범위를 확인합니다.'
        }
      },
      {
        '@type': 'Question',
        'name': isMoveIn ? '신축 아파트 공사 분진도 청소 가능한가요?' : '기존 세입자가 남긴 생활 찌든 때도 제거되나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': isMoveIn 
            ? '신축 현장은 겉으로 깨끗해 보여도 창틀, 바닥, 몰딩, 수납장 내부에 공사 분진이 남아 있는 경우가 많습니다.'
            : '주방의 찌든 기름때, 욕실 배수구 주변 및 변기/세면대 물때, 창틀 틈새의 묵은 먼지 등 생활 오염 흔적은 전용 약품과 장비로 분해하여 깨끗하게 제거합니다.'
        }
      },
      {
        '@type': 'Question',
        'name': '짐이 있는 상태에서도 청소가 가능한가요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '가능은 하지만 빈집 상태보다 작업 범위가 제한될 수 있습니다. 가구나 짐이 많다면 상담 시 미리 알려주셔야 합니다.'
        }
      },
      {
        '@type': 'Question',
        'name': '견적은 어떻게 확인하나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '지역, 평수, 집 형태, 오염도, 작업 범위, 입주 예정일에 따라 달라집니다. 사진과 기본 정보를 알려주시면 상담이 빠릅니다.'
        }
      }
    ] : service.faq.map(item => ({
      '@type': 'Question',
      'name': item.question.replace('{service}', service.serviceNameKo).replace('{region}', regionName),
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer.replace('{service}', service.serviceNameKo).replace('{region}', regionName)
      }
    }))
  };

  const isDistrictLevel = region.subDistrict === '전지역';
  const shortDistrict = region.district.replace(/(구|시)$/, '');
  const requestedWithSuffix = district.endsWith('-gu') || district.endsWith('-si');

  let title = '';
  let description = '';

  let representativeArea = '';
  if (isMoveOrMoving) {
    const isIncheon = region.regionSlug === 'incheon';

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

      title = `${representativeArea} ${workName} | 욕실·주방·베란다 검수 - ${BRAND_NAME}`;
      description = `${representativeArea} ${workName} 상담. 입주 전 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 신축 분진을 입주일 기준으로 확인합니다.`;
    } else {
      // 구 / 시 단위 페이지
      if (requestedWithSuffix) {
        const cleanDistrict = region.district.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
        representativeArea = isIncheon ? `인천 ${cleanDistrict}` : cleanDistrict;
        
        title = `${representativeArea} ${workName} | 욕실·주방·베란다 검수 - ${BRAND_NAME}`;
        description = `${representativeArea} ${workName} 상담. 입주 전 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 신축 분진을 입주일 기준으로 확인합니다.`;
      } else {
        const cleanShortDistrict = shortDistrict.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
        representativeArea = cleanShortDistrict;
        
        title = `${representativeArea} ${workName} | 입주 전 욕실·주방 청소 - ${BRAND_NAME}`;
        description = `${representativeArea} ${workName} 상담. 입주일 전 욕실, 주방, 베란다·창틀, 분진 오염 등 주요 공간의 청소 범위를 확인합니다.`;
      }
    }
  } else {
    const titleRegion = isDistrictLevel 
      ? (requestedWithSuffix ? region.district : shortDistrict) 
      : region.subDistrict;
    const descRegion = isDistrictLevel 
      ? (requestedWithSuffix ? region.district : shortDistrict) 
      : region.subDistrict;
    title = `${titleRegion} ${service.serviceNameKo} 전문업체 | ${BRAND_NAME}`;
    description = `${descRegion} ${service.serviceNameKo} 고민 해결! ${BRAND_NAME}은 ${service.serviceNameKo} 전문 업체로서 ${service.shortDescription}을 위해 24시간 친절 상담 및 견적 안내를 제공합니다.`;
  }
  
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
      return `${representativeArea} ${workName}`;
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
        <LandingTemplate data={landingData} regionObj={seoRegion} currentService={seoService} />
      ) : (
        <MainTemplate region={regionName} service={service.serviceNameKo} regionObj={region} />
      )}
    </>
  );
}

export async function generateStaticParams() {
  const params: { city: string; district: string; slug: string[] }[] = [];

  const guRegions = regions.filter(r => r.subDistrictSlug === 'all');
  const activeServices = services.filter(s => s.indexStatus === 'index');

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

  // 3. INDEXED_DONG_COMBINATIONS 수동 등록 처리
  INDEXED_DONG_COMBINATIONS.forEach(combo => {
    const service = services.find(s => combo.endsWith(s.id));
    if (service) {
      const regionPart = combo.slice(0, -(service.id.length + 1));
      const regionParts = regionPart.split('-');
      if (regionParts.length >= 2) {
        const districtSlug = regionParts[0];
        const subDistrictSlug = regionParts.slice(1).join('-');

        const region = regions.find(r => 
          r.districtSlug === districtSlug && 
          r.subDistrictSlug === subDistrictSlug
        );
        if (region) {
          params.push({
            city: region.regionSlug,
            district: region.districtSlug,
            slug: [region.subDistrictSlug, service.serviceSlug]
          });
        }
      }
    }
  });

  // 4. 입주청소(move-in-cleaning) 및 이사청소(moving-cleaning)의 동 단위 자동 빌드 대상 추가
  const moveOrMovingServices = services.filter(s => s.serviceSlug === 'move-in-cleaning' || s.serviceSlug === 'moving-cleaning');
  regions
    .filter(r => r.subDistrictSlug !== 'all' && ['seoul', 'incheon', 'gyeonggi'].includes(r.regionSlug))
    .forEach(region => {
      moveOrMovingServices.forEach(service => {
        params.push({
          city: region.regionSlug,
          district: region.districtSlug,
          slug: [region.subDistrictSlug, service.serviceSlug]
        });
      });
    });

  return params;
}
