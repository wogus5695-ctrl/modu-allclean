export interface FAQ {
  question: string;
  answer: string;
}

export interface CleaningService {
  id: string;
  serviceNameKo: string;
  serviceSlug: string;
  shortDescription: string;
  mainDescription: string;
  neededSituations: string[];
  workingMethod: string;
  preCheckItems: string[];
  targetBuildings: string[];
  commonProblems: string[];
  process: string[];
  faq: FAQ[];
  priority: number;
  indexStatus: 'index' | 'noindex';
  imageUrl?: string;
  showOnMain: boolean;
}

export const services: CleaningService[] = [
  {
    id: 'outer-wall',
    serviceNameKo: '외벽청소',
    serviceSlug: 'exterior-cleaning',
    shortDescription: '고층 빌딩 및 상가 건물의 외벽 오염 완벽 제거',
    mainDescription: '대기 오염과 산성비로 인해 부식되고 오염된 건물의 외벽을 전문 장비와 전용 약품을 사용하여 신축 당시의 깨끗한 상태로 복원합니다.',
    neededSituations: [
      '대기 오염으로 인해 외벽이 변색된 경우',
      '거미줄, 이끼, 곰팡이 등 생물학적 오염이 심한 경우',
      '장기적인 미관 관리 및 건물 가치 보존이 필요한 경우',
      '산성비로 인해 석재나 금속 외장재 부식이 우려될 때'
    ],
    workingMethod: '로프 시공 및 고압 세척 장비를 활용하여 상단에서 하단으로 정밀 세정 작업을 진행합니다. 외장재 재질(석재, 유리, 금속, 드라이비트 등)에 최적화된 전용 약품을 사용하여 손상 없이 오염원만 제거합니다.',
    preCheckItems: [
      '작업 구간 하부의 보행자 및 차량 통제 가능 여부',
      '옥상 로프 고정 지점(앙카) 확인',
      '수전 및 분전반 위치 확인',
      '창문 폐쇄 상태 점검'
    ],
    targetBuildings: ['오피스 빌딩', '상가 건물', '공장', '관공서', '아파트', '병원'],
    commonProblems: ['미세먼지/황사', '산성비 자국', '매연 고착', '이끼/곰팡이'],
    process: ['상담 및 접수', '현장 확인 및 위험 요소 파악', '견적 안내', '일정 조율', '로프/장비 시공', '마감 검수'],
    faq: [
      { question: '로프 작업 시 안전 문제는 없나요?', answer: '전문 자격을 갖춘 숙련된 작업자가 2인 1조로 안전 수칙을 준수하며, 철저한 안전 장비를 갖추고 시공합니다.' },
      { question: '외벽 재질에 따라 약품이 다른가요?', answer: '네, 대리석, 벽돌, 판넬, 유리 등 각 재질에 맞는 산성/알칼리성 전용 세제를 사용하여 부식을 방지합니다.' },
      { question: '작업 시간은 얼마나 걸리나요?', answer: '건물 규모와 오염도에 따라 다르지만, 중소형 빌딩 기준 보통 1~2일 내에 마무리됩니다.' },
      { question: '비가 오면 작업이 가능한가요?', answer: '강풍이나 폭우 시에는 안전을 위해 일정을 재조율합니다. 약한 비의 경우 현장 상황에 따라 판단합니다.' },
      { question: '고층 빌딩도 가능한가요?', answer: '네, 초고층 빌딩 로프 시공부터 스카이 차량 장비 투입까지 모든 환경에서 시공이 가능합니다.' }
    ],
    priority: 1,
    indexStatus: 'index',
    imageUrl: '/images/services/outer-wall.jpg',
  },
  {
    id: 'window',
    serviceNameKo: '유리창청소',
    serviceSlug: 'window-cleaning',
    shortDescription: '투명하고 깨끗한 시야를 선사하는 프리미엄 유리 케어',
    mainDescription: '일반적인 방법으로는 제거하기 힘든 유리창의 찌든 때와 물때를 전문 스퀴지와 약품을 사용하여 투명하게 닦아냅니다.',
    neededSituations: [
      '백화 현상(물때 고착)으로 유리가 뿌옇게 변한 경우',
      '상가 쇼윈도의 가시성이 떨어져 홍보 효과가 낮아질 때',
      '입주 전 혹은 대청소 시 맑은 시야 확보를 원할 때',
      '미세먼지와 염분으로 인해 유리 표면이 거칠어진 경우'
    ],
    workingMethod: '유리 전용 스크래퍼로 고착된 오염물을 1차 제거한 후, 전용 세정제를 도포하여 오염을 분산시킵니다. 이후 정밀 스퀴지 작업을 통해 물기 하나 없는 투명한 상태로 마감합니다.',
    preCheckItems: [
      '유리 파손 및 크랙 여부',
      '방충망 탈거 가능 여부',
      '창틀 주변 집기류 이동 필요성',
      '외부 유리창 시공 시 로프/장비 진입로'
    ],
    targetBuildings: ['로드샵/상가', '카페/레스토랑', '사무실', '아파트/빌라', '전시장', '호텔'],
    commonProblems: ['석회질 물때', '테이프 자국', '먼지/매연', '벌레 사체'],
    process: ['상담 및 접수', '유리 상태 및 수량 확인', '견적 안내', '일정 조율', '정밀 클리닝 작업', '마감 검수'],
    faq: [
      { question: '아파트 외부 유리창도 닦아주나요?', answer: '네, 실내에서 외부를 닦는 특수 장비나 로프 시공을 통해 내부와 외부 모두 깨끗하게 닦아드립니다.' },
      { question: '물때(백화현상)가 완전히 없어지나요?', answer: '오래 방치되어 유리 부식이 진행된 경우가 아니라면, 전문 약품 처리를 통해 대부분 투명하게 복원됩니다.' },
      { question: '비가 오면 다시 더러워지지 않나요?', answer: '청소 후에는 유리가 매끄러워져 먼지가 덜 붙으며, 빗물이 줄무늬 없이 흘러내려 깨끗함이 오래 유지됩니다.' },
      { question: '작업 중 가구에 물이 튀지 않나요?', answer: '보양 작업을 철저히 하고 물기를 즉시 제거하는 방식으로 작업하여 실내 오염을 방지합니다.' },
      { question: '영업 중인 상가도 가능한가요?', answer: '손님이 적은 오전 시간이나 영업 종료 후 야간 시공을 통해 영업 방해 없이 진행합니다.' }
    ],
    priority: 2,
    indexStatus: 'index',
    imageUrl: '/images/services/window.jpg',
  },
  {
    id: 'fire',
    serviceNameKo: '화재청소',
    serviceSlug: 'fire-cleaning',
    shortDescription: '화재 피해 현장의 빠른 복구와 냄새 제거',
    mainDescription: '화재 발생 후 남은 그을음, 유독성 분진, 그리고 지독한 탄 냄새를 과학적인 방법으로 제거하여 일상 복귀를 돕습니다.',
    neededSituations: [
      '화재 진압 후 그을음과 분진이 건물 전체에 퍼진 경우',
      '탄 냄새가 심해 정상적인 생활이나 영업이 불가능한 경우',
      '소화기 분말 가루 및 소방수 피해로 인한 2차 오염 시',
      '보험 처리를 위한 전문 청소 견적 및 시공이 필요할 때'
    ],
    workingMethod: '특수 세정제를 사용하여 벽면, 천장, 바닥의 그을음을 정밀하게 제거합니다. 이후 오존 발생기 및 전문 탈취 공정을 통해 공기 중과 자재에 밴 탄 냄새를 분해합니다.',
    preCheckItems: [
      '화재 조사 완료 여부(경찰/소방)',
      '보험 가입 여부 확인',
      '전기 및 수도 정상 공급 상태',
      '폐기물 처리 범위 확정'
    ],
    targetBuildings: ['화재 주택', '피해 상가', '공장 현장', '사무실', '음식점 주방'],
    commonProblems: ['독성 그을음', '탄 냄새 고착', '소화 분말 오염', '소방수 습기'],
    process: ['긴급 출동 및 진단', '폐기물 정리 및 반출', '그을음 정밀 세척', '오존 탈취 시공', '항균 및 소독 마감', '마감 검수'],
    faq: [
      { question: '탄 냄새가 100% 제거되나요?', answer: '공정 후 탄 냄새의 95% 이상 제거를 목표로 합니다. 탄 자재를 철거하고 시공하면 거의 완벽하게 제거됩니다.' },
      { question: '보험 처리가 가능한가요?', answer: '네, 보험사에 제출하실 수 있는 상세 견적서, 시공 전후 사진, 완료 보고서 등 서류를 완벽히 지원합니다.' },
      { question: '청소만으로 복구가 되나요?', answer: '청소는 그을음과 냄새 제거 단계이며, 이후 필요에 따라 도배나 인테리어 복구가 병행되어야 합니다.' },
      { question: '작업 기간은 어느 정도인가요?', answer: '피해 규모에 따라 다르지만, 일반 주택 기준 2~4일 정도 소요됩니다.' },
      { question: '가전제품이나 가구도 청소해주나요?', answer: '그을음 세척이 가능한 제품은 정밀 닦기를 진행하나, 내부 손상이 심한 제품은 폐기를 권장합니다.' }
    ],
    priority: 3,
    indexStatus: 'index',
    imageUrl: '/images/services/fire.jpg',
  },
  {
    id: 'floor-wax',
    serviceNameKo: '바닥왁스코팅',
    serviceSlug: 'floor-wax-coating',
    shortDescription: '바닥 보호와 광택을 동시에 해결하는 전문 코팅',
    mainDescription: '데코타일, 아스타일 등 바닥 재질에 맞는 정밀 세척과 프리미엄 왁스 코팅을 통해 바닥의 수명을 연장하고 미관을 개선합니다.',
    neededSituations: [
      '바닥에 찌든 때가 많고 광택이 사라진 경우',
      '스크래치 방지 및 쉬운 유지 관리를 원하는 경우',
      '사무실 이전 입주 전 쾌적한 환경 조성을 위해',
      '기존 코팅막이 벗겨지고 오염이 심해졌을 때'
    ],
    workingMethod: '박리제를 사용하여 기존의 낡은 왁스층을 완전히 제거(박리)합니다. 이후 바닥을 중화 및 세정하고, 건조된 표면에 프리미엄 왁스를 2~3회 균일하게 도포하여 광택을 형성합니다.',
    preCheckItems: [
      '바닥 자재 종류(데코타일, 마루, 에폭시 등)',
      '책상, 가구 등 집기류 이동 필요 여부',
      '작업 시간 내 보행 통제 가능 여부',
      '전기 및 수도 사용 가능 상태'
    ],
    targetBuildings: ['사무실', '매장/병원', '전시장/학원', '공장 바닥', '체육관', '관공서'],
    commonProblems: ['바닥 스크래치', '왁스 박리 현상', '변색/오염', '미끄러움'],
    process: ['상담 및 현장 확인', '기존 왁스 박리 작업', '바닥 세정 및 건조', '프리미엄 왁스 코팅', '광택 안정화 점검', '마감 검수'],
    faq: [
      { question: '코팅 후 얼마큼 지나야 걸을 수 있나요?', answer: '보통 도포 후 1~2시간이면 보행이 가능하며, 완전 경화까지는 12시간 정도 주의가 필요합니다.' },
      { question: '기존의 검은 때도 없어지나요?', answer: '네, 강력한 박리 작업과 기계 세척을 통해 타일 사이의 찌든 때까지 대부분 제거됩니다.' },
      { question: '코팅 유지 기간은 어떻게 되나요?', answer: '통행량에 따라 다르지만 보통 6개월~1년 정도 유지되며, 주기적인 관리가 필요합니다.' },
      { question: '마루 바닥도 왁스 코팅이 가능한가요?', answer: '강화마루나 온돌마루는 전용 수성 왁스를 사용해야 하며, 재질에 맞는 시공법을 적용합니다.' },
      { question: '작업 비용은 어떻게 산정되나요?', answer: '면적(평수)과 기존 왁스 박리 필요 여부, 집기류 이동 유무에 따라 결정됩니다.' }
    ],
    priority: 4,
    indexStatus: 'index',
    imageUrl: '/images/services/floor-wax.jpg',
  },
  {
    id: 'awning',
    serviceNameKo: '어닝청소',
    serviceSlug: 'awning-cleaning',
    shortDescription: '매장의 얼굴인 어닝의 곰팡이와 오염 완벽 제거',
    mainDescription: '외부 노출로 인해 쉽게 더러워지는 어닝의 곰팡이와 찌든 때를 전용 약품으로 세척하여 매장의 첫인상을 완벽하게 회복합니다.',
    neededSituations: [
      '어닝에 검은 곰팡이나 이끼가 핀 경우',
      '장기적인 방치로 어닝 색상이 변색되었을 때',
      '매장 오픈 전 어닝의 일괄 세척이 필요할 때',
      '비 온 뒤 어닝 아래로 검은 물줄기 자국이 생길 때'
    ],
    workingMethod: '원단 손상을 최소화하는 전용 약품 살포 후 브러시 수작업과 고압 세척을 병행합니다. 재질에 따른 맞춤 세정으로 오염만 쏙 제거합니다.',
    preCheckItems: [
      '어닝 작동 및 고정 상태 확인',
      '하부 집기 및 보행자 통제 공간 확보',
      '전기 시설물 물 유입 방지 보양',
      '장비(스카이차 등) 진입로 확인'
    ],
    targetBuildings: ['카페/음식점', '일반 상가 매장', '프랜차이즈 점포', '테라스 매장'],
    commonProblems: ['검은 곰팡이', '거미줄/벌레', '매연 자국', '변색'],
    process: ['상담 및 진단', '전기 안전 점검', '약품 살포 및 정밀 세척', '물기 제거 및 건조', '마감 검수'],
    faq: [
      { question: '곰팡이가 완전히 지워지나요?', answer: '전용 약품 시공으로 훨씬 밝아진 효과를 드립니다. 다만 원단 깊숙이 침투한 경우 100% 제거가 어려울 수 있어 현장 진단 후 안내해 드립니다.' },
      { question: '원단이 찢어지지는 않나요?', answer: '고압수 압력을 원단 상태에 맞춰 조절하며, 숙련된 기술자가 수작업을 병행하여 안전하게 시공합니다.' }
    ],
    priority: 5,
    indexStatus: 'index',
    imageUrl: '/images/services/awning.jpg',
  },
  {
    id: 'signboard',
    serviceNameKo: '간판청소',
    serviceSlug: 'signboard-cleaning',
    shortDescription: '매장 가독성을 높여주는 간판 정밀 세척 서비스',
    mainDescription: '대기 미세먼지와 매연으로 어두워진 간판을 정밀 세척하여 브랜드의 가독성을 높이고 깨끗한 이미지를 전달합니다.',
    neededSituations: [
      '간판 글자가 먼지로 인해 어둡게 보일 때',
      '간판 표면에 거미줄이나 먼지가 고착된 경우',
      '매장 리뉴얼 후 간판 세척이 필요할 때',
      '조명 간판 내부에 벌레 사체 등이 비칠 때'
    ],
    workingMethod: '간판 재질(플렉스, 채널, 아크릴 등)에 맞춰 전용 세정제를 사용하며, 틈새 사이의 먼지까지 꼼꼼하게 제거합니다.',
    preCheckItems: [
      '간판 전기 배선 상태 확인',
      '보행자 통제 및 안전 가이드 설치',
      '전기 소자 물 유입 방지 보양',
      '작업 높이에 따른 장비 투입 여부'
    ],
    targetBuildings: ['일반 상가', '프랜차이즈', '주유소', '병원/학원'],
    commonProblems: ['먼지/매연', '거미줄/벌레', '비 자국', '가시성 저하'],
    process: ['상담 및 접수', '안전 점검', '정밀 세척', '광택 및 마감', '마감 검수'],
    faq: [
      { question: '전기 쇼트 위험은 없나요?', answer: '전원을 차단하고 작업하며, 전기 소자에 물이 닿지 않도록 철저한 보양과 노하우를 가지고 시공합니다.' },
      { question: '높은 곳에 있는 간판도 가능한가요?', answer: '네, 스카이 차량 등 전문 장비를 투입하여 안전하게 시공이 가능합니다.' }
    ],
    priority: 5,
    indexStatus: 'index',
    imageUrl: '/images/services/signboard.jpg',
  },
  {
    id: 'interior-post',
    serviceNameKo: '인테리어 후 청소',
    serviceSlug: 'interior-post-cleaning',
    shortDescription: '리모델링 후 발생하는 막대한 분진과 먼지 완벽 제거',
    mainDescription: '인테리어 공사 후 집안 곳곳에 남은 톱밥 가루, 미세 먼지, 페인트 자국 등을 제거하여 쾌적한 실내 환경을 만듭니다.',
    neededSituations: [
      '리모델링 공사 후 미세한 톱밥 가루가 심할 때',
      '수납장 안쪽까지 침투한 미세 분진 제거가 필요할 때',
      '공사 후 실리콘이나 페인트 자국이 남았을 때',
      '새집 냄새와 공사 먼지로 입주가 꺼려질 때'
    ],
    workingMethod: '산업용 진공청소기로 분진을 1차 흡입하고, 벽면부터 천장, 바닥까지 다회에 걸친 정밀 닦기를 진행합니다.',
    preCheckItems: [
      '가구 수납장 내부 청소 여부',
      '공사 잔여물 처리 범위',
      '전기 및 수도 정상 공급 상태',
      '이사 일정 등 후속 공정 확인'
    ],
    targetBuildings: ['리모델링 아파트', '상가/오피스', '학원/병원', '백화점 매장'],
    commonProblems: ['톱밥 먼지', '실리콘 자국', '공사 분진', '페인트 흔적'],
    process: ['상담 및 진단', '분진 흡입', '정밀 세척', '항균 소독', '마감 검수'],
    faq: [
      { question: '수납장 내부도 닦아주나요?', answer: '네, 모든 선반과 서랍을 분리하여 안쪽 깊숙한 곳의 먼지까지 완벽하게 제거합니다.' },
      { question: '새집 냄새도 제거되나요?', answer: '기본 청소 후 요청 시 피톤치드 시공 등을 통해 냄새 완화를 도와드립니다.' }
    ],
    priority: 6,
    indexStatus: 'index',
    imageUrl: '/images/services/interior-post.jpg',
  },
  {
    id: 'completion',
    serviceNameKo: '준공청소',
    serviceSlug: 'construction-completion-cleaning',
    shortDescription: '신축 건물 완공 후 즉시 입주가 가능하도록 정밀 클리닝',
    mainDescription: '건축 공사 후 발생하는 시멘트 가루, 보양지, 잔해물 등을 완벽하게 제거하여 준공 검사 및 입주를 준비합니다.',
    neededSituations: [
      '건물 신축 후 공사 먼지와 잔해물이 가득할 때',
      '준공 검사 전 건물의 청결 상태 확보가 필요할 때',
      '창틀이나 바닥에 시멘트/실리콘 자국이 심할 때',
      '대규모 건물의 체계적인 준공 클리닝이 필요할 때'
    ],
    workingMethod: '전문 인력을 투입하여 구역별 분업 시스템을 통해 대규모 현장의 오염을 신속하고 정확하게 제거합니다.',
    preCheckItems: [
      '대형 폐기물 처리 유무',
      '엘리베이터 보양 상태',
      '수전 및 분전반 위치',
      '준공 검사 및 입주 일정'
    ],
    targetBuildings: ['신축 아파트/빌라', '신축 빌딩', '공장/관공서', '대형 매장'],
    commonProblems: ['시멘트 가루', '보양지 자국', '공사 잔해', '실리콘 오염'],
    process: ['현장 실사', '인력 및 장비 투입', '정밀 클리닝', '현장 보고', '마감 검수'],
    faq: [
      { question: '시멘트 자국이 지워지나요?', answer: '네, 전용 세정제를 사용하여 타일이나 유리에 묻은 시멘트 오염을 깔끔하게 제거합니다.' },
      { question: '대단지 아파트도 가능한가요?', answer: '네, 대규모 전문 인력과 장비를 보유하고 있어 대단지 현장도 충분히 수행 가능합니다.' }
    ],
    priority: 6,
    indexStatus: 'index',
    imageUrl: '/images/services/completion.jpg',
  },
  {
    id: 'hood',
    serviceNameKo: '후드청소',
    serviceSlug: 'hood-cleaning',
    shortDescription: '식당 주방의 치명적인 기름때 완벽 제거 및 화재 예방',
    mainDescription: '주방 후드와 덕트에 쌓인 기름때를 정밀 세척하여 위생적인 조리 환경을 조성하고 기름 화재를 예방합니다.',
    neededSituations: [
      '후드에서 조리기구로 기름이 떨어지는 경우',
      '후드 흡입력이 눈에 띄게 저하된 경우',
      '식당 위생 점검을 앞두고 있는 경우',
      '덕트 내부의 찌든 기름때로 화재가 우려될 때'
    ],
    workingMethod: '강력한 기름 분해 세제를 도포하여 딱딱하게 굳은 유지분을 녹여냅니다. 이후 고온 스팀과 특수 스크래퍼를 사용하여 내부 깊숙한 곳까지 기름기를 완벽하게 제거합니다.',
    preCheckItems: [
      '주방 집기류 보양 공간',
      '후드 모터(팬) 정상 작동 여부',
      '가스 시설 및 화구 노출 상태',
      '야간/새벽 작업 가능 여부'
    ],
    targetBuildings: ['음식점 주방', '급식소', '호텔 주방', '식품 공장', '치킨/중식당'],
    commonProblems: ['굳은 기름때', '기름 낙하', '흡입 저하', '화재 위험'],
    process: ['상담 및 현장 진단', '조리 시설 정밀 보양', '기름 분해 약품 시공', '스크래핑 및 스팀 세척', '필터 분해 세척', '마감 검수'],
    faq: [
      { question: '덕트 안쪽 깊은 곳도 가능한가요?', answer: '팔이 닿는 범위 및 점검구가 있는 구간까지 최대한 정밀하게 세척을 진행합니다.' },
      { question: '필터만 청소하면 안 되나요?', answer: '필터는 겉부분일 뿐입니다. 화재는 후드 내부와 덕트의 기름때에서 시작되므로 전체 청소가 필수입니다.' },
      { question: '영업 중에도 가능한가요?', answer: '조리 시설을 사용하지 않아야 하므로 주로 영업 종료 후나 준비 시간에 진행합니다.' },
      { question: '기름때가 완벽히 제거되나요?', answer: '전용 약품과 고온 스팀으로 고착된 기름을 녹여내어 스테인리스 본래의 광택을 살려드립니다.' },
      { question: '주방 전체 청소도 병행되나요?', answer: '후드 위주 시공이 기본이며, 요청 시 벽면과 바닥 등 주방 전체 클리닝도 가능합니다.' }
    ],
    priority: 9,
    indexStatus: 'index',
    imageUrl: '/images/services/hood.jpg',
    showOnMain: true,
  },
  {
    id: 'trash-house',
    serviceNameKo: '쓰레기집청소',
    serviceSlug: 'hoarder-house-cleaning',
    shortDescription: '방치된 대량의 쓰레기와 악취를 완벽하게 해결하는 특수 클리닝',
    mainDescription: '장기간 방치되어 대량의 쓰레기와 오염물로 가득 찬 실내를 체계적으로 정리하고, 정밀 세척 및 강력 탈취를 통해 쾌적한 주거 공간으로 복원합니다.',
    neededSituations: [
      '쓰레기가 무릎 높이 이상 쌓여 자력으로 정리가 불가능한 경우',
      '쓰레기 방치로 인해 해충이 발생하고 악취가 심한 경우',
      '거주지 이동 전이나 임대차 계약 종료 후 원상복구가 필요할 때',
      '주변 이웃으로부터 민원이 제기되어 긴급한 정리가 필요할 때'
    ],
    workingMethod: '폐기물을 종류별로 신속하게 분류하여 배출한 후, 강력 세정제와 고온 스팀 장비를 사용하여 찌든 오염을 제거합니다. 마지막으로 오존 살균과 특수 탈취 공정을 통해 잔류 냄새를 완벽히 차단합니다.',
    preCheckItems: [
      '대형 폐기물 및 잡동사니 전체 폐기 여부',
      '귀중품 및 중요 서류 별도 보관 여부',
      '수도 및 전기 사용 가능 상태 확인',
      '작업 중 외부 노출 최소화 요청 여부'
    ],
    targetBuildings: ['원룸/오피스텔', '아파트/빌라', '단독 주택', '고시원'],
    commonProblems: ['대량 폐기물 적체', '해충/세균 번식', '악취 고착', '바닥/벽지 변색'],
    process: ['비공개 상담 및 예약', '현장 진단 및 분류', '폐기물 수거 및 반출', '정밀 클리닝 및 세척', '살균 및 강력 탈취', '마감 검수'],
    faq: [
      { question: '이웃 모르게 작업이 가능한가요?', answer: '네, 소음과 외부 노출을 최소화하며, 일반 이삿짐이나 단순 정리처럼 보이도록 보안 시공을 진행합니다.' },
      { question: '폐기물 비용은 별도인가요?', answer: '폐기물의 종류와 양에 따라 처리 비용이 산출되며, 상담 시 정확한 안내를 도와드립니다.' },
      { question: '정리 정돈도 같이 해주나요?', answer: '청소와 소독이 주 목적이며, 기본적인 수납장 정리 등은 포함되나 전문 정리 수납과는 차이가 있습니다.' },
      { question: '작업 시간은 얼마나 걸리나요?', answer: '쓰레기 양에 따라 다르지만 보통 1~2일 내에 집중적으로 완료합니다.' }
    ],
    priority: 9,
    indexStatus: 'index',
    imageUrl: '/images/services/trash-house.jpg',
    showOnMain: false,
  },
  {
    id: 'special-cleaning',
    serviceNameKo: '특수청소',
    serviceSlug: 'special-cleaning',
    shortDescription: '고독사 현장, 유품 정리, 쓰레기집 등 고난도 특수 케어',
    mainDescription: '전문적인 기술과 장비가 필요한 특수 오염 현장을 신속하고 완벽하게 복구합니다. 탈취, 살균, 소독 및 심리적 배려까지 포함된 종합 솔루션을 제공합니다.',
    neededSituations: [
      '장기간 방치된 고독사 현장 및 유품 정리가 필요할 때',
      '심각한 악취와 해충이 발생한 쓰레기집 복구 시',
      '화재나 수해 후 정밀 세척 및 살균이 필요할 때',
      '반려동물 배설물 등 일반 청소로 해결 안 되는 오염 시'
    ],
    workingMethod: '오염원 제거 후 전문 약품을 활용한 다단계 탈취 및 살균 공정을 진행합니다. 모든 작업은 철저히 비밀을 보장하며, 유족이나 의뢰인의 요구에 맞춰 정성스럽게 시공합니다.',
    preCheckItems: [
      '현장 상황(오염도) 유선 상담 및 사진 확인',
      '작업 범위 및 폐기물 처리량 확정',
      '수도 및 전기 사용 가능 여부',
      '작업 완료 후 입주/인도 일정 확인'
    ],
    targetBuildings: ['단독/다세대 주택', '오피스텔/아파트', '고시원/원룸', '특수 오염 현장'],
    commonProblems: ['강력 악취 고착', '세균/해충 오염', '방치된 폐기물', '심리적 부담'],
    process: ['긴급 상담 및 방문', '현장 진단 및 견적', '오염원 제거 및 세척', '정밀 탈취 및 살균', '유품 정리/정돈', '마감 검수'],
    faq: [
      { question: '냄새가 완전히 사라지나요?', answer: '전문 오존 발생기와 탈취제를 사용하여 악취의 원인을 근본적으로 분해합니다. 현장 상황에 따라 반복 시공을 통해 해결해 드립니다.' },
      { question: '비밀 보장이 되나요?', answer: '네, 모든 현장은 의뢰인의 프라이버시를 최우선으로 하며 소음과 외부 노출을 최소화하여 작업합니다.' },
      { question: '유품 정리도 같이 해주나요?', answer: '청소뿐만 아니라 가구, 가전, 잡동사니 등 유품의 분류와 폐기물 처리까지 일괄적으로 지원해 드립니다.' }
    ],
    priority: 10,
    indexStatus: 'index',
    imageUrl: '/images/services/special-cleaning.jpg',
    showOnMain: false,
  },
];
