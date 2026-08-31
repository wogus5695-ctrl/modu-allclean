import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { factoryServices } from '@/data/seo/factoryServices';
import { factoryEnabledCombinations, factoryTargetRegions } from '@/data/seo/factoryActiveCombinations';
import styles from '../page.module.css';
import { BRAND_NAME, DOMAIN } from '@/lib/seo';

type Props = {
  params: Promise<{ service: string }>;
};

// 10개 작업명 하부 허브 페이지 프리렌더링용 빌드 정보 설정
export async function generateStaticParams() {
  return factoryServices.map(s => ({
    service: s.serviceSlug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = factoryServices.find(s => s.serviceSlug === serviceSlug);

  if (!service) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${service.serviceNameKo} 전문 지역별 서비스 안내 | ${BRAND_NAME}`,
    description: `${service.serviceNameKo}의 전문 공정 내용과 시공 가능한 지역 조합을 통합 안내하는 허브 페이지입니다.`,
    alternates: {
      canonical: `${DOMAIN}/factory-cleaning/${serviceSlug}`,
    },
    robots: 'noindex, nofollow',
  };
}

export default async function FactorySubHub({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = factoryServices.find(s => s.serviceSlug === serviceSlug);

  if (!service) {
    notFound();
  }

  // 이 작업명에 대해 활성화된 조합 필터링
  const enabledCombos = factoryEnabledCombinations.filter(combo => {
    const parts = combo.split('/');
    return parts[2] === serviceSlug;
  });

  // 경기, 인천, 충청권 등 광역별 그룹 분류
  const regionGroups = {
    gyeonggi: { name: '경기도', combos: [] as any[] },
    incheon: { name: '인천광역시', combos: [] as any[] },
    chungcheong: { name: '충청권', combos: [] as any[] }
  };

  enabledCombos.forEach(combo => {
    const [city, district] = combo.split('/');
    const region = factoryTargetRegions.find(r => r.regionSlug === city && r.districtSlug === district);
    if (!region) return;

    const data = {
      region,
      combo
    };

    if (city === 'incheon') {
      regionGroups.incheon.combos.push(data);
    } else if (city === 'gyeonggi') {
      regionGroups.gyeonggi.combos.push(data);
    } else if (['chungbuk', 'chungnam'].includes(city)) {
      regionGroups.chungcheong.combos.push(data);
    }
  });

  const renderGroup = (groupKey: string, group: typeof regionGroups.gyeonggi) => {
    if (group.combos.length === 0) return null;

    return (
      <div key={groupKey} className={styles.regionGroup}>
        <div className={styles.regionTitle}>
          <span>{group.name}</span>
          <span className={styles.regionCount}>{group.combos.length}개 지역 서비스 상담 가능</span>
        </div>
        <div className={styles.linkList}>
          {group.combos.map(({ region, combo }) => {
            const [city, district] = combo.split('/');
            
            const displayRegion = region.hubDisplayName;
            const suffix = region.district.endsWith('시') ? '-si' : '-gu';
            const longUrl = city === 'incheon' 
              ? `/${city}/${district}/${serviceSlug}`
              : `/${city}/${district}${suffix}/${serviceSlug}`;

            return (
              <Link key={combo} href={longUrl} className={styles.regularLink}>
                {displayRegion} {service.serviceNameKo} 바로가기
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  const hasAnyActiveCombo = enabledCombos.length > 0;

  return (
    <div className={styles.wrapper}>
      <header className={styles.subHubHeader}>
        <div className={styles.container}>
          <div className={styles.subHubBreadcrumb}>
            <Link href="/factory-cleaning">공장청소 허브</Link> &gt; <span>{service.serviceNameKo}</span>
          </div>
          <h1 className={styles.subHubTitle}>{service.serviceNameKo} 전문 지역별 서비스</h1>
          <p className={styles.subtitle}>
            {service.mainProblem}을 정교하게 제어하기 위한 전문 클리닝 매뉴얼과 상세 상담 및 시공 서비스가 즉시 연동되는 지역 목록입니다.
          </p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          {hasAnyActiveCombo ? (
            <>
              <h2 className={styles.sectionTitle}>지역별 상세 상담 채널</h2>
              <p className={styles.sectionDesc}>원하시는 지역을 선택하여 상세 견적 요인 및 맞춤형 FAQ를 바로 확인하실 수 있습니다.</p>
              
              {renderGroup('gyeonggi', regionGroups.gyeonggi)}
              {renderGroup('incheon', regionGroups.incheon)}
              {renderGroup('chungcheong', regionGroups.chungcheong)}
            </>
          ) : (
            <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', color: '#64748b' }}>
              <span style={{ fontSize: '3rem', marginBottom: '20px', display: 'block' }}>⚙️</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>서비스 상담 준비 중</h2>
              <p style={{ fontSize: '0.95rem' }}>해당 지역의 공장청소 서비스와 상담 채널을 준비하고 있습니다. 빠른 시일 내에 제공하도록 하겠습니다.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
