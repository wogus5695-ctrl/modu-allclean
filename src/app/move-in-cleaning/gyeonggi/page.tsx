import React from 'react';
import { Metadata } from 'next';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { BRAND_NAME } from '@/lib/seo';
import Link from 'next/link';
import styles from '../seoul/page.module.css';

export const metadata: Metadata = {
  title: '경기권 입주청소 지역별 안내 | 모두종합환경',
  description: '경기권 시·구·동 단위 입주청소 페이지를 정리했습니다. 각 지역별 욕실, 주방, 베란다·창틀, 분진 오염 등 입주 전 확인이 필요한 공간을 안내합니다.',
};

export default function MoveInCleaningGyeonggiHubPage() {
  // 경기 지역의 구/동 데이터 필터링
  const gyeonggiRegions = regions.filter(r => r.regionSlug === 'gyeonggi');
  const gyeonggiDistricts = Array.from(new Set(gyeonggiRegions.map(r => r.districtSlug)));
  
  // 입주청소 서비스 slug 추출
  const moveInService = services.find(s => s.id === 'move-in' || s.serviceSlug === 'move-in-cleaning');
  const moveInSlug = moveInService?.serviceSlug || 'move-in-cleaning';

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <span className={styles.badge}>CLEANING MAP</span>
          <h1 className={styles.title}>경기권 입주청소 지역별 안내</h1>
          <p className={styles.subtitle}>
            경기 전 지역의 시·구·동 단위 입주청소 세부 작업 페이지를 확인하실 수 있습니다.<br />
            입주 전 욕실 물때, 주방 기름때, 신축 분진, 창틀 먼지 등 맞춤 관리가 필요한 주거 구역의 정보와 예시를 제공합니다.
          </p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {gyeonggiDistricts.map(dSlug => {
              const districtRegion = gyeonggiRegions.find(r => r.districtSlug === dSlug && r.subDistrictSlug === 'all');
              const dongs = gyeonggiRegions.filter(r => r.districtSlug === dSlug && r.subDistrictSlug !== 'all');
              
              if (!districtRegion) return null;

              const shortDistrict = districtRegion.district.replace(/(구|시)$/, '');
              const suffix = districtRegion.district.endsWith('시') ? '-si' : '-gu';
              const showShortDistrict = districtRegion.districtSlug !== 'jung-gu';

              return (
                <div key={dSlug} className={styles.card}>
                  <h2 className={styles.districtTitle}>
                    {districtRegion.district}
                  </h2>
                  
                  <div className={styles.linkGroup}>
                    {/* 1. 구/시 단위 키워드 (canonical인 -gu/-si 접미사 주소) */}
                    <Link 
                      href={`/gyeonggi/${districtRegion.districtSlug}${suffix}/${moveInSlug}`}
                      className={styles.primaryLink}
                    >
                      {districtRegion.district} 입주청소
                    </Link>

                    {/* 2. 구/시 제거형 키워드 */}
                    {showShortDistrict && (
                      <Link 
                        href={`/gyeonggi/${districtRegion.districtSlug}/${moveInSlug}`}
                        className={styles.secondaryLink}
                      >
                        {shortDistrict} 입주청소
                      </Link>
                    )}

                    {/* 3. 동 단위 키워드 */}
                    {dongs.map(dong => (
                      <Link 
                        key={dong.subDistrictSlug}
                        href={`/gyeonggi/${dong.districtSlug}/${dong.subDistrictSlug}/${moveInSlug}`}
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
