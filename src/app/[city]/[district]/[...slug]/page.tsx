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

type Props = {
  params: Promise<{ city: string; district: string; slug: string[] }>;
};

function getRegionAndService(city: string, district: string, slug: string[]) {
  if (!slug || slug.length === 0) return { region: null, service: null, seoRegion: null, seoService: null };
  const decodedDistrict = decodeURIComponent(district);
  const decodedSlug = slug.map(s => decodeURIComponent(s));
  
  const serviceSlug = decodedSlug[decodedSlug.length - 1];
  const subDistrictSlug = decodedSlug.length > 1 ? decodedSlug[0] : 'all';

  const service = services.find(s => s.serviceSlug === serviceSlug);
  
  // 1차적으로 정확히 일치하는 districtSlug 매칭 시도
  let region = regions.find(r => 
    r.regionSlug === city && 
    r.districtSlug === decodedDistrict && 
    r.subDistrictSlug === subDistrictSlug
  );
  
  let targetDistrictSlug = decodedDistrict;
  
  // 정확히 매핑이 안 되었고 인천이 아닌 경우 정규화 적용 (서울/경기 접미사 제거형 대응)
  if (!region && city !== 'incheon') {
    targetDistrictSlug = decodedDistrict.replace(/-gu$/, '').replace(/-si$/, '');
    region = regions.find(r => 
      r.regionSlug === city && 
      r.districtSlug === targetDistrictSlug && 
      r.subDistrictSlug === subDistrictSlug
    );
  }
  
  // 신규 데이터 구조 매칭 (동 단위 매칭 우선)
  let seoRegion = seoRegions.find(r => 
    r.citySlug === city && 
    r.districtSlug === targetDistrictSlug && 
    r.neighborhoodSlug === subDistrictSlug
  );
  
  const seoService = seoServices.find(s => s.serviceSlug === serviceSlug);
  
  // Nếu chưa có seoRegion (추가 안된 지역), 임시 변환
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

  // Nếu chưa có seoService (추가 안된 서비스), 임시 변환
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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': isMoveIn ? [
      {
        '@type': 'Question',
        'name': `${regionName} 입주청소는 입주 며칠 전에 하는 게 좋나요?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '가구가 들어오기 전 빈집 상태에서 진행하는 것이 가장 좋습니다. 보통 입주일 1~3일 전 작업을 권장하며, 일정이 촉박한 경우 상담 시 가능 여부를 확인합니다.'
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
        'name': '신축 아파트 공사 분진도 청소 가능한가요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '신축 현장은 겉으로 깨끗해 보여도 창틀, 바닥, 몰딩, 수납장 내부에 공사 분진이 남아 있는 경우가 많습니다.'
        }
      },
      {
        '@type': 'Question',
        'name': '짐이 있는 상태에서도 입주청소가 가능한가요?',
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

  if (isMoveIn) {
    const cityName = region.city === '서울' ? '서울권' : region.city === '인천' ? '인천권' : '경기권';
    if (!isDistrictLevel) {
      // 1. 동 단위 페이지
      const neighborhoodName = region.subDistrict.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
      const districtName = region.district.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
      title = `${neighborhoodName} 입주청소 | 욕실·주방·베란다 검수 - ${BRAND_NAME}`;
      description = `${neighborhoodName} 입주청소 상담. ${districtName} ${neighborhoodName} 입주 전 욕실 물때, 주방 생활오염, 베란다·창틀 먼지, 신축 분진을 입주일 기준으로 확인합니다.`;
    } else {
      if (requestedWithSuffix) {
        // 2. 구 단위 페이지
        const cleanDistrict = region.district.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
        title = `${cleanDistrict} 입주청소 | 욕실·주방·베란다 검수 - ${BRAND_NAME}`;
        description = `${cleanDistrict} 입주청소 상담. 신축 분진, 전 세입자 생활오염, 욕실 물때, 주방 기름때, 베란다·창틀 먼지를 입주 전 확인합니다.`;
      } else {
        // 3. 구 제거형 페이지
        const cleanShortDistrict = shortDistrict.replace(/^(서울|인천|경기)(특별|광역)?시?\s*/, '');
        title = `${cleanShortDistrict} 입주청소 | 입주 전 욕실·주방 청소 - ${BRAND_NAME}`;
        description = `${cleanShortDistrict} 입주청소 상담. 입주일 전 욕실, 주방, 베란다·창틀, 분진 오염 등 주요 공간의 청소 범위를 확인합니다.`;
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
  
  // 입주청소용 Breadcrumb 계층 구조 처리 (서울, 인천, 경기 다중 광역권 대응)
  let breadcrumbJsonLd;
  if (isMoveIn) {
    const cityName = region.city === '서울' ? '서울권' : region.city === '인천' ? '인천권' : '경기권';
    const parentDistrictName = region.district;
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
          'name': `${cityName} 입주청소`,
          'item': `${DOMAIN}/move-in-cleaning/seoul`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': parentDistrictName,
          'item': `${DOMAIN}/keyword-hub/${region.regionSlug}-${region.districtSlug}`
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': `${regionName} 입주청소`,
          'item': url
        }
      ]
    };
  } else {
    breadcrumbJsonLd = getBreadcrumbJsonLd(regionName, service.serviceNameKo, url);
  }

  // 입주청소 전용 Service & Organization 통합 구조화 데이터 정의
  const serviceJsonLd = isMoveIn ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'CleaningService',
    'name': `${regionName} 입주청소`,
    'description': description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': '모두종합환경',
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

  // 입주청소 서비스인 경우 전용 템플릿 반환
  if (service.id === 'move-in' || service.serviceSlug === 'move-in-cleaning') {
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
          <MoveInCleaningTemplate data={landingData || {} as any} regionObj={seoRegion} currentService={seoService} />
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

  return params;
}
