import React from 'react';
import { Metadata } from 'next';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { BRAND_NAME } from '@/lib/seo';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '수도권 입주·이사청소 지역별 키워드 통합 허브 | 모두종합환경',
  description: '서울·인천·경기 입주청소와 이사청소 키워드를 한 곳에서 관리하는 통합 허브입니다. 각 지역별 링크는 해당 지역의 입주청소 또는 이사청소 전용 페이지로 연결됩니다.',
  openGraph: {
    title: '수도권 입주·이사청소 지역별 키워드 통합 허브 | 모두종합환경',
    description: '서울·인천·경기 입주청소와 이사청소 키워드를 한 곳에서 관리하는 통합 허브입니다. 각 지역별 링크는 해당 작업별 전용 페이지로 연결됩니다.',
    url: 'https://www.moduclean.co.kr/move-in-cleaning/seoul',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '수도권 입주·이사청소 지역별 키워드 통합 허브 | 모두종합환경',
    description: '서울·인천·경기 입주청소와 이사청소 키워드를 한 곳에서 관리하는 통합 허브입니다. 각 지역별 링크는 해당 작업별 전용 페이지로 연결됩니다.',
  }
};

export default function MoveInCleaningUnifiedHubPage() {
  // 입주청소 및 이사청소 서비스 slug 추출
  const moveInService = services.find(s => s.id === 'move-in' || s.serviceSlug === 'move-in-cleaning');
  const moveInSlug = moveInService?.serviceSlug || 'move-in-cleaning';

  const movingService = services.find(s => s.id === 'moving' || s.serviceSlug === 'moving-cleaning');
  const movingSlug = movingService?.serviceSlug || 'moving-cleaning';

  // JSON-LD 구조화 데이터 정의
  const hubJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': '수도권 입주·이사청소 지역별 키워드 통합 허브 | 모두종합환경',
    'description': '서울·인천·경기 입주청소와 이사청소 키워드를 한 곳에서 관리하는 통합 허브입니다.',
    'url': 'https://www.moduclean.co.kr/move-in-cleaning/seoul',
    'publisher': {
      '@type': 'Organization',
      'name': '모두종합환경'
    }
  };

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
                    <>
                      <Link 
                        href={`/incheon/${districtRegion.districtSlug}/${moveInSlug}`}
                        className={styles.primaryLink}
                      >
                        {districtRegion.district} 입주청소
                      </Link>
                      <Link 
                        href={`/incheon/${districtRegion.districtSlug}/${movingSlug}`}
                        className={styles.primaryLink}
                        style={{ backgroundColor: '#f0fdf4', color: '#166534', borderColor: '#bbf7d0' }}
                      >
                        {districtRegion.district} 이사청소
                      </Link>
                    </>
                  ) : (
                    // 서울/경기는 canonical 접미사 -gu/-si 사용
                    <>
                      <Link 
                        href={`/${citySlug}/${districtRegion.districtSlug}${suffix}/${moveInSlug}`}
                        className={styles.primaryLink}
                      >
                        {districtRegion.district} 입주청소
                      </Link>
                      <Link 
                        href={`/${citySlug}/${districtRegion.districtSlug}${suffix}/${movingSlug}`}
                        className={styles.primaryLink}
                        style={{ backgroundColor: '#f0fdf4', color: '#166534', borderColor: '#bbf7d0' }}
                      >
                        {districtRegion.district} 이사청소
                      </Link>
                    </>
                  )}

                  {/* 2. 구/시 제거형 키워드 (인천은 불필요하므로 서울/경기만 노출) */}
                  {citySlug !== 'incheon' && showShortDistrict && (
                    <>
                      <Link 
                        href={`/${citySlug}/${districtRegion.districtSlug}/${moveInSlug}`}
                        className={styles.secondaryLink}
                      >
                        {shortDistrict} 입주청소
                      </Link>
                      <Link 
                        href={`/${citySlug}/${districtRegion.districtSlug}/${movingSlug}`}
                        className={styles.secondaryLink}
                        style={{ backgroundColor: '#fdf8f6', color: '#9a3412', borderColor: '#ffedd5' }}
                      >
                        {shortDistrict} 이사청소
                      </Link>
                    </>
                  )}

                  {/* 3. 동 단위 키워드 */}
                  {dongs.map(dong => (
                    <React.Fragment key={dong.subDistrictSlug}>
                      <Link 
                        href={`/${citySlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${moveInSlug}`}
                        className={styles.dongLink}
                      >
                        {dong.subDistrict} 입주청소
                      </Link>
                      <Link 
                        href={`/${citySlug}/${dong.districtSlug}/${dong.subDistrictSlug}/${movingSlug}`}
                        className={styles.dongLink}
                        style={{ backgroundColor: '#f8fafc', color: '#334155', borderColor: '#cbd5e1' }}
                      >
                        {dong.subDistrict} 이사청소
                      </Link>
                    </React.Fragment>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd) }}
      />
      <header className={styles.header}>
        <div className={styles.container}>
          <span className={styles.badge}>수도권 입주·이사청소 통합 허브</span>
          <h1 className={styles.title}>수도권 입주·이사청소 지역별 안내</h1>
          <p className={styles.subtitle} style={{ marginBottom: '1.2rem' }}>
            서울·인천·경기 입주청소와 이사청소 키워드를 한 곳에서 관리하는 통합 허브입니다.<br />
            각 지역별 링크는 해당 지역의 입주청소 또는 이사청소 전용 페이지로 연결됩니다.
          </p>
          <p className={styles.subtitle} style={{ fontSize: '14px', color: '#94a3b8' }}>
            서울·인천·경기 지역별로 구·동·시·읍·면 단위 키워드를 정리했으며, 각 지역명 아래에서 입주청소와 이사청소 페이지를 함께 확인할 수 있습니다.
          </p>
          
          {/* 상단 요약 / 지역 바로가기 앵커 버튼 */}
          <div className={styles.anchorWrapper} style={{ marginTop: '2rem' }}>
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
