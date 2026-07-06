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

  // 기존 키워드 렌더링 (입주청소 제외한 서비스 필터링)
  const generalServices = services.filter(s => s.id !== 'move-in' && s.serviceSlug !== 'move-in-cleaning');
  
  // 입주청소 서비스 객체 추출
  const moveInService = services.find(s => s.id === 'move-in' || s.serviceSlug === 'move-in-cleaning');

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

  // 신규 확장 "입주청소" 전용 섹션 렌더링 (서울 지역에 한함)
  const renderMoveInCleaningSection = () => {
    if (!moveInService || seoulDistricts.length === 0) return null;

    return (
      <div className={styles.regionGroup} style={{ borderTop: '3px dashed #3b82f6', paddingTop: '60px', marginTop: '60px' }}>
        <h2 className={styles.regionGroupTitle} style={{ color: '#2563eb', borderBottom: '3px solid #2563eb' }}>
          [260705 추가 키워드 - 입주청소]
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {seoulDistricts.map(dSlug => {
            const districtRegion = regions.find(r => r.regionSlug === 'seoul' && r.districtSlug === dSlug && r.subDistrictSlug === 'all');
            const dongs = regions.filter(r => r.regionSlug === 'seoul' && r.districtSlug === dSlug && r.subDistrictSlug !== 'all');
            
            if (!districtRegion) return null;

            const shortDistrict = districtRegion.district.replace(/(구|시)$/, '');
            const suffix = '-gu';

            // 중구 예외 처리: "중" 단독 키워드 생성 방지
            const showShortDistrict = districtRegion.districtSlug !== 'jung-gu';

            return (
              <div key={dSlug} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                  {districtRegion.district}
                </h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {/* 구 단위 키워드 링크 */}
                  <Link 
                    href={`/seoul/${districtRegion.districtSlug}${suffix}/${moveInService.serviceSlug}`}
                    style={{ fontSize: '13px', color: '#1e3a8a', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none' }}
                  >
                    {districtRegion.district} 입주청소
                  </Link>
                  {showShortDistrict && (
                    <Link 
                      href={`/seoul/${districtRegion.districtSlug}/${moveInService.serviceSlug}`}
                      style={{ fontSize: '13px', color: '#1e3a8a', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none' }}
                    >
                      {shortDistrict} 입주청소
                    </Link>
                  )}

                  {/* 동 단위 키워드 링크 */}
                  {dongs.map(dong => (
                    <Link 
                      key={dong.subDistrictSlug}
                      href={`/seoul/${dong.districtSlug}/${dong.subDistrictSlug}/${moveInService.serviceSlug}`}
                      style={{ fontSize: '13px', color: '#475569', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: '6px', textDecoration: 'none' }}
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
          <h1 className={styles.title}>서울·인천·경기 전 지역 종합청소 서비스 키워드 맵</h1>
          <p className={styles.subtitle}>
            {BRAND_NAME}이 제공하는 서울, 인천, 경기 전역의 지역별 맞춤 청소 솔루션을 한눈에 확인하실 수 있습니다.<br />
            원하시는 지역과 서비스를 선택하여 상세 정보를 확인하세요.
          </p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          {/* 1. 입주청소 전용 추가 섹션 (최상단 구분) */}
          {renderMoveInCleaningSection()}

          {/* 2. 기존 종합청소 섹션들 */}
          {renderSection('서울특별시', seoulDistricts)}
          {renderSection('인천광역시', incheonDistricts)}
          {renderSection('경기도', gyeonggiDistricts)}
        </div>
      </section>
    </div>
  );
}
