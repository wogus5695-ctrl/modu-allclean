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

  const sSlug = service.serviceSlug;
  let customIntroBlock = '';
  let targetSceneBlock = '';

  if (sSlug === 'office-cleaning') {
    customIntroBlock = `${region.displayNameKo} 사무실청소는 업무 공간의 바닥 찌든 때, 회의실 카펫, 탕비실 물때 등 사용 빈도가 높은 구역의 오염 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 사무실 전체 면적, 책상 및 집기 배치 사진, 희망 작업 시간대를 알려주시면 상세 범위 확인이 빠릅니다.`;
  } else if (sSlug === 'store-cleaning') {
    customIntroBlock = `${region.displayNameKo} 상가청소는 매장 홀 바닥의 오염물, 전면 쇼윈도 유리의 물때, 출입문 틈새 등 영업 공간의 오염 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 상가 면적, 오염이 심한 바닥 및 유리 사진, 영업외 시간대 작업 필요 여부를 알려주시면 확인이 빠릅니다.`;
  } else if (sSlug === 'factory-cleaning') {
    customIntroBlock = `${region.displayNameKo} 공장청소는 작업장 바닥의 미끄러운 기름때, 제조 설비 주변의 먼지 분진 등 오염 분포와 기계 안전 조건을 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 공장 층고, 청소가 필요한 구역 및 설비 보양 사진, 작업 가능 일정을 알려주시면 범위 확인이 빠릅니다.`;
  } else if (sSlug === 'building-cleaning') {
    customIntroBlock = `${region.displayNameKo} 건물청소는 건물 로비, 계단실, 복도 디딤판 논슬립 등 방문객이 주로 통행하는 공용 공간의 묵은 때 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 건물 전체 규모(층수), 관리가 필요한 공용부 범위 사진, 작업 희망 일정을 알려주시면 조율이 빠릅니다.`;
  } else if (sSlug === 'flood-cleaning') {
    customIntroBlock = `${region.displayNameKo} 침수청소는 유입된 오염 물의 깊이, 바닥 진흙 앙금 상태, 잔여 물기와 오염 폐기물 범위를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 침수 피해 현장 전경 사진, 물이 들어찬 깊이, 긴급 전력 공급 가능 여부를 알려주시면 신속한 대응이 가능합니다.`;
  } else if (sSlug === 'warehouse-cleaning') {
    customIntroBlock = `${region.displayNameKo} 창고청소는 적재 랙 프레임 상단의 미세 먼지 분진, 에폭시 바닥의 지게차 타이어 스키드 자국 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 창고 면적, 적재 물건의 이동 가능 여부, 내부 사진을 보내주시면 작업 일정 확인이 빠릅니다.`;
  } else if (sSlug === 'hospital-cleaning') {
    customIntroBlock = `${region.displayNameKo} 병원청소는 진료실, 대기실, 복도, 화장실처럼 이용자가 자주 오가는 공간의 오염 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 청소가 필요한 구역 사진, 바닥 오염 상태, 작업 가능 시간대를 알려주시면 범위 확인이 빠릅니다.`;
  } else if (sSlug === 'exterior-cleaning') {
    customIntroBlock = `${region.displayNameKo} 외벽청소는 건물 외벽 자재(석재, 판넬, 유리 등)에 고착된 매연 먼지, 빗물 얼룩, 곰팡이 오염 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 건물 전체 전경 사진, 층수, 작업 차량 진입 및 로프 고정 요건을 알려주시면 세정 작업 확인이 빠릅니다.`;
  } else if (sSlug === 'window-cleaning') {
    customIntroBlock = `${region.displayNameKo} 유리창청소는 창틀의 찌든 오염, 유리 표면의 유막 및 빗물 자국 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 유리창 전체 규격 및 수량, 안팎 세정 필요 여부 사진을 보내주시면 상세 작업 확인이 빠릅니다.`;
  } else if (sSlug === 'fire-cleaning') {
    customIntroBlock = `${region.displayNameKo} 화재청소는 실내 콘크리트 뼈대의 시커먼 그을음 침착 범위, 유독성 분진 가루, 탄 냄새 악취 정도를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 화재 피해 공간 사진, 임시 전기 및 수도 가동 여부, 폐기 대상 목록을 알려주시면 빠른 대응이 가능합니다.`;
  } else if (sSlug === 'floor-wax-coating' || sSlug === 'floor-waxing') {
    customIntroBlock = `${region.displayNameKo} 바닥왁스코팅은 기존 코팅막의 변색 상태, 디럭스 및 데코타일 바닥의 묵은 얼룩과 긁힘 스크래치 깊이를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 바닥 면적, 사무실 집기 이동 범위 사진, 완전 건조를 위한 작업 시간대를 알려주시면 조율이 빠릅니다.`;
  } else if (sSlug === 'awning-cleaning') {
    customIntroBlock = `${region.displayNameKo} 어닝청소는 외부 천막 원단의 고착된 검은 이끼, 곰팡이 오염 상태와 노후로 인한 섬유 삭음 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 어닝 너비 및 설치 높이 사진, 물 사용을 위한 수도 연결구 여부를 알려주시면 안내가 빠릅니다.`;
  } else if (sSlug === 'signboard-cleaning' || sSlug === 'sign-cleaning') {
    customIntroBlock = `${region.displayNameKo} 간판청소는 전면 간판의 먼지, 거미줄, 날벌레 사체 오염 및 조명 커버 내부 빗물 자국 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 간판 크기 및 설치 높이 사진, 전기 누전 방지를 위한 조명 선 상태를 알려주시면 확인이 빠릅니다.`;
  } else if (sSlug === 'interior-post-cleaning' || sSlug === 'interior-after-cleaning') {
    customIntroBlock = `${region.displayNameKo} 인테리어후청소는 리모델링 공사 완료 후 수납 선반 내부, 문틀 몰딩 틈새의 석고보드 가루와 톱밥 분진을 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 공사 범위 평수, 내부 분진 상태 사진, 가재도구 입고 일정을 알려주시면 꼼꼼한 확인이 가능합니다.`;
  } else if (sSlug === 'construction-completion-cleaning' || sSlug === 'completion-cleaning') {
    customIntroBlock = `${region.displayNameKo} 준공청소는 신축 완공 후 남아있는 대량의 시멘트 똥, 페인트 튐 자국, 그리고 창틀 보양 비닐 노후 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 건물 전체 규모 사진, 입주 검사 승인 일정, 1차 폐기물 분리 배출 요건을 알려주시면 조율이 빠릅니다.`;
  } else if (sSlug === 'hood-cleaning') {
    customIntroBlock = `${region.displayNameKo} 후드청소는 주방 화구 상단 배기 후드 내부 및 거름망 필터에 고착되어 딱딱하게 굳은 노란 기름때 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 주방 후드 규격 및 개수 사진, 주방 마감 후 작업 가능 시간대를 알려주시면 안내가 빠릅니다.`;
  } else if (sSlug === 'hoarder-house-cleaning' || sSlug === 'hoarding-cleaning') {
    customIntroBlock = `${region.displayNameKo} 쓰레기집청소는 집안에 방치된 폐기물의 양, 부패한 음식물 수량, 해충 및 담배 냄새 악취 정도를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 쓰레기 적체 전경 사진, 중요 보존물 목록을 알려주시면 주변 주민들 몰래 신속하고 조용한 수거가 가능합니다.`;
  } else if (sSlug === 'special-cleaning') {
    customIntroBlock = `${region.displayNameKo} 특수청소는 사건사고로 발생한 생물학적 얼룩, 사체 및 유해 냄새 악취 깊이, 잔류 유품 정리 범위를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 현장 상태 사진, 유품 처리 요건, 작업 긴급 여부를 공유해 주시면 철저한 비밀 유지 하에 시공을 진행합니다.`;
  } else if (sSlug === 'move-in-cleaning') {
    customIntroBlock = `${region.displayNameKo} 입주청소는 입주 전 빈집 상태에서 창틀 새까만 먼지, 싱크대 하부 분진, 욕실 세면대 비누 물때 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 입주일, 평수, 신축 또는 구축 여부 사진을 보내주시면 작업 동선 확인이 빠릅니다.`;
  } else if (sSlug === 'moving-cleaning') {
    customIntroBlock = `${region.displayNameKo} 이사청소는 이전 거주자가 사용하면서 남긴 주방 찌든 때, 가스레인지 기름 얼룩, 욕실 실리콘의 곰팡이 오염을 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 이사일, 가구가 비워지는 시간대, 장판 얼룩 및 곰팡이 사진을 보내주시면 조율이 빠릅니다.`;
  } else if (sSlug === 'floor-cleaning') {
    customIntroBlock = `${region.displayNameKo} 바닥청소는 타일, 에폭시, 대리석 등 바닥재 본래의 광택과 질감을 살리기 위한 묵은 때 누적 상태를 먼저 확인합니다.`;
    targetSceneBlock = `상담 전에는 바닥 면적, 자재 종류 사진, 작업 전 집기 정리 여부를 알려주시면 정밀 기계 세정 확인이 빠릅니다.`;
  } else {
    customIntroBlock = `${region.displayNameKo} ${service.serviceNameKo}는 공간의 성격과 현장의 다양한 오염 상태를 확인해 필요한 장비와 작업 범위에 맞춘 인력 배치로 진행합니다.`;
    targetSceneBlock = `상담 전에는 청소가 필요한 구역 사진, 오염이 잘 보이는 사진, 희망 작업 일정을 알려주시면 범위 확인이 빠릅니다.`;
  }

  const problemBlock = '';
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
