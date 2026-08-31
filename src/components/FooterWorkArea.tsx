'use client';

import { usePathname } from 'next/navigation';

export default function FooterWorkArea() {
  const pathname = usePathname();
  const isFactoryPath = pathname.includes('/factory-cleaning') || 
                        ['food-factory-cleaning', 'haccp-factory-cleaning', 'factory-hygiene-cleaning', 'factory-mold-removal', 'warehouse-mold-cleaning', 'factory-diffuser-cleaning', 'vent-cleaning', 'factory-floor-cleaning', 'factory-move-cleaning', 'factory-exterior-panel-cleaning']
                        .some(slug => pathname.includes(slug));

  if (isFactoryPath) {
    return (
      <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
        경기·인천·충청 주요 지역 공장청소 상담<br />
        지역별 작업 가능 여부는 상담 시 확인해 드립니다.
      </p>
    );
  }

  return (
    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
      서울 주요 지역 상담 가능<br />
      지역별 작업 가능 여부는 상담 시 확인해 드립니다.
    </p>
  );
}
