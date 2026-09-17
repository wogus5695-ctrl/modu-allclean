import { factoryServices } from './factoryServices';

export interface FactoryRegion {
  city: string;
  district: string;
  subDistrict: string;
  regionSlug: string;
  districtSlug: string;
  subDistrictSlug: string;
  localDescription: string;
  buildingCharacteristics: string;
  priority: number;
  indexStatus: 'index' | 'noindex';
  
  // Master Region Data
  seoKeywordName: string;
  hubDisplayName: string;
  urlSlug: string;
  adminType: '시' | '구' | '군';
  parentRegion: string;
}

// 16개 대상 지역 독립 데이터셋 (src/data/regions.ts 의존성 완전 분리)
export const factoryTargetRegions: FactoryRegion[] = [
  {
    city: '인천',
    district: '남동구',
    subDistrict: '전지역',
    regionSlug: 'incheon',
    districtSlug: 'namdong',
    subDistrictSlug: 'all',
    localDescription: '인천시청 행정 중심가와 간석 가구단지, 서창 신도시까지 남동구 전역의 쾌적한 위생을 유지합니다.',
    buildingCharacteristics: '시청 행정 기관 빌딩, 대형 백화점, 메디컬 종합 빌딩',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '남동구',
    hubDisplayName: '인천 남동구',
    urlSlug: 'namdong-gu',
    adminType: '구',
    parentRegion: '인천'
  },
  {
    city: '경기',
    district: '파주시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'paju',
    subDistrictSlug: 'all',
    localDescription: '파주시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '파주시',
    hubDisplayName: '경기 파주시',
    urlSlug: 'paju-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '경기',
    district: '양주시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'yangju',
    subDistrictSlug: 'all',
    localDescription: '양주시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '양주시',
    hubDisplayName: '경기 양주시',
    urlSlug: 'yangju-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '경기',
    district: '광주시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'gwangju-si',
    subDistrictSlug: 'all',
    localDescription: '광주시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '광주시',
    hubDisplayName: '경기 광주시',
    urlSlug: 'gwangju-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '경기',
    district: '이천시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'icheon',
    subDistrictSlug: 'all',
    localDescription: '이천시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '이천시',
    hubDisplayName: '경기 이천시',
    urlSlug: 'icheon-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '경기',
    district: '시흥시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'siheung',
    subDistrictSlug: 'all',
    localDescription: '시흥시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '시흥시',
    hubDisplayName: '경기 시흥시',
    urlSlug: 'siheung-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '경기',
    district: '안산시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'ansan',
    subDistrictSlug: 'all',
    localDescription: '안산시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '안산시',
    hubDisplayName: '경기 안산시',
    urlSlug: 'ansan-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '경기',
    district: '화성시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'hwaseong',
    subDistrictSlug: 'all',
    localDescription: '화성시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '화성시',
    hubDisplayName: '경기 화성시',
    urlSlug: 'hwaseong-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '경기',
    district: '평택시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'pyeongtaek',
    subDistrictSlug: 'all',
    localDescription: '평택시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '평택시',
    hubDisplayName: '경기 평택시',
    urlSlug: 'pyeongtaek-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '경기',
    district: '안성시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'anseong',
    subDistrictSlug: 'all',
    localDescription: '안성시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '안성시',
    hubDisplayName: '경기 안성시',
    urlSlug: 'anseong-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '경기',
    district: '포천시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'pocheon',
    subDistrictSlug: 'all',
    localDescription: '포천시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '포천시',
    hubDisplayName: '경기 포천시',
    urlSlug: 'pocheon-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '충북',
    district: '음성군',
    subDistrict: '전지역',
    regionSlug: 'chungbuk',
    districtSlug: 'eumseong',
    subDistrictSlug: 'all',
    localDescription: '음성군 전역의 상가, 공장 및 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '상가 빌딩, 소규모 공장, 상업 시설',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '음성군',
    hubDisplayName: '충북 음성군',
    urlSlug: 'eumseong-gun',
    adminType: '군',
    parentRegion: '충북'
  },
  {
    city: '충북',
    district: '진천군',
    subDistrict: '전지역',
    regionSlug: 'chungbuk',
    districtSlug: 'jincheon',
    subDistrictSlug: 'all',
    localDescription: '진천군 전역의 상가, 공장 및 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '상가 빌딩, 소규모 공장, 상업 시설',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '진천군',
    hubDisplayName: '충북 진천군',
    urlSlug: 'jincheon-gun',
    adminType: '군',
    parentRegion: '충북'
  },
  {
    city: '충북',
    district: '청주시',
    subDistrict: '전지역',
    regionSlug: 'chungbuk',
    districtSlug: 'cheongju',
    subDistrictSlug: 'all',
    localDescription: '청주시 전역의 주거 밀집 단지, 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '청주시',
    hubDisplayName: '충북 청주시',
    urlSlug: 'cheongju-si',
    adminType: '시',
    parentRegion: '충북'
  },
  {
    city: '충남',
    district: '천안시',
    subDistrict: '전지역',
    regionSlug: 'chungnam',
    districtSlug: 'cheonan',
    subDistrictSlug: 'all',
    localDescription: '천안시 전역의 주거 밀집 단지, 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '천안시',
    hubDisplayName: '충남 천안시',
    urlSlug: 'cheonan-si',
    adminType: '시',
    parentRegion: '충남'
  },
  {
    city: '충남',
    district: '아산시',
    subDistrict: '전지역',
    regionSlug: 'chungnam',
    districtSlug: 'asan',
    subDistrictSlug: 'all',
    localDescription: '아산시 전역의 주거 밀집 단지, 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '아산시',
    hubDisplayName: '충남 아산시',
    urlSlug: 'asan-si',
    adminType: '시',
    parentRegion: '충남'
  },
  {
    city: '경기',
    district: '김포시',
    subDistrict: '전지역',
    regionSlug: 'gyeonggi',
    districtSlug: 'gimpo',
    subDistrictSlug: 'all',
    localDescription: '김포시 전역의 주거 밀집 단지, 신도시 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '김포시',
    hubDisplayName: '경기 김포시',
    urlSlug: 'gimpo-si',
    adminType: '시',
    parentRegion: '경기'
  },
  {
    city: '인천',
    district: '서구',
    subDistrict: '전지역',
    regionSlug: 'incheon',
    districtSlug: 'seo',
    subDistrictSlug: 'all',
    localDescription: '인천 서구 전역의 주거 밀집 단지, 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '서구',
    hubDisplayName: '인천 서구',
    urlSlug: 'seo-gu',
    adminType: '구',
    parentRegion: '인천'
  },
  {
    city: '인천',
    district: '부평구',
    subDistrict: '전지역',
    regionSlug: 'incheon',
    districtSlug: 'bupyeong',
    subDistrictSlug: 'all',
    localDescription: '인천 부평구 전역의 주거 밀집 단지, 상가 및 주요 비즈니스 빌딩 클리닝을 책임지고 진행합니다.',
    buildingCharacteristics: '아파트 단지 상가, 프라자 빌딩, 신축 주거 타운',
    priority: 1,
    indexStatus: 'index',
    seoKeywordName: '부평구',
    hubDisplayName: '인천 부평구',
    urlSlug: 'bupyeong-gu',
    adminType: '구',
    parentRegion: '인천'
  }
];

// Factory 활성화 조합 Source of Truth
export const factoryEnabledCombinations: string[] = factoryTargetRegions.flatMap(region =>
  factoryServices.map(service =>
    `${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`
  )
);

/**
 * 특정 조합이 활성화된 Factory 조합인지 체크하는 헬퍼 함수
 */
export function isFactoryComboEnabled(city: string, district: string, serviceSlug: string): boolean {
  const normalizedCity = city.toLowerCase();
  const normalizedDistrict = district.toLowerCase();
  const normalizedService = serviceSlug.toLowerCase();
  
  const key = `${normalizedCity}/${normalizedDistrict}/${normalizedService}`;
  return factoryEnabledCombinations.includes(key);
}
