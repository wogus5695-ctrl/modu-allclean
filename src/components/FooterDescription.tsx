'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { BRAND_NAME } from '@/lib/seo';

export default function FooterDescription() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // URL에서 지역 및 서비스 정보 추출 시도
  let currentRegion = '';
  let currentService = '';

  // 1. 상세 페이지 URL 분석 (/[city]/[district]/[...slug])
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length >= 3) {
    const citySlug = parts[0];
    const districtSlug = parts[1];
    const subOrServiceSlug = parts[2];
    const serviceSlug = parts[parts.length - 1];

    const region = regions.find(r => 
      r.districtSlug === districtSlug && 
      (parts.length === 4 ? r.subDistrictSlug === subOrServiceSlug : r.subDistrictSlug === 'all')
    );
    const service = services.find(s => s.serviceSlug === serviceSlug);

    if (region) {
      currentRegion = region.subDistrict === '전지역' ? region.district : region.subDistrict;
    }
    if (service) {
      currentService = service.serviceNameKo;
    }
  }

  // 2. URL 파라미터(kw)가 있으면 우선 적용
  const kw = searchParams.get('kw');
  if (kw) currentRegion = kw;

  // 3. 메인페이지 파라미터 확인
  const pService = searchParams.get('service');
  if (pService) currentService = pService;

  // 기본값 설정
  const displayRegion = currentRegion || '서울·경기';
  const displayService = currentService || '종합청소';

  const isFactoryPath = pathname.includes('/factory-cleaning') || 
                        ['food-factory-cleaning', 'haccp-factory-cleaning', 'factory-hygiene-cleaning', 'factory-mold-removal', 'warehouse-mold-cleaning', 'factory-diffuser-cleaning', 'vent-cleaning', 'factory-floor-cleaning', 'factory-move-cleaning', 'factory-exterior-panel-cleaning']
                        .some(slug => pathname.includes(slug));

  if (isFactoryPath) {
    return (
      <p style={{ lineHeight: '1.6', fontSize: '14px', color: '#666' }}>
        {BRAND_NAME}은 공장·물류창고·식품 제조시설 등 산업시설의 현장 상태와 작업 범위를 확인해 청소 상담을 안내합니다.
      </p>
    );
  }

  return (
    <p style={{ lineHeight: '1.6', fontSize: '14px', color: '#666' }}>
      {BRAND_NAME}는 서울 주요 지역의 상가, 매장, 사무실, 음식점, 준공 현장 등<br />
      다양한 공간의 청소 상담을 안내합니다.
    </p>
  );
}
