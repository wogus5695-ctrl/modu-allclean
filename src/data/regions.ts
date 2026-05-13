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

  // --- 마포구 ---
  {
    city: '서울', district: '마포구', subDistrict: '서교동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'seogyo-dong',
    localDescription: '홍대입구역을 중심으로 젊은 층이 밀집하며 개성 있는 상가와 카페가 많습니다.',
    buildingCharacteristics: '디자인 빌딩, 저층 상가, 카페 건물',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '공덕동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'gongdeok-dong',
    localDescription: '주요 오피스 타운과 주거 단지가 조화를 이루는 마포의 비즈니스 중심지입니다.',
    buildingCharacteristics: '대형 오피스 빌딩, 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '상암동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'sangam-dong',
    localDescription: '방송사와 IT 기업이 밀집한 DMC 단지가 위치한 디지털 미디어 거점입니다.',
    buildingCharacteristics: '방송사 빌딩, IT 타워, 오피스',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '합정동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'hapjeong-dong',
    localDescription: '메세나폴리스 등 랜드마크 상업 시설과 세련된 상권이 발달한 지역입니다.',
    buildingCharacteristics: '주상복합 상가, 카페 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '연남동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'yeonnam-dong',
    localDescription: '경의선 숲길을 따라 형성된 연트럴파크 상권으로 유명한 문화 거리입니다.',
    buildingCharacteristics: '노후 주택 개조 상가, 저층 빌딩',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 영등포구 ---
  {
    city: '서울', district: '영등포구', subDistrict: '여의도동',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'yeouido-dong',
    localDescription: '대한민국 금융의 중심지이자 국회의사당 등 주요 관공서가 밀집한 섬 지역입니다.',
    buildingCharacteristics: '금융 빌딩, IFC몰, 파크원, 고층 오피스',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '영등포구', subDistrict: '당산동',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'dangsan-dong',
    localDescription: '교통의 요충지이자 오피스텔과 상업 시설이 발달한 역세권 중심지입니다.',
    buildingCharacteristics: '지식산업센터, 오피스텔 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '영등포구', subDistrict: '문래동',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'mullae-dong',
    localDescription: '철공소 거리와 예술촌, 그리고 대형 지식산업센터가 공존하는 독특한 지역입니다.',
    buildingCharacteristics: '지식산업센터, 리모델링 카페, 공장형 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '영등포구', subDistrict: '영등포동',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'yeongdeungpo-dong',
    localDescription: '타임스퀘어 등 대형 복합 쇼핑몰과 전통 상권이 어우러진 서울 서남권의 요충지입니다.',
    buildingCharacteristics: '백화점, 복합 쇼핑몰, 상업용 빌딩',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 용산구 ---
  {
    city: '서울', district: '용산구', subDistrict: '한남동',
    regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'hannam-dong',
    localDescription: '대사관로와 한남더힐 등 고급 주거지와 힙한 상권이 공존하는 프리미엄 지역입니다.',
    buildingCharacteristics: '고급 주택, 갤러리 상가, 부티크 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '용산구', subDistrict: '이촌동',
    regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'ichon-dong',
    localDescription: '전통적인 부촌이자 한강공원과 인접하여 쾌적한 주거 환경을 갖춘 지역입니다.',
    buildingCharacteristics: '아파트 단지, 상가 건물',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '용산구', subDistrict: '이태원동',
    regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'itaewon-dong',
    localDescription: '다양한 국적의 문화와 미식이 공존하는 서울의 대표적인 관광 및 상권 지구입니다.',
    buildingCharacteristics: '이색 상가, 클럽/펍 빌딩, 노후 건물',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '용산구', subDistrict: '용산동',
    regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'yongsan-dong',
    localDescription: '용산역 주변 정비사업으로 초고층 주상복합이 대거 들어선 신흥 비즈니스 타운입니다.',
    buildingCharacteristics: '초고층 주상복합, 대형 빌딩, 호텔',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 성동구 ---
  {
    city: '서울', district: '성동구', subDistrict: '성수동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'seongsu-dong',
    localDescription: '공장 지대에서 힙한 문화 공간으로 변모한 서울의 대표적 트렌드 중심지입니다.',
    buildingCharacteristics: '지식산업센터, 붉은 벽돌 건물, 팝업 스토어',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '왕십리동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'wangsimni-dong',
    localDescription: '쿼드러플 역세권으로 유동인구가 매우 많으며 상업 시설이 고도로 발달했습니다.',
    buildingCharacteristics: '복합 역사 빌딩, 오피스텔, 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '옥수동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'oksu-dong',
    localDescription: '강남 접근성이 뛰어나며 산과 한강이 어우러진 쾌적한 아파트 단지 밀집 지역입니다.',
    buildingCharacteristics: '아파트 상가, 주택가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 광진구 ---
  {
    city: '서울', district: '광진구', subDistrict: '화양동',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'hwayang-dong',
    localDescription: '건국대 상권을 중심으로 젊은 층의 유동인구가 폭발적인 활기찬 지역입니다.',
    buildingCharacteristics: '대학가 상가, 병원 빌딩, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '광진구', subDistrict: '구의동',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'guui-dong',
    localDescription: '동서울터미널과 광진구청이 위치한 교통과 행정의 요충지입니다.',
    buildingCharacteristics: '터미널 빌딩, 행정 시설, 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '광진구', subDistrict: '자양동',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'jayang-dong',
    localDescription: '한강변을 따라 대단지 아파트와 양꼬치 거리 등 특색 있는 상권이 발달했습니다.',
    buildingCharacteristics: '아파트 상가, 이색 상권 건물',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 성북구 ---
  {
    city: '서울', district: '성북구', subDistrict: '정릉동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'jeongneung-dong',
    localDescription: '북한산 자락의 쾌적한 자연 환경과 주택가가 조화를 이루는 주거 지역입니다.',
    buildingCharacteristics: '아파트, 다세대 주택, 저층 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성북구', subDistrict: '길음동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'gireum-dong',
    localDescription: '뉴타운 개발을 통해 대규모 신축 아파트 단지가 형성된 주거 밀집 구역입니다.',
    buildingCharacteristics: '신축 아파트, 대형 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성북구', subDistrict: '돈암동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'donam-dong',
    localDescription: '성신여대 상권을 기반으로 활발한 상업 활동이 이루어지는 주거·교육 중심지입니다.',
    buildingCharacteristics: '대학 상권 상가, 학원 빌딩',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 종로구 ---
  {
    city: '서울', district: '종로구', subDistrict: '사직동',
    regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'sajik-dong',
    localDescription: '정부서울청사와 주요 관공서가 위치한 대한민국 행정의 상징적 구역입니다.',
    buildingCharacteristics: '관공서 빌딩, 오피스, 전통 가옥',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '종로구', subDistrict: '평창동',
    regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'pyeongchang-dong',
    localDescription: '예술가들의 작업실과 갤러리가 많은 서울의 대표적 고급 주택 단지입니다.',
    buildingCharacteristics: '고급 주택, 갤러리, 저층 건물',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '종로구', subDistrict: '혜화동',
    regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'hyehwa-dong',
    localDescription: '대학로 연극 거리와 낙산 공원이 인접한 문화와 예술의 중심지입니다.',
    buildingCharacteristics: '공연장 빌딩, 소극장 상가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 중구 ---
  {
    city: '서울', district: '중구', subDistrict: '명동',
    regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'myeong-dong',
    localDescription: '서울 최대의 관광 및 쇼핑 특구로 유동인구가 가장 많은 지역 중 하나입니다.',
    buildingCharacteristics: '쇼핑몰 빌딩, 호텔, 대로변 대형 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '중구', subDistrict: '을지로동',
    regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'euljiro-dong',
    localDescription: '인쇄/공구 상가에서 힙한 카페와 바가 공존하는 힙지로로 변모한 구역입니다.',
    buildingCharacteristics: '노후 오피스, 산업용 빌딩, 리모델링 건물',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '중구', subDistrict: '신당동',
    regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'sindang-dong',
    localDescription: '패션 유통의 메카인 동대문 시장과 인접하여 물류와 상업이 발달한 지역입니다.',
    buildingCharacteristics: '의류 유통 빌딩, 전통 시장, 아파트',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 동작구 ---
  {
    city: '서울', district: '동작구', subDistrict: '상도동',
    regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'sangdo-dong',
    localDescription: '중앙대, 숭실대가 인접하며 대단지 아파트가 밀집된 교육·주거 지역입니다.',
    buildingCharacteristics: '아파트 단지, 대학 상권 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '동작구', subDistrict: '노량진동',
    regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'noryangjin-dong',
    localDescription: '국내 최대의 수산시장과 고시 학원가가 공존하는 활력 넘치는 구역입니다.',
    buildingCharacteristics: '학원 빌딩, 수산시장 시설, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '동작구', subDistrict: '사당동',
    regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'sadang-dong',
    localDescription: '수도권 남부 교통의 허브로 유동인구가 매우 많고 상권이 발달한 지역입니다.',
    buildingCharacteristics: '광역 버스 거점 빌딩, 먹자골목 상가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 관악구 ---
  {
    city: '서울', district: '관악구', subDistrict: '신림동',
    regionSlug: 'seoul', districtSlug: 'gwanak', subDistrictSlug: 'sillim-dong',
    localDescription: '1인 가구가 전국에서 가장 많이 밀집한 지역 중 하나로 활발한 소형 주거 타운입니다.',
    buildingCharacteristics: '원룸 빌딩, 소형 오피스텔, 대학가 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '관악구', subDistrict: '봉천동',
    regionSlug: 'seoul', districtSlug: 'gwanak', subDistrictSlug: 'bongcheon-dong',
    localDescription: '샤로수길을 중심으로 트렌디한 상권이 형성된 신흥 문화·주거 거점입니다.',
    buildingCharacteristics: '트렌디 상가, 주택가, 오피스',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 강서구 ---
  {
    city: '서울', district: '강서구', subDistrict: '마곡동',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'magok-dong',
    localDescription: '대기업 R&D 센터와 신축 오피스가 대거 들어선 서울의 새로운 4차 산업 거점입니다.',
    buildingCharacteristics: '대형 R&D 센터, 신축 지식산업센터, 오피스 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강서구', subDistrict: '화곡동',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'hwagok-dong',
    localDescription: '전통적인 대규모 주거 단지로 상권과 생활 편의시설이 밀집된 지역입니다.',
    buildingCharacteristics: '빌라촌, 전통 시장 상가, 중형 빌딩',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 양천구 ---
  {
    city: '서울', district: '양천구', subDistrict: '목동',
    regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'mok-dong',
    localDescription: '대한민국 대표 학원가와 방송국, 대단지 아파트가 위치한 교육 특화 구역입니다.',
    buildingCharacteristics: '학원 빌딩, 방송사 타워, 백화점, 대단지 아파트',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '양천구', subDistrict: '신정동',
    regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'sinjeong-dong',
    localDescription: '목동과 인접하며 주택가와 법조 시설이 발달한 안정적인 주거 지역입니다.',
    buildingCharacteristics: '관공서 빌딩, 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 노원구 ---
  {
    city: '서울', district: '노원구', subDistrict: '상계동',
    regionSlug: 'seoul', districtSlug: 'nowon', subDistrictSlug: 'sanggye-dong',
    localDescription: '동북권 최대의 주거 단지로 광활한 아파트 숲과 학원 상권이 형성되어 있습니다.',
    buildingCharacteristics: '대형 아파트 단지, 상계동 중심 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '노원구', subDistrict: '중계동',
    regionSlug: 'seoul', districtSlug: 'nowon', subDistrictSlug: 'junggye-dong',
    localDescription: '은행사거리를 중심으로 강북 최대 규모의 학원가가 발달한 교육 요충지입니다.',
    buildingCharacteristics: '학원 빌딩, 근린 상가, 아파트',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 은평구 ---
  {
    city: '서울', district: '은평구', subDistrict: '불광동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'bulgwang-dong',
    localDescription: '북한산 국립공원의 입구이자 전통 상권과 주택가가 어우러진 지역입니다.',
    buildingCharacteristics: 'NC백화점, 전통 시장, 주거용 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '응암동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'eungam-dong',
    localDescription: '불광천을 중심으로 쾌적한 산책로와 상권이 형성된 주거 밀집지입니다.',
    buildingCharacteristics: '아파트 상가, 이마트 등 대형 마트',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 서대문구 ---
  {
    city: '서울', district: '서대문구', subDistrict: '신촌동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'sinchon-dong',
    localDescription: '연세대, 이화여대 등 주요 대학이 위치한 서울의 대표적 대학 상권 구역입니다.',
    buildingCharacteristics: '대학교 캠퍼스, 대형 병원, 대학가 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '연희동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'yeonhui-dong',
    localDescription: '전통적인 부촌이자 이색 맛집과 카페가 많은 조용하고 세련된 주거지입니다.',
    buildingCharacteristics: '고급 주택, 카페 빌딩, 저층 건물',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 동대문구 ---
  {
    city: '서울', district: '동대문구', subDistrict: '장안동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'jangan-dong',
    localDescription: '자동차 매매 시장과 대규모 주거 단지가 공존하며 물류와 생활이 조화로운 곳입니다.',
    buildingCharacteristics: '자동차 전시장, 대단지 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '청량리동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'cheongnyangni-dong',
    localDescription: '동북권 교통의 허브로 대규모 정비사업을 통해 초고층 빌딩들이 들어서고 있습니다.',
    buildingCharacteristics: '초고층 주상복합, 전통 시장, 역세권 빌딩',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 중랑구 ---
  {
    city: '서울', district: '중랑구', subDistrict: '면목동',
    regionSlug: 'seoul', districtSlug: 'jungnang', subDistrictSlug: 'myeonmok-dong',
    localDescription: '주택 밀집 지역으로 생활 편의시설이 잘 갖추어진 안락한 주거 타운입니다.',
    buildingCharacteristics: '다가구 주택, 소형 빌딩, 시장 상권',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '중랑구', subDistrict: '상봉동',
    regionSlug: 'seoul', districtSlug: 'jungnang', subDistrictSlug: 'sangbong-dong',
    localDescription: '엔터식스, 홈플러스 등 대형 상업 시설과 교통 요충지가 결합된 지역입니다.',
    buildingCharacteristics: '대형 마트 빌딩, 주상복합, 상가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 구로구 ---
  {
    city: '서울', district: '구로구', subDistrict: '구로동',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'guro-dong',
    localDescription: 'G밸리(구로디지털단지)를 중심으로 IT 기업과 벤처 빌딩이 밀집한 곳입니다.',
    buildingCharacteristics: '대형 IT 타워, 지식산업센터, 업무용 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '구로구', subDistrict: '신도림동',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'sindorim-dong',
    localDescription: '디큐브시티 등 대규모 복합 시설과 오피스가 밀집한 교통/상업의 요지입니다.',
    buildingCharacteristics: '복합 문화 시설, 고층 오피스텔 상가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 금천구 ---
  {
    city: '서울', district: '금천구', subDistrict: '가산동',
    regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'gasan-dong',
    localDescription: '가산디지털단지를 중심으로 거대한 아울렛 상권과 지식산업센터가 밀집해 있습니다.',
    buildingCharacteristics: '대규모 지식산업센터, 패션 아울렛 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '금천구', subDistrict: '독산동',
    regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'doksan-dong',
    localDescription: '군부대 부지 개발을 통해 미니신도시급 주거단지가 들어선 변화의 중심입니다.',
    buildingCharacteristics: '신축 주상복합, 대형 상가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 도봉구 ---
  {
    city: '서울', district: '도봉구', subDistrict: '창동',
    regionSlug: 'seoul', districtSlug: 'dobong', subDistrictSlug: 'chang-dong',
    localDescription: '창동 아레나 개발 등 동북권 문화/경제의 새로운 거점으로 도약 중인 지역입니다.',
    buildingCharacteristics: '대형 상권 빌딩, 아파트 단지',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '도봉구', subDistrict: '쌍문동',
    regionSlug: 'seoul', districtSlug: 'dobong', subDistrictSlug: 'ssangmun-dong',
    localDescription: '정겨운 골목 상권과 평온한 주거 환경이 어우러진 살기 좋은 주거지입니다.',
    buildingCharacteristics: '저층 빌라 상가, 시장 건물',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 강북구 ---
  {
    city: '서울', district: '강북구', subDistrict: '미아동',
    regionSlug: 'seoul', districtSlug: 'gangbuk', subDistrictSlug: 'mia-dong',
    localDescription: '대규모 미아뉴타운과 현대백화점 등 유통 시설이 조화를 이루는 주거 거점입니다.',
    buildingCharacteristics: '백화점, 대형 아파트 상가, 빌라',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강북구', subDistrict: '수유동',
    regionSlug: 'seoul', districtSlug: 'gangbuk', subDistrictSlug: 'suyu-dong',
    localDescription: '강북권 최대의 밤거리 상권과 행정 시설이 밀집한 유동인구 요충지입니다.',
    buildingCharacteristics: '상가 밀집 빌딩, 관공서',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 구 단위 요약 데이터 (인덱싱 대상) ---
  {
    city: '서울', district: '강남구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'all',
    localDescription: '강남구는 역삼동, 삼성동, 논현동, 청담동을 가로지르는 테헤란로와 대로변을 중심으로 대형 사무용 빌딩, 전문 병원, 학원, 프랜차이즈 상가가 밀집된 대한민국 비즈니스의 심장부입니다.',
    buildingCharacteristics: '대형 오피스 빌딩, 전문 병원 및 메디컬 타워, 대규모 학원가, 대로변 상업용 건물',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서초구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'all',
    localDescription: '서초구는 서초동 법조타운, 반포동 프리미엄 주거단지, 방배동 상권이 조화를 이루는 지역으로 전문직 사무실, 대형 병원, 고급 교육 시설이 발달해 있습니다.',
    buildingCharacteristics: '법조 관련 사무실, 대형 병원 빌딩, 고급 상가 및 학원 시설, 신축 아파트 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'all',
    localDescription: '송파구는 잠실권의 대형 랜드마크 상업 시설부터 문정동 법조단지 내 지식산업센터까지 다양한 형태의 대형 건물이 밀집해 있는 비즈니스 요충지입니다.',
    buildingCharacteristics: '잠실/문정 대형 건물, 지식산업센터, 유통/상가 복합 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '마포구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'all',
    localDescription: '마포구는 공덕의 비즈니스 오피스, 상암 DMC의 미디어 타운, 홍대/연남의 힙한 상권이 조화를 이루는 지역으로 건물의 창의적 디자인과 투명한 유리창 관리가 매우 중요합니다.',
    buildingCharacteristics: '방송사/IT 빌딩, 디자인 상가 건물, 대형 오피스',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '영등포구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'all',
    localDescription: '영등포구는 금융의 중심 여의도부터 지식산업센터가 밀집한 당산/문래, 대형 쇼핑몰의 영등포동까지 폭넓은 스펙트럼의 전문 청소 솔루션이 필요한 지역입니다.',
    buildingCharacteristics: '금융가 고층 오피스, 지식산업센터, 대형 쇼핑몰 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '용산구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'all',
    localDescription: '용산구는 한남동의 프리미엄 주택가부터 이태원의 개성 있는 상권, 용산역 주변의 최첨단 주상복합 빌딩까지 서울의 중심에서 다양한 청소 현장을 보유하고 있습니다.',
    buildingCharacteristics: '프리미엄 주거 상가, 이색 문화 건물, 초고층 주상복합',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'all',
    localDescription: '성동구는 성수동 지식산업센터와 세련된 팝업스토어, 왕십리의 복합 역사 등 젊고 활기찬 에너지가 넘치는 상업 시설이 밀집하여 정기적인 관리가 필수적인 지역입니다.',
    buildingCharacteristics: '지식산업센터, 붉은 벽돌 개조 상가, 복합 상업 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '광진구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'all',
    localDescription: '광진구는 건대 입구의 대형 상권과 동서울터미널 주변의 유동인구가 많은 빌딩들, 한강변 아파트 상가 등 청결이 곧 매출로 이어지는 중요한 영업 현장들이 많습니다.',
    buildingCharacteristics: '대학가 대형 상가, 교통 거점 빌딩, 한강변 주거 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'all',
    localDescription: '성북구는 정릉/길음의 대규모 주거 단지와 성신여대 주변 상권, 그리고 수많은 교육 기관들이 위치하여 정숙하고 깔끔한 실내외 환경 관리가 중요한 지역입니다.',
    buildingCharacteristics: '뉴타운 대단지 상가, 교육 기관 빌딩, 대학 상권 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '종로구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'all',
    localDescription: '종로구는 대한민국 행정과 역사의 중심지로 주요 관공서, 대사관, 오피스 빌딩들이 밀집해 있으며 건물의 위엄과 청결을 유지하기 위한 전문적인 관리가 요구됩니다.',
    buildingCharacteristics: '국가 주요 관공서, 고층 오피스 빌딩, 전통 및 현대 복합 건물',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '중구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'all',
    localDescription: '중구는 명동의 관광 특구, 을지로의 오피스 타운, 동대문 패션 유통 단지 등 서울의 도심 업무 중심지로 전문적이고 신속한 청소 솔루션 수요가 가장 높은 지역입니다.',
    buildingCharacteristics: '관광지 대형 쇼핑몰, 호텔, 패션 유통 빌딩, 업무용 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동작구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'all',
    localDescription: '동작구는 노량진의 학원가와 수산시장, 상도의 주거 타운, 사당의 교통 거점 등 다양한 성격의 건물이 위치하여 맞춤형 청소 관리가 필수적입니다.',
    buildingCharacteristics: '교육 시설 빌딩, 교통 요지 대형 상가, 주거 단지 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '관악구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gwanak', subDistrictSlug: 'all',
    localDescription: '관악구는 신림/봉천의 대규모 1인 가구 주거 시설과 서울대 주변의 연구/교육 시설, 테크노밸리 등 소형부터 대형까지 폭넓은 작업 스펙트럼을 보유하고 있습니다.',
    buildingCharacteristics: '원룸/오피스텔 빌딩, 교육 연구 시설, 신흥 비즈니스 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강서구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'all',
    localDescription: '강서구는 마곡 지구의 첨단 R&D 센터들과 화곡동의 전통 주거 상권이 어우러진 지역으로 대형 유리창과 공장형 사무실 등 특수 청소 수요가 높은 지역입니다.',
    buildingCharacteristics: '최첨단 R&D 센터, 신축 지식산업센터, 대규모 주거 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '양천구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'all',
    localDescription: '양천구는 목동의 교육 특구와 방송국들이 밀집한 지역으로 미세먼지에 민감한 학원 시설과 업무용 빌딩의 쾌적한 실내 환경 관리가 매우 중요합니다.',
    buildingCharacteristics: '방송사 타워, 대규모 학원 빌딩, 백화점 및 오피스',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '노원구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'nowon', subDistrictSlug: 'all',
    localDescription: '노원구는 동북권 최대 주거 밀집지로 상계/중계동의 대규모 아파트 단지 상가와 수많은 학원 건물의 위생 관리가 생활 만족도의 핵심인 지역입니다.',
    buildingCharacteristics: '대규모 아파트 단지 상가, 교육 전문 빌딩, 의료 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '은평구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'all',
    localDescription: '은평구는 불광/응암동의 대규모 주거지와 연신내 상권 등 서울 서북권의 핵심 생활권으로 친환경 세제를 활용한 건강한 주거 상업 공간 관리가 특징입니다.',
    buildingCharacteristics: '대형 마트/백화점, 주거 밀집 상가, 행정 지원 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'all',
    localDescription: '서대문구는 신촌의 대학 상권과 홍제/연희동의 전통 주거지가 공존하며, 특히 교육 기관과 의료 시설의 정밀 청소 솔루션에 대한 요구가 높습니다.',
    buildingCharacteristics: '대학 캠퍼스 부속 건물, 의료 센터, 주택가 거점 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'all',
    localDescription: '동대문구는 청량리의 유통 거점과 장안동의 상업 지구, 회기/이문의 교육 지구가 만나 복합적인 환경 개선이 필요한 역동적인 지역입니다.',
    buildingCharacteristics: '유통 시설 타워, 전통 시장 복합 빌딩, 대학가 상업 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '중랑구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'jungnang', subDistrictSlug: 'all',
    localDescription: '중랑구는 면목/상봉동의 대규모 주거 단지와 코스트코 등 대형 유통 시설이 위치하여 상시적인 청결 유지와 신속한 방문 서비스가 선호되는 지역입니다.',
    buildingCharacteristics: '대형 유통 창고 빌딩, 주거 밀집 구역 상가, 역세권 오피스텔',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'all',
    localDescription: '강동구는 천호동의 활발한 상권과 고덕/상일동의 신흥 비즈니스 밸리가 만나 서울 동부권의 새로운 경제 거점으로 성장 중인 지역입니다.',
    buildingCharacteristics: '로데오 거리 상가 빌딩, 신축 지산업센터, 대단지 복합 상업 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '구로구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'all',
    localDescription: '구로구는 서울의 디지털 산업 심장부인 G밸리와 신도림의 대형 복합 시설이 위치하여 최첨단 오피스 환경 관리에 특화된 솔루션이 필요한 곳입니다.',
    buildingCharacteristics: 'IT 타워 및 지식산업센터, 복합 쇼핑몰 오피스, 산업 단지 지원 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '금천구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'all',
    localDescription: '금천구는 가산디지털단지의 수많은 지식산업센터와 대형 아울렛 건물들이 밀집하여 효율적이고 체계적인 정기 청소 관리 수요가 집중된 지역입니다.',
    buildingCharacteristics: '수도권 최대 지식산업센터 밀집 빌딩, 대형 유통 아울렛 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '도봉구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'dobong', subDistrictSlug: 'all',
    localDescription: '도봉구는 창동의 대규모 복합 문화 정비사업과 도봉/쌍문동의 조용하고 안정적인 주거 지역이 공존하며 정직하고 꼼꼼한 청소 서비스가 높게 평가받는 지역입니다.',
    buildingCharacteristics: '문화 복합 예정 시설 상가, 주거 밀집 구역 빌딩, 자연 친화적 주거 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강북구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangbuk', subDistrictSlug: 'all',
    localDescription: '강북구는 미아/수유동을 중심으로 한 대규모 유동인구 상권과 북한산 주변의 주택가가 조화를 이루며, 특히 많은 인파가 몰리는 상업 건물의 철저한 위생 관리가 핵심입니다.',
    buildingCharacteristics: '백화점 및 대형 유통 상가, 수유동 밀집 상권 빌딩, 주거 중심 근린 시설',
    priority: 1, indexStatus: 'index'
  },
];
