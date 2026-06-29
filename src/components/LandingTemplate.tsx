"use client";

import { LandingPageData } from '@/lib/seo-builder';
import { CONTACT_PHONE, BRAND_NAME, CONTACT_KAKAOTALK } from '@/lib/seo';
import { seoServices, SeoService } from '@/data/seo/services';
import { portfolioItems } from '@/data/portfolio';
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
  const getRelatedServiceNames = () => {
    const serviceName = currentService.serviceNameKo;
    switch (serviceName) {
      case '외벽청소':
        return ['유리창청소', '어닝청소', '간판청소', '바닥왁스코팅'];
      case '유리창청소':
        return ['외벽청소', '간판청소', '어닝청소'];
      case '화재청소':
        return ['특수청소', '바닥왁스코팅', '후드청소'];
      case '바닥왁스코팅':
        return ['인테리어 후 청소', '준공청소'];
      case '어닝청소':
        return ['간판청소', '외벽청소', '유리창청소'];
      case '간판청소':
        return ['어닝청소', '외벽청소', '유리창청소'];
      case '인테리어 후 청소':
        return ['준공청소', '유리창청소', '바닥왁스코팅'];
      case '준공청소':
        return ['인테리어 후 청소', '유리창청소', '바닥왁스코팅'];
      case '후드청소':
        return ['화재청소', '특수청소', '바닥왁스코팅'];
      case '쓰레기집 청소':
      case '쓰레기집청소':
        return ['특수청소', '바닥왁스코팅', '화재청소'];
      case '특수청소':
        return ['쓰레기집청소', '화재청소', '바닥왁스코팅'];
      default:
        return currentService.relatedServices;
    }
  };

  const getRelatedServiceUrl = (s: SeoService) => {
    return `/${regionObj.citySlug}/${regionObj.districtSlug}/${regionObj.neighborhoodSlug}/${s.serviceSlug}`;
  };

  // 1. Get 3~4 related services dynamically based on mapping
  const relatedNames = getRelatedServiceNames();
  const relatedServiceList = seoServices.filter(s => 
    relatedNames.includes(s.serviceNameKo) || 
    relatedNames.includes(s.serviceSlug) ||
    (s.serviceNameKo === '쓰레기집청소' && relatedNames.includes('쓰레기집 청소'))
  );
  const otherServiceList = seoServices.filter(s => s.serviceSlug !== currentService.serviceSlug && !relatedServiceList.includes(s));

  const getHeroDescription = () => {
    const regionName = regionObj.displayNameKo;
    const serviceName = currentService.serviceNameKo;
    
    switch (serviceName) {
      case '외벽청소':
        return `${regionName} 건물 외벽에 쌓인 먼지, 빗물 자국, 매연 오염을 확인하고 현장 조건에 맞춰 작업 가능 여부를 안내합니다.`;
      case '유리창청소':
        return `${regionName} 상가, 빌딩, 매장 유리창의 물때, 손자국, 빗물 얼룩을 확인하고 작업 범위에 맞춰 상담을 안내합니다.`;
      case '화재청소':
        return `${regionName} 화재 피해 현장의 그을음, 냄새, 분진 상태를 확인하고 정리 범위와 청소 가능 여부를 안내합니다.`;
      case '바닥왁스코팅':
        return `${regionName} 상가, 사무실, 매장 바닥의 광택 저하와 오염 상태를 확인하고 왁스코팅 작업 범위를 안내합니다.`;
      case '어닝청소':
        return `${regionName} 매장 어닝에 쌓인 먼지, 빗물 자국, 곰팡이 오염을 확인하고 원단 상태와 작업 가능 여부를 안내합니다.`;
      case '간판청소':
        return `${regionName} 매장 간판의 먼지, 빗물 얼룩, 조류 오염 상태를 확인하고 외부 작업 가능 여부를 안내합니다.`;
      case '인테리어 후 청소':
        return `${regionName} 인테리어 공사 후 남은 분진, 접착제 자국, 실내 오염 상태를 확인하고 입주 전 청소 범위를 안내합니다.`;
      case '준공청소':
        return `${regionName} 준공 현장의 공사 분진, 시멘트 가루, 보양재 잔여물을 확인하고 입주 전 정리 범위를 안내합니다.`;
      case '후드청소':
        return `${regionName} 음식점 주방 후드와 배기 주변의 기름때, 악취, 오염 상태를 확인하고 청소 범위를 안내합니다.`;
      case '특수청소':
        return `${regionName} 일반 청소로 처리하기 어려운 오염, 악취, 방치 공간 상태를 확인하고 현장에 맞는 정리 방향을 안내합니다.`;
      case '바닥청소':
        return `${regionName} 상가, 사무실, 매장 바닥의 찌든 때, 오염 누적, 미끄럼 상태를 확인하고 청소 범위를 안내합니다.`;
      case '쓰레기집 청소':
      case '쓰레기집청소':
        return `${regionName} 원룸, 오피스텔, 빌라 등 생활폐기물이 쌓인 공간의 상태를 확인하고 정리 범위와 청소 가능 여부를 안내합니다.`;
      default:
        return `${regionName}의 ${serviceName}가 필요한 현장 상태와 작업 범위를 확인해 상담을 안내합니다.`;
    }
  };

  const getEstimateFactors = () => {
    const serviceName = currentService.serviceNameKo;
    switch (serviceName) {
      case '외벽청소':
        return [
          '건물 높이',
          '외장재 재질',
          '오염도',
          '스카이차 필요 여부',
          '작업 가능 시간대'
        ];
      case '유리창청소':
        return [
          '유리 면적',
          '내부/외부 유리 여부',
          '물때와 빗물 얼룩 정도',
          '고층 작업 여부'
        ];
      case '화재청소':
        return [
          '그을음 범위',
          '냄새 정도',
          '분진 오염 범위',
          '청소 대상 공간 크기'
        ];
      case '바닥왁스코팅':
        return [
          '바닥 면적',
          '기존 왁스층 상태',
          '오염 누적 정도',
          '스크래치 정도'
        ];
      case '어닝청소':
        return [
          '어닝 크기',
          '원단 노후도',
          '빗물 자국과 곰팡이 정도',
          '설치 높이'
        ];
      case '간판청소':
        return [
          '간판 크기',
          '설치 높이',
          '표면 오염 정도',
          '장비 사용 여부'
        ];
      case '인테리어 후 청소':
        return [
          '공사 범위',
          '분진 정도',
          '접착제 자국 여부',
          '입점 또는 오픈 일정'
        ];
      case '준공청소':
        return [
          '전체 면적',
          '공사 잔여물 범위',
          '시멘트 가루와 분진 정도',
          '입주 일정'
        ];
      case '후드청소':
        return [
          '후드 크기',
          '기름때 정도',
          '배기 주변 오염 범위',
          '영업시간 외 작업 가능 여부'
        ];
      case '쓰레기집 청소':
      case '쓰레기집청소':
        return [
          '생활폐기물 양',
          '악취 정도',
          '주거공간 형태',
          '분리배출 범위'
        ];
      case '특수청소':
        return [
          '오염 유형',
          '악취 정도',
          '방치 기간',
          '폐기물 여부'
        ];
      case '바닥청소':
        return [
          '바닥 면적',
          '바닥 재질 및 상태',
          '오염 누적 정도',
          '작업 가능 시간대'
        ];
      default:
        return currentService.estimateFactors;
    }
  };

  return (
    <div className={styles.container}>
      {/* 1. Hero Section (Dynamic) */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.inner}>
          <div className="animate-fade-up">
            <span className={styles.badge}>서울 주요 지역 청소 상담</span>
            <h1 className={styles.heroTitle} style={{ lineHeight: '1.4' }}>
              <span className="pc-only">{(regionObj?.displayNameKo) || '서울·인천'} {(currentService?.serviceNameKo) || '청소'} 전문</span>
              <span className="mo-only">{(regionObj?.displayNameKo) || '서울·인천'} {(currentService?.serviceNameKo) || '청소'}</span>
              <br />
              <span className={styles.highlight}>{BRAND_NAME}</span>
            </h1>
            <p className={styles.heroDesc}>
              {getHeroDescription()}<br />
              {regionObj?.displayNameKo && (
                <span style={{ fontSize: '0.9rem', opacity: 0.85, display: 'block', marginTop: '0.8rem' }}>
                  {regionObj.displayNameKo} 지역은 {regionObj.commercialCharacteristics || '주요 상업/주거'} 특성을 띄고 있어 {currentService?.serviceNameKo || '청소'}의 전문적인 접근이 필요합니다.
                </span>
              )}
            </p>
            <div className={styles.heroCta}>
              <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`}>
                <span className="pc-only">전화 상담하기</span>
                <span className="mo-only">전화 상담</span>
              </a>
              <a 
                href={CONTACT_KAKAOTALK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.ctaBtn} ${styles.kakao}`}
              >
                <span className="pc-only">카카오톡 문의하기</span>
                <span className="mo-only">카카오톡 문의</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY 모두종합환경? Section */}
      <section className={styles.solution} style={{ background: '#fff', padding: '5rem 0' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Why {BRAND_NAME}?</span>
            <h2 className={styles.sectionTitle}>
              {(data?.h1) || `${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'}`},<br />
              왜 <span className={styles.highlight}>{BRAND_NAME}</span> 이어야 할까요?
            </h2>
            {data?.customIntroBlock && (
              <p className={styles.sectionDesc} style={{ marginTop: '1.2rem', color: '#475569', fontSize: '1.025rem', lineHeight: '1.6', maxWidth: '800px', margin: '1.2rem auto 0 auto' }}>
                {data.customIntroBlock} {data.targetSceneBlock}
              </p>
            )}
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <img src="/images/why/pricing.jpg" alt={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} 합리적인 비용 견적 제안`} />
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>💰</div>
                <h3>적정한 견적 제안</h3>
                <p>거품 없는 합리적인 비용으로 현장 상황에 맞는 정직한 견적을 제안합니다.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <img src="/images/why/equipment.jpg" alt={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} 맞춤형 청소 장비 구성`} />
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>✨</div>
                <h3>현장 맞춤형 장비</h3>
                <p>{(currentService?.serviceNameKo) || '청소'}의 특성에 최적화된 현장에 맞는 장비와 세정제를 사용합니다.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <img src="/images/why/team.jpg" alt={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} 전문 청소팀 작업 준비`} />
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>👤</div>
                <h3>청소 전문 팀 투입</h3>
                <p>하청이 아닌 본사 직영 팀이 직접 방문하여 일관된 퀄리티를 유지합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Section (모두종합환경의 청소 서비스 안내) */}
      <section className={styles.services} style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Our Services</span>
            <h2 className={styles.sectionTitle}><span style={{ color: 'var(--accent)' }}>{BRAND_NAME}</span>의 청소 서비스 안내</h2>
            <p className={styles.sectionDesc}>{BRAND_NAME}은 {(regionObj?.displayNameKo) || '서울·인천'} 및 인근 전 지역 모든 현장에 대응합니다.</p>
          </div>

          <div className={styles.serviceGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {seoServices.map((s) => {
              const isCurrent = s.serviceSlug === currentService?.serviceSlug;
              return (
                <div 
                  key={s.serviceSlug} 
                  className={styles.serviceCard} 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%', 
                    border: isCurrent ? '2px solid var(--accent)' : '1px solid #e2e8f0', 
                    borderRadius: '12px', 
                    overflow: 'hidden', 
                    boxShadow: 'var(--shadow-sm)', 
                    background: '#fff',
                    position: 'relative'
                  }}
                >
                  {isCurrent && (
                    <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--accent)', color: '#fff', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', zIndex: 10 }}>
                      현재 추천 서비스
                    </div>
                  )}
                  <div className={styles.serviceImage} style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={s.thumbnailImage} 
                      alt={`${regionObj?.displayNameKo || '서울·인천'} ${s.serviceNameKo} 전문 청소`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div className={styles.serviceContent} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>{s.serviceNameKo}</h3>
                    <p style={{ fontSize: '0.925rem', color: '#475569', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>{s.mainProblem} 전문 케어</p>
                    <div style={{ marginTop: 'auto', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                      <Link 
                        href={`/${regionObj?.citySlug || 'seoul'}/${regionObj?.districtSlug || 'all'}/${regionObj?.neighborhoodSlug || 'all'}/${s.serviceSlug}`} 
                        style={{ 
                          display: 'inline-block', 
                          color: isCurrent ? 'var(--accent)' : 'var(--accent-dark)', 
                          fontWeight: 'bold', 
                          fontSize: '0.95rem' 
                        }}
                      >
                        {regionObj?.displayNameKo || '서울·인천'} {s.serviceNameKo} 바로가기 &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section className={styles.portfolio} style={{ background: '#fff', padding: '5rem 0' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>모두종합환경 청소 현장 사례</h2>
            <p className={styles.sectionDesc}>작업 전후 상태를 사진으로 확인할 수 있습니다.</p>
          </div>
          <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
              {[...portfolioItems, ...portfolioItems].map((item, idx) => (
                <div key={`${item.id}-${idx}`} className={styles.portfolioCard}>
                  <div className={styles.portfolioCategory}>{item.category}</div>
                  <div className={styles.comparisonGrid}>
                    <div className={styles.imageBox}>
                      <img src={item.beforeImg} alt={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} ${item.category} 청소 작업 전 상태`} />
                      <span className={styles.tagBefore}>BEFORE</span>
                    </div>
                    <div className={styles.imageBox}>
                      <img src={item.afterImg} alt={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} ${item.category} 청소 작업 후 완료`} />
                      <span className={styles.tagAfter}>AFTER</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing & Estimate (Reasonable Price) Section */}
      <section className={styles.pricing} style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Pricing & Estimate</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: '1.3' }}>
              {(regionObj?.displayNameKo) || '서울·인천'} {(currentService?.serviceNameKo) || '청소'} 견적은<br />
              현장 상태에 따라 달라집니다
            </h2>
            {data?.problemBlock && (
              <p className={styles.sectionDesc} style={{ marginTop: '1rem', color: '#475569', fontSize: '1.025rem', lineHeight: '1.6', maxWidth: '800px', margin: '1rem auto 0 auto' }}>
                {data.problemBlock} {data.preCheckBlock}
              </p>
            )}
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {/* 견적 기준 */}
            <div style={{ background: '#fff', padding: '2.2rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid var(--accent)', paddingBottom: '0.6rem' }}>
                {(currentService?.serviceNameKo) || '청소'} 견적 기준
              </h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {getEstimateFactors().map((factor, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                    <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            {/* 상담 시 보내면 좋은 정보 */}
            <div style={{ background: '#fff', padding: '2.2rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a', borderBottom: '2px solid var(--accent)', paddingBottom: '0.6rem' }}>
                상담 시 보내면 좋은 정보
              </h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                  현장 위치
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                  작업이 필요한 공간 사진
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                  오염 상태가 잘 보이는 사진
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                  대략적인 면적 또는 층수
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '1.05rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontWeight: 'bold' }}>✔</span>
                  희망 작업 일정
                </li>
              </ul>
            </div>
          </div>

          {/* CTA 버튼 세트 */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3.5rem', flexWrap: 'wrap' }}>
            <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`}>
              {(regionObj?.displayNameKo) || '서울·인천'} {(currentService?.serviceNameKo) || '청소'} 상담하기
            </a>
            <a 
              href={CONTACT_KAKAOTALK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.ctaBtn} ${styles.kakao}`}
            >
              카카오톡 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className={styles.faq} style={{ padding: '5rem 0', background: '#fff' }}>
         <div className={styles.inner}>
            <div className={styles.sectionHeader}>
               <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
            </div>
            <div className={styles.faqList} style={{ marginTop: '2rem' }}>
               {(data?.faqBlock || []).map((faq, index) => (
                 <div key={index} className={styles.faqItem} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1.8rem 2rem' }}>
                   <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.6rem' }}>Q. {faq.q}</h4>
                   <p style={{ color: '#475569', margin: 0 }}>A. {faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Common Sections */}
      <SectionCTA 
        title={`${regionObj?.displayNameKo || '서울·인천'} ${currentService?.serviceNameKo || '청소'} 고민, 상담으로 확인하세요`} 
        subtitle="사진과 위치를 보내주시면 작업 가능 여부와 상담 방향을 안내합니다." 
      />
      <FloatingContact />
    </div>
  );
}
