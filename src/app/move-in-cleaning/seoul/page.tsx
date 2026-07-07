import React from 'react';
import { Metadata } from 'next';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { BRAND_NAME } from '@/lib/seo';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '수도권 입주청소 지역별 키워드 통합 허브 | 모두종합환경',
  description: '서울·인천·경기 지역별 입주청소 페이지를 한 곳에서 확인할 수 있습니다. 구·동·시·읍·면 단위 입주청소 키워드를 지역별로 정리했습니다.',
};

export default function MoveInCleaningUnifiedHubPage() {
  // 입주청소 서비스 slug 추출
  const moveInService = services.find(s => s.id === 'move-in' || s.serviceSlug === 'move-in-cleaning');
  const moveInSlug = moveInService?.serviceSlug || 'move-in-cleaning';

  // 광역자치단체별 렌더링 헬퍼 함수
  const renderCitySection = (cityTitle: string, citySlug: string) => {
    const cityRegions = regions.filter(r => r.regionSlug === citySlug);
    const districts = Array.from(new Set(cityRegions.map(r => r.districtSlug)));

    if (districts.length === 0) return null;

    return (
      <div id={`section-${citySlug}`} style={{ marginTop: '50px', scrollMarginTop: '20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e3a8a', borderLeft: '5px solid #2563eb', paddingLeft: '12px', marginBottom: '25px' }}>
          {cityTitle} 지역 안내
        </h2>
        <div className={styles.grid}>
          {districts.map(dSlug => {
            const districtRegion = cityRegions.find(r => r.districtSlug === dSlug && r.subDistrictSlug === 'all');
            const dongs = cityRegions.filter(r => r.districtSlug === dSlug && r.subDistrictSlug !== 'all');
            
            if (!districtRegion) return null;

            const shortDistrict = districtRegion.district.replace(/(구|시)$/, '');
            const suffix = districtRegion.district.endsWith('시') ? '-si' : '-gu';
            const showShortDistrict = districtRegion.districtSlug !== 'jung-gu';

            return (
              <div key={dSlug} className={styles.card}>
                <h3 className={styles.districtTitle}>
                  {districtRegion.district}
                </h3>
                
                <div className={styles.linkGroup}>
                  {/* 1. 구/시 단위 키워드 */}
                  {citySlug === 'incheon' ? (
                    // 인천은 canonical 규칙상 접미사 없이 districtSlug만 사용
                    <Link 
                      href={`/incheon/${districtRegion.districtSlug}/${moveInSlug}`}
                      className={styles.primaryLink}
                    >
                      {districtRegion.district} 입주청소
                    </Link>
                  ) : (
                    // 서울/경기는 canonical 접미사 -gu/-si 사용
                    <Link 
                      href={`/${citySlug}/${districtRegion.districtSlug}${suffix}/${moveInSlug}`}
                      className={styles.primaryLink}
                    >
                      {districtRegion.district} 입주청소
                    </Link>
                  )}

                  {/* 2. 구/시 제거형 키워드 (인천은 불필요하므로 서울/경기만 노출) */}
                  {citySlug !== 'incheon' && showShortDistrict && (
                    <Link 
                      href={`/${citySlug}/${districtRegion.districtSlug}/${moveInSlug}`}
                      className={styles.secondaryLink}
                    >
                      {shortDistrict} 입주청소
                    </Link>
                  )}

                  {/* 3. 동 단위 키워드 */}
                  {dongs.map(dong => (
                    <Link 
                      key={dong.subDistrictSlug}
                      href={`/${citySlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${moveInSlug}`}
                      className={styles.dongLink}
                    >
                      {dong.subDistrict} 입주청소
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <span className={styles.badge}>수도권 입주청소 통합 허브</span>
          <h1 className={styles.title}>수도권 입주청소 지역별 안내</h1>
          <p className={styles.subtitle}>
            서울·인천·경기 입주청소 키워드를 한 곳에서 관리하는 통합 허브입니다.<br />
            각 지역별 링크는 해당 지역 입주청소 전용 페이지로 연결됩니다.
          </p>
          
          {/* 상단 요약 / 지역 바로가기 앵커 버튼 */}
          <div className={styles.anchorWrapper}>
            <a href="#section-seoul" className={styles.anchorBtn}>서울특별시 바로가기</a>
            <a href="#section-incheon" className={styles.anchorBtn}>인천광역시 바로가기</a>
            <a href="#section-gyeonggi" className={styles.anchorBtn}>경기도 바로가기</a>
          </div>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          {/* 서울, 인천, 경기 통합 렌더링 */}
          {renderCitySection('서울특별시', 'seoul')}
          {renderCitySection('인천광역시', 'incheon')}
          {renderCitySection('경기도', 'gyeonggi')}
        </div>
      </section>
    </div>
  );
}
