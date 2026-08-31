import { regions } from '../regions';
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
  indexStatus: string;
  
  // Master Region Data
  seoKeywordName: string;
  hubDisplayName: string;
  urlSlug: string;
  adminType: '시' | '구' | '군';
  parentRegion: string;
}

const regionMasterData: Record<string, { seoKeywordName: string; hubDisplayName: string; urlSlug: string; adminType: '시' | '구' | '군'; parentRegion: string }> = {
  'hwaseong': { seoKeywordName: '화성시', hubDisplayName: '경기 화성시', urlSlug: 'hwaseong-si', adminType: '시', parentRegion: '경기' },
  'pyeongtaek': { seoKeywordName: '평택시', hubDisplayName: '경기 평택시', urlSlug: 'pyeongtaek-si', adminType: '시', parentRegion: '경기' },
  'anseong': { seoKeywordName: '안성시', hubDisplayName: '경기 안성시', urlSlug: 'anseong-si', adminType: '시', parentRegion: '경기' },
  'icheon': { seoKeywordName: '이천시', hubDisplayName: '경기 이천시', urlSlug: 'icheon-si', adminType: '시', parentRegion: '경기' },
  'gwangju-si': { seoKeywordName: '광주시', hubDisplayName: '경기 광주시', urlSlug: 'gwangju-si', adminType: '시', parentRegion: '경기' },
  'ansan': { seoKeywordName: '안산시', hubDisplayName: '경기 안산시', urlSlug: 'ansan-si', adminType: '시', parentRegion: '경기' },
  'siheung': { seoKeywordName: '시흥시', hubDisplayName: '경기 시흥시', urlSlug: 'siheung-si', adminType: '시', parentRegion: '경기' },
  'paju': { seoKeywordName: '파주시', hubDisplayName: '경기 파주시', urlSlug: 'paju-si', adminType: '시', parentRegion: '경기' },
  'pocheon': { seoKeywordName: '포천시', hubDisplayName: '경기 포천시', urlSlug: 'pocheon-si', adminType: '시', parentRegion: '경기' },
  'yangju': { seoKeywordName: '양주시', hubDisplayName: '경기 양주시', urlSlug: 'yangju-si', adminType: '시', parentRegion: '경기' },
  'namdong': { seoKeywordName: '남동구', hubDisplayName: '인천 남동구', urlSlug: 'namdong-gu', adminType: '구', parentRegion: '인천' },
  'eumseong': { seoKeywordName: '음성군', hubDisplayName: '충북 음성군', urlSlug: 'eumseong-gun', adminType: '군', parentRegion: '충북' },
  'jincheon': { seoKeywordName: '진천군', hubDisplayName: '충북 진천군', urlSlug: 'jincheon-gun', adminType: '군', parentRegion: '충북' },
  'cheongju': { seoKeywordName: '청주시', hubDisplayName: '충북 청주시', urlSlug: 'cheongju-si', adminType: '시', parentRegion: '충북' },
  'cheonan': { seoKeywordName: '천안시', hubDisplayName: '충남 천안시', urlSlug: 'cheonan-si', adminType: '시', parentRegion: '충남' },
  'asan': { seoKeywordName: '아산시', hubDisplayName: '충남 아산시', urlSlug: 'asan-si', adminType: '시', parentRegion: '충남' }
};

// 16개 대상 지역 데이터 필터링 및 Master Data 주입
export const factoryTargetRegions = regions
  .filter(r => 
    r.subDistrictSlug === 'all' && 
    Object.keys(regionMasterData).includes(r.districtSlug)
  )
  .map(r => {
    const master = regionMasterData[r.districtSlug];
    return {
      ...r,
      ...master
    } as FactoryRegion;
  });

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
