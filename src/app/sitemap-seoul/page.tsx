import React from 'react';
import { Metadata } from 'next';
import { regions } from '@/data/regions';
import { services, seoServiceKeywords } from '@/data/services';
import { getSitemapMetadata, BRAND_NAME } from '@/lib/seo';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = getSitemapMetadata();

export default function SitemapSeoulPage() {
  // 각 광역 자치단체 단위 리스트 추출
  const seoulDistricts = Array.from(new Set(regions.filter(r => r.regionSlug === 'seoul').map(r => r.districtSlug)));
  const incheonDistricts = Array.from(new Set(regions.filter(r => r.regionSlug === 'incheon').map(r => r.districtSlug)));
  const gyeonggiDistricts = Array.from(new Set(regions.filter(r => r.regionSlug === 'gyeonggi').map(r => r.districtSlug)));

  // 기존 키워드 렌더링 (입주청소 및 이사청소 제외한 서비스 필터링)
  const generalServices = seoServiceKeywords.filter(s => 
    s.id !== 'move-in' && 
    s.serviceSlug !== 'move-in-cleaning' && 
    s.id !== 'moving' && 
    s.serviceSlug !== 'moving-cleaning'
  );

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

              {/* 구/시 단위 통합 키워드 섹션 */}
              <div className={styles.districtKeywords}>
                <div className={styles.dongCard}>
                  <span className={styles.dongName}>{districtRegion.district} 통합 키워드</span>
                  <div className={styles.serviceLinks}>
                    {generalServices.map(service => {
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
                      {generalServices.map(service => (
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
          <h1 className={styles.title}>서울·인천·경기 종합청소 지역별 키워드 허브</h1>
          <p className={styles.subtitle}>
            외벽청소, 유리창청소, 화재청소, 바닥왁스코팅, 어닝청소, 간판청소, 인테리어 후 청소, 준공청소, 후드청소, 쓰레기집 청소, 특수청소, 바닥청소 키워드를 지역별로 정리했습니다.
          </p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          {/* 입주청소 전용 허브 이동 안내 배너 */}
          <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '15px' }}>
            <span style={{ fontSize: '15px', color: '#1e3a8a', fontWeight: '700' }}>
              💡 입주청소 및 이사청소 키워드는 <Link href="/move-in-cleaning/seoul" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: '800' }}>[수도권 입주·이사청소 지역별 안내]</Link> 페이지에서 편리하게 확인하실 수 있습니다.
            </span>
          </div>

          {/* 종합청소 섹션들 */}
          {renderSection('서울특별시', seoulDistricts)}
          {renderSection('인천광역시', incheonDistricts)}
          {renderSection('경기도', gyeonggiDistricts)}
        </div>
      </section>
    </div>
  );
}
