import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { factoryServices } from '@/data/seo/factoryServices';
import { factoryEnabledCombinations, factoryTargetRegions } from '@/data/seo/factoryActiveCombinations';
import styles from './page.module.css';
import { BRAND_NAME, DOMAIN } from '@/lib/seo';

export const metadata: Metadata = {
  title: `산업용 공장청소 전문 서비스 허브 | ${BRAND_NAME}`,
  description: '식품공장, 해썹공장, 물류창고 곰팡이 제거, 에폭시 바닥 기름때 세척, 외벽 샌드위치 판넬 고압 세정 등 산업 현장 맞춤형 위생 관리 서비스를 제공합니다.',
  alternates: {
    canonical: `${DOMAIN}/factory-cleaning`,
  },
  robots: 'noindex, nofollow', // 아직 공식 검색 노출 전이므로 noindex 설정
};

export default function FactoryParentHub() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>산업시설 및 공장청소 전문 서비스 허브</h1>
          <p className={styles.subtitle}>
            제조 공장, 식품 생산설비, 대형 물류창고 등 산업 현장의 위생 기준을 충족하고 근로 안전을 확보하는 고도화된 정밀 세척 및 방균 솔루션을 안내합니다.
          </p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>10대 전문 공장청소 서비스</h2>
          <p className={styles.sectionDesc}>원하시는 세부 공장청소 작업을 선택하여 해당 서비스의 상세 설명과 관리 가능 지역을 확인하실 수 있습니다.</p>
          
          <div className={styles.grid}>
            {factoryServices.map((service) => (
              <div key={service.serviceSlug} className={styles.card}>
                <span className={styles.badge}>공장/산업 전문</span>
                <h3 className={styles.serviceTitle}>{service.serviceNameKo}</h3>
                <p className={styles.serviceDesc}>{service.mainProblem}</p>
                <Link href={`/factory-cleaning/${service.serviceSlug}`} className={styles.linkButton}>
                  지역별 서비스 보기
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.pilotSection}>
            <h2 className={styles.sectionTitle}>현재 활성화된 시범 운영 지역 조합</h2>
            <p className={styles.sectionDesc}>실제 현장 상태 분석 및 서비스가 매핑되어 실시간 예약/상담이 즉시 연동되는 화이트리스트 조합 목록입니다.</p>
            
            <div className={styles.pilotGrid}>
              {factoryEnabledCombinations.map((combo) => {
                const [city, district, serviceSlug] = combo.split('/');
                const service = factoryServices.find(s => s.serviceSlug === serviceSlug);
                const region = factoryTargetRegions.find(r => r.regionSlug === city && r.districtSlug === district);
                
                if (!service || !region) return null;
                
                // 경기도 광주시 지명 충돌 예외 회피 및 출력 처리
                const displayRegion = region.district === '광주시' && region.regionSlug === 'gyeonggi' ? '경기 광주' : `${region.city} ${region.district}`;
                const suffix = region.district.endsWith('시') ? '-si' : '-gu';
                const longUrl = city === 'incheon' 
                  ? `/${city}/${district}/${serviceSlug}`
                  : `/${city}/${district}${suffix}/${serviceSlug}`;

                return (
                  <Link key={combo} href={longUrl} className={styles.pilotLink}>
                    <span>{displayRegion} {service.serviceNameKo}</span>
                    <span className={styles.pilotTag}>예약 가능</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
