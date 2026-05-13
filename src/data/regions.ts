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

  // --- 구 단위 전지역 요약 (서남권 4구) ---
  {
    city: '서울', district: '양천구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'all',
    localDescription: '목동 학원가와 방송국, 대단지 아파트가 밀집하여 쾌적한 환경 관리가 중요한 지역입니다.',
    buildingCharacteristics: '학원 빌딩, 방송 타워, 대단지 아파트 단지 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강서구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'all',
    localDescription: '마곡 첨단 산업 단지와 화곡의 대규모 거주지가 공존하는 거대한 비즈니스·주거 벨트입니다.',
    buildingCharacteristics: 'R&D 센터, 지식산업센터, 대규모 주거 밀집 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '구로구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'all',
    localDescription: 'G밸리의 IT 타워들과 신도림의 복합 쇼핑몰 등 최첨단 업무 시설이 집중된 구역입니다.',
    buildingCharacteristics: 'IT 벤처 타워, 지식산업센터, 대형 쇼핑몰 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '금천구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'all',
    localDescription: '가산디지털단지의 방대한 오피스 수요와 대형 아울렛 상권이 결합된 산업 요충지입니다.',
    buildingCharacteristics: '방대한 오피스 타워, 지식산업센터, 대형 아울렛 빌딩',
    priority: 1, indexStatus: 'index'
  },
];

