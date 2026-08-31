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
          <p className={styles.sectionDesc}>작업이 필요한 지역과 청소 서비스를 선택해 상세 작업 범위와 상담 정보를 확인하세요.</p>
          
          <div className={styles.grid}>
            {factoryServices.map((service) => (
              <div key={service.serviceSlug} className={styles.card}>
                <span className={styles.badge}>공장/산업 전문</span>
                <h3 className={styles.serviceTitle}>{service.serviceNameKo}</h3>
                <p className={styles.serviceDesc}>{service.mainProblem}</p>
                <Link href={`/factory-cleaning/${service.serviceSlug}`} className={styles.linkButton}>
                  상담 가능 지역 보기
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
