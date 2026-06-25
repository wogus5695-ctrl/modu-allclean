"use client";

import { LandingPageData } from '@/lib/seo-builder';
import { CONTACT_PHONE, BRAND_NAME } from '@/lib/seo';
import { seoServices, SeoService } from '@/data/seo/services';
import styles from '@/app/page.module.css';
import SectionCTA from '@/components/SectionCTA';
import FloatingContact from '@/components/FloatingContact';
import Link from 'next/link';

interface LandingTemplateProps {
  data: LandingPageData;
  regionObj: any;
  currentService: SeoService;
}

export default function LandingTemplate({ data, regionObj, currentService }: LandingTemplateProps) {
  // 1. Get 3~4 related services
  const relatedSlugs = currentService.relatedServices;
  const relatedServiceList = seoServices.filter(s => relatedSlugs.includes(s.serviceNameKo) || relatedSlugs.includes(s.serviceSlug));
  const otherServiceList = seoServices.filter(s => s.serviceSlug !== currentService.serviceSlug && !relatedServiceList.includes(s));

  return (
    <div className={styles.container}>
      {/* 1. Hero Section (Dynamic) */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.inner}>
          <div className="animate-fade-up">
            <span className={styles.badge}>서울 주요 지역 청소 상담</span>
            <h1 className={styles.heroTitle} style={{ lineHeight: '1.4' }}>
              {data.h1.split(' ')[0]} <br className="mo-only" />
              <span className={styles.highlight}>{data.h1.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className={styles.heroDesc}>
              {data.heroDescription}
            </p>
            <div className={styles.heroCta}>
              <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`}>{data.ctaHook}</a>
              <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.outline}`}>실시간 전화 상담</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEO Unique Content Block (High text density for Naver) */}
      <section className={styles.solution} style={{ background: '#f8fafc' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Why Choose Us?</span>
            <h2 className={styles.sectionTitle}>
              {data.h1} 현장 특성
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem', fontSize: '1.1rem', lineHeight: '1.7', color: '#333' }}>
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>지역 및 수요 특징</h3>
              <p>{data.customIntroBlock}</p>
            </div>
            
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>주요 타겟 및 현장</h3>
              <p>{data.targetSceneBlock}</p>
            </div>

            <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>빈발 문제 및 해결안</h3>
              <p>{data.problemBlock}</p>
            </div>

          </div>
        </div>
      </section>

      {/* 2-5. Dedicated Pricing/Estimate Section */}
      <section className={styles.pricing} style={{ padding: '5rem 0', background: '#fff' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Pricing & Estimate</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>
              {data.h1} 견적은 현장 상태에 따라 달라집니다
            </h2>
            <p className={styles.sectionDesc} style={{ marginTop: '1rem', color: '#475569' }}>
              사진과 위치를 보내주시면 작업 범위, 오염 상태, 장비 사용 여부를 확인해 상담 방향을 안내합니다.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {/* 견적 기준 */}
            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid #cbd5e1', paddingBottom: '0.5rem' }}>
                {currentService.serviceNameKo} 견적 기준
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#334155', lineHeight: '1.8' }}>
                {currentService.estimateFactors.map((factor, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>{factor}</li>
                ))}
              </ul>
            </div>

            {/* 상담 시 보내면 좋은 정보 */}
            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid #cbd5e1', paddingBottom: '0.5rem' }}>
                상담 시 보내면 좋은 정보
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#334155', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '0.5rem' }}>현장 위치</li>
                <li style={{ marginBottom: '0.5rem' }}>작업이 필요한 공간 사진</li>
                <li style={{ marginBottom: '0.5rem' }}>오염 상태가 잘 보이는 사진</li>
                <li style={{ marginBottom: '0.5rem' }}>대략적인 면적 또는 층수</li>
                <li style={{ marginBottom: '0.5rem' }}>희망 작업 일정</li>
              </ul>
            </div>
          </div>

          {/* 단일 CTA 버튼 */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`} style={{ display: 'inline-block' }}>
              {data.h1} 견적 상담하기
            </a>
          </div>
        </div>
      </section>

      {/* 3. Short 6-step Timeline Work Process */}
      <section className={styles.process} style={{ padding: '5rem 0', background: '#fff' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Work Process</span>
            <h2 className={styles.sectionTitle}>체계적인 6단계 프로세스</h2>
          </div>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}>01</div>
              <div className={styles.timelineContent}>
                <h4>상담 접수</h4>
                <p>사진·위치 확인</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}>02</div>
              <div className={styles.timelineContent}>
                <h4>상태 확인</h4>
                <p>오염도·면적 확인</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}>03</div>
              <div className={styles.timelineContent}>
                <h4>견적 안내</h4>
                <p>범위·비용 안내</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}>04</div>
              <div className={styles.timelineContent}>
                <h4>일정 조율</h4>
                <p>작업 시간 조율</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}>05</div>
              <div className={styles.timelineContent}>
                <h4>청소 진행</h4>
                <p>현장 맞춤 작업</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}>06</div>
              <div className={styles.timelineContent}>
                <h4>마감 확인</h4>
                <p>작업 후 확인</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Filtered Related Services & Accordion for Others */}
      <section className={styles.services} style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Our Services</span>
            <h2 className={styles.sectionTitle}>{data.h1} 연관 서비스</h2>
          </div>
          
          <div className={styles.serviceGrid}>
            {relatedServiceList.map(s => (
              <div key={s.serviceSlug} className={styles.serviceCard}>
                <div className={styles.serviceImage} style={{ backgroundImage: `url(${s.thumbnailImage})` }}></div>
                <div className={styles.serviceContent}>
                  <h3>{s.serviceNameKo}</h3>
                  <p>{s.mainProblem} 해결</p>
                </div>
              </div>
            ))}
          </div>

          <details className={styles.otherServicesDetails}>
            <summary className={styles.otherServicesSummary}>다른 청소 서비스 보기</summary>
            <div className={styles.serviceGrid} style={{ marginTop: '2rem' }}>
              {otherServiceList.map(s => (
                <div key={s.serviceSlug} className={styles.serviceCard}>
                  <div className={styles.serviceImage} style={{ backgroundImage: `url(${s.thumbnailImage})` }}></div>
                  <div className={styles.serviceContent}>
                    <h3>{s.serviceNameKo}</h3>
                    <p>{s.mainProblem} 해결</p>
                  </div>
                </div>
              ))}
            </div>
          </details>

        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className={styles.faq} style={{ padding: '4rem 0', background: '#fff' }}>
         <div className={styles.inner}>
            <div className={styles.sectionHeader}>
               <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
              {data.faqBlock.map((faq, index) => (
                <div key={index} style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '8px' }}>
                  <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem' }}>Q. {faq.q}</h4>
                  <p style={{ color: '#475569' }}>A. {faq.a}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 6. Related Links (Internal Linking for SEO) */}
      <section style={{ padding: '2rem 0', background: '#f8fafc' }}>
        <div className={styles.inner}>
           <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>인근 지역 추천 서비스</h3>
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
             {data.relatedLinks.map((link, idx) => (
               <Link key={idx} href={link.url} style={{ padding: '0.5rem 1rem', background: '#e2e8f0', borderRadius: '4px', color: '#334155', textDecoration: 'none', fontSize: '0.9rem' }}>
                 {link.name}
               </Link>
             ))}
           </div>
        </div>
      </section>

      {/* 7. Common Sections */}
      <SectionCTA 
        title={`${data.h1} 고민, 이제 끝내세요!`} 
        subtitle={`${BRAND_NAME}만의 차별화된 전문성으로 현장 상태에 맞춘 작업을 약속드립니다.`} 
      />
      <FloatingContact />
    </div>
  );
}
