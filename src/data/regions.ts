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
  {
  city: '서울', district: '양천구', subDistrict: '목동',
  regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'mok-dong',
  localDescription: '대한민국 대표 교육 특구이자 방송국과 대단지 아파트가 밀집해 있습니다.',
  buildingCharacteristics: '학원 빌딩, 방송사 타워, 백화점, 대단지 아파트',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '양천구', subDistrict: '신정동',
  regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'sinjeong-dong',
  localDescription: '목동과 인접하며 주택가와 법조 시설이 발달한 안정적인 주거 지역입니다.',
  buildingCharacteristics: '관공서 빌딩, 아파트 상가, 주택가 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '양천구', subDistrict: '신월동',
  regionSlug: 'seoul', districtSlug: 'yangcheon', subDistrictSlug: 'sinwol-dong',
  localDescription: '김포공항과 인접하며 대규모 주택 단지와 공원이 조성된 거주 구역입니다.',
  buildingCharacteristics: '다세대 주택 상가, 소규모 빌딩, 근린 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '강서구', subDistrict: '마곡동',
  regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'magok-dong',
  localDescription: '첨단 R&D 센터와 신축 오피스가 밀집한 서울의 새로운 산업 거점입니다.',
  buildingCharacteristics: '대형 R&D 센터, 신축 지식산업센터, 오피스 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '강서구', subDistrict: '화곡동',
  regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'hwagok-dong',
  localDescription: '전통적인 대규모 주거 단지로 상권과 생활 편의시설이 밀집해 있습니다.',
  buildingCharacteristics: '빌라촌 상가, 전통 시장, 중형 생활 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '강서구', subDistrict: '등촌동',
  regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'deungchon-dong',
  localDescription: '오피스텔과 지식산업센터, 대단지 아파트가 공존하는 활기찬 지역입니다.',
  buildingCharacteristics: '지식산업센터, 오피스텔 상가, 아파트 단지',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '강서구', subDistrict: '가양동',
  regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'gayang-dong',
  localDescription: '한강변을 따라 지식산업센터와 아파트 단지가 형성된 주거·업무지입니다.',
  buildingCharacteristics: '지식산업센터, 아파트 상가, 유통 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '강서구', subDistrict: '발산동',
  regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'balsan-dong',
  localDescription: '마곡지구와 인접하여 병원 빌딩과 외식 상권이 고도로 발달했습니다.',
  buildingCharacteristics: '메디컬 타워, 외식 상가 빌딩, 오피스',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '강서구', subDistrict: '염창동',
  regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'yeomchang-dong',
  localDescription: '한강 조망권과 우수한 교통망을 갖춘 직주근접형 주거 중심지입니다.',
  buildingCharacteristics: '아파트 상가, 소형 오피스, 오피스텔',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '강서구', subDistrict: '방화동',
  regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'banghwa-dong',
  localDescription: '공항과 인접하며 자연 환경과 주거 편의성이 뛰어난 평온한 구역입니다.',
  buildingCharacteristics: '아파트 상가, 근린 생활 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '강서구', subDistrict: '공항동',
  regionSlug: 'seoul', districtSlug: 'gangseo', subDistrictSlug: 'gonghang-dong',
  localDescription: '김포공항 배후 지역으로 항공 관련 시설과 주거지가 형성되어 있습니다.',
  buildingCharacteristics: '항공 업무 시설, 저층 상가, 빌라 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '구로구', subDistrict: '구로동',
  regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'guro-dong',
  localDescription: 'G밸리 IT 기업과 벤처 빌딩이 밀집한 국내 최대의 디지털 산업지입니다.',
  buildingCharacteristics: '대형 IT 타워, 지식산업센터, 업무용 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '구로구', subDistrict: '신도림동',
  regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'sindorim-dong',
  localDescription: '디큐브시티 등 복합 상업 시설과 오피스가 밀집한 교통/상업의 요충지입니다.',
  buildingCharacteristics: '복합 쇼핑몰, 고층 오피스텔 상가, 오피스',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '구로구', subDistrict: '개봉동',
  regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'gaebong-dong',
  localDescription: '광명과 인접한 대규모 주거 단지로 생활 밀착형 상권이 발달했습니다.',
  buildingCharacteristics: '아파트 상가, 주택가 상권 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '구로구', subDistrict: '고척동',
  regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'gocheok-dong',
  localDescription: '고척스카이돔과 함께 대단지 아파트가 들어선 활력 있는 거주지입니다.',
  buildingCharacteristics: '체육 시설 주변 상가, 아파트 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '구로구', subDistrict: '오류동',
  regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'oryu-dong',
  localDescription: '전통적인 상권과 현대적인 오피스텔이 어우러진 역세권 지역입니다.',
  buildingCharacteristics: '오피스텔 상가, 전통 시장, 생활 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '구로구', subDistrict: '가리봉동',
  regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'garibong-dong',
  localDescription: '디지털단지 배후 주거지이자 독특한 외국인 거리 문화가 형성된 곳입니다.',
  buildingCharacteristics: '이색 상가, 다세대 주택, 근린 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '구로구', subDistrict: '항동',
  regionSlug: 'seoul', districtSlug: 'guro', subDistrictSlug: 'hang-dong',
  localDescription: '푸른 수목원과 신축 단지가 어우러진 쾌적하고 조용한 신규 주거지입니다.',
  buildingCharacteristics: '신축 아파트 상가, 저층 근린 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '금천구', subDistrict: '가산동',
  regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'gasan-dong',
  localDescription: '대규모 아울렛 상권과 지식산업센터가 밀집한 서남권 비즈니스 거점입니다.',
  buildingCharacteristics: '아울렛 빌딩, 지식산업센터, 공장형 사무실',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '금천구', subDistrict: '독산동',
  regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'doksan-dong',
  localDescription: '재개발을 통해 현대적인 주상복합 단지로 탈바꿈 중인 역동적인 지역입니다.',
  buildingCharacteristics: '신축 주상복합 상가, 오피스텔, 중형 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '금천구', subDistrict: '시흥동',
  regionSlug: 'seoul', districtSlug: 'geumcheon', subDistrictSlug: 'siheung-dong',
  localDescription: '대규모 주택 밀집 지역으로 친근한 생활 인프라가 잘 구축되어 있습니다.',
  buildingCharacteristics: '주택가 상가, 전통 시장 시설, 근린 생활 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '영등포구', subDistrict: '여의도동',
  regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'yeouido-dong',
  localDescription: '국회와 금융가가 밀집한 섬 지역으로 서울의 대표적인 비즈니스 타운입니다.',
  buildingCharacteristics: '금융가 고층 오피스, IFC몰, 국회 관련 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '영등포구', subDistrict: '당산동',
  regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'dangsan-dong',
  localDescription: '교통 요지이자 지식산업센터와 주거 시설이 공존하는 복합 지역입니다.',
  buildingCharacteristics: '지식산업센터, 오피스텔 상가, 역세권 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '영등포구', subDistrict: '문래동',
  regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'mullae-dong',
  localDescription: '철공소 예술촌과 현대적 지식산업센터가 어우러진 독특한 분위기의 구역입니다.',
  buildingCharacteristics: '리모델링 상가, 지식산업센터, 중형 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '영등포구', subDistrict: '영등포동',
  regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'yeongdeungpo-dong',
  localDescription: '타임스퀘어와 전통 시장이 공존하는 서울 서남권의 상업 중심지입니다.',
  buildingCharacteristics: '복합 쇼핑몰, 백화점, 전통 시장 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '영등포구', subDistrict: '신길동',
  regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'singil-dong',
  localDescription: '뉴타운 개발로 대규모 신축 아파트 단지가 형성된 주거 중심지입니다.',
  buildingCharacteristics: '신축 아파트 상가, 주거용 근린 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '영등포구', subDistrict: '대림동',
  regionSlug: 'seoul', districtSlug: 'yeongdeungpo', subDistrictSlug: 'daerim-dong',
  localDescription: '활발한 시장 상권과 독특한 문화가 공존하는 거대한 주거 타운입니다.',
  buildingCharacteristics: '시장 상가, 다세대 주택, 저층 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '동작구', subDistrict: '상도동',
  regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'sangdo-dong',
  localDescription: '숭실대, 중앙대가 위치하며 대단지 아파트가 밀집한 교육·주거 지역입니다.',
  buildingCharacteristics: '아파트 상가, 대학가 상권 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '동작구', subDistrict: '노량진동',
  regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'noryangjin-dong',
  localDescription: '수산시장과 고시 학원가가 위치한 활기차고 유동인구가 많은 구역입니다.',
  buildingCharacteristics: '수산시장 시설, 학원 빌딩, 오피스텔 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '동작구', subDistrict: '사당동',
  regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'sadang-dong',
  localDescription: '교통의 허브이자 대규모 상권과 주거지가 조화를 이루는 곳입니다.',
  buildingCharacteristics: '광역 버스 거점 빌딩, 먹자골목 상권 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '동작구', subDistrict: '흑석동',
  regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'heukseok-dong',
  localDescription: '중앙대병원과 신축 아파트 단지가 위치한 쾌적한 한강변 주거지입니다.',
  buildingCharacteristics: '병원 주변 상가, 아파트 대단지 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '동작구', subDistrict: '대방동',
  regionSlug: 'seoul', districtSlug: 'dongjak', subDistrictSlug: 'daebang-dong',
  localDescription: '안정적인 아파트 단지와 학교들이 밀집한 조용한 거주 구역입니다.',
  buildingCharacteristics: '아파트 단지 상가, 교육 시설 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '관악구', subDistrict: '신림동',
  regionSlug: 'seoul', districtSlug: 'gwanak', subDistrictSlug: 'sillim-dong',
  localDescription: '1인 가구 밀집도가 높고 서울대 주변 상권이 발달한 활기찬 지역입니다.',
  buildingCharacteristics: '원룸 빌딩, 대학가 상가, 소형 오피스텔',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '관악구', subDistrict: '봉천동',
  regionSlug: 'seoul', districtSlug: 'gwanak', subDistrictSlug: 'bongcheon-dong',
  localDescription: '샤로수길을 중심으로 트렌디한 상권이 형성된 신흥 거점입니다.',
  buildingCharacteristics: '트렌디 매장 상가, 주택가 근린 생활 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '관악구', subDistrict: '남현동',
  regionSlug: 'seoul', districtSlug: 'gwanak', subDistrictSlug: 'namhyeon-dong',
  localDescription: '사당역세권에 위치하여 등산객과 유동인구가 많은 상권 구역입니다.',
  buildingCharacteristics: '역세권 상가 빌딩, 소규모 오피스',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '녹번동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'nokbeon-dong',
  localDescription: '은평구 행정의 중심이자 대단지 아파트가 밀집한 주거 요충지입니다.',
  buildingCharacteristics: '행정 빌딩, 아파트 상가, 신축 주거 단지',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '불광동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'bulgwang-dong',
  localDescription: '북한산 입구의 풍부한 유동인구와 전통 시장 상권이 발달했습니다.',
  buildingCharacteristics: '등산객 대상 상가, 재래시장, 연립 주택',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '응암동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'eungam-dong',
  localDescription: '불광천 주변의 쾌적한 주거 인프라와 상권이 조화를 이루는 곳입니다.',
  buildingCharacteristics: '아파트 및 빌라 상가, 불광천 주변 상업 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '진관동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'jingwan-dong',
  localDescription: '은평뉴타운과 대형 의료/쇼핑 시설이 위치한 계획 주거 단지입니다.',
  buildingCharacteristics: '대형 복합 쇼핑몰, 뉴타운 아파트 상가, 은평성모병원 주변 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '갈현동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'galhyeon-dong',
  localDescription: '연신내역 역세권을 중심으로 유흥과 쇼핑 상권이 고도로 발달했습니다.',
  buildingCharacteristics: '연신내 로데오 상가, 메디컬 빌딩, 오피스텔',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '구산동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'gusan-dong',
  localDescription: '다양한 교육 시설과 조용한 주거 단지가 형성된 안정적인 지역입니다.',
  buildingCharacteristics: '학교 주변 상가, 빌라 단지, 근린 생활 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '대조동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'daejo-dong',
  localDescription: 'NC백화점과 연신내역 인근의 상업 및 주거 기능이 복합된 구역입니다.',
  buildingCharacteristics: '백화점 주변 상가, 역세권 빌딩, 오피스텔',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '수색동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'susaek-dong',
  localDescription: '디지털미디어시티와 인접하며 수색역세권 개발의 중심지에 위치합니다.',
  buildingCharacteristics: '역세권 개발지 빌딩, 신축 아파트 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '신사동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'sinsa-dong-eunpyeong',
  localDescription: '봉산 자락의 쾌적한 자연 환경과 주거지가 어우러진 평온한 동네입니다.',
  buildingCharacteristics: '아파트 단지 상가, 저층 빌라촌 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '역촌동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'yeokchon-dong',
  localDescription: '다세대 주택이 밀집해 있으며 생활 밀착형 소규모 상권이 발달했습니다.',
  buildingCharacteristics: '주택가 근린 시설, 소형 오피스 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '은평구', subDistrict: '증산동',
  regionSlug: 'seoul', districtSlug: 'eunpyeong', subDistrictSlug: 'jeungsan-dong',
  localDescription: '상암동과 인접하며 뉴타운 개발로 새롭게 도약하는 주거 지역입니다.',
  buildingCharacteristics: '신축 브랜드 아파트 상가, 주거용 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '남가좌동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'namgajwa-dong',
  localDescription: '가재울뉴타운 개발로 현대적인 대단지 아파트 숲을 이룬 주거 중심지입니다.',
  buildingCharacteristics: '신축 아파트 대단지 상가, 근린 생활 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '북가좌동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'bukgajwa-dong',
  localDescription: '증산동과 인접하며 생활 편의성이 뛰어난 대규모 거주 단지입니다.',
  buildingCharacteristics: '아파트 단지 상가, 주택가 상권 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '북아현동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'bugahyeon-dong',
  localDescription: '아현뉴타운의 핵심지로 신축 단지와 우수한 교육 인프라를 갖췄습니다.',
  buildingCharacteristics: '신축 아파트 상가, 교육 시설 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '신촌동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'sinchon-dong',
  localDescription: '연세대, 이화여대 정문의 핵심 대학가 상권이자 유동인구 요충지입니다.',
  buildingCharacteristics: '대형 상가 빌딩, 프랜차이즈 매장, 백화점',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '연희동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'yeonhui-dong',
  localDescription: '고급 주택가와 특색 있는 카페, 문화 공간이 어우러진 감성 지역입니다.',
  buildingCharacteristics: '저층 고급 주택, 카페 상가 빌딩, 소규모 갤러리',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '홍은동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'hongeun-dong',
  localDescription: '북한산과 인왕산 자락의 쾌적한 자연과 주거지가 공존하는 동네입니다.',
  buildingCharacteristics: '아파트 상가, 숲세권 빌라 단지',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '홍제동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'hongje-dong',
  localDescription: '서대문구의 주거 중심지이자 행정 서비스 이용이 편리한 곳입니다.',
  buildingCharacteristics: '중형 아파트 상가, 전통 시장 시설, 의료 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '충정로',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'chungjeongro-dong',
  localDescription: '도심권 비즈니스 중심지로 오피스 빌딩과 기업 사옥이 밀집해 있습니다.',
  buildingCharacteristics: '중대형 오피스 빌딩, 신문사 건물, 행정 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '천연동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'cheonyeon-dong',
  localDescription: '독립문과 인접하며 안정적인 주택가와 생활 상권이 형성된 지역입니다.',
  buildingCharacteristics: '아파트 상가, 소형 빌딩, 역사 주변 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '냉천동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'naengcheon-dong',
  localDescription: '감리교신학대 주변의 조용하고 쾌적한 주거 환경을 제공하는 구역입니다.',
  buildingCharacteristics: '교육 시설 주변 빌딩, 아파트 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '대신동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'daesin-dong',
  localDescription: '이화여대와 연세대 사이의 쾌적하고 조용한 주거 및 교육지입니다.',
  buildingCharacteristics: '연구소 빌딩, 다세대 주택 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '대현동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'daehyeon-dong',
  localDescription: '이화여대 정문 앞 패션, 뷰티, 문화 상권이 발달한 활기찬 구역입니다.',
  buildingCharacteristics: '트렌디 매장 상가, 소형 상업 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '미근동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'migeun-dong',
  localDescription: '경찰청 등 주요 공공기관이 위치한 서대문구의 행정 중심지 중 하나입니다.',
  buildingCharacteristics: '관공서 빌딩, 업무용 시설, 근린 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '봉원동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'bongwon-dong',
  localDescription: '안산 자락에 위치하여 자연 환경이 뛰어나며 봉원사가 있는 평온한 동네입니다.',
  buildingCharacteristics: '종교 시설 주변 상가, 자연 친화적 주택',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '영천동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'yeongcheon-dong',
  localDescription: '영천시장을 중심으로 정겨운 상권과 주거지가 잘 형성된 지역입니다.',
  buildingCharacteristics: '전통 시장 상가, 저층 주상복합 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '옥천동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'okcheon-dong',
  localDescription: '독립문역세권으로 교통이 편리하고 행정 시설 접근성이 우수합니다.',
  buildingCharacteristics: '역세권 빌딩, 오피스텔 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '창천동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'changcheon-dong',
  localDescription: '신촌 로터리를 포함한 서대문구의 최대 상업 및 유흥 중심지입니다.',
  buildingCharacteristics: '고층 빌딩, 복합 상가, 오피스 타워',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '합동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'hap-dong',
  localDescription: '서대문역 인근 오피스 밀집 지역으로 업무 환경이 잘 갖춰진 곳입니다.',
  buildingCharacteristics: '오피스 빌딩, 근린 생활 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '서대문구', subDistrict: '현저동',
  regionSlug: 'seoul', districtSlug: 'seodaemun', subDistrictSlug: 'hyeonjeo-dong',
  localDescription: '서대문형무소역사관과 독립공원이 위치한 역사적 상징성이 큰 지역입니다.',
  buildingCharacteristics: '역사 공원 시설, 인접 아파트 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '공덕동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'gongdeok-dong',
  localDescription: '비즈니스의 핵심이자 교통의 중심지로 대형 오피스 빌딩이 밀집해 있습니다.',
  buildingCharacteristics: '대형 오피스 타워, 주상복합 빌딩, 메디컬 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '아현동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'ahyeon-dong',
  localDescription: '대규모 뉴타운 개발로 현대적인 주거 타운이 형성된 마포의 대표 주거지입니다.',
  buildingCharacteristics: '신축 대단지 아파트 상가, 교육 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '도화동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'dohwa-dong',
  localDescription: '마포역과 공덕역 사이의 활발한 먹거리 상권과 업무 시설이 공존합니다.',
  buildingCharacteristics: '음식 문화 거리 상가 빌딩, 오피스텔',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '용강동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'yonggang-dong',
  localDescription: '한강변 아파트 단지와 전통 있는 마포 갈비 거리가 유명한 지역입니다.',
  buildingCharacteristics: '한강변 아파트 상가, 요식업 밀집 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '신수동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'sinsu-dong',
  localDescription: '서강대학교와 인접하며 차분하고 안정적인 주거 분위기를 제공합니다.',
  buildingCharacteristics: '대학가 주택 상권, 아파트 단지 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '대흥동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'daeheung-dong',
  localDescription: '경의선 숲길을 따라 형성된 신흥 학원가와 쾌적한 산책로가 특징입니다.',
  buildingCharacteristics: '학원 빌딩, 숲길 인접 카페 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '염리동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'yeomni-dong',
  localDescription: '대단지 아파트 신축으로 인해 주거 환경이 획기적으로 개선된 곳입니다.',
  buildingCharacteristics: '브랜드 아파트 상가, 주거 근린 생활 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '마포동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'mapo-dong',
  localDescription: '한강 조망이 우수한 고층 빌딩과 주상복합이 조화를 이루는 비즈니스지입니다.',
  buildingCharacteristics: '한강뷰 오피스, 고층 주상복합 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '상수동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'sangsu-dong',
  localDescription: '홍대 상권의 확장지로 감각적인 디자인의 매장과 작업실이 많습니다.',
  buildingCharacteristics: '독특한 디자인의 상가 빌딩, 저층 카페 건물',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '합정동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'hapjeong-dong',
  localDescription: '합정역세권 복합 문화 공간과 트렌디한 출판/예술 상권이 발달했습니다.',
  buildingCharacteristics: '메세나폴리스 복합 쇼핑몰, 출판사 빌딩, 문화 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '서교동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'seogyo-dong',
  localDescription: '홍대 앞 최대 번화가로 밤낮으로 활기찬 예술과 쇼핑의 중심지입니다.',
  buildingCharacteristics: '홍대 로데오 대형 상가, 이색 빌딩, 오피스',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '동교동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'donggyo-dong',
  localDescription: '연남동과 서교동을 잇는 거점으로 카페와 중소형 오피스가 밀집해 있습니다.',
  buildingCharacteristics: '중소형 오피스 빌딩, 상권 연계형 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '망원동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'mangwon-dong',
  localDescription: '망원시장과 망리단길의 핫플레이스가 공존하는 정겨운 주거 중심지입니다.',
  buildingCharacteristics: '망원시장 시설, 소규모 카페 거리, 다세대 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '성산동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'seongsan-dong',
  localDescription: '월드컵경기장 주변의 넓은 공원과 안정적인 아파트 단지가 형성된 곳입니다.',
  buildingCharacteristics: '체육 시설 인접 빌딩, 대단지 아파트 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '상암동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'sangam-dong',
  localDescription: '미디어 산업의 메카이자 대형 오피스 빌딩들이 즐비한 비즈니스 요충지입니다.',
  buildingCharacteristics: '방송사 사옥, 지식산업센터, DMC 업무용 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '신공덕동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'singongdeok-dong',
  localDescription: '공덕역과 연결된 편리한 교통과 현대적인 주상복합 주거 환경을 제공합니다.',
  buildingCharacteristics: '주상복합 아파트 상가, 오피스 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '연남동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'yeonnam-dong',
  localDescription: '경의선 숲길을 따라 형성된 세련된 감성의 상점들과 주거지가 어우러집니다.',
  buildingCharacteristics: '숲길 인근 카페 빌딩, 저층 단독 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '중동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'jung-dong',
  localDescription: '성산동과 상암동 사이의 조용하고 쾌적한 주거 단지로 구성된 지역입니다.',
  buildingCharacteristics: '아파트 단지 상가, 소규모 생활 편의 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '창전동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'changjeon-dong',
  localDescription: '홍익대학교와 인접하며 문화적인 색채와 주거가 조화롭게 어우러진 구역입니다.',
  buildingCharacteristics: '대학가 오피스텔, 빌라 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '구수동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'gusu-dong',
  localDescription: '광흥창역 주변의 조용하고 아늑한 분위기를 가진 평온한 주거지입니다.',
  buildingCharacteristics: '아파트 상가, 근린 생활 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '노고산동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'nogosan-dong',
  localDescription: '신촌 로터리 인근 상업 및 교육 인프라가 잘 발달된 주거·상업 혼재지입니다.',
  buildingCharacteristics: '오피스텔 상가, 중소형 오피스 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '당인동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'dangin-dong',
  localDescription: '당인리 발전소 주변의 예술적 분위기가 흐르는 카페와 주거 구역입니다.',
  buildingCharacteristics: '리모델링 카페 상가, 저층 주거 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '신정동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'sinjeong-dong-mapo',
  localDescription: '상수동과 한강 사이에 위치하여 쾌적한 한강변 생활권을 누리는 곳입니다.',
  buildingCharacteristics: '아파트 단지, 소규모 상업 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '토정동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'tojeong-dong',
  localDescription: '한강변을 따라 형성된 조망 좋은 주거지와 한식 식당가가 발달했습니다.',
  buildingCharacteristics: '한강뷰 주거 단지 상가, 식당 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '하중동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'hajung-dong',
  localDescription: '밤섬과 한강의 아름다운 조망권을 가진 프리미엄 주거 지역입니다.',
  buildingCharacteristics: '프리미엄 아파트 상가, 주택가 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '마포구', subDistrict: '하수동',
  regionSlug: 'seoul', districtSlug: 'mapo', subDistrictSlug: 'hasu-dong',
  localDescription: '합정역과 상수역 사이의 개성 넘치는 매장들이 들어선 상권 구역입니다.',
  buildingCharacteristics: '트렌디 매장 상가, 소형 오피스텔',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '청운효자동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'cheongunhyoja-dong',
  localDescription: '서촌마을의 정겨운 한옥들과 행정 시설이 공존하는 품격 있는 지역입니다.',
  buildingCharacteristics: '서촌 카페 빌딩, 한옥 상가, 행정 관공서 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '사직동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'sajik-dong',
  localDescription: '역사적인 사직단과 함께 정부청사 등 국가 행정의 중심을 이루는 곳입니다.',
  buildingCharacteristics: '정부청사 인근 오피스, 역사 시설 주변 빌딩, 아파트 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '삼청동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'samcheong-dong',
  localDescription: '전통 한옥과 현대적인 갤러리, 카페가 조화를 이루는 문화 예술의 거리입니다.',
  buildingCharacteristics: '북촌 한옥 상가, 갤러리 빌딩, 특색 있는 상업 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '부암동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'buam-dong',
  localDescription: '북악산 자락의 수려한 자연 경관과 예술적 감성이 흐르는 숲세권 동네입니다.',
  buildingCharacteristics: '자연 친화적 카페 빌딩, 예술가 작업실, 저층 주택 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '평창동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'pyeongchang-dong',
  localDescription: '서울의 대표적인 부촌이자 쾌적한 자연과 고요한 주거 환경을 제공하는 지역입니다.',
  buildingCharacteristics: '고급 단독 주택, 미술관 빌딩, 프라이빗 상업 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '무악동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'muak-dong',
  localDescription: '인왕산 아래 대단지 아파트가 조성되어 쾌적하고 조용한 거주 분위기를 자랑합니다.',
  buildingCharacteristics: '대단지 아파트 상가, 산책로 주변 시설, 주택가 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '교남동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'gyonam-dong',
  localDescription: '돈의문뉴타운 개발로 현대적인 주거 타운이 형성된 도심 속 신흥 주거지입니다.',
  buildingCharacteristics: '신축 아파트 상가, 도심형 업무 빌딩, 근린 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '가회동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'gaho-dong',
  localDescription: '북촌 한옥마을의 중심지로 가장 한국적인 아름다움을 간직한 유서 깊은 곳입니다.',
  buildingCharacteristics: '전통 한옥 체험 시설, 한옥형 상가, 관광 지구 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '종로',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'jongno-central',
  localDescription: '서울의 심장부이자 거대한 상업 지구와 역사적 유적지가 공존하는 핵심 구역입니다.',
  buildingCharacteristics: '대형 오피스 빌딩, 귀금속 상가 타워, 전통 시장 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '이화동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'ihwa-dong',
  localDescription: '낙산공원과 벽화마을의 예술적 분위기가 흐르는 문화 중심 주거지입니다.',
  buildingCharacteristics: '벽화마을 상가, 대학로 인근 빌딩, 공원 주변 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '혜화동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'hyehwa-dong',
  localDescription: '대학로 공연 문화의 메카이자 젊음과 예술의 활기가 넘치는 지역입니다.',
  buildingCharacteristics: '소극장 빌딩, 대학가 대형 상가, 학술 기관 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '창신동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'changsin-dong',
  localDescription: '동대문 패션 타운 배후의 의류 제조 거점이자 생활력이 강한 역동적인 동네입니다.',
  buildingCharacteristics: '의류 제조 시설 빌딩, 완구 거리 상가, 아파트 단지',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '숭인동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'sungin-dong',
  localDescription: '동묘 벼룩시장과 함께 현대적인 아파트 단지가 어우러진 활기찬 주거·상업지입니다.',
  buildingCharacteristics: '유통 시설 상가, 아파트 상가, 오피스텔 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '인사동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'insadong',
  localDescription: '전통 문화와 현대적 감각이 만나는 서울의 대표적인 문화 예술 관광 명소입니다.',
  buildingCharacteristics: '전통 공예 상가, 갤러리 빌딩, 복합 문화 공간',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '익선동',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'ikseondong',
  localDescription: '좁은 골목길 사이 한옥을 개조한 감각적인 매장들이 가득한 핫플레이스입니다.',
  buildingCharacteristics: '리모델링 한옥 상가, 트렌디 카페 빌딩, 소규모 상업 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '소공동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'sogong-dong',
  localDescription: '서울 시청과 주요 금융 기관, 백화점이 밀집한 경제와 행정의 중심입니다.',
  buildingCharacteristics: '정부/금융 빌딩, 백화점 타워, 특급 호텔 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '회현동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'hoehyeon-dong',
  localDescription: '남대문 시장과 함께 거대 오피스 타운이 형성된 비즈니스 핵심 거점입니다.',
  buildingCharacteristics: '전통 시장 시설, 대형 오피스 빌딩, 교통 허브 주변 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '명동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'myeong-dong',
  localDescription: '대한민국 쇼핑의 메카이자 글로벌 관광객이 가장 많이 찾는 대표 상권입니다.',
  buildingCharacteristics: '대규모 쇼핑몰, 금융가 빌딩, 로드숍 밀집 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '필동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'pil-dong',
  localDescription: '남산골 한옥마을과 대학가가 인접하여 전통과 학술 분위기가 공존합니다.',
  buildingCharacteristics: '대학교 주변 상가, 인쇄 거점 빌딩, 주택가 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '장충동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'jangchung-dong',
  localDescription: '전통 있는 맛집들과 체육 시설, 호텔들이 위치한 중구의 유서 깊은 지역입니다.',
  buildingCharacteristics: '대형 호텔 시설, 체육관 인근 빌딩, 역사적 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '광희동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'gwanghui-dong',
  localDescription: '동대문 패션 타운의 중심지이자 다국적 문화가 어우러진 글로벌 상권입니다.',
  buildingCharacteristics: '패션 쇼핑몰 타워, 다국적 상가 빌딩, 오피스텔',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '을지로동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'euljiro-dong',
  localDescription: '오래된 공업 단지와 트렌디한 카페가 만나는 독특한 감성의 핵심 업무지구입니다.',
  buildingCharacteristics: '대형 오피스 빌딩, 인쇄/정밀 산업 시설, 뉴트로 상가',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '신당동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'sindang-dong',
  localDescription: '특화된 먹거리 타운과 함께 대규모 아파트 단지가 조성된 주거 중심지입니다.',
  buildingCharacteristics: '아파트 대단지 상가, 전통 시장 시설, 주거 밀착 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '다산동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'dasan-dong',
  localDescription: '남산 성곽길 주변의 쾌적한 주거 환경과 차분한 카페 거리가 매력적인 곳입니다.',
  buildingCharacteristics: '성곽길 주변 빌딩, 아파트 상가, 주택가 상업 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '황학동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'hwanghak-dong',
  localDescription: '대규모 주방 가구 거리와 풍물 시장 등 개성 있는 유통 상권이 발달했습니다.',
  buildingCharacteristics: '주방 가구 특화 빌딩, 주상복합 상가, 전통 시장',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '중림동',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'jungrim-dong',
  localDescription: '서울역 배후의 편리한 교통과 역사적 주거 가치가 조화를 이루는 지역입니다.',
  buildingCharacteristics: '오피스 타워, 역사적 주거 단지 상가, 근린 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '후암동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'huam-dong',
  localDescription: '남산 아래 아늑한 주택가와 이국적인 감성의 루프탑 상권이 공존합니다.',
  buildingCharacteristics: '남산뷰 카페 빌딩, 저층 주거 상가, 교육 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '용산동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'yongsan-dong',
  localDescription: '용산가족공원과 주요 국가 기관이 위치한 서울의 중심 녹지 및 행정 구역입니다.',
  buildingCharacteristics: '공원 인근 시설, 군사/국가 기관 빌딩, 주택가 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '남영동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'namyeong-dong',
  localDescription: '숙대 상권과 스테이크 거리 등 특색 있는 문화가 살아있는 역동적인 지역입니다.',
  buildingCharacteristics: '대학가 상가 빌딩, 오피스텔 상권, 음식 문화 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '청파동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'cheongpa-dong',
  localDescription: '조용한 주거 환경과 대학가 배후 상권이 잘 갖춰진 교육 중심 주거지입니다.',
  buildingCharacteristics: '대학 인접 빌딩, 주택가 근린 상가, 학생 주거 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '원효로',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'wonhyoro',
  localDescription: '한강변과 용산 국제업무지구 예정지에 인접한 비즈니스 및 주거 요충지입니다.',
  buildingCharacteristics: '오피스 타워, 아파트 상가, 상업용 건축물',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '효창동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'hyochang-dong',
  localDescription: '효창공원 주변의 쾌적한 숲세권과 역사적 의미가 깊은 평온한 주거 단지입니다.',
  buildingCharacteristics: '공원 인접 상가 빌딩, 아파트 단지 상권, 교육 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '용문동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'yongmun-dong',
  localDescription: '용문전통시장을 중심으로 정겨운 생활 밀착형 상권이 잘 형성된 구역입니다.',
  buildingCharacteristics: '전통 시장 시설, 주택가 상가 빌딩, 근린 상업 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '한강로동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'hangangro-dong',
  localDescription: '용산역 주변의 비약적인 개발로 초고층 주상복합과 IT 기업 사옥이 즐비한 곳입니다.',
  buildingCharacteristics: '초고층 주상복합 상가, 기업 본사 사옥, 역세권 상업 타워',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '이촌동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'ichon-dong',
  localDescription: '한강공원을 품은 고품격 주거 단지와 조용한 생활 여건을 갖춘 대표 주거지입니다.',
  buildingCharacteristics: '브랜드 아파트 상가, 한강변 주상복합, 교육 중심 상권',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '이태원동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'itaewon-dong',
  localDescription: '이국적인 문화와 개성 넘치는 상권이 조화를 이루는 서울의 글로벌 명소입니다.',
  buildingCharacteristics: '트렌디 매장 상가, 대사관 주변 빌딩, 관광 지구 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '한남동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'hannam-dong',
  localDescription: '한강과 남산 사이의 최고급 주거지와 예술적 갤러리가 밀집한 프리미엄 구역입니다.',
  buildingCharacteristics: '고급 주상복합 상가, 갤러리 빌딩, 하이엔드 상업 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '서빙고동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'seobinggo-dong',
  localDescription: '반포대교 북단의 우수한 교통 입지와 한강변의 여유로운 주거 환경이 특징입니다.',
  buildingCharacteristics: '한강변 아파트 상가, 교통 거점 주변 시설',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '보광동',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'bogwang-dong',
  localDescription: '한남뉴타운 개발의 중심지이자 이태원과 인접하여 잠재력이 높은 주거 지역입니다.',
  buildingCharacteristics: '주택가 상가 빌딩, 재개발 구역 상권, 근린 시설',
  priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천중구', subDistrict: '영종동',
    regionSlug: 'incheon', districtSlug: 'incheon-jung-gu', subDistrictSlug: 'yeongjong-dong',
    localDescription: '인천국제공항 인근의 영종도 주거 및 항공·관광 산업의 핵심 배후지입니다.',
    buildingCharacteristics: '신축 복합 오피스텔, 호텔 주변 상가, 관광레저 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천중구', subDistrict: '운서동',
    regionSlug: 'incheon', districtSlug: 'incheon-jung-gu', subDistrictSlug: 'unseo-dong',
    localDescription: '공항 신도시가 위치하여 대규모 주거 단지와 공항 근로자 지원 시설이 밀집해 있습니다.',
    buildingCharacteristics: '원룸 타운 상가, 중대형 아파트 상가, 숙박 오피스텔',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천중구', subDistrict: '신흥동',
    regionSlug: 'incheon', districtSlug: 'incheon-jung-gu', subDistrictSlug: 'shinheung-dong',
    localDescription: '인천항 주변 물류 지구와 대규모 연안 아파트 단지가 공존하는 구역입니다.',
    buildingCharacteristics: '물류 사무실 빌딩, 노후 및 신축 주거 아파트 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천중구', subDistrict: '도원동',
    regionSlug: 'incheon', districtSlug: 'incheon-jung-gu', subDistrictSlug: 'dowon-dong',
    localDescription: '전통적인 원도심 주택가와 스포츠 체육 경기장 인근 상권이 위치해 있습니다.',
    buildingCharacteristics: '주거 밀착형 상가, 저층 오피스텔, 상가 연립 주택',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천중구', subDistrict: '연안동',
    regionSlug: 'incheon', districtSlug: 'incheon-jung-gu', subDistrictSlug: 'yeonan-dong',
    localDescription: '인천 종합어시장과 여객 터미널이 위치하여 상권 유동인구가 매우 많습니다.',
    buildingCharacteristics: '대형 유통 수산시장 빌딩, 요식 상가 타워, 사무용 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천동구', subDistrict: '송림동',
    regionSlug: 'incheon', districtSlug: 'incheon-dong-gu', subDistrictSlug: 'songlim-dong',
    localDescription: '중소형 공장 지대와 전통 주거 단지, 재개발 단지가 어우러진 복합 구역입니다.',
    buildingCharacteristics: '소형 공장 및 지식산업센터, 재건축 상가 빌딩, 소매 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천동구', subDistrict: '송현동',
    regionSlug: 'incheon', districtSlug: 'incheon-dong-gu', subDistrictSlug: 'songhyeon-dong',
    localDescription: '동인천역 북광장 상권과 역사 깊은 전통 주거 타운이 형성된 지역입니다.',
    buildingCharacteristics: '전철역 주변 상가, 전통 시장 현대화 빌딩, 저층 빌라 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천동구', subDistrict: '만석동',
    regionSlug: 'incheon', districtSlug: 'incheon-dong-gu', subDistrictSlug: 'manseok-dong',
    localDescription: '항만 물류 및 공장 지대 배후 주거 지역으로 준공 및 대청소 수요가 활발합니다.',
    buildingCharacteristics: '산업체 부속 사무실, 다세대 공동 주택 상가, 소형 상업 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천동구', subDistrict: '화수동',
    regionSlug: 'incheon', districtSlug: 'incheon-dong-gu', subDistrictSlug: 'hwasu-dong',
    localDescription: '항구 자락의 조용한 정취와 노후 빌딩 리모델링 사업이 조화를 이루는 동네입니다.',
    buildingCharacteristics: '근린 생활 건물, 소형 오피스텔, 요식업 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '미추홀구', subDistrict: '주안동',
    regionSlug: 'incheon', districtSlug: 'michuhol', subDistrictSlug: 'juan-dong',
    localDescription: '인천 서남권의 대형 주상복합과 시민공원역 주변 의료·금융 상권 중심지입니다.',
    buildingCharacteristics: '지하철 연계 복합 쇼핑몰, 메디컬 타워, 고층 오피스텔',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '미추홀구', subDistrict: '용현동',
    regionSlug: 'incheon', districtSlug: 'michuhol', subDistrictSlug: 'yonghyeon-dong',
    localDescription: '인하대학교 인근의 활기찬 대학가 먹거리 골목과 대단지 주거지가 결합해 있습니다.',
    buildingCharacteristics: '대학가 상가 건물, 브랜드 아파트 상가, 소형 원룸 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '미추홀구', subDistrict: '숭의동',
    regionSlug: 'incheon', districtSlug: 'michuhol', subDistrictSlug: 'sungui-dong',
    localDescription: '공구 상가 밀집 지역과 원도심 도시 재생 사업이 역동적으로 펼쳐지는 구역입니다.',
    buildingCharacteristics: '공구 종합 상가, 중형 오피스텔, 신축 주택 단지 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '미추홀구', subDistrict: '학익동',
    regionSlug: 'incheon', districtSlug: 'michuhol', subDistrictSlug: 'hagik-dong',
    localDescription: '인천 지방법원과 검찰청이 위치한 남부 행정·사법의 핵심 배후 타운입니다.',
    buildingCharacteristics: '법조 빌딩, 변호사 오피스, 학원 밀집 상가 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '미추홀구', subDistrict: '도화동',
    regionSlug: 'incheon', districtSlug: 'michuhol', subDistrictSlug: 'dohwa-dong-incheon',
    localDescription: '도화 도시개발 구역으로 스마트 산업단지와 청년 주택이 고밀도로 들어서 있습니다.',
    buildingCharacteristics: '지식산업센터, 청년 주상복합 상가, 교육 기관 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '미추홀구', subDistrict: '관교동',
    regionSlug: 'incheon', districtSlug: 'michuhol', subDistrictSlug: 'gwangyo-dong',
    localDescription: '인천종합터미널 배후 구역으로 백화점과 대형 상업 복합 시설이 인접해 있습니다.',
    buildingCharacteristics: '유통 매장 빌딩, 먹자골목 상가 건물, 아파트 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '연수구', subDistrict: '송도동',
    regionSlug: 'incheon', districtSlug: 'yeonsu', subDistrictSlug: 'songdo-dong',
    localDescription: '인천 최고 중심 스마트 국제도시로 초고층 오피스 타워와 바이오 연구 단지가 가득합니다.',
    buildingCharacteristics: '초고층 랜드마크 타워, 통유리 오피스, 프리미엄 주상복합몰',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '연수구', subDistrict: '연수동',
    regionSlug: 'incheon', districtSlug: 'yeonsu', subDistrictSlug: 'yeonsu-dong',
    localDescription: '연수구 행정 관청과 역세권 생활 밀착 상권이 고도로 발달한 전통 주거 타운입니다.',
    buildingCharacteristics: '자치구 청사 인근 빌딩, 오피스텔 상가, 메디컬 종합 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '연수구', subDistrict: '옥련동',
    regionSlug: 'incheon', districtSlug: 'yeonsu', subDistrictSlug: 'ongnyeon-dong',
    localDescription: '송도 유원지 관광 단지 및 중고차 유통 물류 산업과 인접한 교통 요지입니다.',
    buildingCharacteristics: '수출 물류 사무 빌딩, 저층 식당 상가, 아파트 단지 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '연수구', subDistrict: '선학동',
    regionSlug: 'incheon', districtSlug: 'yeonsu', subDistrictSlug: 'seonhak-dong',
    localDescription: '선학 경기장과 청학산 아래 형성된 공원세권 주택가 상권이 있는 지역입니다.',
    buildingCharacteristics: '아파트 상가 건물, 체육 인근 상업 시설, 근린 주택',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '연수구', subDistrict: '청학동',
    regionSlug: 'incheon', districtSlug: 'yeonsu', subDistrictSlug: 'cheonghak-dong',
    localDescription: '다양한 평형의 주거 타운과 주민 복지 중심 인프라가 갖춰진 조용한 동네입니다.',
    buildingCharacteristics: '중형 아파트 단지 상가, 소규모 교육 학원 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '연수구', subDistrict: '동춘동',
    regionSlug: 'incheon', districtSlug: 'yeonsu', subDistrictSlug: 'dongchun-dong',
    localDescription: '송도국제도시와 맞닿아 대형 마트 및 생활 테마 쇼핑 지구 수요가 집중되는 구역입니다.',
    buildingCharacteristics: '대형 할인마트 빌딩, 아파트 상가 밀집 타운, 복합 패션 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '남동구', subDistrict: '구월동',
    regionSlug: 'incheon', districtSlug: 'namdong', subDistrictSlug: 'guwol-dong',
    localDescription: '인천시청과 공공 기관, 대형 병원, 핵심 번화가가 집약된 인천 행정·교통 중심지입니다.',
    buildingCharacteristics: '행정 타워 빌딩, 대형 유통 백화점 건물, 메디컬 종합 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '남동구', subDistrict: '간석동',
    regionSlug: 'incheon', districtSlug: 'namdong', subDistrictSlug: 'ganseok-dong',
    localDescription: '교통 요충지이자 가구 거리 상권과 고층 주상복합이 가득한 역동적인 지구입니다.',
    buildingCharacteristics: '가구 대형 쇼룸 빌딩, 역세권 오피스텔 상가, 근린 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '남동구', subDistrict: '만수동',
    regionSlug: 'incheon', districtSlug: 'namdong', subDistrictSlug: 'mansu-dong',
    localDescription: '녹지가 넓고 배후 아파트 단지가 촘촘히 밀집한 안락하고 평화로운 주거 구역입니다.',
    buildingCharacteristics: '아파트 상가 타운, 초중교 인근 학원가 빌딩, 소규모 마트',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '남동구', subDistrict: '서창동',
    regionSlug: 'incheon', districtSlug: 'namdong', subDistrictSlug: 'seochang-dong',
    localDescription: '서창 신도시의 신축 대규모 주거 타운으로 젊은 상권 수요가 끊임없는 지역입니다.',
    buildingCharacteristics: '신축 주거단지 상가 빌딩, 브랜드 식음 매장 건물',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '남동구', subDistrict: '논현동',
    regionSlug: 'incheon', districtSlug: 'namdong', subDistrictSlug: 'nonhyeon-dong-incheon',
    localDescription: '소래포구 관광 상권과 남동공단 배후 신축 아파트 지대가 공존하는 구역입니다.',
    buildingCharacteristics: '관광 횟집 상가 타워, 남동공단 인접 업무 오피스 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '부평구', subDistrict: '부평동',
    regionSlug: 'incheon', districtSlug: 'bupyeong', subDistrictSlug: 'bupyeong-dong',
    localDescription: '전국 단위 최대 규모의 지하상가와 전통 시장, 의료 기관이 집중된 인천 최대의 상권입니다.',
    buildingCharacteristics: '초대형 상가 타워, 역사 주변 빌딩, 메디컬 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '부평구', subDistrict: '산곡동',
    regionSlug: 'incheon', districtSlug: 'bupyeong', subDistrictSlug: 'sangok-dong',
    localDescription: '대규모 신규 뉴타운 입주로 정밀 청결 관리 및 준공 수요가 급증하는 곳입니다.',
    buildingCharacteristics: '신축 브랜드 대단지 상가, 리모델링 소형 상가 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '부평구', subDistrict: '청천동',
    regionSlug: 'incheon', districtSlug: 'bupyeong', subDistrictSlug: 'cheongcheon-dong',
    localDescription: '국가 산업 벨트 배후 지역으로 대형 테크노 타워와 지식산업센터가 밀집해 있습니다.',
    buildingCharacteristics: '대형 테크노 밸리 빌딩, 지식산업센터, 산업체 업무 동',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '부평구', subDistrict: '갈산동',
    regionSlug: 'incheon', districtSlug: 'bupyeong', subDistrictSlug: 'galsan-dong',
    localDescription: '인천테크노밸리 U1 등 지식산업센터 클러스터의 중심 요충지입니다.',
    buildingCharacteristics: '첨단 지식산업센터, 역세권 지식 사무 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '부평구', subDistrict: '삼산동',
    regionSlug: 'incheon', districtSlug: 'bupyeong', subDistrictSlug: 'samsan-dong',
    localDescription: '굴포천 수변 공원과 삼산 체육관을 끼고 쾌적하게 정돈된 주거 및 교육 인프라 지구입니다.',
    buildingCharacteristics: '체육관 주변 프랜차이즈 상가, 대형 학원가 오피스',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '부평구', subDistrict: '부개동',
    regionSlug: 'incheon', districtSlug: 'bupyeong', subDistrictSlug: 'bugae-dong',
    localDescription: '상동 신도시와 인접하며 우수한 학군과 차분하고 안정된 거주 환경을 제공하는 구역입니다.',
    buildingCharacteristics: '생활 복합 상가 건물, 아파트 단지 주변 학원가 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '부평구', subDistrict: '십정동',
    regionSlug: 'incheon', districtSlug: 'bupyeong', subDistrictSlug: 'shipjeong-dong',
    localDescription: '대규모 신축 주거 클러스터 조성 사업이 활발히 마무리된 서남권 도심 거주지입니다.',
    buildingCharacteristics: '신축 브랜드 대단지 상가, 소형 가구 생활 상업 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '계양구', subDistrict: '계산동',
    regionSlug: 'incheon', districtSlug: 'gyeyang', subDistrictSlug: 'gyesan-dong',
    localDescription: '계양구 행정 타운과 경인교대역 중심의 활발한 행정 및 교육 상권이 결합해 있습니다.',
    buildingCharacteristics: '관공서 업무용 빌딩, 경인교대 대학가 밀집 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '계양구', subDistrict: '작전동',
    regionSlug: 'incheon', districtSlug: 'gyeyang', subDistrictSlug: 'jakjeon-dong',
    localDescription: '작전역 사거리를 필두로 대형 유통 시설과 가구 브랜드 등이 집결된 교통 요지입니다.',
    buildingCharacteristics: '대형 하이마트/할인점 빌딩, 주상복합형 오피스텔 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '계양구', subDistrict: '효성동',
    regionSlug: 'incheon', districtSlug: 'gyeyang', subDistrictSlug: 'hyoseong-dong',
    localDescription: '정밀 가공 공업 단지와 오랜 정겨운 원도심 상권이 어우러진 주거·산업 복합지입니다.',
    buildingCharacteristics: '소형 공업 제조 사무동, 아파트 리모델링 단지 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '계양구', subDistrict: '서운동',
    regionSlug: 'incheon', districtSlug: 'gyeyang', subDistrictSlug: 'seoun-dong',
    localDescription: '서운 일반 산업단지 개발로 첨단 바이오 및 제조 IT 빌딩들의 유입이 활발합니다.',
    buildingCharacteristics: '신축 일반산업단지 빌딩, 물류창고형 사무소',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '계양구', subDistrict: '임학동',
    regionSlug: 'incheon', districtSlug: 'gyeyang', subDistrictSlug: 'imhak-dong',
    localDescription: '임학역 주변 아파트 단지와 생활 밀착 편의 상권이 잘 형성된 쾌적한 거주 구역입니다.',
    buildingCharacteristics: '생활 근린 빌딩, 아파트 상가, 학원 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '청라동',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'cheongra-dong',
    localDescription: '청라국제도시 중심 금융, 의료 복합 인프라 및 커낼웨이 수변 복합 타운이 위치합니다.',
    buildingCharacteristics: '수변 복합 오피스 타워, 초고층 랜드마크 아파트, 통유리 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '검암동',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'geomam-dong',
    localDescription: '공항철도 및 인천 2호선 환승 거점으로 수도권 직장 배후 주거지가 조밀하게 형성되어 있습니다.',
    buildingCharacteristics: '역세권 오피스텔 상가, 소형 병의원 빌딩, 프랜차이즈 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '경서동',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'gyeongseo-dong',
    localDescription: '생태 공원 녹지와 산업 인프라가 공존하며 환경 클리닝 및 박리 작업 수요가 많습니다.',
    buildingCharacteristics: '산업 공장 사무동, 물류 센터, 신축 빌라 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '연희동',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'yeonhui-dong-incheon',
    localDescription: '인천 아시아드 경기장을 품은 쾌적한 레저 주거 배후 타운입니다.',
    buildingCharacteristics: '종합 스포츠 인근 빌딩, 아파트 상가 타운, 생활 편의 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '가정동',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'gajeong-dong',
    localDescription: '루원시티 개발 사업 완수로 대단지 고층 주상복합 빌딩 군락이 장관을 이루는 중심가입니다.',
    buildingCharacteristics: '루원시티 신축 주상복합 타워, 메가박스 주변 대형 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '석남동',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'seognam-dong',
    localDescription: '인천 2호선 및 7호선 환승 구역으로 노후 빌딩 리빌딩과 상업 지구가 결합해 있습니다.',
    buildingCharacteristics: '지하철 연계 상가, 중형 오피스 빌딩, 저층 다세대 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '가좌동',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'gajwa-dong',
    localDescription: '전통적인 제조 공업 지대 배후 주택가 및 최근 감성 카페 문화 거리가 들어선 복합지입니다.',
    buildingCharacteristics: '소형 제조 공장 건물, 리모델링 문화 빌딩, 연립 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '검단동',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'geomdan-dong',
    localDescription: '검단 신도시 중심 생활권으로 신축 아파트와 중심 상업 지구 형성이 활발한 거점입니다.',
    buildingCharacteristics: '신축 중심상업지구 메인 빌딩, 복합 영화관 입점 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '당하동',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'dangha-dong',
    localDescription: '대규모 브랜드 단지와 학교들이 조밀하게 밀집한 안전한 교육 중심지 주거 타운입니다.',
    buildingCharacteristics: '브랜드 아파트 단지 상가, 교육 종합 학원가 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '원당동',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'wondang-dong',
    localDescription: '검단지구 배후의 조용하고 안정적이며 자연 친화적인 단독 주택 및 아파트 지역입니다.',
    buildingCharacteristics: '아파트 대규모 상가, 친근한 생활 근린 매장 빌딩',
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
  localDescription: '상암DMC부터 공덕 업무지구까지 마포구의 비즈니스 인프라를 꼼꼼하게 관리합니다.',
  buildingCharacteristics: '미디어 센터, IT 오피스 타워, 홍대/연남 카페 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '종로구', subDistrict: '전지역',
  regionSlug: 'seoul', districtSlug: 'jongno', subDistrictSlug: 'all',
  localDescription: '광화문 비즈니스 타워부터 인사동, 평창동 주거지까지 종로구 전역의 맞춤형 관리를 지원합니다.',
  buildingCharacteristics: '대형 오피스 빌딩, 문화 시설, 한옥 상가, 고급 주택',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '중구', subDistrict: '전지역',
  regionSlug: 'seoul', districtSlug: 'jung-gu', subDistrictSlug: 'all',
  localDescription: '명동과 을지로의 상업 요충지부터 남산 주변 주거지까지 중구의 전문 청결을 책임집니다.',
  buildingCharacteristics: '금융/상업용 빌딩, 호텔 시설, 쇼핑몰 타워',
  priority: 1, indexStatus: 'index'
  },
  {
  city: '서울', district: '용산구', subDistrict: '전지역',
  regionSlug: 'seoul', districtSlug: 'yongsan', subDistrictSlug: 'all',
  localDescription: '용산역세권 오피스부터 한남동, 이태원 상권까지 용산구의 다양한 공간을 꼼꼼하게 관리합니다.',
  buildingCharacteristics: '초고층 주상복합, 기업 사옥, 글로벌 상가 빌딩',
  priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천중구', subDistrict: '전지역',
    regionSlug: 'incheon', districtSlug: 'incheon-jung-gu', subDistrictSlug: 'all',
    localDescription: '인천국제공항과 영종 신도시, 인천 연안 수산유통 시설까지 중구 전역을 정밀하게 커버합니다.',
    buildingCharacteristics: '공항 복합 쇼핑몰, 숙박 타워, 항만 물류 오피스',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천동구', subDistrict: '전지역',
    regionSlug: 'incheon', districtSlug: 'incheon-dong-gu', subDistrictSlug: 'all',
    localDescription: '송현동 전통 상권과 공업 지대를 위한 맞춤형 산업 환경 위생 클리닝 서비스를 제공합니다.',
    buildingCharacteristics: '전통 현대 시장 빌딩, 중소 공장동 사무실, 저층 근린 시설',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '미추홀구', subDistrict: '전지역',
    regionSlug: 'incheon', districtSlug: 'michuhol', subDistrictSlug: 'all',
    localDescription: '시민공원 법조타운부터 주안 번화가까지 미추홀구의 중심 빌딩 환경 관리를 도맡아 수행합니다.',
    buildingCharacteristics: '주상복합 쇼핑 타워, 메디컬 종합 메인 빌딩, 법조 타운 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '연수구', subDistrict: '전지역',
    regionSlug: 'incheon', districtSlug: 'yeonsu', subDistrictSlug: 'all',
    localDescription: '송도 국제도시의 하이엔드 마천루 빌딩 군락과 상업 지대를 위한 품격 높은 위생 관리를 약속합니다.',
    buildingCharacteristics: '초고층 랜드마크 오피스, 프리미엄 주상복합, 지식산업센터',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '남동구', subDistrict: '전지역',
    regionSlug: 'incheon', districtSlug: 'namdong', subDistrictSlug: 'all',
    localDescription: '인천시청 행정 중심가와 간석 가구단지, 서창 신도시까지 남동구 전역의 쾌적한 위생을 유지합니다.',
    buildingCharacteristics: '시청 행정 기관 빌딩, 대형 백화점, 메디컬 종합 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '부평구', subDistrict: '전지역',
    regionSlug: 'incheon', districtSlug: 'bupyeong', subDistrictSlug: 'all',
    localDescription: '부평역 메인 역세권 빌딩들과 청천동 테크노밸리 산업 시설의 현장 맞춤 청결을 책임집니다.',
    buildingCharacteristics: '대형 복합 쇼핑 상가, 지식산업센터 타워, 삼산가 주변 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '계양구', subDistrict: '전지역',
    regionSlug: 'incheon', districtSlug: 'gyeyang', subDistrictSlug: 'all',
    localDescription: '계양구 청사 인근 행정 상권과 서운 테크노밸리의 지식 산업용 빌딩들을 집중 관리합니다.',
    buildingCharacteristics: '관공서 비즈니스 빌딩, 지식산업센터, 생활 빌라 상가',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '인천', district: '인천서구', subDistrict: '전지역',
    regionSlug: 'incheon', districtSlug: 'incheon-seo-gu', subDistrictSlug: 'all',
    localDescription: '청라 국제도시 수변 오피스들과 루원시티, 검단 신도시의 신축 대규모 빌딩들을 안전하게 복원합니다.',
    buildingCharacteristics: '신축 복합 상가 빌딩, 수변 오피스 타워, 초고층 주상복합 단지',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '도봉구', subDistrict: '쌍문동',
    regionSlug: 'seoul', districtSlug: 'dobong', subDistrictSlug: 'ssangmun-dong',
    localDescription: '도봉구 쌍문동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '도봉구', subDistrict: '방학동',
    regionSlug: 'seoul', districtSlug: 'dobong', subDistrictSlug: 'banghak-dong',
    localDescription: '도봉구 방학동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '도봉구', subDistrict: '창동',
    regionSlug: 'seoul', districtSlug: 'dobong', subDistrictSlug: 'chang-dong',
    localDescription: '도봉구 창동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '도봉구', subDistrict: '도봉동',
    regionSlug: 'seoul', districtSlug: 'dobong', subDistrictSlug: 'dobong-dong',
    localDescription: '도봉구 도봉동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '도봉구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'dobong', subDistrictSlug: 'all',
    localDescription: '도봉산 인근의 주거 밀집 지역으로 아파트 단지와 근린생활시설이 발달해 있습니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '노원구', subDistrict: '월계동',
    regionSlug: 'seoul', districtSlug: 'nowon', subDistrictSlug: 'wolgye-dong',
    localDescription: '노원구 월계동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '노원구', subDistrict: '공릉동',
    regionSlug: 'seoul', districtSlug: 'nowon', subDistrictSlug: 'gongneung-dong',
    localDescription: '노원구 공릉동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '노원구', subDistrict: '하계동',
    regionSlug: 'seoul', districtSlug: 'nowon', subDistrictSlug: 'hagye-dong',
    localDescription: '노원구 하계동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '노원구', subDistrict: '중계동',
    regionSlug: 'seoul', districtSlug: 'nowon', subDistrictSlug: 'junggye-dong',
    localDescription: '노원구 중계동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '노원구', subDistrict: '상계동',
    regionSlug: 'seoul', districtSlug: 'nowon', subDistrictSlug: 'sanggye-dong',
    localDescription: '노원구 상계동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '노원구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'nowon', subDistrictSlug: 'all',
    localDescription: '대규모 아파트 단지와 우수한 교육 인프라, 학원가가 발달한 주거 중심 지역입니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강북구', subDistrict: '미아동',
    regionSlug: 'seoul', districtSlug: 'gangbuk', subDistrictSlug: 'mia-dong',
    localDescription: '강북구 미아동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강북구', subDistrict: '번동',
    regionSlug: 'seoul', districtSlug: 'gangbuk', subDistrictSlug: 'beon-dong',
    localDescription: '강북구 번동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강북구', subDistrict: '수유동',
    regionSlug: 'seoul', districtSlug: 'gangbuk', subDistrictSlug: 'suyu-dong',
    localDescription: '강북구 수유동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강북구', subDistrict: '우이동',
    regionSlug: 'seoul', districtSlug: 'gangbuk', subDistrictSlug: 'ui-dong',
    localDescription: '강북구 우이동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강북구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangbuk', subDistrictSlug: 'all',
    localDescription: '북한산 아래 위치하여 자연 환경이 좋고 역세권 주변 상권이 조화를 이루는 거주지입니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '돈암동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'donam-dong',
    localDescription: '성북구 돈암동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '정릉동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'jeongneung-dong',
    localDescription: '성북구 정릉동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '길음동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'gireum-dong',
    localDescription: '성북구 길음동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '월곡동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'wolgok-dong',
    localDescription: '성북구 월곡동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '장위동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'jangwi-dong',
    localDescription: '성북구 장위동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '성북동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'seongbuk-dong',
    localDescription: '성북구 성북동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '삼선동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'samseon-dong',
    localDescription: '성북구 삼선동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '동선동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'dongseon-dong',
    localDescription: '성북구 동선동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '안암동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'anam-dong',
    localDescription: '성북구 안암동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '보문동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'bomun-dong',
    localDescription: '성북구 보문동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '종암동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'jongam-dong',
    localDescription: '성북구 종암동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '석관동',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'seokgwan-dong',
    localDescription: '성북구 석관동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성북구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seongbuk', subDistrictSlug: 'all',
    localDescription: '구릉지형의 전통적인 주택가와 대학가가 공존하며 정취 있는 주거 타운을 형성하고 있습니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '신설동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'sinseol-dong',
    localDescription: '동대문구 신설동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '용두동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'yongdu-dong',
    localDescription: '동대문구 용두동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '제기동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'jegi-dong',
    localDescription: '동대문구 제기동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '전농동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'jeonnong-dong',
    localDescription: '동대문구 전농동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '답십리동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'dapsimni-dong',
    localDescription: '동대문구 답십리동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '장안동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'jangan-dong',
    localDescription: '동대문구 장안동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '청량리동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'cheongnyangni-dong',
    localDescription: '동대문구 청량리동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '회기동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'hoegi-dong',
    localDescription: '동대문구 회기동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '휘경동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'hwigyeong-dong',
    localDescription: '동대문구 휘경동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '이문동',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'imun-dong',
    localDescription: '동대문구 이문동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '동대문구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'dongdaemun', subDistrictSlug: 'all',
    localDescription: '청량리역 중심의 교통 요지이자 상업 시설 및 교육기관이 밀집한 전통적인 중심부입니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '중랑구', subDistrict: '면목동',
    regionSlug: 'seoul', districtSlug: 'jungnang', subDistrictSlug: 'myeonmok-dong',
    localDescription: '중랑구 면목동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '중랑구', subDistrict: '상봉동',
    regionSlug: 'seoul', districtSlug: 'jungnang', subDistrictSlug: 'sangbong-dong',
    localDescription: '중랑구 상봉동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '중랑구', subDistrict: '중화동',
    regionSlug: 'seoul', districtSlug: 'jungnang', subDistrictSlug: 'junghwa-dong',
    localDescription: '중랑구 중화동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '중랑구', subDistrict: '묵동',
    regionSlug: 'seoul', districtSlug: 'jungnang', subDistrictSlug: 'muk-dong',
    localDescription: '중랑구 묵동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '중랑구', subDistrict: '망우동',
    regionSlug: 'seoul', districtSlug: 'jungnang', subDistrictSlug: 'mangu-dong',
    localDescription: '중랑구 망우동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '중랑구', subDistrict: '신내동',
    regionSlug: 'seoul', districtSlug: 'jungnang', subDistrictSlug: 'sinnae-dong',
    localDescription: '중랑구 신내동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '중랑구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'jungnang', subDistrictSlug: 'all',
    localDescription: '상봉역 상권과 신내지구 신축 아파트 단지 등 생활 편의가 높은 친근한 주거지입니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '왕십리동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'wangsimni-dong',
    localDescription: '성동구 왕십리동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '마장동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'majang-dong',
    localDescription: '성동구 마장동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '사근동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'sageun-dong',
    localDescription: '성동구 사근동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '행당동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'haengdang-dong',
    localDescription: '성동구 행당동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '응봉동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'eungbong-dong',
    localDescription: '성동구 응봉동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '금호동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'geumho-dong',
    localDescription: '성동구 금호동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '옥수동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'oksu-dong',
    localDescription: '성동구 옥수동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '성수동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'seongsu-dong',
    localDescription: '성동구 성수동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '송정동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'songjeong-dong',
    localDescription: '성동구 송정동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '용답동',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'yongdap-dong',
    localDescription: '성동구 용답동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '성동구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seongdong', subDistrictSlug: 'all',
    localDescription: '성수동 IT 밸리와 힙한 상권, 한강변 신흥 고급 주거단지가 공존하는 다이나믹한 지역입니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '광진구', subDistrict: '중곡동',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'junggok-dong',
    localDescription: '광진구 중곡동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '광진구', subDistrict: '군자동',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'gunja-dong',
    localDescription: '광진구 군자동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '광진구', subDistrict: '능동',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'neung-dong',
    localDescription: '광진구 능동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '광진구', subDistrict: '광장동',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'gwangjang-dong',
    localDescription: '광진구 광장동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '광진구', subDistrict: '구의동',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'guui-dong',
    localDescription: '광진구 구의동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '광진구', subDistrict: '자양동',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'jayang-dong',
    localDescription: '광진구 자양동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '광진구', subDistrict: '화양동',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'hwayang-dong',
    localDescription: '광진구 화양동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '광진구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gwangjin', subDistrictSlug: 'all',
    localDescription: '건국대 상권과 어린이대공원, 한강 공원이 인접하여 활기차고 쾌적한 환경을 자랑합니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서초구', subDistrict: '서초동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'seocho-dong',
    localDescription: '서초구 서초동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서초구', subDistrict: '잠원동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'jamwon-dong',
    localDescription: '서초구 잠원동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서초구', subDistrict: '반포동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'banpo-dong',
    localDescription: '서초구 반포동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서초구', subDistrict: '방배동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'bangbae-dong',
    localDescription: '서초구 방배동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서초구', subDistrict: '양재동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'yangjae-dong',
    localDescription: '서초구 양재동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서초구', subDistrict: '내곡동',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'naegok-dong',
    localDescription: '서초구 내곡동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '서초구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'seocho', subDistrictSlug: 'all',
    localDescription: '대법원 등 법조 타운과 예술의전당, 고급 빌라 및 신축 대단지 아파트가 밀집한 명품 지역입니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '개포동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'gaepo-dong',
    localDescription: '강남구 개포동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '논현동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'nonhyeon-dong',
    localDescription: '강남구 논현동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '대치동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'daechi-dong',
    localDescription: '강남구 대치동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '도곡동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'dogok-dong',
    localDescription: '강남구 도곡동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '삼성동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'samseong-dong',
    localDescription: '강남구 삼성동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '일원동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'ilwon-dong',
    localDescription: '강남구 일원동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '역삼동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'yeoksam-dong',
    localDescription: '강남구 역삼동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '세곡동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'segok-dong',
    localDescription: '강남구 세곡동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '수서동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'suseo-dong',
    localDescription: '강남구 수서동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '신사동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'sinsa-dong',
    localDescription: '강남구 신사동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '압구정동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'apgujeong-dong',
    localDescription: '강남구 압구정동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '청담동',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'cheongdam-dong',
    localDescription: '강남구 청담동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강남구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangnam', subDistrictSlug: 'all',
    localDescription: '테헤란로 금융/IT 벨트와 압구정·청담동의 명품 상권, 대치동 학원가가 어우러진 비즈니스와 교육의 메카입니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '풍납동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'pungnap-dong',
    localDescription: '송파구 풍납동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '거여동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'geoye-dong',
    localDescription: '송파구 거여동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '마천동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'macheon-dong',
    localDescription: '송파구 마천동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '방이동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'bangi-dong',
    localDescription: '송파구 방이동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '오륜동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'oryun-dong',
    localDescription: '송파구 오륜동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '오금동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'ogeum-dong',
    localDescription: '송파구 오금동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '송파동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'songpa-dong',
    localDescription: '송파구 송파동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '석촌동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'seokchon-dong',
    localDescription: '송파구 석촌동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '삼전동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'samjeon-dong',
    localDescription: '송파구 삼전동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '가락동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'garak-dong',
    localDescription: '송파구 가락동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '문정동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'munjeong-dong',
    localDescription: '송파구 문정동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '장지동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'jangji-dong',
    localDescription: '송파구 장지동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '위례동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'wirye-dong',
    localDescription: '송파구 위례동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '잠실동',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'jamsil-dong',
    localDescription: '송파구 잠실동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '송파구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'songpa', subDistrictSlug: 'all',
    localDescription: '롯데타워와 올림픽공원, 잠실 엘스·리센츠 등 대단지 아파트가 들어선 강남권의 핵심 주거·상업 구역입니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '강일동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'gangil-dong',
    localDescription: '강동구 강일동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '고덕동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'godeok-dong',
    localDescription: '강동구 고덕동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '길동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'gil-dong',
    localDescription: '강동구 길동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '둔촌동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'dunchon-dong',
    localDescription: '강동구 둔촌동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '명일동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'myeongil-dong',
    localDescription: '강동구 명일동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '상일동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'sangil-dong',
    localDescription: '강동구 상일동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '성내동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'seongnae-dong',
    localDescription: '강동구 성내동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '암사동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'amsa-dong',
    localDescription: '강동구 암사동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '천호동',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'cheonho-dong',
    localDescription: '강동구 천호동의 쾌적한 빌딩 위생 및 상가 청소 서비스를 전문으로 담당합니다.',
    buildingCharacteristics: '상가 주택, 아파트 단지 상가, 근린 시설 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '서울', district: '강동구', subDistrict: '전지역',
    regionSlug: 'seoul', districtSlug: 'gangdong', subDistrictSlug: 'all',
    localDescription: '고덕 비즈밸리 신규 개발과 대단지 아파트 입주로 새롭게 발돋움하는 쾌적한 녹지 친화적 도시입니다.',
    buildingCharacteristics: '아파트 상가 빌딩, 소형 사옥, 학원가, 상업 타워',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '심곡동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'simgok-dong',
    localDescription: '부천시 심곡동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '원미동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'wonmi-dong',
    localDescription: '부천시 원미동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '소사동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'sosa-dong',
    localDescription: '부천시 소사동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '역곡동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'yeokgok-dong',
    localDescription: '부천시 역곡동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '중동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'jung-dong',
    localDescription: '부천시 중동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '상동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'sang-dong',
    localDescription: '부천시 상동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '송내동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'songnae-dong',
    localDescription: '부천시 송내동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '원종동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'wonjong-dong',
    localDescription: '부천시 원종동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '고강동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'gogang-dong',
    localDescription: '부천시 고강동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '춘의동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'chunui-dong',
    localDescription: '부천시 춘의동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '도당동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'dodang-dong',
    localDescription: '부천시 도당동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '약대동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'yakdae-dong',
    localDescription: '부천시 약대동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '범박동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'beombak-dong',
    localDescription: '부천시 범박동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '옥길동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'okgil-dong',
    localDescription: '부천시 옥길동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '괴안동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'goean-dong',
    localDescription: '부천시 괴안동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '성곡동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'seonggok-dong',
    localDescription: '부천시 성곡동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '오정동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'ojeong-dong',
    localDescription: '부천시 오정동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '신흥동',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'sinheung-dong',
    localDescription: '부천시 신흥동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '부천시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'bucheon', subDistrictSlug: 'all',
    localDescription: '서울과 인천을 잇는 거점 도시로 상동 및 중동 신도시의 대규모 주거 상업 환경이 고도로 발달해 있습니다.',
    buildingCharacteristics: '지식산업센터, 프라자 상가 빌딩, 주거 밀집 상권 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광명시', subDistrict: '광명동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangmyeong', subDistrictSlug: 'gwangmyeong-dong',
    localDescription: '광명시 광명동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광명시', subDistrict: '철산동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangmyeong', subDistrictSlug: 'cheolsan-dong',
    localDescription: '광명시 철산동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광명시', subDistrict: '하안동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangmyeong', subDistrictSlug: 'haan-dong',
    localDescription: '광명시 하안동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광명시', subDistrict: '소하동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangmyeong', subDistrictSlug: 'soha-dong',
    localDescription: '광명시 소하동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광명시', subDistrict: '일직동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangmyeong', subDistrictSlug: 'iljik-dong',
    localDescription: '광명시 일직동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광명시', subDistrict: '학온동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangmyeong', subDistrictSlug: 'hagon-dong',
    localDescription: '광명시 학온동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광명시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'gwangmyeong', subDistrictSlug: 'all',
    localDescription: 'KTX 광명역 역세권 개발과 대형 유통 상권(이케아, 코스트코)이 결합된 서울 서남부 인접 핵심 요지입니다.',
    buildingCharacteristics: '지식산업센터, 프라자 상가 빌딩, 주거 밀집 상권 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '구리시', subDistrict: '갈매동',
    regionSlug: 'gyeonggi', districtSlug: 'guri', subDistrictSlug: 'galmae-dong',
    localDescription: '구리시 갈매동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '구리시', subDistrict: '동구동',
    regionSlug: 'gyeonggi', districtSlug: 'guri', subDistrictSlug: 'donggu-dong',
    localDescription: '구리시 동구동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '구리시', subDistrict: '인창동',
    regionSlug: 'gyeonggi', districtSlug: 'guri', subDistrictSlug: 'inchang-dong',
    localDescription: '구리시 인창동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '구리시', subDistrict: '교문동',
    regionSlug: 'gyeonggi', districtSlug: 'guri', subDistrictSlug: 'gyomun-dong',
    localDescription: '구리시 교문동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '구리시', subDistrict: '수택동',
    regionSlug: 'gyeonggi', districtSlug: 'guri', subDistrictSlug: 'sutaek-dong',
    localDescription: '구리시 수택동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '구리시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'guri', subDistrictSlug: 'all',
    localDescription: '서울 동부와 밀착되어 지하철 연장으로 가치가 높아진 주거 환경 및 근린 생활권이 발달한 도시입니다.',
    buildingCharacteristics: '지식산업센터, 프라자 상가 빌딩, 주거 밀집 상권 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '하남시', subDistrict: '천현동',
    regionSlug: 'gyeonggi', districtSlug: 'hanam', subDistrictSlug: 'cheonhyeon-dong',
    localDescription: '하남시 천현동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '하남시', subDistrict: '신장동',
    regionSlug: 'gyeonggi', districtSlug: 'hanam', subDistrictSlug: 'sinjang-dong',
    localDescription: '하남시 신장동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '하남시', subDistrict: '덕풍동',
    regionSlug: 'gyeonggi', districtSlug: 'hanam', subDistrictSlug: 'deokpung-dong',
    localDescription: '하남시 덕풍동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '하남시', subDistrict: '미사동',
    regionSlug: 'gyeonggi', districtSlug: 'hanam', subDistrictSlug: 'misa-dong',
    localDescription: '하남시 미사동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '하남시', subDistrict: '감북동',
    regionSlug: 'gyeonggi', districtSlug: 'hanam', subDistrictSlug: 'gambuk-dong',
    localDescription: '하남시 감북동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '하남시', subDistrict: '감일동',
    regionSlug: 'gyeonggi', districtSlug: 'hanam', subDistrictSlug: 'gamil-dong',
    localDescription: '하남시 감일동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '하남시', subDistrict: '춘궁동',
    regionSlug: 'gyeonggi', districtSlug: 'hanam', subDistrictSlug: 'chungung-dong',
    localDescription: '하남시 춘궁동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '하남시', subDistrict: '초이동',
    regionSlug: 'gyeonggi', districtSlug: 'hanam', subDistrictSlug: 'choi-dong',
    localDescription: '하남시 초이동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '하남시', subDistrict: '위례동',
    regionSlug: 'gyeonggi', districtSlug: 'hanam', subDistrictSlug: 'wirye-dong',
    localDescription: '하남시 위례동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '하남시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'hanam', subDistrictSlug: 'all',
    localDescription: '미사강변도시 및 위례 신도시, 감일지구 등 친환경 대단지 아파트와 지식산업센터가 밀집한 역동적인 신흥 주거지입니다.',
    buildingCharacteristics: '지식산업센터, 프라자 상가 빌딩, 주거 밀집 상권 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '신흥동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'sinheung-dong',
    localDescription: '성남시 신흥동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '태평동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'taepyeong-dong',
    localDescription: '성남시 태평동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '수진동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'sujin-dong',
    localDescription: '성남시 수진동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '단대동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'dandae-dong',
    localDescription: '성남시 단대동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '산성동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'sanseong-dong',
    localDescription: '성남시 산성동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '양지동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'yangji-dong',
    localDescription: '성남시 양지동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '복정동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'bokjeong-dong',
    localDescription: '성남시 복정동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '위례동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'wirye-dong',
    localDescription: '성남시 위례동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '신촌동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'sinchon-dong',
    localDescription: '성남시 신촌동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '고등동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'godeung-dong',
    localDescription: '성남시 고등동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '시흥동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'siheung-dong',
    localDescription: '성남시 시흥동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '성남동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'seongnam-dong',
    localDescription: '성남시 성남동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '중앙동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'jungang-dong',
    localDescription: '성남시 중앙동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '금광동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'geumgwang-dong',
    localDescription: '성남시 금광동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '은행동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'eunhaeng-dong',
    localDescription: '성남시 은행동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '상대원동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'sangdaewon-dong',
    localDescription: '성남시 상대원동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '하대원동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'hadaewon-dong',
    localDescription: '성남시 하대원동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '도촌동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'dochon-dong',
    localDescription: '성남시 도촌동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '분당동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'bundang-dong',
    localDescription: '성남시 분당동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '수내동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'sunae-dong',
    localDescription: '성남시 수내동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '정자동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'jeongja-dong',
    localDescription: '성남시 정자동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '서현동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'seohyeon-dong',
    localDescription: '성남시 서현동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '이매동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'imae-dong',
    localDescription: '성남시 이매동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '야탑동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'yatap-dong',
    localDescription: '성남시 야탑동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '판교동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'pangyo-dong',
    localDescription: '성남시 판교동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '삼평동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'sampyeong-dong',
    localDescription: '성남시 삼평동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '백현동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'baekhyeon-dong',
    localDescription: '성남시 백현동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '금곡동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'geum곡-dong',
    localDescription: '성남시 금곡동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '운중동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'unjung-dong',
    localDescription: '성남시 운중동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '구미동',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'gumi-dong',
    localDescription: '성남시 구미동의 빌딩, 상가 및 매장 맞춤 위생 클리닝 서비스를 책임지고 진행합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 주거밀착 상권, 소상공인 매장',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '성남시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'seongnam', subDistrictSlug: 'all',
    localDescription: '판교테크노밸리의 IT 핵심 기업 단지와 분당 신도시의 쾌적한 고층 주상복합, 수정/중원구의 신축 아파트 단지가 공존하는 경기 최고 거점지입니다.',
    buildingCharacteristics: '지식산업센터, 프라자 상가 빌딩, 주거 밀집 상권 빌딩',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '김포시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'gimpo', subDistrictSlug: 'all',
    localDescription: '김포시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '김포시', subDistrict: '사우동',
    regionSlug: 'gyeonggi', districtSlug: 'gimpo', subDistrictSlug: '사우-dong',
    localDescription: '김포시 사우동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '김포시', subDistrict: '풍무동',
    regionSlug: 'gyeonggi', districtSlug: 'gimpo', subDistrictSlug: '풍무-dong',
    localDescription: '김포시 풍무동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '김포시', subDistrict: '장기동',
    regionSlug: 'gyeonggi', districtSlug: 'gimpo', subDistrictSlug: '장기-dong',
    localDescription: '김포시 장기동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '김포시', subDistrict: '운양동',
    regionSlug: 'gyeonggi', districtSlug: 'gimpo', subDistrictSlug: '운양-dong',
    localDescription: '김포시 운양동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '김포시', subDistrict: '구래동',
    regionSlug: 'gyeonggi', districtSlug: 'gimpo', subDistrictSlug: '구래-dong',
    localDescription: '김포시 구래동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '김포시', subDistrict: '마산동',
    regionSlug: 'gyeonggi', districtSlug: 'gimpo', subDistrictSlug: '마산-dong',
    localDescription: '김포시 마산동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '김포시', subDistrict: '북변동',
    regionSlug: 'gyeonggi', districtSlug: 'gimpo', subDistrictSlug: '북변-dong',
    localDescription: '김포시 북변동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '김포시', subDistrict: '걸포동',
    regionSlug: 'gyeonggi', districtSlug: 'gimpo', subDistrictSlug: '걸포-dong',
    localDescription: '김포시 걸포동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: 'all',
    localDescription: '고양시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '식사동',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: '식사-dong',
    localDescription: '고양시 식사동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '중산동',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: '중산-dong',
    localDescription: '고양시 중산동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '정발산동',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: '정발산-dong',
    localDescription: '고양시 정발산동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '장항동',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: '장항-dong',
    localDescription: '고양시 장항동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '마두동',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: '마두-dong',
    localDescription: '고양시 마두동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '백석동',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: '백석-dong',
    localDescription: '고양시 백석동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '화정동',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: '화정-dong',
    localDescription: '고양시 화정동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '행신동',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: '행신-dong',
    localDescription: '고양시 행신동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '삼송동',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: '삼송-dong',
    localDescription: '고양시 삼송동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '고양시', subDistrict: '원흥동',
    regionSlug: 'gyeonggi', districtSlug: 'goyang', subDistrictSlug: '원흥-dong',
    localDescription: '고양시 원흥동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '파주시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'paju', subDistrictSlug: 'all',
    localDescription: '파주시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '파주시', subDistrict: '금촌동',
    regionSlug: 'gyeonggi', districtSlug: 'paju', subDistrictSlug: '금촌-dong',
    localDescription: '파주시 금촌동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '파주시', subDistrict: '야당동',
    regionSlug: 'gyeonggi', districtSlug: 'paju', subDistrictSlug: '야당-dong',
    localDescription: '파주시 야당동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '파주시', subDistrict: '다율동',
    regionSlug: 'gyeonggi', districtSlug: 'paju', subDistrictSlug: '다율-dong',
    localDescription: '파주시 다율동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '파주시', subDistrict: '목동동',
    regionSlug: 'gyeonggi', districtSlug: 'paju', subDistrictSlug: '목-dong동',
    localDescription: '파주시 목동동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '파주시', subDistrict: '와동동',
    regionSlug: 'gyeonggi', districtSlug: 'paju', subDistrictSlug: '와-dong동',
    localDescription: '파주시 와동동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '파주시', subDistrict: '문산읍',
    regionSlug: 'gyeonggi', districtSlug: 'paju', subDistrictSlug: '문산-eup',
    localDescription: '파주시 문산읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '파주시', subDistrict: '조리읍',
    regionSlug: 'gyeonggi', districtSlug: 'paju', subDistrictSlug: '조리-eup',
    localDescription: '파주시 조리읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '양주시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'yangju', subDistrictSlug: 'all',
    localDescription: '양주시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '양주시', subDistrict: '삼숭동',
    regionSlug: 'gyeonggi', districtSlug: 'yangju', subDistrictSlug: '삼숭-dong',
    localDescription: '양주시 삼숭동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '양주시', subDistrict: '고읍동',
    regionSlug: 'gyeonggi', districtSlug: 'yangju', subDistrictSlug: '고-eup-dong',
    localDescription: '양주시 고읍동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '양주시', subDistrict: '덕정동',
    regionSlug: 'gyeonggi', districtSlug: 'yangju', subDistrictSlug: '덕정-dong',
    localDescription: '양주시 덕정동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '양주시', subDistrict: '옥정동',
    regionSlug: 'gyeonggi', districtSlug: 'yangju', subDistrictSlug: '옥정-dong',
    localDescription: '양주시 옥정동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '양주시', subDistrict: '광사동',
    regionSlug: 'gyeonggi', districtSlug: 'yangju', subDistrictSlug: '광사-dong',
    localDescription: '양주시 광사동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '양주시', subDistrict: '백석읍',
    regionSlug: 'gyeonggi', districtSlug: 'yangju', subDistrictSlug: '백석-eup',
    localDescription: '양주시 백석읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의정부시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'uijeongbu', subDistrictSlug: 'all',
    localDescription: '의정부시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의정부시', subDistrict: '의정부동',
    regionSlug: 'gyeonggi', districtSlug: 'uijeongbu', subDistrictSlug: '의정부-dong',
    localDescription: '의정부시 의정부동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의정부시', subDistrict: '호원동',
    regionSlug: 'gyeonggi', districtSlug: 'uijeongbu', subDistrictSlug: '호원-dong',
    localDescription: '의정부시 호원동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의정부시', subDistrict: '장암동',
    regionSlug: 'gyeonggi', districtSlug: 'uijeongbu', subDistrictSlug: '장암-dong',
    localDescription: '의정부시 장암동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의정부시', subDistrict: '신곡동',
    regionSlug: 'gyeonggi', districtSlug: 'uijeongbu', subDistrictSlug: '신곡-dong',
    localDescription: '의정부시 신곡동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의정부시', subDistrict: '송산동',
    regionSlug: 'gyeonggi', districtSlug: 'uijeongbu', subDistrictSlug: '송산-dong',
    localDescription: '의정부시 송산동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의정부시', subDistrict: '자금동',
    regionSlug: 'gyeonggi', districtSlug: 'uijeongbu', subDistrictSlug: '자금-dong',
    localDescription: '의정부시 자금동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의정부시', subDistrict: '가능동',
    regionSlug: 'gyeonggi', districtSlug: 'uijeongbu', subDistrictSlug: '가능-dong',
    localDescription: '의정부시 가능동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의정부시', subDistrict: '녹양동',
    regionSlug: 'gyeonggi', districtSlug: 'uijeongbu', subDistrictSlug: '녹양-dong',
    localDescription: '의정부시 녹양동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: 'all',
    localDescription: '남양주시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '와부읍',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: '와부-eup',
    localDescription: '남양주시 와부읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '진접읍',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: '진접-eup',
    localDescription: '남양주시 진접읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '화도읍',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: '화도-eup',
    localDescription: '남양주시 화도읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '진건읍',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: '진건-eup',
    localDescription: '남양주시 진건읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '오남읍',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: '오남-eup',
    localDescription: '남양주시 오남읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '별내면',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: '별내-myeon',
    localDescription: '남양주시 별내면의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '다산동',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: '다산-dong',
    localDescription: '남양주시 다산동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '별내동',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: '별내-dong',
    localDescription: '남양주시 별내동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '호평동',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: '호평-dong',
    localDescription: '남양주시 호평동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '남양주시', subDistrict: '평내동',
    regionSlug: 'gyeonggi', districtSlug: 'namyangju', subDistrictSlug: '평내-dong',
    localDescription: '남양주시 평내동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광주시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'gwangju-si', subDistrictSlug: 'all',
    localDescription: '광주시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광주시', subDistrict: '경안동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangju-si', subDistrictSlug: '경안-dong',
    localDescription: '광주시 경안동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광주시', subDistrict: '쌍령동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangju-si', subDistrictSlug: '쌍령-dong',
    localDescription: '광주시 쌍령동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광주시', subDistrict: '송정동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangju-si', subDistrictSlug: '송정-dong',
    localDescription: '광주시 송정동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광주시', subDistrict: '탄벌동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangju-si', subDistrictSlug: '탄벌-dong',
    localDescription: '광주시 탄벌동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광주시', subDistrict: '광남동',
    regionSlug: 'gyeonggi', districtSlug: 'gwangju-si', subDistrictSlug: '광남-dong',
    localDescription: '광주시 광남동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광주시', subDistrict: '오포읍',
    regionSlug: 'gyeonggi', districtSlug: 'gwangju-si', subDistrictSlug: '오포-eup',
    localDescription: '광주시 오포읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광주시', subDistrict: '초월읍',
    regionSlug: 'gyeonggi', districtSlug: 'gwangju-si', subDistrictSlug: '초월-eup',
    localDescription: '광주시 초월읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '광주시', subDistrict: '곤지암읍',
    regionSlug: 'gyeonggi', districtSlug: 'gwangju-si', subDistrictSlug: '곤지암-eup',
    localDescription: '광주시 곤지암읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '이천시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'icheon', subDistrictSlug: 'all',
    localDescription: '이천시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '이천시', subDistrict: '창전동',
    regionSlug: 'gyeonggi', districtSlug: 'icheon', subDistrictSlug: '창전-dong',
    localDescription: '이천시 창전동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '이천시', subDistrict: '관고동',
    regionSlug: 'gyeonggi', districtSlug: 'icheon', subDistrictSlug: '관고-dong',
    localDescription: '이천시 관고동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '이천시', subDistrict: '중리동',
    regionSlug: 'gyeonggi', districtSlug: 'icheon', subDistrictSlug: '중리-dong',
    localDescription: '이천시 중리동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '이천시', subDistrict: '증포동',
    regionSlug: 'gyeonggi', districtSlug: 'icheon', subDistrictSlug: '증포-dong',
    localDescription: '이천시 증포동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '이천시', subDistrict: '마장면',
    regionSlug: 'gyeonggi', districtSlug: 'icheon', subDistrictSlug: '마장-myeon',
    localDescription: '이천시 마장면의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '이천시', subDistrict: '부발읍',
    regionSlug: 'gyeonggi', districtSlug: 'icheon', subDistrictSlug: '부발-eup',
    localDescription: '이천시 부발읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: 'all',
    localDescription: '용인시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '신갈동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '신갈-dong',
    localDescription: '용인시 신갈동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '구갈동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '구갈-dong',
    localDescription: '용인시 구갈동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '상갈동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '상갈-dong',
    localDescription: '용인시 상갈동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '기흥동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '기흥-dong',
    localDescription: '용인시 기흥동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '서농동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '서농-dong',
    localDescription: '용인시 서농동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '구성동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '구성-dong',
    localDescription: '용인시 구성동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '마북동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '마북-dong',
    localDescription: '용인시 마북동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '동백동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '-dong백동',
    localDescription: '용인시 동백동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '상현동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '상현-dong',
    localDescription: '용인시 상현동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '풍덕천동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '풍덕천-dong',
    localDescription: '용인시 풍덕천동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '용인시', subDistrict: '죽전동',
    regionSlug: 'gyeonggi', districtSlug: 'yongin', subDistrictSlug: '죽전-dong',
    localDescription: '용인시 죽전동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '오산시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'osan', subDistrictSlug: 'all',
    localDescription: '오산시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '오산시', subDistrict: '중앙동',
    regionSlug: 'gyeonggi', districtSlug: 'osan', subDistrictSlug: '중앙-dong',
    localDescription: '오산시 중앙동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '오산시', subDistrict: '남촌동',
    regionSlug: 'gyeonggi', districtSlug: 'osan', subDistrictSlug: '남촌-dong',
    localDescription: '오산시 남촌동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '오산시', subDistrict: '신장동',
    regionSlug: 'gyeonggi', districtSlug: 'osan', subDistrictSlug: '신장-dong',
    localDescription: '오산시 신장동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '오산시', subDistrict: '세마동',
    regionSlug: 'gyeonggi', districtSlug: 'osan', subDistrictSlug: '세마-dong',
    localDescription: '오산시 세마동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '오산시', subDistrict: '초평동',
    regionSlug: 'gyeonggi', districtSlug: 'osan', subDistrictSlug: '초평-dong',
    localDescription: '오산시 초평동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '오산시', subDistrict: '대원동',
    regionSlug: 'gyeonggi', districtSlug: 'osan', subDistrictSlug: '대원-dong',
    localDescription: '오산시 대원동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: 'all',
    localDescription: '수원시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '파장동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '파장-dong',
    localDescription: '수원시 파장동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '율천동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '율천-dong',
    localDescription: '수원시 율천동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '정자동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '정자-dong',
    localDescription: '수원시 정자동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '영화동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '영화-dong',
    localDescription: '수원시 영화동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '송죽동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '송죽-dong',
    localDescription: '수원시 송죽동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '조원동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '조원-dong',
    localDescription: '수원시 조원동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '연무동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '연무-dong',
    localDescription: '수원시 연무동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '세류동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '세류-dong',
    localDescription: '수원시 세류동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '평동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '평-dong',
    localDescription: '수원시 평동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '서둔동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '서둔-dong',
    localDescription: '수원시 서둔동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '구운동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '구운-dong',
    localDescription: '수원시 구운동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '금곡동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '금곡-dong',
    localDescription: '수원시 금곡동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '호매실동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '호매실-dong',
    localDescription: '수원시 호매실동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '권선동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '권선-dong',
    localDescription: '수원시 권선동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '곡선동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '곡선-dong',
    localDescription: '수원시 곡선동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '지동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '지-dong',
    localDescription: '수원시 지동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '우만동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '우만-dong',
    localDescription: '수원시 우만동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '인계동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '인계-dong',
    localDescription: '수원시 인계동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '매탄동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '매탄-dong',
    localDescription: '수원시 매탄동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '원천동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '원천-dong',
    localDescription: '수원시 원천동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '영통동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '영통-dong',
    localDescription: '수원시 영통동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '수원시', subDistrict: '태장동',
    regionSlug: 'gyeonggi', districtSlug: 'suwon', subDistrictSlug: '태장-dong',
    localDescription: '수원시 태장동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '군포시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'gunpo', subDistrictSlug: 'all',
    localDescription: '군포시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '군포시', subDistrict: '군포동',
    regionSlug: 'gyeonggi', districtSlug: 'gunpo', subDistrictSlug: '군포-dong',
    localDescription: '군포시 군포동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '군포시', subDistrict: '산본동',
    regionSlug: 'gyeonggi', districtSlug: 'gunpo', subDistrictSlug: '산본-dong',
    localDescription: '군포시 산본동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '군포시', subDistrict: '금정동',
    regionSlug: 'gyeonggi', districtSlug: 'gunpo', subDistrictSlug: '금정-dong',
    localDescription: '군포시 금정동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '군포시', subDistrict: '재궁동',
    regionSlug: 'gyeonggi', districtSlug: 'gunpo', subDistrictSlug: '재궁-dong',
    localDescription: '군포시 재궁동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '군포시', subDistrict: '오금동',
    regionSlug: 'gyeonggi', districtSlug: 'gunpo', subDistrictSlug: '오금-dong',
    localDescription: '군포시 오금동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '군포시', subDistrict: '수리동',
    regionSlug: 'gyeonggi', districtSlug: 'gunpo', subDistrictSlug: '수리-dong',
    localDescription: '군포시 수리동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '군포시', subDistrict: '궁내동',
    regionSlug: 'gyeonggi', districtSlug: 'gunpo', subDistrictSlug: '궁내-dong',
    localDescription: '군포시 궁내동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '군포시', subDistrict: '대야동',
    regionSlug: 'gyeonggi', districtSlug: 'gunpo', subDistrictSlug: '대야-dong',
    localDescription: '군포시 대야동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '군포시', subDistrict: '송부동',
    regionSlug: 'gyeonggi', districtSlug: 'gunpo', subDistrictSlug: '송부-dong',
    localDescription: '군포시 송부동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의왕시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'uiwang', subDistrictSlug: 'all',
    localDescription: '의왕시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의왕시', subDistrict: '고천동',
    regionSlug: 'gyeonggi', districtSlug: 'uiwang', subDistrictSlug: '고천-dong',
    localDescription: '의왕시 고천동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의왕시', subDistrict: '부곡동',
    regionSlug: 'gyeonggi', districtSlug: 'uiwang', subDistrictSlug: '부곡-dong',
    localDescription: '의왕시 부곡동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의왕시', subDistrict: '오전동',
    regionSlug: 'gyeonggi', districtSlug: 'uiwang', subDistrictSlug: '오전-dong',
    localDescription: '의왕시 오전동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의왕시', subDistrict: '내손동',
    regionSlug: 'gyeonggi', districtSlug: 'uiwang', subDistrictSlug: '내손-dong',
    localDescription: '의왕시 내손동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '의왕시', subDistrict: '청계동',
    regionSlug: 'gyeonggi', districtSlug: 'uiwang', subDistrictSlug: '청계-dong',
    localDescription: '의왕시 청계동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '과천시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'gwacheon', subDistrictSlug: 'all',
    localDescription: '과천시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '과천시', subDistrict: '중앙동',
    regionSlug: 'gyeonggi', districtSlug: 'gwacheon', subDistrictSlug: '중앙-dong',
    localDescription: '과천시 중앙동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '과천시', subDistrict: '갈현동',
    regionSlug: 'gyeonggi', districtSlug: 'gwacheon', subDistrictSlug: '갈현-dong',
    localDescription: '과천시 갈현동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '과천시', subDistrict: '별양동',
    regionSlug: 'gyeonggi', districtSlug: 'gwacheon', subDistrictSlug: '별양-dong',
    localDescription: '과천시 별양동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '과천시', subDistrict: '부림동',
    regionSlug: 'gyeonggi', districtSlug: 'gwacheon', subDistrictSlug: '부림-dong',
    localDescription: '과천시 부림동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '과천시', subDistrict: '과천동',
    regionSlug: 'gyeonggi', districtSlug: 'gwacheon', subDistrictSlug: '과천-dong',
    localDescription: '과천시 과천동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '과천시', subDistrict: '문원동',
    regionSlug: 'gyeonggi', districtSlug: 'gwacheon', subDistrictSlug: '문원-dong',
    localDescription: '과천시 문원동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: 'all',
    localDescription: '안양시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '안양동',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: '안양-dong',
    localDescription: '안양시 안양동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '석수동',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: '석수-dong',
    localDescription: '안양시 석수동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '박달동',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: '박달-dong',
    localDescription: '안양시 박달동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '비산동',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: '비산-dong',
    localDescription: '안양시 비산동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '관양동',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: '관양-dong',
    localDescription: '안양시 관양동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '평촌동',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: '평촌-dong',
    localDescription: '안양시 평촌동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '평안동',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: '평안-dong',
    localDescription: '안양시 평안동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '귀인동',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: '귀인-dong',
    localDescription: '안양시 귀인동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '호계동',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: '호계-dong',
    localDescription: '안양시 호계동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안양시', subDistrict: '신촌동',
    regionSlug: 'gyeonggi', districtSlug: 'anyang', subDistrictSlug: '신촌-dong',
    localDescription: '안양시 신촌동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: 'all',
    localDescription: '시흥시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '대야동',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: '대야-dong',
    localDescription: '시흥시 대야동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '신천동',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: '신천-dong',
    localDescription: '시흥시 신천동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '은행동',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: '은행-dong',
    localDescription: '시흥시 은행동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '매화동',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: '매화-dong',
    localDescription: '시흥시 매화동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '목감동',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: '목감-dong',
    localDescription: '시흥시 목감동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '군자동',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: '군자-dong',
    localDescription: '시흥시 군자동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '월곶동',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: '월곶-dong',
    localDescription: '시흥시 월곶동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '정왕동',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: '정왕-dong',
    localDescription: '시흥시 정왕동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '배곧동',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: '배곧-dong',
    localDescription: '시흥시 배곧동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '시흥시', subDistrict: '능곡동',
    regionSlug: 'gyeonggi', districtSlug: 'siheung', subDistrictSlug: '능곡-dong',
    localDescription: '시흥시 능곡동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: 'all',
    localDescription: '안산시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '일동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '일-dong',
    localDescription: '안산시 일동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '이동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '이-dong',
    localDescription: '안산시 이동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '사동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '사-dong',
    localDescription: '안산시 사동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '본오동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '본오-dong',
    localDescription: '안산시 본오동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '부곡동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '부곡-dong',
    localDescription: '안산시 부곡동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '월피동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '월피-dong',
    localDescription: '안산시 월피동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '성포동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '성포-dong',
    localDescription: '안산시 성포동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '와동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '와-dong',
    localDescription: '안산시 와동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '고잔동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '고잔-dong',
    localDescription: '안산시 고잔동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '중앙동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '중앙-dong',
    localDescription: '안산시 중앙동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '호수동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '호수-dong',
    localDescription: '안산시 호수동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '원곡동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '원곡-dong',
    localDescription: '안산시 원곡동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '초지동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '초지-dong',
    localDescription: '안산시 초지동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '안산시', subDistrict: '선부동',
    regionSlug: 'gyeonggi', districtSlug: 'ansan', subDistrictSlug: '선부-dong',
    localDescription: '안산시 선부동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '전지역',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: 'all',
    localDescription: '화성시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '봉담읍',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '봉담-eup',
    localDescription: '화성시 봉담읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '우정읍',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '우정-eup',
    localDescription: '화성시 우정읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '향남읍',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '향남-eup',
    localDescription: '화성시 향남읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '남양읍',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '남양-eup',
    localDescription: '화성시 남양읍의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '새솔동',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '새솔-dong',
    localDescription: '화성시 새솔동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '동탄동',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '-dong탄동',
    localDescription: '화성시 동탄동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '진안동',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '진안-dong',
    localDescription: '화성시 진안동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '병점동',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '병점-dong',
    localDescription: '화성시 병점동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '반월동',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '반월-dong',
    localDescription: '화성시 반월동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '기배동',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '기배-dong',
    localDescription: '화성시 기배동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  },
  {
    city: '경기', district: '화성시', subDistrict: '화산동',
    regionSlug: 'gyeonggi', districtSlug: 'hwaseong', subDistrictSlug: '화산-dong',
    localDescription: '화성시 화산동의 빌딩, 상가, 오피스텔 및 주거 시설 위생 청소를 맞춤 시공합니다.',
    buildingCharacteristics: '근린 빌딩 상가, 소형 오피스텔, 주거밀착 상권',
    priority: 1, indexStatus: 'index'
  }
];
