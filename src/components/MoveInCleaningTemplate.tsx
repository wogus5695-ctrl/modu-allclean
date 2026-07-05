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
    { title: "신축 분진", desc: "도배 풀, 시멘트 가루, 미세 톱밥 등 신축/리모델링 후 구석구석 남은 분진을 찾아냅니다.", img: "/images/why/dust.jpg" },
    { title: "생활 오염", desc: "이전 거주자가 나가며 남긴 벽지 찌든 먼지, 바닥 얼룩 및 생활 흔적을 세정합니다.", img: "/images/why/living.jpg" },
    { title: "창틀 먼지", desc: "외부 미세먼지와 빗물이 유입되어 굳어버린 창틀 틈새의 새까만 찌든 먼지를 케어합니다.", img: "/images/why/window.jpg" },
    { title: "욕실 물때", desc: "세면대, 거울, 샤워부스 유리, 타일 틈새에 축적된 불투명한 물때와 이물질을 세척합니다.", img: "/images/why/bathroom.jpg" },
    { title: "주방 기름때", desc: "가스레인지 주변 벽 타일, 가구 하부, 후드 필터에 고착된 끈적한 기름 오염을 녹여냅니다.", img: "/images/why/kitchen.jpg" },
    { title: "입주 일정 압박", desc: "이사 당일에는 짐이 들어오기 때문에 반드시 짐 반입 전에 완료할 수 있도록 일정을 확보합니다.", img: "/images/why/schedule.jpg" }
  ];

  // 2. 입주청소 작업 범위 - 4카드
  const serviceCards = [
    {
      title: "욕실 청소",
      desc: "입주 후 가장 먼저 체감되는 공간입니다. 물때, 배수구 주변, 수전·거울 오염까지 확인합니다.",
      details: ["물때", "배수구", "수전", "타일 틈"],
      moDesc: "물때·배수구·수전 오염"
    },
    {
      title: "주방 청소",
      desc: "이전 사용 흔적이 가장 많이 남는 공간입니다. 싱크대, 상·하부장, 조리대 주변의 기름때와 생활오염을 정리합니다.",
      details: ["싱크대", "수납장", "조리대", "기름때"],
      moDesc: "싱크대·수납장·기름때"
    },
    {
      title: "베란다·창틀 청소",
      desc: "입주 후 직접 청소하기 가장 번거로운 구간입니다. 창틀 틈새, 배수구 주변, 베란다 바닥 먼지를 확인합니다.",
      details: ["창틀", "베란다", "배수구", "방충망"],
      moDesc: "틈새 먼지·배수구 주변"
    },
    {
      title: "전체 오염·분진 청소",
      desc: "신축 분진부터 구축 생활먼지까지 확인합니다. 바닥, 몰딩, 문틀, 수납장 내부의 잔먼지를 정리합니다.",
      details: ["신축 분진", "바닥", "몰딩", "수납장"],
      moDesc: "바닥·몰딩·수납장 잔먼지"
    }
  ];

  // 3. 현장 유형별 대응
  const buildingTypes = [
    { type: "신축 입주", desc: "공사 분진 · 창틀 먼지 · 수납장 내부" },
    { type: "구축 입주", desc: "욕실 물때 · 주방 기름때 · 전 세입자 흔적" },
    { type: "인테리어 후 입주", desc: "목공 분진 · 페인트 자국 · 바닥 잔먼지" }
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
      {/* 글로벌 레이아웃 헤더 중복 차단 및 섹션 ID 스크롤 패딩 제어 style */}
      <style jsx global>{`
        #global-header-wrapper {
          display: none !important;
        }
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }
        .pc-br { display: block; }
        .mo-badge-text { display: none; }
        .pc-badge-text { display: inline; }
        .pc-checkpoint { display: flex; }
        
        .cta-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #2563eb;
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
          margin-right: 12px;
        }
        .cta-primary-btn:hover {
          background-color: #1d4ed8;
          transform: translateY(-2px);
        }
        .cta-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .cta-secondary-btn:hover {
          background-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        /* 작업 범위 섹션 레이아웃 및 디코레이션 정의 */
        .service-guide-section {
          padding: 6rem 0;
          border-top: 1px solid #1e293b;
        }
        
        .guide-section-badge {
          display: inline-block;
          background-color: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
          padding: 5px 12px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.2px;
        }

        .guide-section-title {
          font-size: clamp(24px, 4.5vw, 36px);
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -0.8px;
          margin-bottom: 15px;
        }

        .guide-section-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          max-width: 800px;
          margin: 10px auto 0 auto;
          letter-spacing: -0.3px;
        }

        .highlight-text {
          color: #2563eb;
          font-weight: 700;
        }

        .guide-bottom-content {
          margin-top: 3.5rem;
          text-align: center;
        }

        .guide-bottom-notice {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 5px;
        }

        /* PC 카드 정의 */
        .pc-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3.5rem;
        }

        .pc-guide-card {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(8px);
          padding: 2.2rem 1.8rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.8);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 260px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .pc-guide-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.22);
        }

        .pc-guide-card .card-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.8rem;
          border-left: 3px solid #2563eb;
          padding-left: 10px;
        }

        .pc-guide-card .card-desc {
          color: #475569;
          font-size: 0.92rem;
          line-height: 1.55;
          letter-spacing: -0.1px;
        }

        .pc-guide-card .card-tag-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          border-top: 1px solid #f1f5f9;
          padding-top: 1.2rem;
          margin-top: 1rem;
        }

        .pc-guide-card .card-tag {
          font-size: 0.78rem;
          color: #2563eb;
          background-color: #eff6ff;
          padding: 3px 8px;
          border-radius: 4px;
          font-weight: 600;
        }

        /* 모바일 미니 카드 정의 */
        .mo-cards-grid {
          display: none;
        }

        @media (min-width: 1025px) {
          .service-guide-section {
            background: linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65)), url('/images/services/move-in-guide-bg.jpg') no-repeat center center/cover;
          }
          .guide-section-badge {
            background-color: rgba(255, 255, 255, 0.15);
            color: #93c5fd;
            border: 1px solid rgba(255, 255, 255, 0.25);
          }
          .guide-section-title {
            color: #ffffff;
          }
          .guide-section-desc {
            color: #cbd5e1;
          }
          .highlight-text {
            color: #60a5fa;
          }
          .guide-bottom-notice {
            color: #94a3b8;
          }
          .pc-title { display: block; }
          .mo-title { display: none; }
          .pc-desc { display: block; }
          .mo-desc { display: none; }
        }

        @media (min-width: 769px) {
          .move-in-hero-section {
            background-position: center right !important;
          }
          .move-in-hero-overlay {
            background: linear-gradient(90deg, rgba(0,34,66,0.85) 0%, rgba(0,34,66,0.55) 45%, rgba(0,34,66,0.12) 100%) !important;
          }
          .move-in-hero-content {
            margin-left: 8%;
          }
        }

        @media (max-width: 1024px) {
          .pc-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .service-guide-section {
            background: #f6f8fb;
            padding: 4rem 0;
          }
          .guide-section-title {
            color: #0f172a;
          }
          .guide-section-desc {
            color: #475569;
          }
          .highlight-text {
            color: #2563eb;
          }
          .pc-title { display: block; }
          .mo-title { display: none; }
          .pc-desc { display: block; }
          .mo-desc { display: none; }
        }

        @media (max-width: 768px) {
          .pc-br { display: none; }
          .pc-badge-text { display: none; }
          .mo-badge-text { display: inline; }
          .pc-checkpoint { display: none !important; }
          .move-in-hero-section {
            min-height: 520px !important;
            height: clamp(520px, 60vh, 580px) !important;
            background-position: 58% center !important;
          }
          .move-in-hero-overlay {
            background: linear-gradient(180deg, rgba(0,34,66,0.3) 0%, rgba(0,34,66,0.82) 100%) !important;
          }
          .move-in-hero-content {
            padding: 0 4px;
          }
          .hero-cta-wrapper {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .cta-primary-btn {
            width: 100%;
            max-width: 300px;
            margin-right: 0;
            padding: 14px 20px;
            font-size: 15px;
          }
          .cta-secondary-btn {
            display: none !important;
          }
          .pc-title { display: none; }
          .mo-title { display: block; }
          .pc-desc { display: none; }
          .mo-desc { display: block; }
          .pc-cards-grid {
            display: none;
          }
          .mo-cards-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
            margin-top: 2rem;
            padding: 0 4px;
          }
          .mo-guide-card {
            background: #ffffff;
            padding: 1.2rem 1rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 145px;
          }
          .mo-card-title {
            font-size: 1rem;
            font-weight: 800;
            color: #0f172a;
            margin: 0 0 6px 0;
            border-left: 3px solid #2563eb;
            padding-left: 6px;
          }
          .mo-card-desc {
            color: #475569;
            font-size: 0.82rem;
            line-height: 1.4;
            margin: 0 0 8px 0;
            flex-grow: 1;
          }
          .mo-card-tag-wrapper {
            display: flex;
            gap: 0.3rem;
            border-top: 1px solid #f1f5f9;
            padding-top: 6px;
          }
          .mo-card-tag {
            font-size: 0.72rem;
            color: #2563eb;
            background-color: #eff6ff;
            padding: 2px 6px;
            border-radius: 3px;
            font-weight: 600;
            white-space: nowrap;
          }
          .guide-bottom-content {
            margin-top: 2rem;
          }
        }

        .highlight-blue {
          color: #1d4ed8;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .pc-type-cards-wrapper {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .pc-type-cards-wrapper {
            display: none !important;
          }
          .mo-type-checklist-wrapper {
            display: flex !important;
          }
          .pc-desc-text {
            display: none !important;
          }
          .mo-desc-text {
            display: block !important;
          }
          .mo-bottom-type-chip {
            padding: 5px 12px !important;
            font-size: 12px !important;
          }
        }
      `}</style>

      {/* 간결화된 입주청소 전용 헤더 (작업범위, 진행과정, 견적기준, 자주묻는질문 메뉴 포함) */}
      <Header isMoveInOnly={true} />

      {/* Hero Section */}
      <section 
        className="move-in-hero-section"
        style={{ 
          position: 'relative',
          minHeight: '620px',
          height: 'clamp(620px, 70vh, 680px)',
          display: 'flex',
          alignItems: 'center',
          background: "url('/images/services/move-in-hero.jpg') no-repeat center right/cover",
          color: 'white',
          overflow: 'hidden'
        }}
      >
        {/* PC 좌측 텍스트 가독성을 위한 그라데이션 오버레이 */}
        <div 
          className="move-in-hero-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1
          }}
        ></div>

        <div className={styles.inner} style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 20px' }}>
          <div className="animate-fade-up move-in-hero-content" style={{ maxWidth: '640px', textAlign: 'left' }}>
            
            {/* 상단 배지 */}
            <div className="hero-badge" style={{ display: 'inline-block', backgroundColor: '#3b82f6', color: '#ffffff', padding: '6px 14px', borderRadius: '50px', fontSize: '14px', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.3px' }}>
              <span className="pc-badge-text">입주 전 빈집 청소 전문</span>
              <span className="mo-badge-text">입주 전 빈집 청소</span>
            </div>

            {/* H1 */}
            <h1 className={styles.heroTitle} style={{ fontSize: 'clamp(34px, 5.5vw, 54px)', lineHeight: '1.2', fontWeight: 800, color: '#ffffff', margin: '0 0 18px 0', letterSpacing: '-1px' }}>
              {regionName} 입주청소
            </h1>

            {/* 메인 문구 */}
            <p style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, color: '#ffffff', lineHeight: '1.35', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>
              <span style={{ color: '#fed7aa' }}>입주 전 마지막 점검</span>,<br />
              <span style={{ color: '#60a5fa' }}>욕실·주방·베란다</span>까지 확인합니다
            </p>

            {/* 보조 문구 */}
            <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 28px 0', letterSpacing: '-0.2px' }}>
              <span style={{ color: '#ffffff', fontWeight: '600' }}>신축 분진</span>, 전 세입자 <span style={{ color: '#ffffff', fontWeight: '600' }}>생활오염</span>, 창틀 먼지처럼<br className="pc-br" />
              입주 후 직접 처리하기 번거로운 구간을 중심으로 청소합니다.
            </p>

            {/* 체크포인트 */}
            <div className="hero-checkpoints" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px 25px', marginBottom: '35px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>
                <span style={{ color: '#60a5fa' }}>✓</span> 입주일 기준 상담
              </div>
              <div className="pc-checkpoint" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>
                <span style={{ color: '#60a5fa' }}>✓</span> 빈집 상태 작업 권장
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>
                <span style={{ color: '#60a5fa' }}>✓</span> 사진 기반 견적 안내
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="hero-cta-wrapper">
              <a href={`tel:${CONTACT_PHONE}`} className="cta-primary-btn">
                전화 견적 상담
              </a>
              <a href={CONTACT_KAKAOTALK} target="_blank" rel="noopener noreferrer" className="cta-secondary-btn">
                입주일 전 일정 확인
              </a>
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
              <div key={idx} style={{ background: '#f8fafc', overflow: 'hidden', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                {item.img ? (
                  <div style={{ width: '100%', height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img src={item.img} alt={`${regionName} 입주청소 ${item.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ) : (
                  <div style={{ width: '100%', height: '180px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: '#94a3b8' }}>
                    📅
                  </div>
                )}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#0070f3' }}>✔</span> {item.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 입주청소 작업 범위 - 4카드 Section */}
      <section 
        id="service-guide"
        className="service-guide-section"
      >
        <div className={styles.inner}>
          
          {/* 섹션 상단 헤더 */}
          <div className={styles.sectionHeader}>
            <span className="guide-section-badge">입주청소 검수 포인트</span>
            
            {/* PC 타이틀 / 모바일 타이틀 분기 */}
            <h2 className="guide-section-title pc-title">
              {regionName} 입주청소 핵심 검수 범위
            </h2>
            <h2 className="guide-section-title mo-title">
              {regionName} 입주청소,<br />입주 전 이 <span className="highlight-text">4곳</span>을 먼저 봅니다
            </h2>

            {/* PC 설명 / 모바일 설명 분기 */}
            <p className="guide-section-desc pc-desc">
              입주 전 가장 많이 확인하는 <span className="highlight-text">욕실·주방·베란다·분진 오염</span>을 중심으로 청소합니다.
            </p>
            <p className="guide-section-desc mo-desc">
              <span className="highlight-text">욕실·주방·베란다·분진 오염</span>은 입주 후 직접 정리하기 번거로운 구간입니다.
            </p>
          </div>

          {/* PC용 4개 카드 그리드 레이아웃 */}
          <div className="pc-cards-grid">
            {serviceCards.map((card, idx) => (
              <div key={idx} className="pc-guide-card">
                <div className="card-top-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.desc}</p>
                </div>
                <div className="card-tag-wrapper">
                  {card.details.map((detail, dIdx) => (
                    <span key={dIdx} className="card-tag">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 모바일용 2x2 미니 카드 레이아웃 */}
          <div className="mo-cards-grid">
            {serviceCards.map((card, idx) => (
              <div key={idx} className="mo-guide-card">
                <h3 className="mo-card-title">
                  {card.title.replace(' 청소', '')}
                </h3>
                <p className="mo-card-desc">
                  {card.moDesc}
                </p>
                <div className="mo-card-tag-wrapper">
                  {card.details.slice(0, 2).map((detail, dIdx) => (
                    <span key={dIdx} className="mo-card-tag">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 하단 설명 및 단일 CTA */}
          <div className="guide-bottom-content">
            <p className="guide-bottom-notice">
              입주일, 평수, 오염 상태에 따라 작업 범위가 달라질 수 있습니다.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`} style={{ minWidth: '260px', textAlign: 'center', boxShadow: '0 4px 14px 0 rgba(0, 112, 243, 0.3)' }}>
                입주청소 작업 범위 상담
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. 현장 유형별 대응 Section */}
      <section 
        className="building-types-section"
        style={{ 
          padding: '5rem 0', 
          background: '#f0f7ff', 
          borderTop: '1px solid #dbeafe',
          borderBottom: '1px solid #dbeafe'
        }}
      >
        <div className={styles.inner}>
          
          {/* 섹션 상단 헤더 */}
          <div className={styles.sectionHeader} style={{ marginBottom: '3rem' }}>
            <span className="type-section-badge" style={{ display: 'inline-block', backgroundColor: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd', padding: '5px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
              현장별 체크 포인트
            </span>
            
            {/* PC 타이틀 / 모바일 타이틀 분기 */}
            <h2 className="guide-section-title" style={{ fontSize: 'clamp(24px, 4.5vw, 32px)', fontWeight: 800, color: '#0f172a' }}>
              우리 집 상태에 따라<br />먼저 봐야 할 곳이 다릅니다
            </h2>

            {/* PC 보조문구 / 모바일 보조문구 분기 */}
            <p className="type-section-desc pc-desc-text" style={{ fontSize: '1.025rem', color: '#475569', lineHeight: '1.6', maxWidth: '800px', margin: '10px auto 0 auto' }}>
              신축은 <span className="highlight-blue">공사 분진</span>, 구축은 <span className="highlight-blue">생활오염</span>, 인테리어 후 입주는 <span className="highlight-blue">잔먼지와 자국</span>을 중심으로 확인합니다.
            </p>
            <p className="type-section-desc mo-desc-text" style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5', maxWidth: '800px', margin: '10px auto 0 auto', display: 'none' }}>
              신축은 <span className="highlight-blue">분진</span>, 구축은 <span className="highlight-blue">생활오염</span>, 공사 후 입주는 <span className="highlight-blue">잔먼지</span>를 먼저 봅니다.
            </p>
          </div>

          {/* PC용 3대 카드 가로 나열 */}
          <div className="pc-type-cards-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {buildingTypes.map((item, idx) => (
              <div key={idx} style={{ background: '#ffffff', borderTop: '4px solid #2563eb', padding: '2rem 1.8rem', boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.05)', borderRadius: '0 0 12px 12px', borderLeft: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#2563eb', fontSize: '1.1rem' }}>✓</span> {item.type}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0, fontWeight: '500', wordBreak: 'keep-all' }}>
                  {item.desc.split(' · ').map((word, wIdx) => {
                    const isKeyword = ["공사 분진", "욕실 물때", "주방 기름때", "전 세입자 흔적", "목공 분진", "페인트 자국", "바닥 잔먼지", "수납장 내부"].includes(word);
                    return (
                      <span key={wIdx}>
                        {wIdx > 0 && ' · '}
                        <span style={isKeyword ? { color: '#1e3a8a', fontWeight: '700' } : {}}>{word}</span>
                      </span>
                    );
                  })}
                </p>
              </div>
            ))}
          </div>

          {/* 모바일용 체크리스트형 레이아웃 */}
          <div className="mo-type-checklist-wrapper" style={{ display: 'none', flexDirection: 'column', gap: '0.8rem', padding: '0 4px' }}>
            {buildingTypes.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: '#ffffff', padding: '1.2rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                <span style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '1.1rem', marginTop: '1px' }}>✓</span>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#0f172a', margin: '0 0 4px 0' }}>{item.type}</h4>
                  <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: '1.4', margin: 0, wordBreak: 'keep-all' }}>
                    {item.desc.replace(/ · /g, ' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 보조 유형 처리 (작은 칩/한 줄 설명) */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <span className="mo-bottom-type-chip" style={{ display: 'inline-block', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '50px', border: '1px solid #bae6fd' }}>
              오피스텔 · 빌라 · 전세/월세 입주도 상담 가능합니다.
            </span>
          </div>

        </div>
      </section>

      {/* 4. 입주청소 진행 과정 Section */}
      <section id="process-flow" style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
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
      <section id="estimate-standard" style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
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
      <section id="faq" className={styles.faq} style={{ padding: '5rem 0', background: '#fff' }}>
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
