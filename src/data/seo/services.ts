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
    mainProblem: '건물 외벽 먼지 및 유기적 오염 축적',
    targetPlaces: ['빌딩 외벽', '상가 외부', '아파트 외장', '공장 외벽'],
    contaminationTypes: ['매연 먼지', '백화 얼룩', '조류 배설물', '이끼 및 곰팡이'],
    preCheckItems: ['로프 또는 고소작업차 작업 공간 확보', '외장재 종류 확인', '급수 밸브 위치 확인'],
    estimateFactors: ['건물 높이 및 연면적', '외벽 자재 특성', '오염 상태 및 작업 난이도'],
    faqSet: [
      { q: '{{지역명}} 외벽청소는 고층 건물도 상담 가능한가요?', a: '네, 로프 숙련 전문가와 고소 작업대 등 안전 장비를 완비하여 현장 규모와 관계없이 상담해 드립니다.' },
      { q: '유리창 물때와 석재 백화 현상도 정리되나요?', a: '네. 유리 전용 약품과 백시멘트 중화제를 사용해 외부 마감재에 맞는 방식으로 세정합니다.' },
      { q: '작업 일정은 기상 상황에 따라 달라지나요?', a: '안전이 최우선이므로 강우나 강풍 시 일정을 신속히 조율하여 조치합니다.' }
    ],
    relatedServices: ['유리창청소', '어닝청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 건물의 첫인상을 단정하게 가꾸는 전문 외벽청소 서비스입니다.',
    ctaHook: '외벽 상태 확인 상담',
    thumbnailImage: '/images/seo/exterior-cleaning.jpg',
    ogImage: '/images/seo/exterior-cleaning-og.jpg',
    altBase: '외벽청소 전경'
  },
  {
    serviceNameKo: '유리창청소',
    serviceSlug: 'window-cleaning',
    mainProblem: '빗물 얼룩, 미세 먼지 및 손때로 인한 유리창 투명도 저하',
    targetPlaces: ['상가 쇼윈도', '사무실 외부 유리', '주거용 아파트 베란다 창'],
    contaminationTypes: ['빗물 자국', '지문 얼룩', '스티커 잔여물', '유막 고착'],
    preCheckItems: ['외부면 유리 접근 여건', '창틀 하부 집기 보호 보양', '스티커 제거 필요 여부'],
    estimateFactors: ['유리창 수량 및 규격', '작업 높이 및 장비 필요성', '오염 상태'],
    faqSet: [
      { q: '{{지역명}} 유리창청소는 고소 작업이 수반되어도 상담 가능한가요?', a: '작업 여건에 따라 로프나 고소차, 연장 폴대를 준비하여 안전하게 상담을 진행합니다.' },
      { q: '외부 유리창만 따로 상담할 수 있나요?', a: '네, 내 외부 전체 세정뿐 아니라 필요한 면만 구분하여 범위를 안내해 드립니다.' },
      { q: '시트지나 옛날 스티커 자국도 지워지나요?', a: '유리 긁힘 방지용 스크래퍼와 전용 약품을 투입해 유리면 손상 없이 정리합니다.' }
    ],
    relatedServices: ['외벽청소', '간판청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 상가 매장과 건물의 시야를 맑게 복원하는 유리창청소 솔루션입니다.',
    ctaHook: '유리창 오염 상태 상담',
    thumbnailImage: '/images/seo/window-cleaning.jpg',
    ogImage: '/images/seo/window-cleaning-og.jpg',
    altBase: '유리창청소 작업'
  },
  {
    serviceNameKo: '화재청소',
    serviceSlug: 'fire-cleaning',
    mainProblem: '그을음 분진 고착 및 메케한 탄 냄새 잔존',
    targetPlaces: ['화재 발생 아파트', '피해 상가 매장', '사무실/창고 재해 공간'],
    contaminationTypes: ['시커먼 그을음', '유독성 연기 분진', '탄 물질 잔해', '화재 소방수 잔수'],
    preCheckItems: ['임시 전력 및 수도 연결 상태', '폐기해야 할 가재도구 구분', '실내 환기 상태'],
    estimateFactors: ['피해 면적 및 오염 범위', '그을음 깊이', '폐기물 반출량', '탈취 소독 필요성'],
    faqSet: [
      { q: '{{지역명}} 화재청소는 탄 냄새 제거를 동반하여 상담 가능한가요?', a: '그을음 중화 약품 세정과 고성능 오존 탈취기를 다단계로 가동하여 탄 냄새 입자를 정리합니다.' },
      { q: '보험 청구용 증빙 서류도 발송되나요?', a: '작업 전후 사진, 소요 장비 목록, 시공 견적서 등 제출용 자료를 꼼꼼히 챙겨 드립니다.' },
      { q: '공사 전 시멘트 그을음만 지우는 것도 되나요?', a: '네. 화재 인테리어 복구 공사 전 단계의 골조 그을음 제거도 범위를 조율해 상담합니다.' }
    ],
    relatedServices: ['특수청소', '바닥청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 갑작스러운 화재 재해 공간의 신속한 그을음 제거와 정밀 복구청소입니다.',
    ctaHook: '화재 복구 상담 요청',
    thumbnailImage: '/images/seo/fire-cleaning.jpg',
    ogImage: '/images/seo/fire-cleaning-og.jpg',
    altBase: '화재복구 청소현장'
  },
  {
    serviceNameKo: '바닥왁스코팅',
    serviceSlug: 'floor-wax-coating',
    mainProblem: '바닥재 마모로 인한 스크래치 및 묵은 먼지 유입',
    targetPlaces: ['오피스 바닥', '의료시설 바닥', '학원/매장 타일 바닥'],
    contaminationTypes: ['기존 왁스 변색', '스크러프 마크(바퀴자국)', '고착된 흙 먼지 얼룩'],
    preCheckItems: ['바닥 타일 자재 종류', '바닥 위 집기 이동 가능 여부', '작업 후 건조 시간 확보'],
    estimateFactors: ['왁스 코팅 면적', '기존 코팅층 박리 필요 여부', '작업 시간대(야간/공휴일)'],
    faqSet: [
      { q: '{{지역명}} 바닥왁스코팅은 기존 오염을 다 지우고 시공하나요?', a: '기존의 묵은 광택막과 때를 갈아내어 흡입하는 박리 시공을 선행한 후 왁스를 도포합니다.' },
      { q: '시공 후 건조에 얼마나 걸리나요?', a: '최소 2~3시간의 건조 시간이 지나야 왁스층이 안착되므로 통행을 통제하여 주셔야 합니다.' },
      { q: '바닥 광택이 오래 유지되는 팁이 있나요?', a: '코팅 후 날카로운 집기 이동을 주의하시고 일상 청소 시 물기를 꽉 짠 걸레를 사용하시면 광택이 보존됩니다.' }
    ],
    relatedServices: ['바닥청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 사무실과 상가의 바닥 타일 수명을 늘리고 쾌적함을 살리는 바닥왁스코팅 시공입니다.',
    ctaHook: '바닥 코팅 견적 상담',
    thumbnailImage: '/images/seo/floor-waxing.jpg',
    ogImage: '/images/seo/floor-waxing-og.jpg',
    altBase: '바닥 왁스 코팅 시공'
  },
  {
    serviceNameKo: '어닝청소',
    serviceSlug: 'awning-cleaning',
    mainProblem: '천막 외부 빗물 자국과 습기로 인한 곰팡이/이끼 적체',
    targetPlaces: ['카페/식당 테라스 천막', '로드숍 매장 전면 어닝'],
    contaminationTypes: ['천막 곰팡이 얼룩', '낙엽/먼지 물때', '도로 매연 그을음'],
    preCheckItems: ['어닝 설치 규격(가로 및 돌출 길이)', '하부 보행자 통로 안전 공간', '용수 연결구 확보'],
    estimateFactors: ['어닝 면적 및 개수', '설치 높이 및 스카이차 필요성', '원단 노후 상태'],
    faqSet: [
      { q: '{{지역명}} 어닝청소는 원단 곰팡이도 상담 가능한가요?', a: '네. 어닝 전용 살균 약품을 분사하여 불린 후 저손상 고압수 세정으로 곰팡이를 닦아냅니다.' },
      { q: '천막이 노후하여 찢어질 위험은 없나요?', a: '현장 점검 단계에서 원단 삭음 상태를 감안하고, 고압수 거리를 섬세하게 튜닝해 정밀하게 작업합니다.' },
      { q: '세정 후 어닝 발수 코팅도 되나요?', a: '세척 건조 후 옵션에 따라 별도의 발수제 도포 시공을 연계해 상담해 드립니다.' }
    ],
    relatedServices: ['외벽청소', '간판청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 매장의 첫인상을 바꾸는 테라스 천막 및 어닝 고압세정 서비스입니다.',
    ctaHook: '어닝 상태 확인 상담',
    thumbnailImage: '/images/seo/awning-cleaning.jpg',
    ogImage: '/images/seo/awning-cleaning-og.jpg',
    altBase: '어닝 청소'
  },
  {
    serviceNameKo: '간판청소',
    serviceSlug: 'signboard-cleaning',
    mainProblem: '간판 겉면 매연 먼지 고착 및 눈물 자국 얼룩 발생',
    targetPlaces: ['상가 전면 간판', '빌딩 고소 조명 간판', '로드숍 돌출 간판'],
    contaminationTypes: ['거미줄/곤충 사체', '유리 물때 및 얼룩', '세로 눈물 자국 때'],
    preCheckItems: ['간판 높이 및 구조 확인', '안정기 노출에 따른 누전 예방 확인', '차량 통행 통제 필요 여부'],
    estimateFactors: ['간판 규격 및 개수', '장비 사용 필요 유무', '오염 상태'],
    faqSet: [
      { q: '{{지역명}} 간판청소는 전구 조명 고장 없이 상담 가능한가요?', a: '기본적인 생활 방수 구조이지만 노후 틈새를 감안하여 수작업 저압 분사 방식으로 안전하게 상담합니다.' },
      { q: '눈물 얼룩 자국도 지워지나요?', a: '간판 자재(아크릴, 플렉스 등)에 손상을 주지 않는 중성 약품과 스패출러를 이용해 고착 얼룩을 닦아냅니다.' },
      { q: 'LED 모듈 교체도 포함인가요?', a: '본 작업은 먼지 및 얼룩을 정리하는 외부 세정이 중심이며, 전기 보수는 상담 시 여건을 확인합니다.' }
    ],
    relatedServices: ['유리창청소', '어닝청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 가독성을 높이고 손님의 눈길을 사로잡는 간판 먼지 세척입니다.',
    ctaHook: '간판 오염 상태 상담',
    thumbnailImage: '/images/seo/signboard-cleaning.jpg',
    ogImage: '/images/seo/signboard-cleaning-og.jpg',
    altBase: '간판 청소'
  },
  {
    serviceNameKo: '인테리어후청소',
    serviceSlug: 'interior-post-cleaning',
    mainProblem: '공사 완료 후 잔존하는 다량의 석고 분진 및 톱밥 적체',
    targetPlaces: ['리모델링 마친 주거 공간', '인테리어 공사 후 상가 매장', '신축 빌딩 내부 사무실'],
    contaminationTypes: ['석고보드 미세 먼지', '톱밥 및 나무 가루', '시멘트/실리콘 얼룩', '도배풀 흔적'],
    preCheckItems: ['리모델링 공사 공정 완료 상태 확인', '싱크대/빌트인 보양지 제거 범위', '전원 공급 여부'],
    estimateFactors: ['시공 면적', '백시멘트/페인트 오염의 범위', '탈거 대상 가구 수량'],
    faqSet: [
      { q: '{{지역명}} 인테리어후청소는 공사 먼지 정리도 상담 가능한가요?', a: '석고 가루, 톱밥, 타일 백시멘트 등 공사 후 남은 분진을 고성능 흡입기와 중화제로 정리해 드립니다.' },
      { q: '서랍장 안쪽이나 환기구도 닦아주나요?', a: '탈거 가능한 선반과 서랍을 모두 분해하여 보이지 않는 안쪽 톱밥까지 닦아냅니다.' },
      { q: '시멘트 얼룩이나 실리콘 잔여물도 지워지나요?', a: '바닥재에 흠집을 내지 않는 중화 약품과 전용 도구 처리를 통해 깔끔하게 분리 세정합니다.' }
    ],
    relatedServices: ['준공청소', '바닥청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 공사 화학 먼지와 톱밥 가루를 정밀 정화하는 인테리어후청소 서비스입니다.',
    ctaHook: '공사 후 청소 견적 문의',
    thumbnailImage: '/images/seo/interior-post-cleaning.jpg',
    ogImage: '/images/seo/interior-post-cleaning-og.jpg',
    altBase: '공사후 정밀청소'
  },
  {
    serviceNameKo: '준공청소',
    serviceSlug: 'completion-cleaning',
    mainProblem: '건축 준공 승인 검사용 다량의 공사 쓰레기 및 거친 분진 적체',
    targetPlaces: ['신축 아파트/빌라 단지', '오피스텔 빌딩', '프라자 상가 건물', '공장/창고 시설'],
    contaminationTypes: ['대량 공사 잔해물', '창틀 석고보드 가루', '외장 보양 비닐 찌꺼기', '바닥 흙먼지'],
    preCheckItems: ['준공 승인 검수 일정 정보', '엘리베이터 보양재 철거 유무', '소방 통로 배수로 상태'],
    estimateFactors: ['건물 연면적 및 층수', '승강기 수량 및 공용부 규모', '반출 쓰레기량'],
    faqSet: [
      { q: '{{지역명}} 준공청소는 사용승인검사에 맞춰 상담 가능한가요?', a: '지자체 준공검사 기준에 맞춘 구역(외벽 유리, 계단 흙 앙금, 통로 오염 등)을 중점 관리해 상담합니다.' },
      { q: '세금계산서와 서류 일체 발행이 되나요?', a: '네, 정식 법인 세금계산서 발행과 함께 입찰 및 결재용 견적서, 시방서 등을 구비해 드립니다.' },
      { q: '승강기 판넬 보호재도 철거해 주나요?', a: '네, 승강기 및 복도 구조물 등에 부착된 보양 비닐과 양재 보호 테이프를 흔적 없이 떼어 닦아냅니다.' }
    ],
    relatedServices: ['인테리어후청소', '바닥청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 신축 건물의 사용승인검사 통과를 돕는 다년간 경험의 준공청소 서비스입니다.',
    ctaHook: '건물 준공 상담 요청',
    thumbnailImage: '/images/seo/interior-post-cleaning.jpg',
    ogImage: '/images/seo/interior-post-cleaning-og.jpg',
    altBase: '준공검사용 대청소'
  },
  {
    serviceNameKo: '후드청소',
    serviceSlug: 'hood-cleaning',
    mainProblem: '조리 화구 상단 후드 내 고착된 노란 기름때 적체',
    targetPlaces: ['식당 주방', '구내식당 조리실', '학교 급식소', '식품 제조 작업장'],
    contaminationTypes: ['노란 유지분 굳은 때', '기름 방울 고임', '필터망 유지분 고착', '배기 모터 분진'],
    preCheckItems: ['후드 규격 및 개수', '조리대 식기류 사전 대피', '식당 마감 및 휴무 일정 조율'],
    estimateFactors: ['후드 면적 및 덕트 연결 상태', '기름때 고착 수준', '작업 시간대(야간 가능 여부)'],
    faqSet: [
      { q: '{{지역명}} 후드청소는 기름 얼룩 위주로 상담 가능한가요?', a: '네, 후드 내벽에 굳은 노란 유지분 기름때를 전용 분해제와 고온 스팀으로 녹여 세정합니다.' },
      { q: '식기 주변으로 기름물이나 약품이 튀지 않나요?', a: '작업 전 화구와 식기 건조대 전체를 비닐 커버로 완전 밀밀폐 보양하여 보호 조치합니다.' },
      { q: '필터망 세척도 같이 진행되나요?', a: '네, 탈거 가능한 유지분 필터망은 전용 약품에 침지하여 기름때를 말끔히 녹여냅니다.' }
    ],
    relatedServices: ['바닥청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 식당 주방의 화재 예방과 위생 기준 통과를 돕는 환기 후드 세정입니다.',
    ctaHook: '주방 후드 점검 문의',
    thumbnailImage: '/images/seo/hood-cleaning.jpg',
    ogImage: '/images/seo/hood-cleaning-og.jpg',
    altBase: '주방 후드 세정 작업'
  },
  {
    serviceNameKo: '쓰레기집청소',
    serviceSlug: 'hoarding-cleaning',
    mainProblem: '방치 폐기물 적체 및 심각한 악취 발생',
    targetPlaces: ['1인 가구 원룸', '오피스텔 방치 거주지', '단독주택 내 방치 룸'],
    contaminationTypes: ['일회용 쓰레기 더미', '썩은 음식물 오물', '해충 및 초파리', '바닥 습기 찌든 때'],
    preCheckItems: ['폐기물 톤수 추정', '중요 유품/귀중품 보존 요구 목록', '작업의 비밀 보장 요건'],
    estimateFactors: ['폐기물 반출량(톤단위)', '오염 오물 깊이', '탈취 소독 필요성'],
    faqSet: [
      { q: '{{지역명}} 쓰레기집청소는 원룸이나 오피스텔도 상담 가능한가요?', a: '네, 공간이 협소하여 생활 폐기물이 높게 쌓인 1인 가구 주거지 정리에 대한 풍부한 경험을 보유하고 있습니다.' },
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
    ctaHook: '특수 복구 긴급 문의',
    thumbnailImage: '/images/seo/special-cleaning.jpg',
    ogImage: '/images/seo/special-cleaning-og.jpg',
    altBase: '특수청소 작업 전경'
  },
  {
    serviceNameKo: '입주청소',
    serviceSlug: 'move-in-cleaning',
    mainProblem: '신축 건물의 공사 분진 및 구축 건물의 이전 생활 오염 제거',
    targetPlaces: ['아파트', '빌라', '오피스텔', '단독 주택'],
    contaminationTypes: ['공사 분진 가루', '창틀 먼지', '싱크대 찌든 때', '욕실 곰팡이', '도배풀 얼룩'],
    preCheckItems: ['수도 및 전기 정상 가동 여부', '작업 당일 가구 반입 일정 겹침 여부', '공실 상태 여부'],
    estimateFactors: ['공급 면적(평수)', '오염의 정도', '베란다/창 수량', '추가 스팀 소독 필요성'],
    faqSet: [
      { q: '{{지역명}} 입주청소는 입주 며칠 전에 하는 게 좋나요?', a: '가구와 짐이 없는 완전히 빈 집 상태에서 꼼꼼히 청소할 수 있도록 통상 입주 1~3일 전 작업을 진행합니다.' },
      { q: '신축 아파트 분진가루와 도배풀도 제거되나요?', a: '네. 가구 내부와 천장, 몰딩 경계의 공사 분진 가루와 벽면 도배풀을 부드럽게 닦아냅니다.' },
      { q: '서랍장이나 배수구도 탈거해서 닦아주나요?', a: '탈거가 가능한 배수구 부속, 전등 커버, 서랍장은 안쪽 먼지까지 흡입 후 약품 세정합니다.' }
    ],
    relatedServices: ['바닥청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 입주청소 욕실·주방·베란다 청소 - 모두종합환경',
    ctaHook: '입주청소 견적 받기',
    thumbnailImage: '/images/services/move-in-cleaning.jpg',
    ogImage: '/images/services/move-in-cleaning.jpg',
    altBase: '입주청소'
  },
  {
    serviceNameKo: '이사청소',
    serviceSlug: 'moving-cleaning',
    mainProblem: '이전 거주자가 남긴 주방 기름때, 욕실 물때, 생활 찌든 오염 제거',
    targetPlaces: ['아파트', '빌라', '오피스텔', '단독 주택'],
    contaminationTypes: ['생활 찌든때', '배수구 냄새', '환풍기 기름때', '창틀 먼지', '싱크대 물때'],
    preCheckItems: ['수도 및 전기 정상 작동 상태', '이사짐 반입 일정 조율', '빈집 상태 여부'],
    estimateFactors: ['공급 면적(평수)', '오염의 정도', '베란다/창 수량', '추가 소독 필요성'],
    faqSet: [
      { q: '{{지역명}} 이사청소는 이사 며칠 전에 하는 게 좋나요?', a: '짐이 없는 공실 상태에서 구석구석 정밀 클리닝이 진행되도록 이사 전 1~3일 전 일정을 잡으시는 것이 가장 이상적입니다.' },
      { q: '생활 찌든 때와 곰팡이도 청소 범위에 포함되나요?', a: '네. 주방의 묵은 기름때, 욕실의 물때 및 실리콘 주변 곰팡이는 전용 분해 약품과 고온 스팀을 동반해 집중적으로 제거합니다.' },
      { q: '창틀과 창문도 닦아주나요?', a: '기본적으로 내부 창틀과 내부 창문 유리가 기본 청소 범위에 포함되며, 바깥쪽을 바라보는 외창 유리는 위험성과 구조에 따라 협의 후 진행됩니다.' },
      { q: '도배 직후인데 이사청소 예약해도 되나요?', a: '도배 시공 직후에는 벽지가 다 마를 때까지 다소 주의가 필요하지만, 벽지에 묻은 미세 도배풀과 먼지를 깔끔하게 닦는 작업은 이사 전에 반드시 하시는 것이 좋습니다.' },
      { q: '가전 내부 필터나 빌트인 세정도 가능한가요?', a: '기본 빌트인 가전의 외부 청소는 포함되나 냉장고, 오븐 등 가전 내부의 정밀 세척은 별도 추가 옵션으로 상담 시 포함 여부를 확인합니다.' }
    ],
    relatedServices: ['바닥청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 이사청소 생활오염 제거 및 고온 스팀 소독 - 모두종합환경',
    ctaHook: '이사청소 견적 받기',
    thumbnailImage: '/images/services/move-in-cleaning.jpg',
    ogImage: '/images/services/move-in-cleaning.jpg',
    altBase: '이사청소'
  },
  {
    serviceNameKo: '사무실청소',
    serviceSlug: 'office-cleaning',
    mainProblem: '업무 공간 내 쌓이는 미세 먼지, 탕비실 오염 및 바닥 찌든 때',
    targetPlaces: ['개인 사무실', '회의실', '탕비실', '임원실', '공용 복도'],
    contaminationTypes: ['책상 먼지', '탕비실 악취', '바닥 카펫 얼룩', '데코타일 찌든 오염'],
    preCheckItems: ['작업 중 PC 전원 종료 가능 여부', '탕비실 배수 상태', '수납 가구 내부 정리 수준'],
    estimateFactors: ['사무실 면적', '책상/집기 배치 상태', '바닥 오염도', '탕비실/화장실 포함 여부', '정기/일회성 여부'],
    faqSet: [
      { q: '{{지역명}} 사무실청소는 업무 시간이 끝난 뒤에도 상담 가능한가요?', a: '사무실 운영 시간, 면적, 집기 배치, 바닥 오염 상태를 확인해 작업 가능 시간과 범위를 안내합니다.' },
      { q: '책상과 집기가 많은 사무실도 청소가 가능한가요?', a: '집기 배치와 이동 가능 여부를 확인한 뒤 필요한 구역 중심으로 상담합니다.' },
      { q: '상담 전에 어떤 사진을 보내면 좋나요?', a: '사무실 전체 사진, 바닥 오염 상태, 탕비실이나 공용부 사진을 보내주시면 상담이 빠릅니다.' },
      { q: '사무실 청소 견적은 어떤 기준으로 달라지나요?', a: '면적, 청소 구역, 바닥 상태, 집기 이동 여부, 작업 시간대에 따라 달라질 수 있습니다.' },
      { q: '일회성 청소도 상담 가능한가요?', a: '정기 청소뿐 아니라 이전, 입주, 오염 정리 등 일회성 청소도 현장 조건에 따라 상담할 수 있습니다.' }
    ],
    relatedServices: ['바닥왁스코팅', '유리창청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 비즈니스 공간의 업무 효율을 높이는 쾌적하고 꼼꼼한 사무실청소 솔루션입니다.',
    ctaHook: '사무실 상태 상담받기',
    thumbnailImage: '/images/services/floor-wax.jpg',
    ogImage: '/images/services/floor-wax.jpg',
    altBase: '사무실청소 전문'
  },
  {
    serviceNameKo: '상가청소',
    serviceSlug: 'store-cleaning',
    mainProblem: '매장 통행로 바닥의 묵은 얼룩 및 쇼윈도 유리 물때',
    targetPlaces: ['로드숍 매장', '상업용 상가', '식당 홀', '의류점', '카페'],
    contaminationTypes: ['바닥 찌든 때', '유리 손자국', '출입구 먼지 얼룩', '영업 공간 내 기름기'],
    preCheckItems: ['진열 집기 이동 및 보양 요건', '작업 시간 내 매장 폐점 상태 여부', '유리창 스티커 제거 여부'],
    estimateFactors: ['매장 면적', '업종 특성', '바닥/유리 오염도', '집기 이동 여부', '영업시간 외 작업 가능 여부'],
    faqSet: [
      { q: '{{지역명}} 상가청소는 영업시간 외에도 상담 가능한가요?', a: '매장 운영 시간, 바닥과 유리 오염 상태, 집기 배치 등을 확인해 작업 가능 시간을 안내합니다.' },
      { q: '영업 중인 매장도 청소 범위를 나눌 수 있나요?', a: '출입구, 바닥, 유리, 집기 주변 등 필요한 구역만 나누어 상담할 수 있습니다.' },
      { q: '오픈 전 상가 청소도 가능한가요?', a: '공사 분진, 바닥 오염, 유리 얼룩, 집기 설치 상태를 확인해 필요한 청소 범위를 안내합니다.' },
      { q: '상담 전에 어떤 정보를 보내야 하나요?', a: '매장 사진, 오염 부위 사진, 대략적인 면적, 희망 작업 시간을 보내주시면 상담이 빠릅니다.' },
      { q: '상가 청소 견적은 어떻게 달라지나요?', a: '면적, 업종, 오염 상태, 집기 이동 여부, 영업시간 외 작업 여부에 따라 달라질 수 있습니다.' }
    ],
    relatedServices: ['유리창청소', '어닝청소', '간판청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 매장의 호감도를 높여 고객의 발길을 이끄는 청결한 상가청소 서비스입니다.',
    ctaHook: '상가 청소 상태 문의',
    thumbnailImage: '/images/services/window.jpg',
    ogImage: '/images/services/window.jpg',
    altBase: '상가청소 전문'
  },
  {
    serviceNameKo: '공장청소',
    serviceSlug: 'factory-cleaning',
    mainProblem: '작업장 바닥의 거친 기름때, 미세 분진 및 산업 폐기물 누적',
    targetPlaces: ['제조 공장', '가공 작업장', '부품 창고', '산업 단지 사옥'],
    contaminationTypes: ['찌든 기름때', '설비 미세 분진', '바닥 석고 가루', '금속 철가루 오염'],
    preCheckItems: ['기계 설비 보양 요구 조건', '고출력 기계용 전력 공급 상태', '용수 및 배수로 위치'],
    estimateFactors: ['공장 면적', '바닥 오염 정도', '분진/기름때 여부', '설비 주변 작업 가능 여부', '작업 시간대'],
    faqSet: [
      { q: '{{지역명}} 공장청소는 분진이나 기름때가 많은 현장도 상담 가능한가요?', a: '작업장 바닥, 설비 주변, 분진과 기름때 범위를 확인해 청소 가능 여부를 안내합니다.' },
      { q: '설비가 있는 공간도 청소 범위를 나눌 수 있나요?', a: '설비 주변 작업 가능 여부와 안전 동선을 확인한 뒤 가능한 범위 중심으로 상담합니다.' },
      { q: '공장 바닥 오염도 견적에 영향을 주나요?', a: '바닥 면적, 오염 누적 정도, 기름때 여부, 장비 사용 필요성에 따라 달라질 수 있습니다.' },
      { q: '작업 전 어떤 사진이 필요하나요?', a: '작업장 전체 사진, 바닥 오염 부위, 설비 주변, 출입 동선 사진을 보내주시면 상담이 빠릅니다.' },
      { q: '작업 시간은 어떻게 조율하나요?', a: '공장 운영 시간과 작업 동선을 고려해 가능한 시간대를 확인한 뒤 상담을 안내합니다.' }
    ],
    relatedServices: ['바닥청소', '외벽청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 산업 현장의 근로 환경 개선과 안전 사고를 예방하는 정밀 공장청소입니다.',
    ctaHook: '공장 상태 점검 상담',
    thumbnailImage: '/images/services/outer-wall.jpg',
    ogImage: '/images/services/outer-wall.jpg',
    altBase: '공장청소 전문'
  },
  {
    serviceNameKo: '건물청소',
    serviceSlug: 'building-cleaning',
    mainProblem: '로비, 복도, 계단 등 다수가 이용하는 공용 구역의 오염 누적',
    targetPlaces: ['빌딩 로비', '계단실', '공동 복도', '엘리베이터 내부', '건물 외부 통로'],
    contaminationTypes: ['계단 논슬립 때', '로비 대리석 얼룩', '외부 대기 오염 먼지', '빗물 얼룩'],
    preCheckItems: ['승강기 내부 보양 필요 확인', '소방 설비 오작동 예방 조치', '보행 통제 협조 안내문 부착'],
    estimateFactors: ['건물 규모', '층수', '공용부 범위', '외부/내부 포함 여부', '정기 관리 여부'],
    faqSet: [
      { q: '{{지역명}} 건물청소는 공용부만 따로 상담할 수 있나요?', a: '로비, 복도, 계단, 화장실 등 필요한 구역을 기준으로 청소 범위를 안내합니다.' },
      { q: '건물 전체가 아니라 일부 구역만 가능한가요?', a: '관리가 필요한 층, 공용부, 출입구, 외부 오염 상태를 확인해 구역별 상담이 가능합니다.' },
      { q: '정기 관리와 일회성 청소 모두 가능한가요?', a: '현장 상황에 따라 정기 관리 또는 일회성 청소 방향을 나누어 상담할 수 있습니다.' },
      { q: '건물청소 견적은 어떤 기준으로 달라지나요?', a: '건물 규모, 층수, 공용부 범위, 오염 상태, 작업 시간대에 따라 달라질 수 있습니다.' },
      { q: '상담 전 어떤 정보를 보내야 하나요?', a: '건물 외부와 공용부 사진, 청소가 필요한 구역, 대략적인 규모를 보내주시면 상담이 빠릅니다.' }
    ],
    relatedServices: ['바닥청소', '외벽청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 건물의 청결 상태를 복원하여 시설 가치를 보존하는 공용부 건물청소 솔루션입니다.',
    ctaHook: '건물 대청소 상담',
    thumbnailImage: '/images/services/floor-wax.jpg',
    ogImage: '/images/services/floor-wax.jpg',
    altBase: '건물청소 전문'
  },
  {
    serviceNameKo: '침수청소',
    serviceSlug: 'flood-cleaning',
    mainProblem: '누수 또는 폭우 침수로 인한 잔여 물기 고임, 앙금 침착 및 악취 발생',
    targetPlaces: ['지하 상가 매장', '침수 사무실', '지하 주차장', '단독 주택 지하'],
    contaminationTypes: ['역류 오염수', '흙탕물 앙금', '습기/곰팡이 얼룩', '부패 오염원'],
    preCheckItems: ['누전 위험 차단을 위한 전기 차단 확인', '침수 집기의 폐기 대상 목록 작성', '용수 공급 시설 가동 상태'],
    estimateFactors: ['침수 면적', '물 유입 깊이', '오염수 여부', '바닥재 상태', '폐기물 발생 여부', '건조 필요 여부'],
    faqSet: [
      { q: '{{지역명}} 침수청소는 바로 상담해야 하나요?', a: '물 유입 범위, 바닥 상태, 잔여 물기, 악취 여부를 확인해 정리 가능 범위를 안내합니다.' },
      { q: '침수 후 물기 제거만 필요한 경우도 가능한가요?', a: '현장 상태에 따라 물기 제거, 오염 정리, 폐기물 정리 등 필요한 범위를 나누어 상담합니다.' },
      { q: '오염수가 유입된 현장도 상담 가능한가요?', a: '오염수 여부, 악취, 바닥재 상태, 폐기물 발생 여부를 확인해 작업 가능 여부를 안내합니다.' },
      { q: '침수청소 견적은 어떤 기준으로 달라지나요?', a: '침수 면적, 물 유입 깊이, 오염 정도, 건조 필요 여부, 폐기물 양에 따라 달라질 수 있습니다.' },
      { q: '상담 전에 어떤 사진을 보내면 좋나요?', a: '물이 찬 범위, 바닥 상태, 벽면 오염, 폐기물 상태가 보이는 사진을 보내주시면 상담이 빠릅니다.' }
    ],
    relatedServices: ['특수청소', '바닥청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 지역 침수 수해 현장, 신속한 잔수 제거 and 정밀 소독으로 안전 복구를 지원합니다.',
    ctaHook: '침수 긴급 상담 요청',
    thumbnailImage: '/images/services/special-cleaning.jpg',
    ogImage: '/images/services/special-cleaning.jpg',
    altBase: '침수청소 및 복구'
  },
  {
    serviceNameKo: '창고청소',
    serviceSlug: 'warehouse-cleaning',
    mainProblem: '보관 공간 내 누적된 대량의 먼지 분진 및 바닥 타이어 자국 얼룩',
    targetPlaces: ['물류 창고', '원자재 보관고', '출고 하역장', '개인 보관 창고'],
    contaminationTypes: ['적재 랙 미세 먼지', '지게차 스키드 마크', '오일 누출 얼룩', '장기 고착 오염'],
    preCheckItems: ['랙에 보관 중인 잔여 물품 보양 처리', '대형 장비 진입로 확보', '작업 구역 전원 위치 확인'],
    estimateFactors: ['창고 면적', '적재물 이동 여부', '먼지/분진 정도', '바닥 오염 상태', '작업 가능 시간대'],
    faqSet: [
      { q: '{{지역명}} 창고청소는 적재물이 많은 현장도 상담 가능한가요?', a: '적재물 양, 이동 가능 여부, 바닥 오염 상태, 폐기물 여부를 확인해 청소 범위를 안내합니다.' },
      { q: '창고 바닥 먼지와 분진도 청소 가능한가요?', a: '먼지, 분진, 바닥 오염 정도와 작업 동선을 확인해 필요한 청소 방향을 안내합니다.' },
      { q: '폐기물 정리도 함께 가능한가요?', a: '폐기물 종류와 양, 분리 여부를 확인한 뒤 정리 가능 범위를 상담합니다.' },
      { q: '창고청소 견적은 어떤 기준으로 달라지나요?', a: '창고 면적, 적재물 양, 바닥 오염 상태, 폐기물 발생 여부, 작업 동선에 따라 달라질 수 있습니다.' },
      { q: '상담 전 어떤 정보를 보내야 하나요?', a: '창고 내부 전체 사진, 바닥 상태, 적재물과 폐기물 사진을 보내주시면 상담이 빠릅니다.' }
    ],
    relatedServices: ['바닥청소', '공장청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 물류 공간의 위생 상태를 개선하고 적재 효율을 높이는 창고청소 서비스입니다.',
    ctaHook: '창고 상태 확인 상담',
    thumbnailImage: '/images/services/outer-wall.jpg',
    ogImage: '/images/services/outer-wall.jpg',
    altBase: '창고청소 전문'
  },
  {
    serviceNameKo: '병원청소',
    serviceSlug: 'hospital-cleaning',
    mainProblem: '교차 감염 방지를 위한 엄격한 공간 살균 및 대기실 바닥 발자국 오염 제거',
    targetPlaces: ['진료실', '환자 대기실', '입원실', '물리치료실', '내부 화장실'],
    contaminationTypes: ['발자국 생활 오염', '의료용 냄새 흔적', '창틀 미세 먼지', '세균성 잔여 얼룩'],
    preCheckItems: ['의료 장비 및 특수 약품 보양 기준 협의', '작업 도중 출입 통제 필요 여부', '비영업일/비진료 일정 조율'],
    estimateFactors: ['병원 면적', '진료실/대기실/공용부 범위', '바닥 오염 상태', '작업 가능 시간대', '위생 관리 필요 범위'],
    faqSet: [
      { q: '{{지역명}} 병원청소는 진료 시간이 끝난 뒤에도 상담 가능한가요?', a: '병원 운영 시간, 청소 구역, 오염 상태를 확인해 작업 가능 일정과 범위를 안내합니다.' },
      { q: '병원 내부 전체를 한 번에 청소해야 하나요?', a: '진료실, 대기실, 복도, 화장실 등 필요한 구역만 나누어 상담할 수 있습니다.' },
      { q: '병원 청소 견적은 어떤 기준으로 달라지나요?', a: '면적, 청소 구역, 오염 상태, 작업 가능 시간대에 따라 달라질 수 있습니다.' },
      { q: '상담 전에 어떤 사진을 보내면 좋나요?', a: '청소가 필요한 공간 전체 사진과 오염이 심한 부분의 근접 사진을 보내주시면 상담이 빠릅니다.' },
      { q: '운영 중인 병원도 일정 조율이 가능한가요?', a: '진료 시간과 방문객 동선을 고려해 가능한 작업 시간대를 확인한 뒤 상담을 안내합니다.' }
    ],
    relatedServices: ['바닥청소', '유리창청소'],
    heroDescriptionTemplate: '{{displayNameKo}} 의료 공간의 청결함과 감염 안심 위생을 지키는 꼼꼼한 병원청소 서비스입니다.',
    ctaHook: '위생 상태 점검 상담',
    thumbnailImage: '/images/services/floor-wax.jpg',
    ogImage: '/images/services/floor-wax.jpg',
    altBase: '병원청소 전문'
  }
];
