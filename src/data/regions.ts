export interface Region {
  city: string;             // 시/도 (예: 서울)
  district: string;         // 구/시/군 (예: 강남구)
  subDistrict: string;      // 동/읍/면 (예: 역삼동)
  regionSlug: string;       // 시/도 슬러그 (예: seoul)
  districtSlug: string;     // 구 슬러그 (예: gangnam)
  subDistrictSlug: string;  // 동 슬러그 (예: yeoksam-dong)
  localDescription: string;
  buildingCharacteristics: string;
  priority: number;
  indexStatus: 'index' | 'noindex';
}

export const regions: Region[] = [
  // --- 강남구 ---
  {
    city: '서울', district: '강남구', subDistrict: '역삼동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'yeoksam-dong',
    localDescription: '테헤란로를 중심으로 대형 오피스 빌딩과 상권이 밀집된 강남의 핵심 업무 지구입니다.',
    buildingCharacteristics: '초고층 빌딩, 통유리 건물, 오피스 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '논현동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'nonhyeon-dong',
    localDescription: '가구거리와 맛집 거리가 형성되어 있으며 고급 주거지와 상업지가 공존하는 지역입니다.',
    buildingCharacteristics: '상가 건물, 중형 오피스, 고급 빌라',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '삼성동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'samseong-dong',
    localDescription: '코엑스와 현대차 GBC 등 대형 랜드마크 건물이 위치한 비즈니스의 중심지입니다.',
    buildingCharacteristics: '복합 쇼핑몰, 대형 빌딩, 호텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '청담동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'cheongdam-dong',
    localDescription: '명품 거리와 고급 갤러리, 연예 기획사 등이 밀집한 프리미엄 상권 지역입니다.',
    buildingCharacteristics: '명품 매장, 고급 갤러리, 고급 주택',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '대치동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'daechi-dong',
    localDescription: '대한민국 최대 규모의 학원가와 대단지 아파트가 밀집된 교육의 중심지입니다.',
    buildingCharacteristics: '학원 빌딩, 대단지 아파트, 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '신사동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'sinsa-dong',
    localDescription: '가로수길을 중심으로 트렌디한 매장과 부티크가 많은 패션과 문화의 거리입니다.',
    buildingCharacteristics: '트렌디 매장, 저층 상가 건물, 병원 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '압구정동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'apgujeong-dong',
    localDescription: '전통적인 부촌이자 현대백화점 등 프리미엄 소비 상권이 발달한 지역입니다.',
    buildingCharacteristics: '백화점, 고급 아파트, 성형외과 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '도곡동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'dogok-dong',
    localDescription: '타워팰리스 등 초고층 주상복합과 고급 아파트 단지가 형성된 주거 특화 지역입니다.',
    buildingCharacteristics: '초고층 주상복합, 고급 아파트',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '개포동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'gaepo-dong',
    localDescription: '최근 대규모 재건축을 통해 대단지 신축 아파트가 대거 들어선 주거 지역입니다.',
    buildingCharacteristics: '신축 아파트, 대단지 조경 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '수서동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'suseo-dong',
    localDescription: 'SRT 수서역과 역세권 개발로 유동인구가 급증하고 있는 교통의 요충지입니다.',
    buildingCharacteristics: '역세권 빌딩, 지식산업센터, 상가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 서초구 ---
  {
    city: '서울', district: '서초구', subDistrict: '서초동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'seocho-dong',
    localDescription: '법조타운과 정보사 부지 개발 등 행정과 업무가 결합된 지역입니다.',
    buildingCharacteristics: '법조 빌딩, 오피스, 아파트 단지',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '반포동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'banpo-dong',
    localDescription: '한강변 고급 아파트와 고속터미널 쇼핑몰이 위치한 핵심 거주 및 상업지입니다.',
    buildingCharacteristics: '고급 아파트, 쇼핑몰, 지하상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '잠원동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'jamwon-dong',
    localDescription: '한강 공원과 인접하며 재건축을 통한 신축 단지들이 많은 주거 중심지입니다.',
    buildingCharacteristics: '아파트, 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '방배동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'bangbae-dong',
    localDescription: '카페 골목과 서리풀 공원이 인접하며 조용한 고급 주택가가 발달한 지역입니다.',
    buildingCharacteristics: '고급 빌라, 연립 주택, 저층 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '양재동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'yangjae-dong',
    localDescription: 'IT 센터와 유통 센터가 많으며 시민의 숲과 양재천이 있는 쾌적한 구역입니다.',
    buildingCharacteristics: '유통 센터, IT 빌딩, 다가구 주택',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '우면동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'umyeon-dong',
    localDescription: 'R&D 센터와 신축 단지들이 조화를 이루는 자연 친화적 주거지입니다.',
    buildingCharacteristics: 'R&D 센터, 신축 아파트',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '내곡동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'naegok-dong',
    localDescription: '강남의 허파와 같은 녹지 비중이 높고 여유로운 주거 환경을 제공합니다.',
    buildingCharacteristics: '전원 주택, 저층 아파트',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 송파구 ---
  {
    city: '서울', district: '송파구', subDistrict: '잠실동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'jamsil-dong',
    localDescription: '롯데타워와 석촌호수, 대단지 아파트가 위치한 송파의 중심지입니다.',
    buildingCharacteristics: '초고층 빌딩, 대단지 아파트, 테마파크',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '문정동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'munjeong-dong',
    localDescription: '법조단지와 지식산업센터가 밀집하여 거대한 업무 지구를 형성하고 있습니다.',
    buildingCharacteristics: '지식산업센터, 법조 빌딩, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '가락동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'garak-dong',
    localDescription: '농수산물 시장과 함께 아파트 단지와 상업 시설이 균형 있게 발달했습니다.',
    buildingCharacteristics: '시장 시설, 아파트, 상가 건물',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '방이동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'bangi-dong',
    localDescription: '올림픽 공원과 인접하며 대규모 먹자골목과 주거지가 형성되어 있습니다.',
    buildingCharacteristics: '먹자골목 상가, 아파트, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '석촌동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'seokchon-dong',
    localDescription: '석촌호수 카페거리와 빌라촌이 어우러진 조용하고 살기 좋은 지역입니다.',
    buildingCharacteristics: '카페 상가, 다세대 주택',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '송파동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'songpa-dong',
    localDescription: '송리단길로 불리는 골목 상권이 핫하게 떠오른 주거와 문화의 공존지입니다.',
    buildingCharacteristics: '골목 상가, 아파트',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '오금동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'ogeum-dong',
    localDescription: '성내천과 오금공원이 있어 주거 만족도가 높은 쾌적한 주거지입니다.',
    buildingCharacteristics: '아파트 단지, 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '장지동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'jangji-dong',
    localDescription: '가든파이브와 위례신도시 초입에 위치한 유통과 주거의 거점입니다.',
    buildingCharacteristics: '대형 복합몰, 신축 아파트',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 강동구 ---
  {
    city: '서울', district: '강동구', subDistrict: '천호동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'cheonho-dong',
    localDescription: '강동구 최대 상권인 로데오 거리와 백화점이 있는 유통의 중심입니다.',
    buildingCharacteristics: '백화점, 로데오 상가, 시장',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '성내동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'seongnae-dong',
    localDescription: '강동구청과 관공서가 위치하며 올림픽 공원과 인접한 주거지입니다.',
    buildingCharacteristics: '관공서 빌딩, 상가, 아파트',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '길동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'gil-dong',
    localDescription: '먹자골목과 함께 다양한 상업 시설이 발달한 강동의 부도심 지역입니다.',
    buildingCharacteristics: '상가 빌딩, 주택가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '둔촌동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'dunchon-dong',
    localDescription: '역대급 규모의 재건축 단지인 올림픽파크 포레온이 위치한 주거 대단지입니다.',
    buildingCharacteristics: '대단지 아파트, 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '암사동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'amsa-dong',
    localDescription: '선사 유적지가 있는 역사적인 곳이며 조용한 아파트 단지가 많은 지역입니다.',
    buildingCharacteristics: '아파트, 전통 시장',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '명일동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'myeongil-dong',
    localDescription: '대단지 아파트와 학원가가 잘 형성되어 있어 교육 환경이 우수한 지역입니다.',
    buildingCharacteristics: '아파트, 학원 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '고덕동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'godeok-dong',
    localDescription: '고덕비즈밸리 개발과 대규모 신축 아파트 단지로 변모한 신흥 중심지입니다.',
    buildingCharacteristics: '신축 아파트, 지식산업센터',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '상일동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'sangil-dong',
    localDescription: '첨단 업무 단지와 신축 아파트들이 조화를 이루는 살기 좋은 지역입니다.',
    buildingCharacteristics: '업무 단지, 아파트',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 구 단위 요약 데이터 (인덱싱 대상) ---
  {
    city: '서울', district: '강남구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'all',
    localDescription: '강남구는 역삼동, 삼성동, 논현동, 청담동을 가로지르는 테헤란로와 대로변을 중심으로 대형 사무용 빌딩, 전문 병원, 학원, 프랜차이즈 상가가 밀집된 대한민국 비즈니스의 심장부입니다. 유동인구가 많고 차량 통행량이 풍부하여 대로변 분진과 외벽 오염 관리가 특히 중요한 지역입니다.',
    buildingCharacteristics: '대형 오피스 빌딩, 전문 병원 및 메디컬 타워, 대규모 학원가, 대로변 상업용 건물',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서초구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'all',
    localDescription: '서초구는 서초동 법조타운, 반포동 프리미엄 주거단지, 방배동 상권이 조화를 이루는 지역으로 전문직 사무실, 대형 병원, 고급 교육 시설이 발달해 있습니다. 건물의 신뢰도를 높여주는 깨끗한 유리창과 내부 공간의 청결 유지가 입주사들의 주요 관심사인 지역입니다.',
    buildingCharacteristics: '법조 관련 사무실, 대형 병원 빌딩, 고급 상가 및 학원 시설, 신축 아파트 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'all',
    localDescription: '송파구는 잠실권의 대형 랜드마크 상업 시설부터 문정동 법조단지 내 지식산업센터, 가락동의 유통 상권까지 다양한 형태의 대형 건물이 밀집해 있습니다. 오피스텔과 대규모 상가가 결합된 복합 건물이 많아 복합적인 종합 청소 솔루션이 필요한 현장이 대다수입니다.',
    buildingCharacteristics: '잠실/문정/가락동 대형 건물, 지식산업센터(오피스텔), 유통/상가 복합 시설, 대단지 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'all',
    localDescription: '강동구는 천호동 로데오 거리를 비롯해 성내동, 길동의 전통적인 상권과 고덕/상일동의 신흥 업무지구가 공존하는 활발한 지역입니다. 주거와 상업이 혼합된 건물이 많으며, 특히 음식점 및 일반 상가의 후드, 어닝, 유리창 등 외부 노출부의 정기 관리가 활발합니다.',
    buildingCharacteristics: '천호/성내/길동 로데오 상가, 음식점 밀집 상권, 주거·상업 혼합 빌딩, 신흥 비즈니스 밸리',
    priority: 1, indexStatus: 'index'
  },
];
