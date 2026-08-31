import { regions } from '../regions';
import { factoryServices } from './factoryServices';

// 16개 대상 지역 데이터 필터링 (구/시 단위 대표 데이터인 subDistrictSlug === 'all')
export const factoryTargetRegions = regions.filter(r => 
  r.subDistrictSlug === 'all' && 
  [
    'hwaseong',
    'pyeongtaek',
    'anseong',
    'icheon',
    'gwangju-si',
    'ansan',
    'siheung',
    'paju',
    'pocheon',
    'yangju',
    'namdong',
    'eumseong',
    'jincheon',
    'cheonan',
    'asan',
    'cheongju'
  ].includes(r.districtSlug)
);

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
