export interface SeoService {
  serviceNameKo: string;
  serviceSlug: string;
  
  mainProblem: string;
  targetPlaces: string[];
  contaminationTypes: string[];
  
  preCheckItems: string[];
  estimateFactors: string[];
  faqSet: { q: string; a: string }[];
  relatedServices: string[];
  
  heroDescriptionTemplate: string;
  ctaHook: string;
  
  thumbnailImage: string;
  ogImage: string;
  altBase: string;
}

export const seoServices: SeoService[] = [
  {
    serviceNameKo: '외벽청소',
    serviceSlug: 'exterior-cleaning',
    mainProblem: '산성비와 매연으로 인한 외장재 부식 및 미관 훼손',
    targetPlaces: ['고층 빌딩', '상가 건물', '공장', '관공서', '아파트', '병원'],
    contaminationTypes: ['매연 고착', '이끼/곰팡이', '백화현상', '녹물'],
    preCheckItems: ['로프 앙카 위치 확인', '보행자 통제 가능 여부', '수전/분전반 위치'],
    estimateFactors: ['건물 높이', '외장재 재질(석재/유리/판넬)', '오염도', '스카이차 필요 여부'],
    faqSet: [
      { q: '{{지역명}} 외벽청소는 현장 방문이 필요한가요?', a: '정확한 오염도와 작업 환경을 파악하기 위해 가급적 현장 확인을 권장합니다. 부득이한 경우 사진으로 1차 상담이 진행됩니다.' },
      { q: '로프 작업이 필요한 건물도 상담 가능한가요?', a: '네, 층수나 구조에 따라 스카이차 진입이 어려운 경우 전문 로프공을 배정하여 안전하게 작업합니다.' },
      { q: '외벽청소와 유리창청소를 함께 진행할 수 있나요?', a: '동시 진행이 가능하며, 오염수가 흐르는 것을 방지하기 위해 위에서 아래로 순차적인 공정을 거칩니다.' },
      { q: '견적을 위해 어떤 사진을 보내야 하나요?', a: '건물 전체 외관과 오염이 심한 부분의 근접 사진, 그리고 주변 주차/통행로 상황이 보이는 사진이 도움됩니다.' },
      { q: '영업 중인 건물도 작업 가능한가요?', a: '보행자 안전 통제가 필수적이므로, 유동인구가 적은 주말이나 야간으로 일정을 조율할 수 있습니다.' }
    ],
    relatedServices: ['유리창청소', '간판청소'],
    heroDescriptionTemplate: '{{displayNameKo}}의 {{commonBuildingTypes}}에 최적화된 외벽청소로 건물의 가치를 높여드립니다.',
    ctaHook: '현장 상담 문의',
    thumbnailImage: '/images/seo/exterior-cleaning.jpg',
    ogImage: '/images/seo/exterior-cleaning-og.jpg',
    altBase: '외벽청소 전문업체'
  },
  {
    serviceNameKo: '유리창청소',
    serviceSlug: 'window-cleaning',
    mainProblem: '미세먼지와 빗물에 의한 물때 고착 및 가시성 저하',
    targetPlaces: ['로드샵/상가', '카페/레스토랑', '사무실', '아파트/빌라', '전시장'],
    contaminationTypes: ['석회질 물때', '테이프 자국', '미세먼지/매연', '벌레 사체'],
    preCheckItems: ['유리 파손 여부', '방충망 탈거 가능성', '진입로 상태'],
    estimateFactors: ['유리 면적', '백화현상 진행도', '층고 및 장비 투입 여부'],
    faqSet: [
      { q: '{{지역명}} 유리창청소는 외부 유리도 가능한가요?', a: '네, 실내에서 외부 유리를 닦는 전용 장비를 사용하거나 로프/스카이차를 동원하여 외부면까지 닦아냅니다.' },
      { q: '상가 쇼윈도 물때도 제거할 수 있나요?', a: '유리 표면에 고착된 물때는 전용 약품과 스크래퍼 작업을 통해 맑은 상태로 복원해 드립니다.' },
      { q: '고층 유리창은 어떻게 상담하나요?', a: '건물 층수와 창문 개폐 여부를 먼저 확인한 뒤, 작업 난이도에 따라 적합한 장비와 인력을 안내합니다.' },
      { q: '유리창청소 견적은 어떤 기준으로 정해지나요?', a: '유리의 총 면적, 층고, 오염 상태(백화현상 유무), 특수 장비 투입 여부에 따라 산출됩니다.' },
      { q: '영업시간 외 작업도 가능한가요?', a: '손님 동선과 겹치지 않도록 영업 시작 전 이른 오전이나 심야 시간에 맞춰 유연하게 진행합니다.' }
    ],
    relatedServices: ['외벽청소', '간판청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 상가의 맑은 시야를 되찾아주는 투명한 유리창청소 솔루션입니다.',
    ctaHook: '유리창 세척 상담하기',
    thumbnailImage: '/images/seo/window-cleaning.jpg',
    ogImage: '/images/seo/window-cleaning-og.jpg',
    altBase: '상가 유리창청소'
  },
  {
    serviceNameKo: '화재청소',
    serviceSlug: 'fire-cleaning',
    mainProblem: '화재 후 발생한 유독성 분진, 그을음 고착 및 깊게 밴 탄 냄새',
    targetPlaces: ['주거 공간', '식당 주방', '사무실', '공장/창고'],
    contaminationTypes: ['그을음', '유독성 분진', '탄 냄새', '소화기 분말'],
    preCheckItems: ['화재 조사 완료 여부', '전기/수도 차단 여부', '철거 범위'],
    estimateFactors: ['화재 규모(전소/반소)', '오염 범위', '특수 탈취 공정 필요 시간'],
    faqSet: [
      { q: '{{지역명}} 화재청소는 어떤 상태에서 상담해야 하나요?', a: '소방서의 화재 조사가 완료되고 현장 출입이 허가된 직후부터 상담 및 작업 착수가 가능합니다.' },
      { q: '그을음과 냄새 정리도 가능한가요?', a: '표면 그을음 제거는 물론, 오존 발생기 등 특수 장비를 사용해 깊이 밴 탄 냄새를 중화합니다.' },
      { q: '화재 후 바로 청소를 진행해도 되나요?', a: '유독 가스와 분진이 남아있을 수 있으므로 개인적인 접근은 피하시고 전문가의 진단 후 진행해야 합니다.' },
      { q: '음식점 주방 화재 현장도 가능한가요?', a: '기름때로 인해 화재가 번진 주방 역시 기름 잔여물과 그을음을 동시 세척하여 복구를 돕습니다.' },
      { q: '견적 전에 어떤 사진이 필요한가요?', a: '피해가 가장 심한 발화점 사진과 주변으로 그을음이 번진 공간 전체를 찍어주시면 원활한 상담이 가능합니다.' }
    ],
    relatedServices: ['특수청소', '철거'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역의 화재 피해 현장, 신속한 그을음 제거와 탈취로 일상 복귀를 돕습니다.',
    ctaHook: '화재 복구 긴급상담',
    thumbnailImage: '/images/seo/fire-cleaning.jpg',
    ogImage: '/images/seo/fire-cleaning-og.jpg',
    altBase: '화재청소 및 냄새제거'
  },
  {
    serviceNameKo: '바닥왁스코팅',
    serviceSlug: 'floor-waxing',
    mainProblem: '바닥재의 찌든 때 고착 및 광택 소실, 표면 마모',
    targetPlaces: ['사무실', '학원', '병원', '상가 매장', '전시장'],
    contaminationTypes: ['기스/스크래치', '의자 바퀴 자국', '찌든 흙먼지', '기존 왁스 변색'],
    preCheckItems: ['바닥재 종류(데코타일 등)', '집기 이동 필요성', '기존 코팅 여부'],
    estimateFactors: ['작업 면적', '박리 작업 필요 여부', '집기류 이동량'],
    faqSet: [
      { q: '{{지역명}} 바닥왁스코팅은 어떤 바닥에 필요한가요?', a: '스크래치가 많거나 광택이 사라진 데코타일, 아스타일, 디럭스타일 등 상업용 바닥재에 주로 시공합니다.' },
      { q: '기존 왁스층이 있어도 작업 가능한가요?', a: '네, 오염된 기존 왁스층을 기계로 완전히 벗겨내는 박리 작업을 거친 후 새롭게 코팅을 입힙니다.' },
      { q: '바닥청소와 왁스코팅을 함께 진행하나요?', a: '왁스 코팅 전 바닥의 모든 오염물질을 기계 세척으로 제거하는 공정이 기본적으로 포함됩니다.' },
      { q: '영업 중인 매장도 야간 작업이 가능한가요?', a: '야간에 작업을 완료하고 건조시키면 다음 날 아침 바로 정상적인 영업이 가능합니다.' },
      { q: '견적은 면적 기준인가요?', a: '기본적으로 실평수를 기준으로 하나, 짐 이동 여부와 박리 작업 유무에 따라 최종 비용이 결정됩니다.' }
    ],
    relatedServices: ['인테리어 후 청소', '사무실 대청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 매장과 사무실의 품격을 높이는 바닥왁스코팅, 잃어버린 광택을 되찾아 드립니다.',
    ctaHook: '바닥 상태 상담받기',
    thumbnailImage: '/images/seo/floor-waxing.jpg',
    ogImage: '/images/seo/floor-waxing-og.jpg',
    altBase: '바닥 왁스코팅'
  },
  {
    serviceNameKo: '어닝청소',
    serviceSlug: 'awning-cleaning',
    mainProblem: '외부에 노출된 어닝의 거미줄, 이끼, 빗물 자국으로 인한 매장 미관 훼손',
    targetPlaces: ['카페', '음식점', '옷가게', '로드샵 상가'],
    contaminationTypes: ['빗물/흙먼지 띠', '거미줄 및 벌레 사체', '매연 그을음', '이끼/곰팡이'],
    preCheckItems: ['어닝 재질 및 크기', '고압수 사용 가능 여부', '주변 보행자 통행량'],
    estimateFactors: ['어닝의 길이와 너비', '오염의 고착 정도', '설치 높이'],
    faqSet: [
      { q: '{{지역명}} 어닝청소는 어떤 오염을 확인하나요?', a: '비와 매연으로 인한 검은 물때와 접힌 부분에 주로 발생하는 곰팡이, 먼지를 중점적으로 확인합니다.' },
      { q: '곰팡이나 빗물 자국도 정리 가능한가요?', a: '천 소재에 손상이 가지 않는 전용 약품과 고압 세척을 통해 찌든 빗물 자국을 부드럽게 제거합니다.' },
      { q: '오래된 어닝도 청소할 수 있나요?', a: '천이 이미 심하게 삭았거나 찢어진 경우가 아니라면 대부분 세척이 가능합니다. 현장 확인 후 안내해 드립니다.' },
      { q: '매장 영업 중에도 작업 가능한가요?', a: '작업 중 오염수가 떨어질 수 있어, 가급적 손님 출입이 없는 오픈 전이나 마감 후 작업을 권장합니다.' },
      { q: '견적을 위해 어떤 사진이 필요한가요?', a: '어닝이 끝까지 펼쳐진 상태의 전체 사진과 가장 오염이 심한 부분의 근접 사진을 보내주시면 됩니다.' }
    ],
    relatedServices: ['간판청소', '유리창청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 상가의 첫인상, 오염된 어닝을 깨끗하게 세척하여 매장을 돋보이게 합니다.',
    ctaHook: '어닝 세척 상담하기',
    thumbnailImage: '/images/seo/awning-cleaning.jpg',
    ogImage: '/images/seo/awning-cleaning-og.jpg',
    altBase: '상가 어닝청소'
  },
  {
    serviceNameKo: '간판청소',
    serviceSlug: 'sign-cleaning',
    mainProblem: '도로변 매연과 먼지로 인해 간판이 흐려지고 가시성이 떨어지는 현상',
    targetPlaces: ['상가 건물 외부', '1층 매장 간판', '돌출 간판', '프랜차이즈 매장'],
    contaminationTypes: ['자동차 매연', '빗물 자국', '미세먼지 고착', '거미줄'],
    preCheckItems: ['간판 높이 및 진입로', '간판 재질(채널, 플렉스 등)', '누전 위험성'],
    estimateFactors: ['스카이차 투입 여부', '간판의 크기와 개수', '오염도'],
    faqSet: [
      { q: '{{지역명}} 간판청소는 어떤 간판이 가능한가요?', a: 'LED 채널 간판, 플렉스 간판, 갈바 간판 등 대부분의 소재에 맞는 전용 세제를 사용하여 작업합니다.' },
      { q: '간판의 빗물 자국과 먼지도 정리하나요?', a: '입체적인 글자 틈새의 먼지와 흐르는 빗물 자국을 꼼꼼하게 수작업 및 고압수로 세정합니다.' },
      { q: '높은 위치의 간판도 상담 가능한가요?', a: '사다리 작업이 불가한 높은 층수는 스카이 차량을 배차하여 안전하게 세척을 진행합니다.' },
      { q: '어닝청소와 함께 진행할 수 있나요?', a: '네, 간판과 어닝은 동선이 겹치므로 함께 작업할 경우 비용과 시간을 효율적으로 아끼실 수 있습니다.' },
      { q: '작업 전 확인할 부분은 무엇인가요?', a: '전기선 마감 상태를 확인하여 누전 위험을 점검하며, 안전이 확보된 상태에서 물 세척을 진행합니다.' }
    ],
    relatedServices: ['어닝청소', '외벽청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 상가 간판의 먼지와 빗물 자국을 지워 고객의 시선을 사로잡는 간판으로 복원합니다.',
    ctaHook: '간판 세척 견적내기',
    thumbnailImage: '/images/seo/sign-cleaning.jpg',
    ogImage: '/images/seo/sign-cleaning-og.jpg',
    altBase: '매장 간판청소'
  },
  {
    serviceNameKo: '인테리어 후 청소',
    serviceSlug: 'interior-after-cleaning',
    mainProblem: '실내 리모델링 공사 후 구석구석 쌓인 미세 분진, 톱밥, 보양지 끈끈이',
    targetPlaces: ['리모델링 아파트', '신규 오픈 매장', '인테리어 오피스', '학원/병원'],
    contaminationTypes: ['톱밥', '미세 분진', '벽지 풀자국', '본드/실리콘 자국'],
    preCheckItems: ['서랍장 탈거 가능 여부', '특수 바닥재 여부', '가구 세팅 완료 여부'],
    estimateFactors: ['실평수', '빌트인 가구의 양', '베란다/창틀 오염도'],
    faqSet: [
      { q: '{{지역명}} 인테리어 후 청소는 언제 진행하는 게 좋나요?', a: '가구 세팅 등 모든 공정이 완전히 끝난 후, 이사나 입점하기 1~2일 전에 진행하는 것이 가장 좋습니다.' },
      { q: '공사 분진과 접착제 자국도 정리하나요?', a: '눈에 보이지 않는 벽면 분진과 바닥의 보양지 끈끈이, 도배 풀 자국 등을 전문 장비로 세밀하게 제거합니다.' },
      { q: '입점 전 매장 청소도 가능한가요?', a: '네, 집기가 들어오기 전 빈 공간 상태에서 구석구석 남은 공사 흔적을 지워 바로 영업 준비를 하실 수 있게 돕습니다.' },
      { q: '준공청소와 어떤 차이가 있나요?', a: '준공청소는 건물 신축 시 큰 폐기물과 먼지를 치우는 단계이며, 인테리어 청소는 실사용을 위한 정밀 분진 제거 단계입니다.' },
      { q: '사진만으로 상담 가능한가요?', a: '오염도 파악을 위해 공사가 마무리된 직후의 현장 사진을 여러 장 보내주시면 더 정확한 견적이 가능합니다.' }
    ],
    relatedServices: ['바닥왁스코팅', '유리창청소'],
    heroDescriptionTemplate: '{{displayNameKo}}의 새롭게 단장한 공간, 호흡기 건강을 위협하는 미세 분진을 말끔히 지워드립니다.',
    ctaHook: '쾌적한 오픈 준비하기',
    thumbnailImage: '/images/seo/interior-after-cleaning.jpg',
    ogImage: '/images/seo/interior-after-cleaning-og.jpg',
    altBase: '리모델링 분진 제거'
  },
  {
    serviceNameKo: '준공청소',
    serviceSlug: 'completion-cleaning',
    mainProblem: '건물 신축 과정에서 발생한 대량의 시멘트 가루, 페인트 자국 및 건축 폐기물 잔재',
    targetPlaces: ['신축 아파트', '신축 상가', '지식산업센터', '관공서 신축 현장'],
    contaminationTypes: ['시멘트 가루', '페인트/본드 자국', '보양지 찌꺼기', '실리콘 잔여물'],
    preCheckItems: ['준공 허가 일정', '전기/수도 가동 여부', '타 공정과의 겹침 여부'],
    estimateFactors: ['건축 연면적', '층고', '외부 유리창 포함 여부', '폐기물 양'],
    faqSet: [
      { q: '{{지역명}} 준공청소는 어떤 현장에 필요한가요?', a: '새롭게 건축된 상가, 빌딩, 아파트 단지 등 시공 직후 대량의 공사 잔여물이 남아있는 현장에 필수적입니다.' },
      { q: '신축 또는 리모델링 후 청소도 가능한가요?', a: '건물 전체 단위의 신축 현장이나 대규모 리모델링 직후 발생하는 굵직한 건축 폐기물과 먼지 제거를 수행합니다.' },
      { q: '시멘트 가루와 보양재 잔여물도 정리하나요?', a: '네, 바닥에 굳은 시멘트, 페인트, 실리콘 잔여물과 창틀에 붙은 두꺼운 보양지를 1차적으로 걷어냅니다.' },
      { q: '입주 전 청소와 함께 진행할 수 있나요?', a: '준공청소 후 세밀한 분진을 닦아내는 인테리어/입주 청소를 연계하여 바로 실생활이 가능하도록 도와드립니다.' },
      { q: '견적 기준은 어떻게 되나요?', a: '건축 연면적(평수)과 층고, 창호의 수량, 외부 장비 사용 여부 등 현장 규모에 따라 종합적으로 산정됩니다.' }
    ],
    relatedServices: ['외벽청소', '바닥왁스코팅'],
    heroDescriptionTemplate: '{{displayNameKo}}에 새로 지어진 신축 현장, 깔끔한 첫인상을 위해 전문 장비를 투입하는 준공청소입니다.',
    ctaHook: '준공 일정 맞춤 상담',
    thumbnailImage: '/images/seo/completion-cleaning.jpg',
    ogImage: '/images/seo/completion-cleaning-og.jpg',
    altBase: '신축 건물 준공청소'
  },
  {
    serviceNameKo: '후드청소',
    serviceSlug: 'hood-cleaning',
    mainProblem: '음식점 주방 후드 내부에 딱딱하게 굳은 기름때와 이로 인한 화재 위험 및 악취',
    targetPlaces: ['음식점 주방', '구내식당', '호텔 주방', '프랜차이즈 매장'],
    contaminationTypes: ['경화된 기름때', '배기팬 찌든때', '주방 악취', '탄 자국'],
    preCheckItems: ['후드 크기 및 높이', '배기닥트 연결 상태', '작업 가능 시간(영업 외 시간)'],
    estimateFactors: ['후드/닥트의 길이와 면적', '기름때 고착 정도', '야간 작업 여부'],
    faqSet: [
      { q: '{{지역명}} 후드청소는 음식점 주방도 가능한가요?', a: '네, 고기를 굽거나 튀김류를 다루는 음식점 주방 후드의 경화된 기름때를 전문적으로 세척합니다.' },
      { q: '후드 기름때와 악취도 정리하나요?', a: '고온 스팀과 특수 세정제로 딱딱하게 굳은 기름을 녹여내며, 환기구를 막아 발생하는 악취 요인을 점검합니다.' },
      { q: '영업시간 외 작업이 가능한가요?', a: '주방을 사용하지 않는 심야 시간이나 휴무일에 맞추어 영업에 지장이 없도록 일정을 조율해 드립니다.' },
      { q: '후드청소 견적은 어떤 기준으로 정해지나요?', a: '후드의 가로 길이와 배기 덕트의 구조, 기름때가 굳어진 정도에 따라 작업 시간이 달라져 견적에 반영됩니다.' },
      { q: '배기 주변 오염도 함께 확인하나요?', a: '후드 본체뿐만 아니라 기름이 떨어지는 환풍기 주변 벽면과 타일의 찌든 오염도 확인 후 닦아냅니다.' }
    ],
    relatedServices: ['바닥왁스코팅'],
    heroDescriptionTemplate: '{{displayNameKo}} 음식점 주방의 화재 위험 요소인 후드 기름때를 화학 세정으로 안전하게 제거합니다.',
    ctaHook: '주방 위생 점검받기',
    thumbnailImage: '/images/seo/hood-cleaning.jpg',
    ogImage: '/images/seo/hood-cleaning-og.jpg',
    altBase: '음식점 후드청소'
  },
  {
    serviceNameKo: '쓰레기집청소',
    serviceSlug: 'hoarding-cleaning',
    mainProblem: '장기간 방치된 생활 폐기물과 부패로 인한 악취 및 해충 발생',
    targetPlaces: ['원룸', '오피스텔', '아파트', '빌라', '단독주택'],
    contaminationTypes: ['부패한 음식물', '반려동물 오물', '찌든 곰팡이', '담배 냄새', '생활 폐기물'],
    preCheckItems: ['폐기물 예상 톤수', '엘리베이터 유무', '이웃 주민 민원 가능성'],
    estimateFactors: ['폐기물 양(톤)', '오염의 고착 정도', '탈취 필요 여부'],
    faqSet: [
      { q: '{{지역명}} 쓰레기집청소는 원룸이나 오피스텔도 가능한가요?', a: '네, 공간이 협소하여 생활 폐기물이 높게 쌓인 1인 가구 주거지 정리에 대한 풍부한 경험을 보유하고 있습니다.' },
      { q: '생활폐기물이 많아도 상담 가능한가요?', a: '발 디딜 틈 없이 물건이 쌓여 있어도 폐기물 분류부터 수거, 처리까지 일괄적으로 도와드립니다.' },
      { q: '악취가 심한 공간도 정리할 수 있나요?', a: '부패된 음식물이나 방치된 오물 등으로 인한 악취는 특수 약품과 탈취 공정을 통해 일상생활이 가능하게 정리해 드립니다.' },
      { q: '폐기물 양은 어떻게 확인하나요?', a: '현장 방문이 가장 정확하나, 방 전체의 짐 높이와 부피가 파악되는 사진을 보내주시면 예상 톤수를 산출해 드립니다.' },
      { q: '사진 상담만으로도 가능 여부를 알 수 있나요?', a: '사진 상의 오염도와 짐의 형태를 바탕으로 작업 인원 및 시간을 1차적으로 안내해 드릴 수 있습니다.' }
    ],
    relatedServices: ['특수청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 쓰레기집청소, 폐기물 처리부터 정밀 탈취까지 주변 모르게 조용히 해결해 드립니다.',
    ctaHook: '비밀보장 상담받기',
    thumbnailImage: '/images/seo/hoarding-cleaning.jpg',
    ogImage: '/images/seo/hoarding-cleaning-og.jpg',
    altBase: '쓰레기집 폐기물 처리'
  },
  {
    serviceNameKo: '특수청소',
    serviceSlug: 'special-cleaning',
    mainProblem: '고독사, 사건사고 현장 등 일반 청소로 복구하기 힘든 심각한 오염 및 악취',
    targetPlaces: ['사건사고 발생 주거지', '고독사 현장', '화재 공간', '침수 피해 공간'],
    contaminationTypes: ['혈흔 및 체액', '사체 냄새(시취)', '화재 그을음', '침수 오물'],
    preCheckItems: ['법적 절차 완료 여부', '유품 정리 필요성', '바닥/벽 철거 필요 여부'],
    estimateFactors: ['오염 면적', '악취 깊이', '폐기해야 할 유품 양', '철거 범위'],
    faqSet: [
      { q: '{{지역명}} 특수청소는 어떤 현장에 필요한가요?', a: '고독사 현장, 극심한 악취 발생 공간, 혈흔 및 체액 오염 등 일반적인 방법으로 접근이 불가능한 현장에 투입됩니다.' },
      { q: '일반 청소로 어려운 오염도 상담 가능한가요?', a: '네, 일반 세제로는 지워지지 않는 특수 오염물질을 전용 화학 약품과 기법을 사용하여 분해합니다.' },
      { q: '악취나 방치 공간도 확인하나요?', a: '오염의 원인 물질을 제거한 후, 공간 내벽에 스며든 냄새 입자까지 오존 살균 등을 통해 중화시킵니다.' },
      { q: '쓰레기집청소와 어떤 차이가 있나요?', a: '쓰레기집은 폐기물 수거 중심이라면, 특수청소는 감염 예방과 심각한 생물학적/화학적 오염의 정밀 복구에 초점을 둡니다.' },
      { q: '현장 사진만으로 상담 가능한가요?', a: '대략적인 상담은 가능하나, 현장의 심각성과 법적 절차 여부 확인을 위해 가급적 유선 상담과 현장 실사가 병행되어야 합니다.' }
    ],
    relatedServices: ['쓰레기집청소', '화재청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역, 누구도 해결하기 힘든 특수 현장을 원래 상태로 안전하게 복원합니다.',
    ctaHook: '특수청소 긴급출동',
    thumbnailImage: '/images/seo/special-cleaning.jpg',
    ogImage: '/images/seo/special-cleaning-og.jpg',
    altBase: '고독사 특수청소'
  },
  {
    serviceNameKo: '바닥청소',
    serviceSlug: 'floor-cleaning',
    mainProblem: '상가 및 사무실 바닥의 고착된 묵은 때와 먼지 오염',
    targetPlaces: ['사무실', '상가 매장', '공장/창고', '학원/병원', '공용 복도'],
    contaminationTypes: ['찌든 오염물', '스크래치 얼룩', '미끄러운 기름때'],
    preCheckItems: ['바닥재 재질', '수도 및 배수 상태', '작업 공간 확보'],
    estimateFactors: ['작업 면적', '오염도', '이동할 집기 유무'],
    faqSet: [
      { q: '{{지역명}} 바닥청소는 왁스코팅도 포함인가요?', a: '기본 세척 작업만 진행되며, 코팅막 형성을 원하실 경우에는 바닥왁스코팅 서비스를 추가 선택해 주셔야 합니다.' },
      { q: '타일 틈새 오염도 정리하나요?', a: '기계 세척과 틈새 수작업을 통해 줄눈 사이의 묵은 때까지 최대한 제거합니다.' }
    ],
    relatedServices: ['바닥왁스코팅', '사무실 대청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 매장과 사무실의 청결을 책임지는 정밀 바닥청소 서비스입니다.',
    ctaHook: '바닥 세척 문의하기',
    thumbnailImage: '/images/seo/floor-waxing.jpg',
    ogImage: '/images/seo/floor-waxing-og.jpg',
    altBase: '바닥청소 전문'
  },
  {
    serviceNameKo: '입주청소',
    serviceSlug: 'move-in-cleaning',
    mainProblem: '신축 공사 분진 및 이전 거주자의 묵은 찌든 오염 제거',
    targetPlaces: ['아파트', '빌라', '오피스텔', '단독 주택'],
    contaminationTypes: ['시멘트 가루', '도배풀 흔적', '수납장 톱밥가루', '주방 기름때', '욕실 물때', '창틀 먼지'],
    preCheckItems: ['수도 및 전기 정상 작동 상태', '이사 일정 및 시간 조율', '빈집 상태 여부'],
    estimateFactors: ['공급 면적(평수)', '방 및 욕실 개수', '신축/구축 연식', '오염 수준'],
    faqSet: [
      { q: '{{지역명}} 입주청소는 입주 며칠 전에 하는 게 좋나요?', a: '가구가 들어오기 전 빈집 상태에서 진행하는 것이 가장 좋습니다. 보통 입주일 1~3일 전 작업을 권장하며, 일정이 촉박한 경우 상담 시 가능 여부를 확인합니다.' },
      { q: '욕실과 주방 오염도 따로 확인해주시나요?', a: '네. 욕실은 물때, 배수구, 수전 주변을 중심으로 확인하고, 주방은 싱크대, 상·하부장, 조리대, 타일 주변의 생활 오염을 중심으로 확인합니다.' },
      { q: '베란다와 창틀도 포함되나요?', a: '베란다 바닥, 배수구 주변, 창틀 틈새 먼지 등은 입주 후 직접 정리하기 번거로운 구간입니다. 현장 상태와 견적 범위에 따라 포함 여부를 상담 시 확인합니다.' },
      { q: '신축 아파트 공사 분진도 청소 가능한가요?', a: '가능합니다. 신축 현장은 겉으로 깨끗해 보여도 창틀, 바닥, 몰딩, 수납장 내부에 공사 분진이 남아 있는 경우가 많습니다.' },
      { q: '짐이 있는 상태에서도 입주청소가 가능한가요?', a: '가능은 하지만 빈집 상태보다 작업 범위가 제한될 수 있습니다. 가구나 짐이 많다면 상담 시 미리 알려주셔야 합니다.' },
      { q: '견적은 어떻게 확인하나요?', a: '지역, 평수, 집 형태, 오염도, 작업 범위, 입주 예정일에 따라 달라집니다. 사진과 기본 정보를 알려주시면 상담이 빠릅니다.' }
    ],
    relatedServices: ['바닥청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 입주청소 욕실·주방·베란다 청소 - 모두종합환경',
    ctaHook: '입주청소 견적 받기',
    thumbnailImage: '/images/services/move-in-cleaning.jpg',
    ogImage: '/images/services/move-in-cleaning.jpg',
    altBase: '입주청소'
  }
];
