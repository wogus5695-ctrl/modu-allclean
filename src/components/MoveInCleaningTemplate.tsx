"use client";

import { LandingPageData } from '@/lib/seo-builder';
import { CONTACT_PHONE, BRAND_NAME, CONTACT_KAKAOTALK } from '@/lib/seo';
import { SeoService } from '@/data/seo/services';
import styles from '@/app/page.module.css';
import FloatingContact from '@/components/FloatingContact';
import Header from '@/components/Header';
import Link from 'next/link';

interface MoveInCleaningTemplateProps {
  data: LandingPageData;
  regionObj: any;
  currentService: SeoService;
}

export default function MoveInCleaningTemplate({ data, regionObj, currentService }: MoveInCleaningTemplateProps) {
  const regionName = regionObj?.displayNameKo || regionObj?.subDistrict || regionObj?.district || '';
  const parentRegion = regionObj?.district || '';

  // 1. 입주 전 청소가 필요한 이유 리스트
  const whyReasons = [
    { title: "신축 분진", desc: "도배 풀, 시멘트 가루, 미세 톱밥 등 신축/리모델링 후 구석구석 남은 분진을 찾아냅니다." },
    { title: "생활 오염", desc: "이전 거주자가 나가며 남긴 벽지 찌든 먼지, 바닥 얼룩 및 생활 흔적을 세정합니다." },
    { title: "창틀 먼지", desc: "외부 미세먼지와 빗물이 유입되어 굳어버린 창틀 틈새의 새까만 찌든 먼지를 케어합니다." },
    { title: "욕실 물때", desc: "세면대, 거울, 샤워부스 유리, 타일 틈새에 축적된 불투명한 물때와 이물질을 세척합니다." },
    { title: "주방 기름때", desc: "가스레인지 주변 벽 타일, 가구 하부, 후드 필터에 고착된 끈적한 기름 오염을 녹여냅니다." },
    { title: "입주 일정 압박", desc: "이사 당일에는 짐이 들어오기 때문에 반드시 짐 반입 전에 완료할 수 있도록 일정을 확보합니다." }
  ];

  // 2. 입주청소 작업 범위 - 4카드
  const serviceCards = [
    {
      title: "욕실 청소",
      desc: "세면대, 변기, 수전, 거울, 배수구 주변의 물때와 오염을 확인합니다.",
      details: ["세면대", "변기", "배수구", "타일"]
    },
    {
      title: "주방 청소",
      desc: "싱크대, 상·하부장, 조리대, 타일 주변의 기름때와 생활 오염을 정리합니다.",
      details: ["싱크대", "수납장", "조리대", "타일"]
    },
    {
      title: "베란다·창틀 청소",
      desc: "베란다 바닥, 배수구 주변, 창틀 틈새 먼지처럼 입주 후 직접 하기 번거로운 구간을 확인합니다.",
      details: ["베란다", "창틀", "배수구", "방충망"]
    },
    {
      title: "전체 오염·분진 청소",
      desc: "바닥, 몰딩, 문틀, 수납장 내부, 콘센트 주변의 먼지와 분진을 확인합니다.",
      details: ["바닥", "몰딩", "문틀", "수납장"]
    }
  ];

  // 3. 현장 유형별 대응
  const buildingTypes = [
    { type: "신축 아파트", desc: "공사 분진, 창틀 먼지, 수납장 내부 먼지 확인" },
    { type: "구축 아파트", desc: "주방 기름때, 욕실 물때, 전 세입자 생활 오염 확인" },
    { type: "오피스텔", desc: "좁은 공간의 주방·욕실·수납장 중심 청소" },
    { type: "빌라", desc: "베란다, 욕실, 창틀 상태에 따른 작업 범위 확인" },
    { type: "인테리어 후 입주", desc: "목공 분진, 페인트 자국, 바닥 잔먼지 확인" },
    { type: "전세·월세 입주", desc: "이전 거주 흔적과 생활 오염 중심 확인" }
  ];

  // 4. 입주청소 진행 과정
  const processSteps = [
    { num: "1", title: "지역·평수·입주일 확인", desc: "정확한 상담의 시작을 위해 작업할 상세 주소지, 공급 평면 및 이사 일정을 먼저 확인합니다." },
    { num: "2", title: "현장 상태 확인", desc: "신축/구축 유무, 리모델링 범위, 특별히 오염이 심한 집중 구역을 파악합니다." },
    { num: "3", title: "작업 범위와 견적 안내", desc: "선택해주신 조건에 부합하는 투명한 표준 청소 범위와 예상 견적을 산출하여 안내합니다." },
    { num: "4", title: "일정 확정", desc: "고객님의 가구 진입 및 이삿짐 보관 일정에 조율하여 최적의 청소 시간대를 최종 예약합니다." },
    { num: "5", title: "입주 전 청소 진행", desc: "탈거식 분해 청소 공정 및 구역별 위에서 아래로 순차적인 정밀 클리닝 작업을 시작합니다." },
    { num: "6", title: "작업 후 주요 공간 확인", desc: "작업 직후 실시간 전후 사진 보고 또는 현장 확인을 통해 확실히 마무리를 검수합니다." }
  ];

  // 5. 견적 기준
  const estimateFactors = [
    "평수",
    "방/욕실 개수",
    "신축/구축 여부",
    "오염도",
    "베란다·창틀 작업 범위",
    "입주 예정일",
    "빈집 여부",
    "사진 확인 가능 여부"
  ];

  // 6. 상담 전 체크리스트
  const checkListItems = [
    "지역",
    "입주일",
    "평수",
    "집 형태",
    "신축/구축 여부",
    "사진 2~3장"
  ];

  // 7. 입주청소 전용 FAQ 데이터
  const faqList = [
    {
      q: `${regionName} 입주청소는 입주 며칠 전에 하는 게 좋나요?`,
      a: "가구가 들어오기 전 빈집 상태에서 진행하는 것이 가장 좋습니다. 보통 입주일 1~3일 전 작업을 권장하며, 일정이 촉박한 경우 상담 시 가능 여부를 확인합니다."
    },
    {
      q: "욕실과 주방 오염도 따로 확인해주시나요?",
      a: "네. 욕실은 물때, 배수구, 수전 주변을 중심으로 확인하고, 주방은 싱크대, 상·하부장, 조리대, 타일 주변의 생활 오염을 중심으로 확인합니다."
    },
    {
      q: "베란다와 창틀도 포함되나요?",
      a: "베란다 바닥, 배수구 주변, 창틀 틈새 먼지 등은 입주 후 직접 정리하기 번거로운 구간입니다. 현장 상태와 견적 범위에 따라 포함 여부를 상담 시 확인합니다."
    },
    {
      q: "신축 아파트 공사 분진도 청소 가능한가요?",
      a: "가능합니다. 신축 현장은 겉으로 깨끗해 보여도 창틀, 바닥, 몰딩, 수납장 내부에 공사 분진이 남아 있는 경우가 많습니다."
    },
    {
      q: "짐이 있는 상태에서도 입주청소가 가능한가요?",
      a: "가능은 하지만 빈집 상태보다 작업 범위가 제한될 수 있습니다. 가구나 짐이 많다면 상담 시 미리 알려주셔야 합니다."
    },
    {
      q: "견적은 어떻게 확인하나요?",
      a: "지역, 평수, 집 형태, 오염도, 작업 범위, 입주 예정일에 따라 달라집니다. 사진과 기본 정보를 알려주시면 상담이 빠릅니다."
    }
  ];

  return (
    <div className={styles.wrapper}>
      {/* 간결화된 입주청소 전용 헤더 (로고 & 전화상담만 표시) */}
      <Header isMoveInOnly={true} />

      {/* Hero Section */}
      <section className={styles.hero} style={{ background: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/services/move-in-hero.jpg') no-repeat center center/cover" }}>
        <div className={styles.heroOverlay} style={{ background: "linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.25) 100%)" }}></div>
        <div className={styles.inner}>
          <div className="animate-fade-up">
            {/* 데스크톱 Hero 영역 */}
            <div className={styles.desktopOnly}>
              <h1 className={styles.heroTitle} style={{ fontSize: 'clamp(32px, 5vw, 54px)', lineHeight: '1.2', fontWeight: 800 }}>
                {regionName} 입주청소
              </h1>
              <p className={styles.heroDesc} style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginTop: '1rem', marginBottom: '0.5rem' }}>
                입주 전, 집 안 곳곳의 먼지와 오염을 정리합니다
              </p>
              <p className={styles.heroDesc} style={{ fontSize: '1.05rem', color: '#e2e8f0', lineHeight: '1.6', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
                신축 아파트, 구축 아파트, 오피스텔, 빌라 입주 전<br />
                욕실·주방·베란다·전체 오염 상태를 기준으로 작업 범위를 확인합니다.
              </p>
              <div className={styles.heroCta} style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`} style={{ padding: '15px 30px', fontSize: '16px' }}>
                  전화 견적 상담
                </a>
                <a href={CONTACT_KAKAOTALK} target="_blank" rel="noopener noreferrer" className={`${styles.ctaBtn} ${styles.kakao}`} style={{ padding: '15px 30px', fontSize: '16px' }}>
                  입주일 전 일정 확인
                </a>
              </div>
            </div>

            {/* 모바일 Hero 영역 */}
            <div className={styles.mobileOnly}>
              <h1 className={styles.heroTitle} style={{ fontSize: '28px', lineHeight: '1.3', fontWeight: 800, marginBottom: '12px' }}>
                {regionName} 입주청소
              </h1>
              <p className={styles.heroDesc} style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                입주 전 집 안 청소,
              </p>
              <p className={styles.heroDesc} style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '24px' }}>
                욕실·주방·베란다까지 확인합니다.
              </p>
              <div className={styles.heroCta} style={{ display: 'flex', justifyContent: 'center' }}>
                <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`} style={{ width: '100%', maxWidth: '300px', padding: '14px 20px', fontSize: '15px', display: 'block', textAlign: 'center' }}>
                  📞 전화 견적 상담
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. 입주 전 청소가 필요한 이유 Section */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Why Move-in Cleaning?</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(22px, 4vw, 32px)', lineHeight: '1.3' }}>
              겉으로 깨끗해 보여도<br />입주 전 확인해야 할 곳이 있습니다
            </h2>
            <p className={styles.sectionDesc} style={{ marginTop: '1rem', color: '#475569', fontSize: '1.025rem', lineHeight: '1.6', maxWidth: '800px', margin: '1rem auto 0 auto' }}>
              신축 분진, 전 세입자 흔적, 욕실 물때, 주방 기름때, 창틀 먼지, 수납장 내부 먼지는 입주 후 직접 정리하기 번거로운 경우가 많습니다.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {whyReasons.map((item, idx) => (
              <div key={idx} style={{ background: '#f8fafc', padding: '1.8rem 1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#0070f3' }}>✔</span> {item.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 입주청소 작업 범위 - 4카드 Section */}
      <section style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Service Guide</span>
            <h2 className={styles.sectionTitle}>
              {regionName} 입주청소 작업 범위
            </h2>
            <p className={styles.sectionDesc} style={{ marginTop: '1rem', color: '#475569', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '800px', margin: '1rem auto 0 auto' }}>
              입주 전 가장 많이 확인하는 욕실, 주방, 베란다·창틀, 전체 오염·분진을 중심으로 현장 상태에 맞춰 청소합니다.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {serviceCards.map((card, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '2.2rem 2rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>{card.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', minHeight: '4.5rem' }}>{card.desc}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.2rem' }}>
                  {card.details.map((detail, dIdx) => (
                    <span key={dIdx} style={{ fontSize: '0.785rem', color: '#0070f3', backgroundColor: '#eef6ff', padding: '4px 10px', borderRadius: '4px', fontWeight: '600' }}>
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
            <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`} style={{ minWidth: '260px', textAlign: 'center' }}>
              입주청소 작업 범위 상담
            </a>
          </div>
        </div>
      </section>

      {/* 3. 현장 유형별 대응 Section */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Solutions by Type</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(22px, 4vw, 32px)', lineHeight: '1.3' }}>
              현장 상태에 따라<br />입주청소 기준이 달라집니다
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {buildingTypes.map((item, idx) => (
              <div key={idx} style={{ background: '#fff', borderLeft: '4px solid #0070f3', padding: '1.5rem 1.8rem', boxShadow: 'var(--shadow-sm)', borderTop: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', borderRadius: '0 8px 8px 0' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.6rem' }}>{item.type}</h3>
                <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 입주청소 진행 과정 Section */}
      <section style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Process Flow</span>
            <h2 className={styles.sectionTitle}>
              입주청소는 이렇게 진행됩니다
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {processSteps.map((step, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '2rem 1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1.2rem', fontSize: '2.5rem', fontWeight: '900', color: '#e2e8f0', lineHeight: 1 }}>{step.num}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.8rem', position: 'relative', zIndex: 1 }}>{step.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.5', margin: 0, position: 'relative', zIndex: 1 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 작업 예시 / 전후 이미지 Section */}
      <section className={styles.portfolio} style={{ padding: '5rem 0', background: '#fff' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Before & After</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(22px, 4vw, 32px)', lineHeight: '1.3' }}>
              입주 전 확인이 필요한 공간을<br />사진으로 보여드립니다
            </h2>
          </div>
          <div className={styles.sliderContainer} style={{ marginTop: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioCategory}>욕실 작업 예시</div>
                <div className={styles.comparisonGrid}>
                  <div className={styles.imageBox}>
                    <img src="/images/portfolio/floor-before.jpg" alt={`${regionName} 입주청소 욕실 세척 전 상태`} />
                    <span className={styles.tagBefore}>BEFORE</span>
                  </div>
                  <div className={styles.imageBox}>
                    <img src="/images/portfolio/floor-after.jpg" alt={`${regionName} 입주청소 욕실 세척 후 상태`} />
                    <span className={styles.tagAfter}>AFTER</span>
                  </div>
                </div>
              </div>

              <div className={styles.portfolioCard}>
                <div className={styles.portfolioCategory}>주방 작업 예시</div>
                <div className={styles.comparisonGrid}>
                  <div className={styles.imageBox}>
                    <img src="/images/portfolio/ac-before.jpg" alt={`${regionName} 입주청소 주방 조리대 청소 전`} />
                    <span className={styles.tagBefore}>BEFORE</span>
                  </div>
                  <div className={styles.imageBox}>
                    <img src="/images/portfolio/ac-after.jpg" alt={`${regionName} 입주청소 주방 조리대 청소 후`} />
                    <span className={styles.tagAfter}>AFTER</span>
                  </div>
                </div>
              </div>

              <div className={styles.portfolioCard}>
                <div className={styles.portfolioCategory}>베란다·창틀 작업 예시</div>
                <div className={styles.comparisonGrid}>
                  <div className={styles.imageBox}>
                    <img src="/images/portfolio/construction-before.jpg" alt={`${regionName} 입주청소 창틀 찌든 먼지 제거 전`} />
                    <span className={styles.tagBefore}>BEFORE</span>
                  </div>
                  <div className={styles.imageBox}>
                    <img src="/images/portfolio/construction-after.jpg" alt={`${regionName} 입주청소 창틀 찌든 먼지 제거 후`} />
                    <span className={styles.tagAfter}>AFTER</span>
                  </div>
                </div>
              </div>

              <div className={styles.portfolioCard}>
                <div className={styles.portfolioCategory}>전체 오염·분진 작업 예시</div>
                <div className={styles.comparisonGrid}>
                  <div className={styles.imageBox}>
                    <img src="/images/portfolio/interior-before.jpg" alt={`${regionName} 입주청소 인테리어 미세 먼지 분진 제거 전`} />
                    <span className={styles.tagBefore}>BEFORE</span>
                  </div>
                  <div className={styles.imageBox}>
                    <img src="/images/portfolio/interior-after.jpg" alt={`${regionName} 입주청소 인테리어 미세 먼지 분진 제거 후`} />
                    <span className={styles.tagAfter}>AFTER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 견적 기준 & 상담 전 체크리스트 Section */}
      <section style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Estimate & Check</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(22px, 4vw, 32px)', lineHeight: '1.3' }}>
              입주청소 견적은<br />평수만으로 정해지지 않습니다
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {/* 견적 기준 */}
            <div style={{ background: '#fff', padding: '2.2rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid #0070f3', paddingBottom: '0.6rem' }}>
                주요 견적 요소
              </h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {estimateFactors.map((factor, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.025rem', fontWeight: '500' }}>
                    <span style={{ color: '#0070f3', fontWeight: 'bold' }}>✔</span>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            {/* 상담 전 체크리스트 */}
            <div style={{ background: '#fff', padding: '2.2rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid #0070f3', paddingBottom: '0.6rem' }}>
                상담 전, 이 정보만 알려주시면 견적이 빨라집니다
              </h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {checkListItems.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.025rem', fontWeight: '500' }}>
                    <span style={{ color: '#0070f3', fontWeight: 'bold' }}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3.5rem', flexWrap: 'wrap' }}>
            <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`} style={{ minWidth: '240px', textAlign: 'center' }}>
              전화로 빠르게 확인하기
            </a>
            <a href={CONTACT_KAKAOTALK} target="_blank" rel="noopener noreferrer" className={`${styles.ctaBtn} ${styles.kakao}`} style={{ minWidth: '240px', textAlign: 'center' }}>
              카카오톡 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className={styles.faq} style={{ padding: '5rem 0', background: '#fff' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
          </div>
          <div className={styles.faqList} style={{ marginTop: '2rem' }}>
            {faqList.map((faq, index) => (
              <div key={index} className={styles.faqItem} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1.8rem 2rem' }}>
                <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.6rem' }}>Q. {faq.q}</h4>
                <p style={{ color: '#475569', margin: 0 }}>A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 하단 CTA 및 주변 지역 링크 안내 */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', borderTop: '1px solid #eaeaea', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '15px', color: '#555', marginBottom: '15px', fontWeight: 'bold' }}>{parentRegion} 주변 지역 입주청소 및 이사청소 안내</h3>
          <p style={{ fontSize: '13px', color: '#777', lineHeight: '1.8', marginBottom: '20px', wordBreak: 'keep-all' }}>
            {BRAND_NAME}은 {parentRegion} 지역의 일반 입주청소, 신축 아파트 준공청소, 원룸 이사청소, 인테리어 후 청소 등 주거 공간 맞춤 클리닝을 직접 제공합니다. 
            인근 행정 구역의 세부 작업 내용이 필요하시다면 아래 링크를 참고하여 정밀한 상태별 솔루션을 안내받아 보세요.
          </p>
          {regionObj?.relatedAreaLinks && regionObj.relatedAreaLinks.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
              {regionObj.relatedAreaLinks.map((link: any, index: number) => {
                // 입주청소 허브이므로 링크 주소 끝에 /move-in-cleaning 을 붙여 입주청소 간 상호 링킹 유도
                const moveInUrl = link.url.includes('/move-in-cleaning') ? link.url : `${link.url}/move-in-cleaning`;
                return (
                  <Link 
                    key={index} 
                    href={moveInUrl} 
                    style={{ fontSize: '12px', padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff', color: '#555', textDecoration: 'none' }}
                  >
                    {link.name.replace('청소', '입주청소')}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <FloatingContact />
    </div>
  );
}
