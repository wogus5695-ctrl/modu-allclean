import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { regions, Region } from '@/data/regions';
import { services, CleaningService } from '@/data/services';
import { getLandingMetadata, BRAND_NAME, CONTACT_PHONE } from '@/lib/seo';
import SectionCTA from '@/components/SectionCTA';
import Link from 'next/link';
import styles from './page.module.css';

type Props = {
  params: Promise<{ city: string; district: string; slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, district, slug } = await params;
  let subDistrictSlug = 'all';
  let serviceSlug = '';

  if (slug.length === 1) {
    serviceSlug = slug[0];
  } else if (slug.length === 2) {
    subDistrictSlug = slug[0];
    serviceSlug = slug[1];
  } else {
    return {};
  }

  const service = services.find(s => s.serviceSlug === serviceSlug);
  if (!service) return {};

  return getLandingMetadata(district, subDistrictSlug, service.id);
}

export default async function LandingPage({ params }: Props) {
  const { city, district: districtSlug, slug } = await params;
  
  let subDistrictSlug = 'all';
  let serviceSlug = '';

  if (slug.length === 1) {
    serviceSlug = slug[0];
  } else if (slug.length === 2) {
    subDistrictSlug = slug[0];
    serviceSlug = slug[1];
  } else {
    notFound();
  }

  const region = regions.find(r => r.districtSlug === districtSlug && r.subDistrictSlug === subDistrictSlug);
  const parentRegion = regions.find(r => r.districtSlug === districtSlug && r.subDistrictSlug === 'all');
  const service = services.find(s => s.serviceSlug === serviceSlug);

  if (!region || !service || region.regionSlug !== city || !parentRegion) {
    notFound();
  }

  const isDongPage = subDistrictSlug !== 'all';
  const regionName = isDongPage ? `${region.district} ${region.subDistrict}` : region.district;
  const dongs = regions.filter(r => r.districtSlug === districtSlug && r.subDistrictSlug !== 'all');

  // --- 콘텐츠 차별화 로직 (Content Differentiation) ---
  
  // 1. 도입문 패턴 다변화
  const introPatterns = [
    `${regionName} 지역에서 믿고 맡길 수 있는 ${service.serviceNameKo} 업체를 찾고 계신가요? ${BRAND_NAME}은 이 지역의 지리적 특성과 현장 환경을 완벽히 이해하고 있습니다.`,
    `${regionName} 고객님의 소중한 공간을 더욱 쾌적하게 만드는 ${service.serviceNameKo} 솔루션, 이제 전문가에게 맡기세요. ${BRAND_NAME}은 ${parentRegion.buildingCharacteristics}에 최적화된 시공 노하우를 보유하고 있습니다.`,
    `${regionName}의 비즈니스와 일상에 청결함을 더하는 ${service.serviceNameKo} 전문팀 ${BRAND_NAME}입니다. ${parentRegion.localDescription}`,
  ];
  // 지역Slug와 서비스Id의 조합으로 고유한 패턴 선택 (중복 방지)
  const patternIndex = (region.districtSlug.length + service.id.length) % introPatterns.length;
  const selectedIntro = introPatterns[patternIndex];

  // 2. 서비스별 문제 원인 (데이터 기반 확장)
  const problemAdjectives = ['치명적인', '고착된', '불쾌한', '심각한', '장기적인', '반복되는'];
  const personalizedProblems = service.commonProblems.map((p, i) => {
    const adj = problemAdjectives[(patternIndex + i) % problemAdjectives.length];
    return `${adj} ${p}`;
  });

  // 3. 지역 밀착 FAQ 생성 (고정 FAQ + 지역 FAQ 조합)
  const localFaqs = [
    { question: `${regionName} 지역 작업 일정도 주말에 가능한가요?`, answer: `네, ${BRAND_NAME}은 ${regionName} 전 지역 연중무휴 서비스를 제공하고 있어 주말 및 야간 작업도 얼마든지 가능합니다.` },
    { question: `${regionName} 인근의 현장 방문 견적 비용은 얼마인가요?`, answer: `${BRAND_NAME}은 고객님의 부담을 덜어드리기 위해 ${regionName} 전 지역 무료 방문 견적 서비스를 원칙으로 하고 있습니다.` },
  ];
  const combinedFaqs = [...service.faq.slice(0, 3), ...localFaqs];

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            {regionName} <span>{service.serviceNameKo}</span> 전문 {BRAND_NAME}
          </h1>
          <p className={styles.subtitle}>
            {service.shortDescription}<br />
            {regionName}의 쾌적한 환경을 위한 최적의 파트너가 되어 드립니다.
          </p>
          <div className={styles.ctaBox}>
            <a href={`tel:${CONTACT_PHONE}`} className={styles.primaryBtn}>{regionName} 견적 상담하기</a>
          </div>
        </div>
      </section>

      <SectionCTA 
        title={`${regionName} ${service.serviceNameKo} 무료 견적`}
        subtitle={`현장 상황에 최적화된 ${service.serviceNameKo} 솔루션을 제안해 드립니다.`}
      />

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.mainGrid}>
            <div className={styles.leftCol}>
              {/* Introduction Card */}
              <div className={styles.card}>
                <h2>{regionName} {service.serviceNameKo} 서비스 특징</h2>
                <p className={styles.longText}>{selectedIntro}</p>
                <p className={styles.longText} style={{ marginTop: '15px' }}>
                  특히 {isDongPage ? region.subDistrict : region.district} 인근은 {parentRegion.buildingCharacteristics} 중심의 현장이 많아 
                  {personalizedProblems.join(', ')} 등의 문제를 해결하려는 수요가 높습니다.
                </p>
              </div>

              {/* Service Details */}
              <div className={styles.gridBox}>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>주요 해결 오염원</h3>
                  <ul className={styles.checkList}>
                    {personalizedProblems.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>추천 작업 대상</h3>
                  <ul className={styles.bulletList}>
                    {service.targetBuildings.map((b, i) => <li key={i}>{b}</li>)}
                    <li>{region.district} 내 주요 상업 시설</li>
                  </ul>
                </div>
              </div>

              {/* Process Section */}
              <div className={styles.card}>
                <h2>{BRAND_NAME}의 {service.serviceNameKo} 시공 공정</h2>
                <div className={styles.processSteps}>
                  {service.process.map((step, i) => (
                    <div key={i} className={styles.processStep}>
                      <span className={styles.stepNum}>{i + 1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className={styles.card}>
                <h2>{regionName} 고객님들이 자주 묻는 질문</h2>
                <div className={styles.faqList}>
                  {combinedFaqs.map((faq, i) => (
                    <div key={i} className={styles.faqItem}>
                      <div className={styles.faqQ}>Q. {faq.question}</div>
                      <div className={styles.faqA}>A. {faq.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.rightCol}>
              {/* Regional CTA */}
              <div className={`${styles.sideCard} ${styles.blueCard}`}>
                <h3>{regionName} 빠른 상담</h3>
                <p className={styles.sideDesc}>
                  <strong>지역, 건물 유형, 작업명, 사진</strong>을 알려주시면 가장 정확한 {regionName} {service.serviceNameKo} 견적을 안내해 드립니다.
                </p>
                <div className={styles.sideCtaGroup}>
                  <a href={`tel:${CONTACT_PHONE}`} className={styles.sideBtn}>전화 바로 연결</a>
                  <a href="https://pf.kakao.com/_xxxx" className={styles.sideBtnWhite}>카톡 실시간 상담</a>
                </div>
              </div>

              {/* Related Region Links */}
              <div className={styles.sideCard}>
                <h3>{region.district} 서비스 탐색</h3>
                <div className={styles.tagGrid}>
                  {services.filter(s => s.id !== service.id).slice(0, 6).map(s => (
                    <Link key={s.id} href={`/${city}/${districtSlug}/${s.serviceSlug}`} className={styles.tagLink}>
                      {region.district} {s.serviceNameKo} 전문상담
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA 
        title={`${regionName} ${service.serviceNameKo} 상담하기`}
        subtitle="24시간 언제든 친절하고 정확하게 안내해 드리겠습니다."
      />
    </div>
  );
}

export async function generateStaticParams() {
  const params: { city: string; district: string; slug: string[] }[] = [];
  
  regions.forEach(region => {
    services.forEach(service => {
      if (region.subDistrictSlug === 'all') {
        params.push({ city: region.regionSlug, district: region.districtSlug, slug: [service.serviceSlug] });
      } else {
        params.push({ city: region.regionSlug, district: region.districtSlug, slug: [region.subDistrictSlug, service.serviceSlug] });
      }
    });
  });

  return params;
}
