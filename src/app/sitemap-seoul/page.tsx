import React from 'react';
import { Metadata } from 'next';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { getSitemapMetadata, BRAND_NAME } from '@/lib/seo';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = getSitemapMetadata();

export default function SitemapSeoulPage() {
  // 구 단위 리스트 추출
  const districts = Array.from(new Set(regions.map(r => r.districtSlug)));

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>서울 전 지역 종합청소 서비스 키워드 맵</h1>
          <p className={styles.subtitle}>
            {BRAND_NAME}이 제공하는 서울 전역의 지역별 맞춤 청소 솔루션을 한눈에 확인하실 수 있습니다.<br />
            원하시는 지역과 서비스를 선택하여 상세 정보를 확인하세요.
          </p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          {districts.map(dSlug => {
            const districtRegion = regions.find(r => r.districtSlug === dSlug && r.subDistrictSlug === 'all');
            const dongs = regions.filter(r => r.districtSlug === dSlug && r.subDistrictSlug !== 'all');
            
            if (!districtRegion) return null;

            return (
              <div key={dSlug} className={styles.districtSection}>
                <h2 className={styles.districtTitle}>
                  {districtRegion.district} <span>{dongs.length}개 지역 관리 중</span>
                </h2>

                {/* 구 단위 통합 키워드 섹션 (구/시 포함 및 제외 버전) */}
                <div className={styles.districtKeywords}>
                  <div className={styles.dongCard}>
                    <span className={styles.dongName}>{districtRegion.district} 통합 키워드</span>
                    <div className={styles.serviceLinks}>
                      {services.map(service => {
                        const shortDistrict = districtRegion.district.replace(/(구|시)$/, '');
                        return (
                          <React.Fragment key={service.id}>
                            <Link 
                              href={`/${districtRegion.regionSlug}/${districtRegion.districtSlug}/${service.serviceSlug}`}
                              className={styles.serviceLink}
                            >
                              {districtRegion.district} {service.serviceNameKo}
                            </Link>
                            <Link 
                              href={`/${districtRegion.regionSlug}/${districtRegion.districtSlug}/${service.serviceSlug}`}
                              className={styles.serviceLink}
                            >
                              {shortDistrict} {service.serviceNameKo}
                            </Link>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <div className={styles.dongGrid}>
                  {dongs.map(dong => (
                    <div key={dong.subDistrictSlug} className={styles.dongCard}>
                      <Link 
                        href={`/area/${dong.regionSlug}/${dong.districtSlug}`} 
                        className={styles.dongName}
                      >
                        {dong.subDistrict}
                      </Link>
                      <div className={styles.serviceLinks}>
                        {services.map(service => (
                          <Link 
                            key={service.id} 
                            href={`/${dong.regionSlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${service.serviceSlug}`}
                            className={styles.serviceLink}
                          >
                            {dong.subDistrict} {service.serviceNameKo}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
