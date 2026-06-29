import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { seoRegions, SeoRegion } from '@/data/seo/regions';
import { seoServices, SeoService } from '@/data/seo/services';
import { generateLandingPageData } from '@/lib/seo-builder';
import { getLandingMetadata, getArticleJsonLd, getBreadcrumbJsonLd, DOMAIN, BRAND_NAME, INDEXED_DONG_COMBINATIONS } from '@/lib/seo';
import LandingTemplate from '@/components/LandingTemplate';
import MainTemplate from '@/components/MainTemplate';

type Props = {
  params: Promise<{ city: string; district: string; slug: string[] }>;
};

function getRegionAndService(city: string, district: string, slug: string[]) {
  if (!slug || slug.length === 0) return { region: null, service: null, seoRegion: null, seoService: null };
  const serviceSlug = slug[slug.length - 1];
  const subDistrictSlug = slug.length > 1 ? slug[0] : 'all';

  const service = services.find(s => s.serviceSlug === serviceSlug);
  const region = regions.find(r => 
    r.regionSlug === city && 
    r.districtSlug === district && 
    r.subDistrictSlug === subDistrictSlug
  );
  
  // 신규 데이터 구조 매칭 (동 단위 매칭 우선)
  let seoRegion = seoRegions.find(r => 
    r.citySlug === city && 
    r.districtSlug === district && 
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
          relatedAreaLinks: []
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

  return getLandingMetadata(region.districtSlug, region.subDistrictSlug, service.id);
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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': service.faq.map(item => ({
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
  const titleRegion = isDistrictLevel ? `${region.district} ${shortDistrict}` : region.subDistrict;
  const descRegion = isDistrictLevel ? `${region.district}(${shortDistrict})` : region.subDistrict;

  const title = `${titleRegion} ${service.serviceNameKo} 전문업체 | ${BRAND_NAME}`;
  const description = `${descRegion} ${service.serviceNameKo} 고민 해결! ${BRAND_NAME}은 ${service.serviceNameKo} 전문 업체로서 ${service.shortDescription}을 위해 24시간 친절 상담 및 견적 안내를 제공합니다.`;
  
  const path = region.subDistrictSlug === 'all'
    ? `/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`
    : `/${region.regionSlug}/${region.districtSlug}/${region.subDistrictSlug}/${service.serviceSlug}`;
  
  const url = `${DOMAIN}${path}`;
  
  const articleJsonLd = getArticleJsonLd(title, description, url);
  const breadcrumbJsonLd = getBreadcrumbJsonLd(regionName, service.serviceNameKo, url);

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
      params.push({
        city: region.regionSlug,
        district: region.districtSlug,
        slug: [service.serviceSlug]
      });
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
