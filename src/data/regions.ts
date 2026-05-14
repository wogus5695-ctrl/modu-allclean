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
    localDescription: '테헤란로 업무 지구의 중심지로 대형 빌딩과 상권이 밀집해 있습니다.',
    buildingCharacteristics: '초고층 오피스 빌딩, 통유리 건물, 대형 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '논현동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'nonhyeon-dong',
    localDescription: '가구거리와 맛집 거리가 조화를 이루는 강남의 대표적 상권입니다.',
    buildingCharacteristics: '중형 오피스, 근린 상가, 고급 빌라',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '삼성동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'samseong-dong',
    localDescription: '코엑스와 GBC 등 국제 업무의 중심지이자 랜드마크 건물이 많습니다.',
    buildingCharacteristics: '복합 쇼핑몰, 대형 빌딩, 호텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '대치동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'daechi-dong',
    localDescription: '전국 최대 규모의 학원가와 대단지 아파트가 위치한 교육 중심지입니다.',
    buildingCharacteristics: '학원 빌딩, 대단지 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '신사동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'sinsa-dong',
    localDescription: '가로수길과 압구정역 주변의 트렌디한 매장과 병원 빌딩이 밀집해 있습니다.',
    buildingCharacteristics: '트렌디 매장, 성형외과 빌딩, 저층 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '압구정동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'apgujeong-dong',
    localDescription: '전통적인 부촌이자 프리미엄 상권이 발달한 명품 주거 타운입니다.',
    buildingCharacteristics: '백화점, 고급 아파트, 명품 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '청담동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'cheongdam-dong',
    localDescription: '명품 거리와 갤러리, 고급 주거지가 어우러진 하이엔드 상권입니다.',
    buildingCharacteristics: '갤러리 빌딩, 명품 매장, 고급 주택',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '도곡동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'dogok-dong',
    localDescription: '초고층 주상복합 단지와 쾌적한 주거 환경을 갖춘 지역입니다.',
    buildingCharacteristics: '초고층 주상복합, 고급 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '개포동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'gaepo-dong',
    localDescription: '대규모 신축 아파트 단지로 변모한 강남의 대표적인 주거 중심지입니다.',
    buildingCharacteristics: '신축 아파트 대단지, 근린 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '수서동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'suseo-dong',
    localDescription: 'SRT 역세권 개발로 유동인구가 풍부한 교통과 비즈니스의 요충지입니다.',
    buildingCharacteristics: '역세권 오피스, 오피스텔, 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '일원동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'ilwon-dong',
    localDescription: '삼성서울병원을 중심으로 한 주거 및 의료 인프라가 우수한 지역입니다.',
    buildingCharacteristics: '대형 병원 주변 빌딩, 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강남구', subDistrict: '세곡동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'segok-dong',
    localDescription: '자연 친화적인 주거 환경과 신축 단지들이 조화를 이루는 곳입니다.',
    buildingCharacteristics: '신축 아파트, 소규모 상가 건물',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 서초구 ---
  {
    city: '서울', district: '서초구', subDistrict: '서초동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'seocho-dong',
    localDescription: '법조타운과 예술의 전당이 위치한 행정, 문화의 중심지입니다.',
    buildingCharacteristics: '법조 빌딩, 오피스, 문화 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '반포동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'banpo-dong',
    localDescription: '한강변 고급 단지와 고속터미널 등 핵심 상권이 위치해 있습니다.',
    buildingCharacteristics: '고급 아파트 상가, 복합 쇼핑몰',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '잠원동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'jamwon-dong',
    localDescription: '한강 공원과 인접하며 세련된 주거 환경을 제공하는 지역입니다.',
    buildingCharacteristics: '아파트 상가, 근린 생활 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '방배동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'bangbae-dong',
    localDescription: '조용한 고급 주택가와 서리풀 공원이 어우러진 쾌적한 거주지입니다.',
    buildingCharacteristics: '고급 빌라, 저층 상가 건물',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '양재동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'yangjae-dong',
    localDescription: 'IT 센터와 현대차 본사 등 비즈니스 인프라가 풍부한 곳입니다.',
    buildingCharacteristics: '오피스 타워, IT 빌딩, 유통 센터',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '우면동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'umyeon-dong',
    localDescription: 'R&D 센터와 자연 환경이 공존하는 지식 기반 주거 단지입니다.',
    buildingCharacteristics: '연구소 빌딩, 신축 아파트',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서초구', subDistrict: '내곡동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'naegok-dong',
    localDescription: '전원적인 분위기와 함께 강남 생활권을 공유하는 지역입니다.',
    buildingCharacteristics: '저층 주거 건물, 소형 상가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 송파구 ---
  {
    city: '서울', district: '송파구', subDistrict: '잠실동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'jamsil-dong',
    localDescription: '롯데월드타워와 대단지 아파트가 밀집한 송파의 핵심 거점입니다.',
    buildingCharacteristics: '초고층 빌딩, 대형 마트, 주상복합',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '신천동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'sincheon-dong',
    localDescription: '잠실역 주변 오피스와 대규모 단지가 어우러진 상업·주거지입니다.',
    buildingCharacteristics: '대형 오피스 빌딩, 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '방이동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'bangi-dong',
    localDescription: '올림픽 공원과 먹자골목 상권이 발달한 활기찬 지역입니다.',
    buildingCharacteristics: '먹자골목 상가 빌딩, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '가락동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'garak-dong',
    localDescription: '가락시장과 대규모 주거 단지가 위치한 교통의 요지입니다.',
    buildingCharacteristics: '유통 시설, 아파트 상가, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '문정동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'munjeong-dong',
    localDescription: '법조단지와 지식산업센터가 밀집한 서남권의 업무 중심지입니다.',
    buildingCharacteristics: '지식산업센터, 법조 빌딩, 신축 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '석촌동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'seokchon-dong',
    localDescription: '석촌호수 카페거리와 인접한 쾌적한 주거 및 상권 구역입니다.',
    buildingCharacteristics: '카페 상가, 다세대 주택, 저층 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '송파동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'songpa-dong',
    localDescription: '송리단길로 불리는 골목 상권이 핫하게 떠오른 주거·문화 구역입니다.',
    buildingCharacteristics: '개성 있는 상가 빌딩, 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '삼전동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'samjeon-dong',
    localDescription: '탄천과 인접하며 주거 안정성이 뛰어난 주거 지역입니다.',
    buildingCharacteristics: '다세대 주택, 소규모 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '장지동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'jangji-dong',
    localDescription: '가든파이브와 위례신도시 초입의 유통·주거 거점입니다.',
    buildingCharacteristics: '대형 복합몰, 신축 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '송파구', subDistrict: '오금동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'ogeum-dong',
    localDescription: '녹지가 풍부하고 평온한 분위기의 주거 중심 지역입니다.',
    buildingCharacteristics: '아파트 단지, 공원 인접 빌딩',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 강동구 ---
  {
    city: '서울', district: '강동구', subDistrict: '천호동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'cheonho-dong',
    localDescription: '강동의 최대 상권인 로데오 거리와 백화점이 위치한 유통 중심지입니다.',
    buildingCharacteristics: '백화점, 로데오 상가 빌딩, 시장',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '성내동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'seongnae-dong',
    localDescription: '강동구청과 주요 행정 기관이 위치한 주거·행정 복합지입니다.',
    buildingCharacteristics: '행정 빌딩, 상가, 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '고덕동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'godeok-dong',
    localDescription: '대규모 신축 아파트 단지와 비즈밸리 개발이 한창인 변화의 중심입니다.',
    buildingCharacteristics: '신축 아파트 상가, 지식산업센터',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '상일동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'sangil-dong',
    localDescription: '삼성엔지니어링 등 첨단 업무 단지와 쾌적한 단지가 어우러진 지역입니다.',
    buildingCharacteristics: '첨단 업무 빌딩, 브랜드 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '명일동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'myeongil-dong',
    localDescription: '전통적인 학원가와 주거 단지가 잘 형성된 교육 거점 지역입니다.',
    buildingCharacteristics: '학원 빌딩, 아파트 대단지 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '길동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'gil-dong',
    localDescription: '다양한 먹자골목 상권과 생활 편의 시설이 밀집한 곳입니다.',
    buildingCharacteristics: '상가 밀집 빌딩, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '둔촌동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'dunchon-dong',
    localDescription: '올림픽파크 포레온 등 국내 최대 규모의 단지가 위치한 주거 요충지입니다.',
    buildingCharacteristics: '초대형 아파트 상가, 근린 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '암사동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'amsa-dong',
    localDescription: '선사 유적지와 함께 정겨운 시장 상권이 발달한 주거 구역입니다.',
    buildingCharacteristics: '전통 시장 상가, 아파트 및 빌라',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강동구', subDistrict: '강일동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'gangil-dong',
    localDescription: '서울 동쪽 끝에 위치한 조용하고 자연 친화적인 신축 주거 단지입니다.',
    buildingCharacteristics: '신축 아파트 상가, 저층 생활 빌딩',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 양천구 ---
  {
    city: '서울', district: '양천구', subDistrict: '목동',
    regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'mok-dong',
    localDescription: '대한민국 대표 교육 특구이자 방송국과 대단지 아파트가 밀집해 있습니다.',
    buildingCharacteristics: '학원 빌딩, 방송사 타워, 백화점, 대단지 아파트',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '양천구', subDistrict: '신정동',
    regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'sinjeong-dong',
    localDescription: '목동과 인접하며 주택가와 법조 시설이 발달한 안정적인 주거 지역입니다.',
    buildingCharacteristics: '관공서 빌딩, 아파트 상가, 주택가 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '양천구', subDistrict: '신월동',
    regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'sinwol-dong',
    localDescription: '김포공항과 인접하며 대규모 주택 단지와 공원이 조성된 거주 구역입니다.',
    buildingCharacteristics: '다세대 주택 상가, 소규모 빌딩, 근린 시설',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 강서구 ---
  {
    city: '서울', district: '강서구', subDistrict: '마곡동',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'magok-dong',
    localDescription: '첨단 R&D 센터와 신축 오피스가 밀집한 서울의 새로운 산업 거점입니다.',
    buildingCharacteristics: '대형 R&D 센터, 신축 지식산업센터, 오피스 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강서구', subDistrict: '화곡동',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'hwagok-dong',
    localDescription: '전통적인 대규모 주거 단지로 상권과 생활 편의시설이 밀집해 있습니다.',
    buildingCharacteristics: '빌라촌 상가, 전통 시장, 중형 생활 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강서구', subDistrict: '등촌동',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'deungchon-dong',
    localDescription: '오피스텔과 지식산업센터, 대단지 아파트가 공존하는 활기찬 지역입니다.',
    buildingCharacteristics: '지식산업센터, 오피스텔 상가, 아파트 단지',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강서구', subDistrict: '가양동',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'gayang-dong',
    localDescription: '한강변을 따라 지식산업센터와 아파트 단지가 형성된 주거·업무지입니다.',
    buildingCharacteristics: '지식산업센터, 아파트 상가, 유통 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강서구', subDistrict: '발산동',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'balsan-dong',
    localDescription: '마곡지구와 인접하여 병원 빌딩과 외식 상권이 고도로 발달했습니다.',
    buildingCharacteristics: '메디컬 타워, 외식 상가 빌딩, 오피스',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강서구', subDistrict: '염창동',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'yeomchang-dong',
    localDescription: '한강 조망권과 우수한 교통망을 갖춘 직주근접형 주거 중심지입니다.',
    buildingCharacteristics: '아파트 상가, 소형 오피스, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강서구', subDistrict: '방화동',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'banghwa-dong',
    localDescription: '공항과 인접하며 자연 환경과 주거 편의성이 뛰어난 평온한 구역입니다.',
    buildingCharacteristics: '아파트 상가, 근린 생활 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '강서구', subDistrict: '공항동',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'gonghang-dong',
    localDescription: '김포공항 배후 지역으로 항공 관련 시설과 주거지가 형성되어 있습니다.',
    buildingCharacteristics: '항공 업무 시설, 저층 상가, 빌라 상권',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 구로구 ---
  {
    city: '서울', district: '구로구', subDistrict: '구로동',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'guro-dong',
    localDescription: 'G밸리 IT 기업과 벤처 빌딩이 밀집한 국내 최대의 디지털 산업지입니다.',
    buildingCharacteristics: '대형 IT 타워, 지식산업센터, 업무용 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '구로구', subDistrict: '신도림동',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'sindorim-dong',
    localDescription: '디큐브시티 등 복합 상업 시설과 오피스가 밀집한 교통/상업의 요충지입니다.',
    buildingCharacteristics: '복합 쇼핑몰, 고층 오피스텔 상가, 오피스',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '구로구', subDistrict: '개봉동',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'gaebong-dong',
    localDescription: '광명과 인접한 대규모 주거 단지로 생활 밀착형 상권이 발달했습니다.',
    buildingCharacteristics: '아파트 상가, 주택가 상권 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '구로구', subDistrict: '고척동',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'gocheok-dong',
    localDescription: '고척스카이돔과 함께 대단지 아파트가 들어선 활력 있는 거주지입니다.',
    buildingCharacteristics: '체육 시설 주변 상가, 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '구로구', subDistrict: '오류동',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'oryu-dong',
    localDescription: '전통적인 상권과 현대적인 오피스텔이 어우러진 역세권 지역입니다.',
    buildingCharacteristics: '오피스텔 상가, 전통 시장, 생활 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '구로구', subDistrict: '가리봉동',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'garibong-dong',
    localDescription: '디지털단지 배후 주거지이자 독특한 외국인 거리 문화가 형성된 곳입니다.',
    buildingCharacteristics: '이색 상가, 다세대 주택, 근린 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '구로구', subDistrict: '항동',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'hang-dong',
    localDescription: '푸른 수목원과 신축 단지가 어우러진 쾌적하고 조용한 신규 주거지입니다.',
    buildingCharacteristics: '신축 아파트 상가, 저층 근린 상가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 금천구 ---
  {
    city: '서울', district: '금천구', subDistrict: '가산동',
    regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'gasan-dong',
    localDescription: '대규모 아울렛 상권과 지식산업센터가 밀집한 서남권 비즈니스 거점입니다.',
    buildingCharacteristics: '아울렛 빌딩, 지식산업센터, 공장형 사무실',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '금천구', subDistrict: '독산동',
    regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'doksan-dong',
    localDescription: '재개발을 통해 현대적인 주상복합 단지로 탈바꿈 중인 역동적인 지역입니다.',
    buildingCharacteristics: '신축 주상복합 상가, 오피스텔, 중형 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '금천구', subDistrict: '시흥동',
    regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'siheung-dong',
    localDescription: '대규모 주택 밀집 지역으로 친근한 생활 인프라가 잘 구축되어 있습니다.',
    buildingCharacteristics: '주택가 상가, 전통 시장 시설, 근린 생활 시설',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 영등포구 ---
  {
    city: '서울', district: '영등포구', subDistrict: '여의도동',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'yeouido-dong',
    localDescription: '국회와 금융가가 밀집한 섬 지역으로 서울의 대표적인 비즈니스 타운입니다.',
    buildingCharacteristics: '금융가 고층 오피스, IFC몰, 국회 관련 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '영등포구', subDistrict: '당산동',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'dangsan-dong',
    localDescription: '교통 요지이자 지식산업센터와 주거 시설이 공존하는 복합 지역입니다.',
    buildingCharacteristics: '지식산업센터, 오피스텔 상가, 역세권 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '영등포구', subDistrict: '문래동',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'mullae-dong',
    localDescription: '철공소 예술촌과 현대적 지식산업센터가 어우러진 독특한 분위기의 구역입니다.',
    buildingCharacteristics: '리모델링 상가, 지식산업센터, 중형 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '영등포구', subDistrict: '영등포동',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'yeongdeungpo-dong',
    localDescription: '타임스퀘어와 전통 시장이 공존하는 서울 서남권의 상업 중심지입니다.',
    buildingCharacteristics: '복합 쇼핑몰, 백화점, 전통 시장 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '영등포구', subDistrict: '신길동',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'singil-dong',
    localDescription: '뉴타운 개발로 대규모 신축 아파트 단지가 형성된 주거 중심지입니다.',
    buildingCharacteristics: '신축 아파트 상가, 주거용 근린 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '영등포구', subDistrict: '대림동',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'daerim-dong',
    localDescription: '활발한 시장 상권과 독특한 문화가 공존하는 거대한 주거 타운입니다.',
    buildingCharacteristics: '시장 상가, 다세대 주택, 저층 빌딩',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 동작구 ---
  {
    city: '서울', district: '동작구', subDistrict: '상도동',
    regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'sangdo-dong',
    localDescription: '숭실대, 중앙대가 위치하며 대단지 아파트가 밀집한 교육·주거 지역입니다.',
    buildingCharacteristics: '아파트 상가, 대학가 상권 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '동작구', subDistrict: '노량진동',
    regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'noryangjin-dong',
    localDescription: '수산시장과 고시 학원가가 위치한 활기차고 유동인구가 많은 구역입니다.',
    buildingCharacteristics: '수산시장 시설, 학원 빌딩, 오피스텔 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '동작구', subDistrict: '사당동',
    regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'sadang-dong',
    localDescription: '교통의 허브이자 대규모 상권과 주거지가 조화를 이루는 곳입니다.',
    buildingCharacteristics: '광역 버스 거점 빌딩, 먹자골목 상권 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '동작구', subDistrict: '흑석동',
    regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'heukseok-dong',
    localDescription: '중앙대병원과 신축 아파트 단지가 위치한 쾌적한 한강변 주거지입니다.',
    buildingCharacteristics: '병원 주변 상가, 아파트 대단지 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '동작구', subDistrict: '대방동',
    regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'daebang-dong',
    localDescription: '안정적인 아파트 단지와 학교들이 밀집한 조용한 거주 구역입니다.',
    buildingCharacteristics: '아파트 단지 상가, 교육 시설 빌딩',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 관악구 ---
  {
    city: '서울', district: '관악구', subDistrict: '신림동',
    regionSlug: 'seoul', districtSlug: 'gwanak', subDistrictSlug: 'sillim-dong',
    localDescription: '1인 가구 밀집도가 높고 서울대 주변 상권이 발달한 활기찬 지역입니다.',
    buildingCharacteristics: '원룸 빌딩, 대학가 상가, 소형 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '관악구', subDistrict: '봉천동',
    regionSlug: 'seoul', districtSlug: 'gwanak', subDistrictSlug: 'bongcheon-dong',
    localDescription: '샤로수길을 중심으로 트렌디한 상권이 형성된 신흥 거점입니다.',
    buildingCharacteristics: '트렌디 매장 상가, 주택가 근린 생활 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '관악구', subDistrict: '남현동',
    regionSlug: 'seoul', districtSlug: 'gwanak', subDistrictSlug: 'namhyeon-dong',
    localDescription: '사당역세권에 위치하여 등산객과 유동인구가 많은 상권 구역입니다.',
    buildingCharacteristics: '역세권 상가 빌딩, 소규모 오피스',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 은평구 ---
  {
    city: '서울', district: '은평구', subDistrict: '녹번동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'nokbeon-dong',
    localDescription: '은평구 행정의 중심이자 대단지 아파트가 밀집한 주거 요충지입니다.',
    buildingCharacteristics: '행정 빌딩, 아파트 상가, 신축 주거 단지',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '불광동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'bulgwang-dong',
    localDescription: '북한산 입구의 풍부한 유동인구와 전통 시장 상권이 발달했습니다.',
    buildingCharacteristics: '등산객 대상 상가, 재래시장, 연립 주택',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '응암동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'eungam-dong',
    localDescription: '불광천 주변의 쾌적한 주거 인프라와 상권이 조화를 이루는 곳입니다.',
    buildingCharacteristics: '아파트 및 빌라 상가, 불광천 주변 상업 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '진관동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'jingwan-dong',
    localDescription: '은평뉴타운과 대형 의료/쇼핑 시설이 위치한 계획 주거 단지입니다.',
    buildingCharacteristics: '대형 복합 쇼핑몰, 뉴타운 아파트 상가, 은평성모병원 주변 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '갈현동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'galhyeon-dong',
    localDescription: '연신내역 역세권을 중심으로 유흥과 쇼핑 상권이 고도로 발달했습니다.',
    buildingCharacteristics: '연신내 로데오 상가, 메디컬 빌딩, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '구산동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'gusan-dong',
    localDescription: '다양한 교육 시설과 조용한 주거 단지가 형성된 안정적인 지역입니다.',
    buildingCharacteristics: '학교 주변 상가, 빌라 단지, 근린 생활 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '대조동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'daejo-dong',
    localDescription: 'NC백화점과 연신내역 인근의 상업 및 주거 기능이 복합된 구역입니다.',
    buildingCharacteristics: '백화점 주변 상가, 역세권 빌딩, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '수색동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'susaek-dong',
    localDescription: '디지털미디어시티와 인접하며 수색역세권 개발의 중심지에 위치합니다.',
    buildingCharacteristics: '역세권 개발지 빌딩, 신축 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '신사동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'sinsa-dong-eunpyeong',
    localDescription: '봉산 자락의 쾌적한 자연 환경과 주거지가 어우러진 평온한 동네입니다.',
    buildingCharacteristics: '아파트 단지 상가, 저층 빌라촌 상권',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '역촌동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'yeokchon-dong',
    localDescription: '다세대 주택이 밀집해 있으며 생활 밀착형 소규모 상권이 발달했습니다.',
    buildingCharacteristics: '주택가 근린 시설, 소형 오피스 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '은평구', subDistrict: '증산동',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'jeungsan-dong',
    localDescription: '상암동과 인접하며 뉴타운 개발로 새롭게 도약하는 주거 지역입니다.',
    buildingCharacteristics: '신축 브랜드 아파트 상가, 주거용 빌딩',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 서대문구 ---
  {
    city: '서울', district: '서대문구', subDistrict: '남가좌동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'namgajwa-dong',
    localDescription: '가재울뉴타운 개발로 현대적인 대단지 아파트 숲을 이룬 주거 중심지입니다.',
    buildingCharacteristics: '신축 아파트 대단지 상가, 근린 생활 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '북가좌동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'bukgajwa-dong',
    localDescription: '증산동과 인접하며 생활 편의성이 뛰어난 대규모 거주 단지입니다.',
    buildingCharacteristics: '아파트 단지 상가, 주택가 상권 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '북아현동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'bugahyeon-dong',
    localDescription: '아현뉴타운의 핵심지로 신축 단지와 우수한 교육 인프라를 갖췄습니다.',
    buildingCharacteristics: '신축 아파트 상가, 교육 시설 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '신촌동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'sinchon-dong',
    localDescription: '연세대, 이화여대 정문의 핵심 대학가 상권이자 유동인구 요충지입니다.',
    buildingCharacteristics: '대형 상가 빌딩, 프랜차이즈 매장, 백화점',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '연희동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'yeonhui-dong',
    localDescription: '고급 주택가와 특색 있는 카페, 문화 공간이 어우러진 감성 지역입니다.',
    buildingCharacteristics: '저층 고급 주택, 카페 상가 빌딩, 소규모 갤러리',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '홍은동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'hongeun-dong',
    localDescription: '북한산과 인왕산 자락의 쾌적한 자연과 주거지가 공존하는 동네입니다.',
    buildingCharacteristics: '아파트 상가, 숲세권 빌라 단지',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '홍제동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'hongje-dong',
    localDescription: '서대문구의 주거 중심지이자 행정 서비스 이용이 편리한 곳입니다.',
    buildingCharacteristics: '중형 아파트 상가, 전통 시장 시설, 의료 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '충정로',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'chungjeongro-dong',
    localDescription: '도심권 비즈니스 중심지로 오피스 빌딩과 기업 사옥이 밀집해 있습니다.',
    buildingCharacteristics: '중대형 오피스 빌딩, 신문사 건물, 행정 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '천연동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'cheonyeon-dong',
    localDescription: '독립문과 인접하며 안정적인 주택가와 생활 상권이 형성된 지역입니다.',
    buildingCharacteristics: '아파트 상가, 소형 빌딩, 역사 주변 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '냉천동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'naengcheon-dong',
    localDescription: '감리교신학대 주변의 조용하고 쾌적한 주거 환경을 제공하는 구역입니다.',
    buildingCharacteristics: '교육 시설 주변 빌딩, 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '대신동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'daesin-dong',
    localDescription: '이화여대와 연세대 사이의 쾌적하고 조용한 주거 및 교육지입니다.',
    buildingCharacteristics: '연구소 빌딩, 다세대 주택 상권',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '대현동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'daehyeon-dong',
    localDescription: '이화여대 정문 앞 패션, 뷰티, 문화 상권이 발달한 활기찬 구역입니다.',
    buildingCharacteristics: '트렌디 매장 상가, 소형 상업 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '미근동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'migeun-dong',
    localDescription: '경찰청 등 주요 공공기관이 위치한 서대문구의 행정 중심지 중 하나입니다.',
    buildingCharacteristics: '관공서 빌딩, 업무용 시설, 근린 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '봉원동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'bongwon-dong',
    localDescription: '안산 자락에 위치하여 자연 환경이 뛰어나며 봉원사가 있는 평온한 동네입니다.',
    buildingCharacteristics: '종교 시설 주변 상가, 자연 친화적 주택',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '영천동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'yeongcheon-dong',
    localDescription: '영천시장을 중심으로 정겨운 상권과 주거지가 잘 형성된 지역입니다.',
    buildingCharacteristics: '전통 시장 상가, 저층 주상복합 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '옥천동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'okcheon-dong',
    localDescription: '독립문역세권으로 교통이 편리하고 행정 시설 접근성이 우수합니다.',
    buildingCharacteristics: '역세권 빌딩, 오피스텔 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '창천동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'changcheon-dong',
    localDescription: '신촌 로터리를 포함한 서대문구의 최대 상업 및 유흥 중심지입니다.',
    buildingCharacteristics: '고층 빌딩, 복합 상가, 오피스 타워',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '합동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'hap-dong',
    localDescription: '서대문역 인근 오피스 밀집 지역으로 업무 환경이 잘 갖춰진 곳입니다.',
    buildingCharacteristics: '오피스 빌딩, 근린 생활 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '현저동',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'hyeonjeo-dong',
    localDescription: '서대문형무소역사관과 독립공원이 위치한 역사적 상징성이 큰 지역입니다.',
    buildingCharacteristics: '역사 공원 시설, 인접 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 마포구 ---
  {
    city: '서울', district: '마포구', subDistrict: '공덕동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'gongdeok-dong',
    localDescription: '비즈니스의 핵심이자 교통의 중심지로 대형 오피스 빌딩이 밀집해 있습니다.',
    buildingCharacteristics: '대형 오피스 타워, 주상복합 빌딩, 메디컬 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '아현동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'ahyeon-dong',
    localDescription: '대규모 뉴타운 개발로 현대적인 주거 타운이 형성된 마포의 대표 주거지입니다.',
    buildingCharacteristics: '신축 대단지 아파트 상가, 교육 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '도화동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'dohwa-dong',
    localDescription: '마포역과 공덕역 사이의 활발한 먹거리 상권과 업무 시설이 공존합니다.',
    buildingCharacteristics: '음식 문화 거리 상가 빌딩, 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '용강동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'yonggang-dong',
    localDescription: '한강변 아파트 단지와 전통 있는 마포 갈비 거리가 유명한 지역입니다.',
    buildingCharacteristics: '한강변 아파트 상가, 요식업 밀집 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '신수동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'sinsu-dong',
    localDescription: '서강대학교와 인접하며 차분하고 안정적인 주거 분위기를 제공합니다.',
    buildingCharacteristics: '대학가 주택 상권, 아파트 단지 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '대흥동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'daeheung-dong',
    localDescription: '경의선 숲길을 따라 형성된 신흥 학원가와 쾌적한 산책로가 특징입니다.',
    buildingCharacteristics: '학원 빌딩, 숲길 인접 카페 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '염리동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'yeomni-dong',
    localDescription: '대단지 아파트 신축으로 인해 주거 환경이 획기적으로 개선된 곳입니다.',
    buildingCharacteristics: '브랜드 아파트 상가, 주거 근린 생활 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '마포동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'mapo-dong',
    localDescription: '한강 조망이 우수한 고층 빌딩과 주상복합이 조화를 이루는 비즈니스지입니다.',
    buildingCharacteristics: '한강뷰 오피스, 고층 주상복합 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '상수동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'sangsu-dong',
    localDescription: '홍대 상권의 확장지로 감각적인 디자인의 매장과 작업실이 많습니다.',
    buildingCharacteristics: '독특한 디자인의 상가 빌딩, 저층 카페 건물',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '합정동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'hapjeong-dong',
    localDescription: '합정역세권 복합 문화 공간과 트렌디한 출판/예술 상권이 발달했습니다.',
    buildingCharacteristics: '메세나폴리스 복합 쇼핑몰, 출판사 빌딩, 문화 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '서교동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'seogyo-dong',
    localDescription: '홍대 앞 최대 번화가로 밤낮으로 활기찬 예술과 쇼핑의 중심지입니다.',
    buildingCharacteristics: '홍대 로데오 대형 상가, 이색 빌딩, 오피스',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '동교동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'donggyo-dong',
    localDescription: '연남동과 서교동을 잇는 거점으로 카페와 중소형 오피스가 밀집해 있습니다.',
    buildingCharacteristics: '중소형 오피스 빌딩, 상권 연계형 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '망원동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'mangwon-dong',
    localDescription: '망원시장과 망리단길의 핫플레이스가 공존하는 정겨운 주거 중심지입니다.',
    buildingCharacteristics: '망원시장 시설, 소규모 카페 거리, 다세대 상권',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '성산동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'seongsan-dong',
    localDescription: '월드컵경기장 주변의 넓은 공원과 안정적인 아파트 단지가 형성된 곳입니다.',
    buildingCharacteristics: '체육 시설 인접 빌딩, 대단지 아파트 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '상암동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'sangam-dong',
    localDescription: '미디어 산업의 메카이자 대형 오피스 빌딩들이 즐비한 비즈니스 요충지입니다.',
    buildingCharacteristics: '방송사 사옥, 지식산업센터, DMC 업무용 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '신공덕동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'singongdeok-dong',
    localDescription: '공덕역과 연결된 편리한 교통과 현대적인 주상복합 주거 환경을 제공합니다.',
    buildingCharacteristics: '주상복합 아파트 상가, 오피스 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '연남동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'yeonnam-dong',
    localDescription: '경의선 숲길을 따라 형성된 세련된 감성의 상점들과 주거지가 어우러집니다.',
    buildingCharacteristics: '숲길 인근 카페 빌딩, 저층 단독 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '중동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'jung-dong',
    localDescription: '성산동과 상암동 사이의 조용하고 쾌적한 주거 단지로 구성된 지역입니다.',
    buildingCharacteristics: '아파트 단지 상가, 소규모 생활 편의 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '창전동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'changjeon-dong',
    localDescription: '홍익대학교와 인접하며 문화적인 색채와 주거가 조화롭게 어우러진 구역입니다.',
    buildingCharacteristics: '대학가 오피스텔, 빌라 상권',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '구수동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'gusu-dong',
    localDescription: '광흥창역 주변의 조용하고 아늑한 분위기를 가진 평온한 주거지입니다.',
    buildingCharacteristics: '아파트 상가, 근린 생활 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '노고산동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'nogosan-dong',
    localDescription: '신촌 로터리 인근 상업 및 교육 인프라가 잘 발달된 주거·상업 혼재지입니다.',
    buildingCharacteristics: '오피스텔 상가, 중소형 오피스 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '당인동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'dangin-dong',
    localDescription: '당인리 발전소 주변의 예술적 분위기가 흐르는 카페와 주거 구역입니다.',
    buildingCharacteristics: '리모델링 카페 상가, 저층 주거 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '신정동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'sinjeong-dong-mapo',
    localDescription: '상수동과 한강 사이에 위치하여 쾌적한 한강변 생활권을 누리는 곳입니다.',
    buildingCharacteristics: '아파트 단지, 소규모 상업 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '토정동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'tojeong-dong',
    localDescription: '한강변을 따라 형성된 조망 좋은 주거지와 한식 식당가가 발달했습니다.',
    buildingCharacteristics: '한강뷰 주거 단지 상가, 식당 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '하중동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'hajung-dong',
    localDescription: '밤섬과 한강의 아름다운 조망권을 가진 프리미엄 주거 지역입니다.',
    buildingCharacteristics: '프리미엄 아파트 상가, 주택가 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '마포구', subDistrict: '하수동',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'hasu-dong',
    localDescription: '합정역과 상수역 사이의 개성 넘치는 매장들이 들어선 상권 구역입니다.',
    buildingCharacteristics: '트렌디 매장 상가, 소형 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 성동구 ---
  {
    city: '서울', district: '성동구', subDistrict: '성수동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'seongsu-dong',
    localDescription: '한국의 브루클린으로 불리며 지식산업센터와 세련된 카페 문화가 공존합니다.',
    buildingCharacteristics: '지식산업센터, 갤러리형 카페, 대형 공장 리모델링 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '왕십리동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'wangsimni-dong',
    localDescription: '교통의 심장부이자 복합 쇼핑몰과 활기찬 대학가 상권이 공존하는 요충지입니다.',
    buildingCharacteristics: '비트플렉스 복합몰, 오피스텔 타워, 한양대 인접 상가',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '금호동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'geumho-dong',
    localDescription: '한강을 조망하는 대규모 신축 아파트 단지가 밀집한 프리미엄 주거 거점입니다.',
    buildingCharacteristics: '브랜드 아파트 대단지 상가, 근린 상업 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '옥수동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'oksu-dong',
    localDescription: '강남 접근성이 가장 우수하며 고품격 주거 환경을 제공하는 대표 부촌 지역입니다.',
    buildingCharacteristics: '고급 주상복합, 아파트 상가, 하이엔드 상권',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '마장동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'majang-dong',
    localDescription: '대규모 축산물 시장과 함께 조용한 아파트 단지가 어우러진 생활 요충지입니다.',
    buildingCharacteristics: '축산물 시장 특화 시설, 아파트 상가, 중형 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '도선동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'doseon-dong',
    localDescription: '왕십리역 배후의 편리한 상업 시설과 오피스 환경을 제공하는 지역입니다.',
    buildingCharacteristics: '역세권 빌딩, 오피스텔 상가, 소형 상업 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '사근동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'sageun-dong',
    localDescription: '한양대학교 주변의 조용하고 쾌적한 주거 및 교육 여건이 잘 갖춰진 구역입니다.',
    buildingCharacteristics: '대학가 주택 상권, 아파트 단지',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '송정동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'songjeong-dong',
    localDescription: '중랑천 뚝방길 산책로가 인접하며 평온하고 여유로운 거주 분위기가 장점입니다.',
    buildingCharacteristics: '아파트 상가, 저층 주거 빌딩, 공원 인근 시설',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '용답동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'yongdap-dong',
    localDescription: '중고차 매매단지와 함께 전통 시장 상권이 발달한 활기 넘치는 동네입니다.',
    buildingCharacteristics: '유통 시설 빌딩, 전통 시장 상가, 역세권 오피스텔',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '응봉동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'eungbong-dong',
    localDescription: '응봉산 조망이 뛰어나며 안정적인 생활 인프라를 갖춘 주거 밀집지입니다.',
    buildingCharacteristics: '아파트 대단지 상가, 소규모 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '행당동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'haengdang-dong',
    localDescription: '사근동과 인접하며 역세권의 대규모 단지와 학교들이 조화를 이루는 곳입니다.',
    buildingCharacteristics: '대단지 아파트 상가, 교육 시설 빌딩',
    priority: 1, indexStatus: 'noindex'
  },
  {
    city: '서울', district: '성동구', subDistrict: '홍익동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'hongik-dong',
    localDescription: '왕십리역세권의 편리함을 누리는 조용하고 아늑한 아파트 거주 구역입니다.',
    buildingCharacteristics: '아파트 상가, 주거용 근린 생활 시설',
    priority: 1, indexStatus: 'noindex'
  },

  // --- 구 단위 전지역 요약 (전체) ---
  {
    city: '서울', district: '강남구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'all',
    localDescription: '대한민국 비즈니스의 중심지인 강남구 전역의 대형 빌딩과 상업 시설을 전문적으로 관리합니다.',
    buildingCharacteristics: '대형 오피스 빌딩, 메디컬 타워, 학원가 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서초구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'all',
    localDescription: '법조타운과 문화 시설이 밀집한 서초구의 격조 높은 공간 관리를 약속합니다.',
    buildingCharacteristics: '법조 빌딩, 문화 시설, 하이엔드 주거 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'all',
    localDescription: '잠실과 문정을 아우르는 송파구의 다양한 대형 건축물에 최적화된 청소 솔루션을 제공합니다.',
    buildingCharacteristics: '롯데타워 주변 시설, 지식산업센터, 대형 쇼핑몰',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'all',
    localDescription: '강동구 전역의 재건축 단지와 상업 지구를 위한 정밀한 현장 진단을 실시합니다.',
    buildingCharacteristics: '신축 대단지 상가, 로데오 상권 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '양천구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'all',
    localDescription: '목동 학원가와 방송국 등 양천구의 특수 시설에 맞춘 쾌적한 실내 환경을 유지합니다.',
    buildingCharacteristics: '방송사 타워, 대규모 학원 빌딩, 오피스',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강서구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'all',
    localDescription: '마곡 지구와 화곡동 등 강서구의 비즈니스·주거 벨트를 위한 전문 솔루션을 제안합니다.',
    buildingCharacteristics: 'R&D 센터, 지식산업센터, 주거 밀집 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '구로구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'all',
    localDescription: '구로디지털단지와 신도림 상권 등 구로구의 첨단 인프라 관리에 특화되어 있습니다.',
    buildingCharacteristics: 'IT 타워, 지식산업센터, 대형 쇼핑몰',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '금천구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'all',
    localDescription: '가산디지털단지 오피스와 아울렛 등 금천구 산업 시설의 청결을 책임집니다.',
    buildingCharacteristics: '오피스 타워, 지식산업센터, 대형 아울렛',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '영등포구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'all',
    localDescription: '여의도 금융가부터 문정 지산까지 영등포구 전역의 전문적인 빌딩 관리를 수행합니다.',
    buildingCharacteristics: '고층 오피스 빌딩, 복합 쇼핑몰, 지식산업센터',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동작구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'all',
    localDescription: '노량진 상권과 상도/사당의 주거 단지를 위한 동작구 맞춤형 청소 서비스를 제공합니다.',
    buildingCharacteristics: '상가 빌딩, 교육 시설, 아파트 대단지 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '관악구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gwanak', subDistrictSlug: 'all',
    localDescription: '1인 가구 주거 시설과 서울대 상권 등 관악구의 다양한 현장에 대응합니다.',
    buildingCharacteristics: '소형 오피스텔 빌딩, 대학가 상가, 근린 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '은평구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'all',
    localDescription: '은평뉴타운과 주요 상업 지구를 포함한 은평구 전역의 쾌적한 환경 관리를 지원합니다.',
    buildingCharacteristics: '은평뉴타운 상가, 연신내 역세권 빌딩, 관공서 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서대문구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'all',
    localDescription: '신촌, 연희동 등 서대문구의 복합 상권과 주거 단지에 최적화된 청소 솔루션을 제공합니다.',
    buildingCharacteristics: '대학가 대형 빌딩, 뉴타운 아파트 상가, 오피스텔 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '마포구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'all',
    localDescription: '상암DMC부터 공덕 업무지구까지 마포구의 비즈니스 인프라를 완벽하게 관리합니다.',
    buildingCharacteristics: '미디어 센터, IT 오피스 타워, 홍대/연남 카페 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'all',
    localDescription: '성수동의 지식산업센터와 왕십리 교통 거점 등 성동구 전역의 전문 클리닝을 수행합니다.',
    buildingCharacteristics: '지식산업센터, 갤러리 빌딩, 한강변 프리미엄 상가',
    priority: 1, indexStatus: 'index'
  },
];

