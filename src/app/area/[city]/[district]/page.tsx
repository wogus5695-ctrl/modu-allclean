import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { getRegionMetadata, BRAND_NAME } from '@/lib/seo';
import SectionCTA from '@/components/SectionCTA';
import Link from 'next/link';
import styles from './page.module.css';

type Props = {
  params: Promise<{ city: string; district: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, district } = await params;
  return getRegionMetadata(district);
}

export default async function AreaPage({ params }: Props) {
  const { city, district: districtSlug } = await params;
  
  const region = regions.find(r => r.districtSlug === districtSlug && r.subDistrictSlug === 'all');
  const dongs = regions.filter(r => r.districtSlug === districtSlug && r.subDistrictSlug !== 'all');

  if (!region || region.regionSlug !== city) {
    notFound();
  }

  const checklist = [
    '작업 지역 (동 이름)',
    '건물 유형 (상가, 사무실 등)',
    '원하시는 작업명 (외벽, 바닥 등)',
    '대략적인 작업 면적',
    '오염 상태 (심함, 보통 등)',
    '현장 사진 보유 여부',
    '작업 희망 일정'
  ];

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>{region.district} 종합청소 전문 {BRAND_NAME}</h1>
          <p className={styles.subtitle}>{region.localDescription}</p>
          <div className={styles.headerCta}>
            <a href="tel:010-0000-0000" className={styles.primaryBtn}>{region.district} 상담 바로가기</a>
          </div>
        </div>
      </header>

      <SectionCTA 
        title={`${region.district} 전 지역 실시간 방문 견적`}
        subtitle="원하시는 시간대에 맞춰 전문가가 직접 방문하여 상세한 견적을 안내해 드립니다."
      />

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.mainGrid}>
            <div className={styles.leftCol}>
              {/* Regional Services */}
              <div className={styles.card}>
                <h2>{region.district} 주요 청소 서비스</h2>
                <div className={styles.serviceGrid}>
                  {services.map(service => (
                    <Link 
                      key={service.id} 
                      href={`/${region.regionSlug}/${region.districtSlug}/${service.serviceSlug}`}
                      className={styles.serviceLink}
                    >
                      <div className={styles.serviceInfo}>
                        <h3>{region.district} {service.serviceNameKo} 추천</h3>
                        <p>{region.district} {service.serviceNameKo} 상담 및 견적 안내</p>
                      </div>
                      <span className={styles.arrow}>→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* District Characteristics */}
              <div className={styles.card}>
                <h2>{region.district} 지역 특징 및 주요 작업군</h2>
                <p className={styles.descText}>
                  {region.district}은 {region.buildingCharacteristics} 중심의 환경을 가지고 있어, 
                  이에 최적화된 청소 장비와 전문 인력을 배치하여 시공하고 있습니다.
                </p>
              </div>

              {/* Sub-districts (Dongs) */}
              <div className={styles.card}>
                <h2>{region.district} 세부 작업 가능 동 안내</h2>
                <div className={styles.dongGrid}>
                  {dongs.map((dong, index) => {
                    const service = services[index % services.length];
                    return (
                      <Link 
                        key={dong.subDistrictSlug} 
                        href={`/${region.regionSlug}/${region.districtSlug}/${dong.subDistrictSlug}/${service.serviceSlug}`}
                        className={styles.dongTag}
                      >
                        {dong.subDistrict} {service.serviceNameKo}
                      </Link>
                    );
                  })}
                </div>
                <p className={styles.dongInfo}>* 각 동 이름을 클릭하면 세부 지역별 랜딩 페이지로 이동합니다.</p>
              </div>
            </div>

            <div className={styles.rightCol}>
              {/* Consultation Checklist */}
              <div className={styles.sideCard}>
                <h3>문의 전 확인사항</h3>
                <p className={styles.sideDesc}>아래 정보를 미리 준비해 주시면 더욱 정확하고 빠른 견적 상담이 가능합니다.</p>
                <ul className={styles.checklist}>
                  {checklist.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Sticky Contact */}
              <div className={`${styles.sideCard} ${styles.blueCard}`}>
                <h3>{region.district} 전담팀 연결</h3>
                <p>무료 현장 방문 견적 가능</p>
                <a href="tel:010-0000-0000" className={styles.sideBtn}>전화 상담 신청</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA 
        title={`${region.district} 청소, 전문가에게 맡기세요`}
        subtitle="지금 바로 상담 신청하고 완벽한 청결 솔루션을 경험해 보세요."
      />
    </div>
  );
}

export async function generateStaticParams() {
  const uniqueDistricts = Array.from(new Set(regions.map(r => r.districtSlug)));
  const params: { city: string; district: string }[] = [];
  
  uniqueDistricts.forEach(dSlug => {
    const r = regions.find(reg => reg.districtSlug === dSlug);
    if (r) {
      params.push({ city: r.regionSlug, district: r.districtSlug });
    }
  });

  return params;
}
