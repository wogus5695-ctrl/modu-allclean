import React from 'react';
import { Metadata } from 'next';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { getSitemapMetadata, BRAND_NAME } from '@/lib/seo';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = getSitemapMetadata();

export default function SitemapSeoulPage() {
  // 각 광역 자치단체 단위 리스트 추출
  const seoulDistricts = Array.from(new Set(regions.filter(r => r.regionSlug === 'seoul').map(r => r.districtSlug)));
  const incheonDistricts = Array.from(new Set(regions.filter(r => r.regionSlug === 'incheon').map(r => r.districtSlug)));
  const gyeonggiDistricts = Array.from(new Set(regions.filter(r => r.regionSlug === 'gyeonggi').map(r => r.districtSlug)));

  const renderSection = (groupTitle: string, districtSlugs: string[]) => {
    if (districtSlugs.length === 0) return null;

    return (
      <div className={styles.regionGroup}>
        <h2 className={styles.regionGroupTitle}>{groupTitle}</h2>
        {districtSlugs.map(dSlug => {
          const districtRegion = regions.find(r => r.districtSlug === dSlug && r.subDistrictSlug === 'all');
          const dongs = regions.filter(r => r.districtSlug === dSlug && r.subDistrictSlug !== 'all');
          
          if (!districtRegion) return null;

          return (
            <div key={dSlug} className={styles.districtSection}>
              <h3 className={styles.districtTitle}>
                {districtRegion.district} <span>{dongs.length}개 지역 관리 중</span>
              </h3>

              {/* 구/시 단위 통합 키워드 섹션 (구/시 포함 및 제외 버전) */}
              <div className={styles.districtKeywords}>
                <div className={styles.dongCard}>
                  <span className={styles.dongName}>{districtRegion.district} 통합 키워드</span>
                  <div className={styles.serviceLinks}>
                    {services.map(service => {
                      const isIncheon = districtRegion.regionSlug === 'incheon';
                      const shortDistrict = districtRegion.district.replace(/(구|시)$/, '');
                      const suffix = districtRegion.district.endsWith('시') ? '-si' : '-gu';
                      const longUrl = isIncheon 
                        ? `/${districtRegion.regionSlug}/${districtRegion.districtSlug}/${service.serviceSlug}`
                        : `/${districtRegion.regionSlug}/${districtRegion.districtSlug}${suffix}/${service.serviceSlug}`;
                      return (
                        <React.Fragment key={service.id}>
                          <Link 
                            href={longUrl}
                            className={styles.serviceLink}
                          >
                            {districtRegion.district} {service.serviceNameKo}
                          </Link>
                          {!isIncheon && (
                            <Link 
                              href={`/${districtRegion.regionSlug}/${districtRegion.districtSlug}/${service.serviceSlug}`}
                              className={styles.serviceLink}
                            >
                              {shortDistrict} {service.serviceNameKo}
                            </Link>
                          )}
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
    );
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>서울·인천·경기 전 지역 종합청소 서비스 키워드 맵</h1>
          <p className={styles.subtitle}>
            {BRAND_NAME}이 제공하는 서울, 인천, 경기 전역의 지역별 맞춤 청소 솔루션을 한눈에 확인하실 수 있습니다.<br />
            원하시는 지역과 서비스를 선택하여 상세 정보를 확인하세요.
          </p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          {renderSection('서울특별시', seoulDistricts)}
          {renderSection('인천광역시', incheonDistricts)}
          {renderSection('경기도', gyeonggiDistricts)}
        </div>
      </section>
    </div>
  );
}
