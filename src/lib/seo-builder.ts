import { SeoRegion } from '@/data/seo/regions';
import { SeoService } from '@/data/seo/services';
import { BRAND_NAME } from './seo';

export interface LandingPageData {
  url: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  ctaHook: string;
  
  customIntroBlock: string;
  targetSceneBlock: string;
  problemBlock: string;
  preCheckBlock: string;
  estimateBlock: string;
  faqBlock: { q: string; a: string }[];
  
  relatedLinks: { name: string; url: string }[];
  
  ogImage: string;
  imageAlt: string;
  canonical: string;
  indexStatus: 'index' | 'noindex';
}

export function generateLandingPageData(region: SeoRegion, service: SeoService): LandingPageData {
  const url = `/${region.citySlug}/${region.districtSlug}/${region.neighborhoodSlug}/${service.serviceSlug}`;
  
  // Replace variables in templates
  const heroDescription = service.heroDescriptionTemplate
    .replace('{{displayNameKo}}', region.displayNameKo)
    .replace('{{commonBuildingTypes}}', region.commonBuildingTypes);

  return {
    url,
    title: `${region.displayNameKo} ${service.serviceNameKo} 전문 업체 | ${BRAND_NAME}`,
    metaDescription: `${region.displayNameKo} 지역 ${region.commercialCharacteristics} 맞춤형 ${service.serviceNameKo}. ${service.mainProblem} 문제를 해결해 드립니다.`,
    h1: `${region.displayNameKo} ${service.serviceNameKo} 전문 ${BRAND_NAME}`,
    heroDescription,
    ctaHook: service.ctaHook,
    
    // 블록별 동적 문구 생성 (SEO 요구사항: 고유 본문 700자 이상 확보를 위한 서술형 문장 강화)
    customIntroBlock: `${region.displayNameKo} 지역은 특성상 ${region.localCharacteristics} 현상이 두드러집니다. 특히 ${region.commercialCharacteristics}의 비율이 높아, 타 지역에 비해 ${service.serviceNameKo} 작업에 대한 수요가 지속적으로 발생하고 있습니다. ${BRAND_NAME}은 이러한 지역적 맥락을 정확히 이해하고 있으며, 다년간 축적된 현장 경험을 바탕으로 해당 지역의 환경적 제약을 극복하는 최적의 맞춤형 청소 솔루션을 제안해 드립니다.`,
    targetSceneBlock: `본 서비스가 주로 진행되는 핵심 타겟 공간은 ${service.targetPlaces.join(', ')} 등입니다. ${region.displayNameKo} 내에서도 ${region.commonBuildingTypes} 인근이나 해당 형태의 건축물에서 동일한 청소 의뢰가 빈번하게 접수되고 있으며, 현장 상황에 맞는 특수 장비와 전문 인력을 배정하여 작업을 수행합니다.`,
    problemBlock: `이 지역 고객님들이 가장 자주 겪는 불편 사항은 ${service.contaminationTypes.join(', ')} 문제와 더불어, ${service.mainProblem} 현상입니다. 이러한 오염은 단순한 미관 저하를 넘어 위생 및 안전상 심각한 위험을 초래할 수 있으므로, 방치하지 않고 전문적인 약품 처리와 정밀 세척 공정을 통해 근본적인 원인부터 상태에 맞춰 정리하는 것이 중요합니다.`,
    preCheckBlock: `빠르고 정확한 작업을 위해 현장 방문 전 다음과 같은 사항들을 미리 점검합니다: ${service.preCheckItems.join(', ')}. 이러한 사전 확인 절차를 통해 작업 당일 발생할 수 있는 변수를 최소화하고, 고객님의 소중한 시간을 절약하며 안전한 작업 환경을 조성합니다.`,
    estimateBlock: `합리적이고 투명한 비용 산출을 위해 ${service.estimateFactors.join(', ')} 등의 요소를 종합적으로 고려하여 맞춤형 견적을 제공해 드립니다. 불필요한 추가 요금 없이, 꼭 필요한 공정만을 제안하여 고객님의 부담을 덜어드립니다.`,
    faqBlock: service.faqSet.map(faq => ({
      q: faq.q.replace(/\{\{지역명\}\}/g, region.displayNameKo),
      a: faq.a.replace(/\{\{지역명\}\}/g, region.displayNameKo)
    })),
    
    relatedLinks: region.relatedAreaLinks.map(link => ({
      name: `${link.name} ${service.serviceNameKo}`,
      url: `${link.url}/${service.serviceSlug}`
    })),
    
    ogImage: service.ogImage,
    imageAlt: `${region.displayNameKo} ${service.altBase}`,
    canonical: `https://modu-clean.com${url}`,
    indexStatus: 'index',
  };
}
