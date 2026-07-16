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

  // 1. 공통 템플릿 1번 문단
  const customIntroBlock = `${region.displayNameKo} ${service.serviceNameKo}는 공간의 용도, 오염 상태, 작업 범위에 따라 필요한 청소 방식이 달라질 수 있습니다.`;

  // 2. 작업명별 특화 2번 문단
  let targetSceneBlock = '';
  const sSlug = service.serviceSlug;
  if (sSlug === 'office-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 사무실청소는 업무 공간의 바닥, 회의실, 탕비실, 공용부 상태를 확인해 필요한 청소 범위를 정리하는 것이 중요합니다. 집기 배치와 업무 시간대를 함께 확인하면 작업 가능 시간과 범위를 더 정확하게 안내할 수 있습니다.`;
  } else if (sSlug === 'store-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 상가청소는 매장 바닥, 출입구, 유리, 집기 주변 오염 상태에 따라 작업 범위가 달라질 수 있습니다. 영업시간과 매장 구조를 함께 확인해 작업 가능 여부를 안내합니다.`;
  } else if (sSlug === 'factory-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 공장청소는 작업장 바닥, 설비 주변, 분진과 기름때 상태를 먼저 확인해야 합니다. 현장 안전 조건과 작업 가능 시간대를 함께 확인해 상담 방향을 안내합니다.`;
  } else if (sSlug === 'building-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 건물청소는 로비, 계단, 복도, 공용부 등 관리가 필요한 구역을 먼저 확인하는 것이 중요합니다. 건물 규모와 청소 범위에 따라 작업 인원과 일정을 조율합니다.`;
  } else if (sSlug === 'flood-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 침수청소는 물 유입 범위, 바닥 상태, 잔여 물기, 악취 발생 가능성을 먼저 확인해야 합니다. 현장 사진을 보내주시면 정리 범위와 작업 가능 여부를 안내합니다.`;
  } else if (sSlug === 'warehouse-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 창고청소는 적재 공간, 바닥 먼지, 분진, 장기 보관으로 생긴 오염 상태를 확인하는 것이 중요합니다. 물건 이동 여부와 작업 가능 동선을 함께 확인해 상담합니다.`;
  } else if (sSlug === 'hospital-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 병원청소는 진료실, 대기실, 복도, 공용부처럼 이용자가 자주 오가는 공간의 오염 상태를 먼저 확인해야 합니다. 운영 시간과 방문객 동선을 고려해 작업 가능 시간과 청소 범위를 안내합니다.`;
  } else if (sSlug === 'exterior-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 외벽청소는 외장 자재(판넬, 석재, 유리 등)의 종류와 오염 및 황사 상태를 먼저 확인하는 것이 중요합니다. 로프 작업이나 스카이차 기계 사용이 동반되는 만큼 작업 구역 하부의 통행 및 안전 요건을 함께 조율합니다.`;
  } else if (sSlug === 'window-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 유리창청소는 유리의 장착 유형, 빗물 자국과 유막의 누적 상태에 따라 작업 방법이 달라집니다. 내부와 외부 창문 세정 가능 여부를 함께 확인해 상담을 진행합니다.`;
  } else if (sSlug === 'fire-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 화재청소는 그을음의 침착 범위, 화재 분진가루 및 탄 냄새 악취 정도를 고려하여 시공을 진행해야 합니다. 냄새 분해를 위한 공간 소독 및 오존 탈취 범위를 현장 상태에 맞춰 확인합니다.`;
  } else if (sSlug === 'floor-wax-coating' || sSlug === 'floor-waxing') {
    targetSceneBlock = `${region.displayNameKo} 바닥왁스코팅은 기존 코팅층의 누런 마모 여부와 타일(데코타일, 아스타일) 오염 상태를 먼저 점검합니다. 찌든 때를 벗겨내는 정밀 박리 세척을 선행한 후 바닥 상태에 맞춘 코팅 관리를 도포합니다.`;
  } else if (sSlug === 'awning-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 어닝청소는 외부 천막 원단의 곰팡이 오염 깊이와 섬유 삭음 상태를 먼저 파악해야 합니다. 세정 세제의 반응 조건과 어닝 주변 안전 구역을 고려해 물세정을 안내합니다.`;
  } else if (sSlug === 'signboard-cleaning' || sSlug === 'sign-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 간판청소는 간판의 설치 높이, 크기, 그리고 겉면 거미줄이나 매연 얼룩 수준을 확인하여 작업을 준비합니다. 조명 전기선의 누전 방지를 위한 안전 예방책을 함께 확인합니다.`;
  } else if (sSlug === 'interior-post-cleaning' || sSlug === 'interior-after-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 인테리어후청소는 리모델링 공사 직후 실내 구석구석에 내려앉은 미세 석고 톱밥 가루와 도배풀 흔적을 정리합니다. 수납장 서랍 탈거와 배수구 정밀 분해 소독 위주로 작업 범위를 안내합니다.`;
  } else if (sSlug === 'construction-completion-cleaning' || sSlug === 'completion-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 준공청소는 신축 완공 후 남아있는 다량의 건축 보양 비닐, 시멘트풀 가루, 그리고 폐기물 1차 반출 상태를 확인해야 합니다. 준공 검사 승인 일정에 조율되도록 일정을 확인합니다.`;
  } else if (sSlug === 'hood-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 후드청소는 주방 화구 상단 배기 후드 내부의 노란 굳은 유지분 기름때를 중점적으로 제거합니다. 가재도구로 기름물이 튀지 않도록 밀폐 보양한 뒤 현장 상태에 맞는 세정제로 작업을 안내합니다.`;
  } else if (sSlug === 'hoarder-house-cleaning' || sSlug === 'hoarding-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 쓰레기집청소는 방치된 생활폐기물의 톤수, 음식물 부패 정도, 해충 민원 유무를 확인해야 합니다. 의뢰인의 비밀 보장 요구에 맞추어 불투명 자루 포장 및 신속 수거 처리를 안내합니다.`;
  } else if (sSlug === 'special-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 특수청소는 사건사고나 방치로 인한 심각한 생물학적 오염, 악취, 유품 정리 범위를 조율하는 것이 중요합니다. 감염 예방과 정밀 화학 멸균, 오존 공간 소독 일정을 함께 확인합니다.`;
  } else if (sSlug === 'move-in-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 입주청소는 신축의 공사 분진 가루나 구축의 누적 생활오염을 제거하여 입주 즉시 위생적인 생활이 가능하게 정리합니다. 수도와 전기의 가동 여부 및 빈집 공실 상태 여부를 함께 확인합니다.`;
  } else if (sSlug === 'moving-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 이사청소는 이전 세입자가 장기간 사용하며 찌든 주방 기름때와 욕실 물때, 변기 곰팡이를 정밀 세정합니다. 짐이 들어오기 전 가구가 없는 빈집 상태를 고려해 일정을 조율합니다.`;
  } else if (sSlug === 'floor-cleaning') {
    targetSceneBlock = `${region.displayNameKo} 바닥청소는 타일, 에폭시 등 바닥 마감재의 재질과 묵은 먼지 띠, 검은 찌든 오염 상태에 맞춰 세척합니다. 회전 기계 솔질 후 오염물을 강력 흡입 세정하는 범위를 안내합니다.`;
  } else {
    targetSceneBlock = `${region.displayNameKo} ${service.serviceNameKo}는 공간의 성격과 현장의 다양한 오염 상태를 확인해 필요한 장비와 작업 범위에 맞춘 인력 배치로 진행합니다.`;
  }

  // 3. 공통 템플릿 2번 문단
  const problemBlock = '상담 전에는 현장 위치, 공간 사진, 오염이 잘 보이는 사진, 희망 작업 일정을 알려주시면 작업 가능 여부를 더 빠르게 안내할 수 있습니다.';

  // 4. 나머지 블록은 공백
  const preCheckBlock = '';
  const estimateBlock = '';

  return {
    url,
    title: `${region.displayNameKo} ${service.serviceNameKo} 전문 | ${BRAND_NAME}`,
    metaDescription: `${region.displayNameKo} 지역 ${region.commercialCharacteristics} 맞춤형 ${service.serviceNameKo} 상담을 안내합니다. 사진과 위치를 보내주시면 작업 가능 여부를 확인합니다.`,
    h1: `${region.displayNameKo} ${service.serviceNameKo} 전문`,
    heroDescription,
    ctaHook: service.ctaHook,
    
    customIntroBlock,
    targetSceneBlock,
    problemBlock,
    preCheckBlock,
    estimateBlock,
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
