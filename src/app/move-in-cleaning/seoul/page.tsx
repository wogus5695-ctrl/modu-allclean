import React from 'react';
import { Metadata } from 'next';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { BRAND_NAME } from '@/lib/seo';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '서울권 입주청소 지역별 안내 | 모두종합환경',
  description: '서울권 구·동 단위 입주청소 페이지를 정리했습니다. 각 지역별 욕실, 주방, 베란다·창틀, 분진 오염 등 입주 전 확인이 필요한 공간을 안내합니다.',
};

export default function MoveInCleaningSeoulHubPage() {
  // 서울 지역의 구/동 데이터 필터링
  const seoulRegions = regions.filter(r => r.regionSlug === 'seoul');
  const seoulDistricts = Array.from(new Set(seoulRegions.map(r => r.districtSlug)));
  
  // 입주청소 서비스 slug 추출
  const moveInService = services.find(s => s.id === 'move-in' || s.serviceSlug === 'move-in-cleaning');
  const moveInSlug = moveInService?.serviceSlug || 'move-in-cleaning';

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <span className={styles.badge}>CLEANING MAP</span>
          <h1 className={styles.title}>서울권 입주청소 지역별 안내</h1>
          <p className={styles.subtitle}>
            서울 전 지역의 구·동 단위 입주청소 세부 작업 페이지를 확인하실 수 있습니다.<br />
            입주 전 욕실 물때, 주방 기름때, 신축 분진, 창틀 먼지 등 맞춤 관리가 필요한 주거 구역의 정보와 예시를 제공합니다.
          </p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {seoulDistricts.map(dSlug => {
              const districtRegion = seoulRegions.find(r => r.districtSlug === dSlug && r.subDistrictSlug === 'all');
              const dongs = seoulRegions.filter(r => r.districtSlug === dSlug && r.subDistrictSlug !== 'all');
              
              if (!districtRegion) return null;

              const shortDistrict = districtRegion.district.replace(/(구|시)$/, '');
              const suffix = '-gu';
              const showShortDistrict = districtRegion.districtSlug !== 'jung-gu';

              return (
                <div key={dSlug} className={styles.card}>
                  <h2 className={styles.districtTitle}>
                    {districtRegion.district}
                  </h2>
                  
                  <div className={styles.linkGroup}>
                    {/* 1. 구 단위 키워드 */}
                    <Link 
                      href={`/seoul/${districtRegion.districtSlug}${suffix}/${moveInSlug}`}
                      className={styles.primaryLink}
                    >
                      {districtRegion.district} 입주청소
                    </Link>

                    {/* 2. 구 제거형 키워드 */}
                    {showShortDistrict && (
                      <Link 
                        href={`/seoul/${districtRegion.districtSlug}/${moveInSlug}`}
                        className={styles.secondaryLink}
                      >
                        {shortDistrict} 입주청소
                      </Link>
                    )}

                    {/* 3. 동 단위 키워드 */}
                    {dongs.map(dong => (
                      <Link 
                        key={dong.subDistrictSlug}
                        href={`/seoul/${dong.districtSlug}/${dong.subDistrictSlug}/${moveInSlug}`}
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
      </section>
    </div>
  );
}
