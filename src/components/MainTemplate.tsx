"use client";

import { useState } from 'react';
import { services } from '@/data/services';
import { portfolioItems } from '@/data/portfolio';
import { BRAND_NAME, CONTACT_PHONE, CONTACT_KAKAOTALK } from '@/lib/seo';
import { regions, Region } from '@/data/regions';
import Link from 'next/link';
import SectionCTA from '@/components/SectionCTA';
import FloatingContact from '@/components/FloatingContact';
import styles from '@/app/page.module.css';


interface MainTemplateProps {
  region?: string;
  service?: string;
  regionObj?: Region;
}

export default function MainTemplate({ 
  region = '서울·경기', 
  service = '종합청소',
  regionObj
}: MainTemplateProps) {
  
  // 메인 페이지용 서비스 그룹화 로직 (Sitemap-Seoul에는 영향을 주지 않음)
  const getDisplayServices = () => {
    const items = [];
    let hasAddedAwningGroup = false;
    let hasAddedInteriorGroup = false;

    for (const s of services) {
      // showOnMain 속성이 false인 서비스는 메인 페이지에서 제외
      if (!s.showOnMain) {
        continue;
      }

      // 어닝 또는 간판 서비스인 경우
      if (s.id === 'awning' || s.id === 'signboard') {
        if (!hasAddedAwningGroup) {
          items.push({
            id: 'group-awning-sign',
            name: '어닝/간판 청소',
            desc: '매장의 얼굴인 어닝의 곰팡이와 간판의 오염을 동시에 해결하여 가독성을 높입니다.',
            image: '/images/services/awning-sign.jpg'
          });
          hasAddedAwningGroup = true;
        }
        continue; // 개별 항목은 건너뜀
      }

      // 인테리어 후 또는 준공 청소인 경우
      if (s.id === 'interior-post' || s.id === 'completion') {
        if (!hasAddedInteriorGroup) {
          items.push({
            id: 'group-interior-completion',
            name: '인테리어 후/준공 청소',
            desc: '공사 분진과 시멘트 가루를 상태에 맞춰 정리하여 즉시 입주 가능한 쾌적한 상태를 만듭니다.',
            image: '/images/services/interior-completion.jpg'
          });
          hasAddedInteriorGroup = true;
        }
        continue; // 개별 항목은 건너뜀
      }

      // 그 외 일반 서비스
      items.push({
        id: s.id,
        name: s.serviceNameKo,
        desc: s.shortDescription,
        image: s.imageUrl
      });
    }
    return items;
  };

  const displayServices = getDisplayServices();

  const [isExpanded, setIsExpanded] = useState(false);

  // 1. Find matching service from the service prop
  const getHighlightedServiceId = (serviceName: string) => {
    if (!serviceName) return null;
    const name = serviceName.trim();
    if (name === '유리창청소' || name === '유리창') return 'window';
    if (name === '특수청소') return 'special-cleaning';
    if (name === '인테리어 후 청소' || name === '준공청소' || name === '인테리어 후/준공 청소') return 'group-interior-completion';
    if (name === '외벽청소') return 'outer-wall';
    if (name === '화재청소') return 'fire';
    if (name === '바닥왁스코팅') return 'floor-wax';
    if (name === '어닝청소' || name === '간판청소' || name === '어닝/간판 청소') return 'group-awning-sign';
    if (name === '후드청소') return 'hood';
    return null;
  };

  const highlightedServiceId = getHighlightedServiceId(service);

  // 2. Related services mapping
  const relatedServiceMap: Record<string, string[]> = {
    'outer-wall': ['window', 'group-awning-sign', 'group-interior-completion'],
    'window': ['outer-wall', 'group-awning-sign', 'group-interior-completion'],
    'fire': ['special-cleaning', 'floor-wax', 'outer-wall'],
    'floor-wax': ['group-interior-completion', 'window', 'outer-wall'],
    'group-awning-sign': ['window', 'outer-wall', 'group-interior-completion'],
    'group-interior-completion': ['window', 'floor-wax', 'outer-wall'],
    'hood': ['group-awning-sign', 'floor-wax', 'special-cleaning'],
    'special-cleaning': ['fire', 'floor-wax', 'outer-wall']
  };

  // 3. Descriptions for highlighted card
  const highlightDescMap: Record<string, string> = {
    'window': '외부 유리, 상가 유리, 건물 유리창, 고소 유리창 등 현장 상태에 맞춰 장비와 작업 방식을 안내드립니다.',
    'special-cleaning': '악취, 오염, 폐기물, 일반 청소로 어려운 현장은 현장 상태에 맞는 장비와 인력 배치가 필요합니다.',
    'group-interior-completion': '공사 후 남은 분진, 창틀 먼지, 바닥 오염, 접착 자국 등을 입주 전 사용할 수 있는 상태로 정리합니다.',
    'outer-wall': '고층 빌딩, 아파트, 상가 건물의 외부 벽면 오염물과 그을음, 이끼를 전문 로프 장비 및 고압 세척으로 제거합니다.',
    'fire': '그을음 제거, 유독성 분진 청소, 탄 냄새 제거 탈취 공정 등 화재 피해 현장의 신속하고 상태에 맞춘 복구를 지원합니다.',
    'floor-wax': '데코타일, 아스타일 등 바닥 찌든 때 기계 박리 세척 후 프리미엄 코팅으로 광택을 회복하고 바닥을 보호합니다.',
    'group-awning-sign': '매장의 얼굴인 어닝의 곰팡이와 간판 표면의 매연 오염을 고압 세척과 특수 약품으로 깨끗하게 지워냅니다.',
    'hood': '식당 주방 후드와 덕트 내부에 고착된 치명적인 기름때를 고온 스팀과 특수 세제로 정밀 제거하여 화재를 예방합니다.'
  };

  // 4. CTA Text Map
  const highlightCtaTextMap: Record<string, string> = {
    'window': '유리창청소 견적 문의',
    'special-cleaning': '특수청소 상담하기',
    'group-interior-completion': '인테리어 후 청소 견적 문의',
    'outer-wall': '외벽청소 견적 문의',
    'fire': '화재청소 상담하기',
    'floor-wax': '바닥코팅 견적 문의',
    'group-awning-sign': '어닝/간판청소 견적 문의',
    'hood': '후드청소 견적 문의'
  };

  const highlightedService = highlightedServiceId ? displayServices.find(s => s.id === highlightedServiceId) : null;
  const relatedIds = highlightedServiceId ? (relatedServiceMap[highlightedServiceId] || []) : [];
  const relatedServices = displayServices.filter(s => relatedIds.includes(s.id));
  const otherServices = displayServices.filter(s => s.id !== highlightedServiceId && !relatedIds.includes(s.id));

  const getHeroDesc = () => {
    if (highlightedServiceId === 'window') {
      return (
        <>
          투명하고 깨끗한 시야를 선사하는 프리미엄 유리 케어, {BRAND_NAME}입니다.<br />
          합리적인 비용과 현장에 맞는 장비로 현장 상태에 맞춘 작업을 약속드립니다.
        </>
      );
    }
    if (highlightedServiceId === 'special-cleaning') {
      return (
        <>
          고독사 현장, 유품 정리, 쓰레기집 등 고난도 특수 케어 전문, {BRAND_NAME}입니다.<br />
          정밀 탈취와 강력한 살균 소독으로 쾌적한 환경을 선사합니다.
        </>
      );
    }
    if (highlightedServiceId === 'group-interior-completion') {
      return (
        <>
          리모델링 및 완공 후 발생하는 대량의 미세 분진과 오염 제거 전문, {BRAND_NAME}입니다.<br />
          즉시 입주 가능한 쾌적하고 청결한 공간을 약속드립니다.
        </>
      );
    }
    return (
      <>
        서울·경기 고객님이 신뢰하는 브랜드, {BRAND_NAME}입니다.<br />
        합리적인 비용과 현장에 맞는 장비로 현장 상태에 맞춘 작업을 약속드립니다.
      </>
    );
  };

  return (
    <div className={styles.container}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.inner}>
          <div className="animate-fade-up">
            <span className={styles.badge}>서울 주요 지역 청소 상담</span>
            <h1 className={styles.heroTitle}>
              {region} <span className={styles.highlight}>{service}</span> 전문<br />
              압도적인 청결 솔루션
            </h1>
            <p className={styles.heroDesc}>
              {getHeroDesc()}
            </p>
            <div className={styles.heroCta}>
              <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`}>전화 상담하기</a>
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
        </div>
      </section>

      {/* 2. Solution Section */}
      <section className={styles.solution}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Why {BRAND_NAME}?</span>
            <h2 className={styles.sectionTitle}>
              {region} {service},<br />
              왜 <span className={styles.highlight}>{BRAND_NAME}</span> 이어야 할까요?
            </h2>
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <img src="/images/why/pricing.jpg" alt="적정한 견적 제안" />
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>💰</div>
                <h3>적정한 견적 제안</h3>
                <p>거품 없는 합리적인 비용으로 현장 상황에 맞는 정직한 견적을 제안합니다.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <img src="/images/why/equipment.jpg" alt="현장 맞춤형 장비" />
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>✨</div>
                <h3>현장 맞춤형 장비</h3>
                <p>{service}의 특성에 최적화된 현장에 맞는 장비와 세정제를 사용합니다.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <img src="/images/why/team.jpg" alt="청소 전문 팀 투입" />
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

      {/* 3. Detailed Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}><span style={{ color: 'var(--accent)' }}>{BRAND_NAME}</span>의 청소 서비스 안내</h2>
            <p className={styles.sectionDesc}>{BRAND_NAME}은 서울·경기 전 지역 모든 현장에 대응합니다.</p>
          </div>

          {/* Desktop view (only visible on desktop via page.module.css) */}
          <div className={`${styles.serviceCards} ${styles.desktopOnly}`}>
            {displayServices.map((item) => (
              <div key={item.id} className={styles.serviceItem}>
                <div className={styles.serviceInfo}>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <ul className={styles.serviceList}>
                    <li>✔ 현장 정밀 진단 및 견적</li>
                    <li>✔ 전문 인력 투입</li>
                    <li>✔ 사후 관리(A/S) 보장</li>
                  </ul>
                </div>
                {item.image && (
                  <div className={styles.serviceImage}>
                    <img src={item.image} alt={item.name} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile view (only visible on mobile via page.module.css) */}
          <div className={styles.mobileServiceContainer}>
            {highlightedService ? (
              // 1. When a specific service is highlighted (e.g. from keyword landing page)
              <>
                {/* Highlighted Card */}
                <div className={styles.highlightedCard}>
                  <div className={styles.highlightedBadge}>현재 추천 작업</div>
                  <h3 className={styles.highlightedTitle}>
                    {region} <span className={styles.textAccent}>{highlightedService.name}</span> 작업 안내
                  </h3>
                  <p className={styles.highlightedDesc}>
                    {highlightDescMap[highlightedService.id] || highlightedService.desc}
                  </p>
                </div>

                {/* Related Services Title */}
                <h4 className={styles.mobileSubTitle}>추천 연관 서비스</h4>
                <div className={styles.mobileServiceCards}>
                  {relatedServices.map((item) => (
                    <div key={item.id} className={styles.serviceItem}>
                      <div className={styles.serviceInfo}>
                        <h3>{item.name}</h3>
                        <p>{item.desc}</p>
                      </div>
                      {item.image && (
                        <div className={styles.serviceImage}>
                          <img src={item.image} alt={item.name} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Collapsible Others Section */}
                {otherServices.length > 0 && (
                  <>
                    <div className={`${styles.mobileCollapsible} ${isExpanded ? styles.expanded : ''}`}>
                      <h4 className={styles.mobileSubTitle} style={{ marginTop: '24px', marginBottom: '16px' }}>전체 서비스 목록</h4>
                      <div className={styles.mobileServiceCards}>
                        {otherServices.map((item) => (
                          <div key={item.id} className={styles.serviceItem}>
                            <div className={styles.serviceInfo}>
                              <h3>{item.name}</h3>
                              <p>{item.desc}</p>
                            </div>
                            {item.image && (
                              <div className={styles.serviceImage}>
                                <img src={item.image} alt={item.name} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)} 
                      className={styles.expandBtn}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? '청소 서비스 목록 접기 ▲' : '다른 청소 서비스 보기 ▼'}
                    </button>
                  </>
                )}
              </>
            ) : (
              // 2. Fallback for main page (no highlighted service) - show all services directly
              <div className={styles.mobileServiceCards}>
                {displayServices.map((item) => (
                  <div key={item.id} className={styles.serviceItem}>
                    <div className={styles.serviceInfo}>
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                    {item.image && (
                      <div className={styles.serviceImage}>
                        <img src={item.image} alt={item.name} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section className={styles.portfolio}>
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
                      <img src={item.beforeImg} alt={`${item.category} 전`} />
                      <span className={styles.tagBefore}>BEFORE</span>
                    </div>
                    <div className={styles.imageBox}>
                      <img src={item.afterImg} alt={`${item.category} 후`} />
                      <span className={styles.tagAfter}>AFTER</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust Section */}
      <section className={styles.trust}>
        <div className={styles.inner}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>1,200+</span>
              <p>서울·경기 종합청소 수행</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>98%</span>
              <p>고객 만족도</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>24h</span>
              <p>상시 견적 응대</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing Strategy Section */}
      <section className={styles.pricing}>
        <div className={styles.inner}>
          {/* Desktop Section Header */}
          <div className={`${styles.sectionHeader} ${styles.desktopOnly}`}>
            <span className={styles.subTitle}>Reasonable Price</span>
            <h2 className={styles.sectionTitle}>
              {region} <span className={styles.highlight}>{service}</span>,<br />
              합리적인 견적의 기준을 제시합니다
            </h2>
            <p className={styles.sectionDesc}>
              무조건 싼 가격은 부실한 서비스로 이어지고, 너무 비싼 가격은 고객님께 부담이 됩니다.<br />
              {BRAND_NAME}은 정직한 공정으로 최적화된 맞춤 견적을 약속드립니다.
            </p>
          </div>

          {/* Mobile Section Header */}
          <div className={`${styles.sectionHeader} ${styles.mobileOnly}`}>
            <span className={styles.subTitle}>Reasonable Price</span>
            <h2 className={styles.sectionTitle} style={{ wordBreak: 'keep-all', fontSize: 'clamp(22px, 6vw, 32px)', lineHeight: '1.3' }}>
              {region} <span className={styles.highlight}>{service}</span>,<br />
              합리적인 견적의 기준을 제시합니다
            </h2>
            <p className={styles.sectionDesc} style={{ wordBreak: 'keep-all', fontSize: '15px', lineHeight: '1.6', margin: '12px auto 0', maxWidth: '480px' }}>
              무조건 싼 견적보다 중요한 것은 현장 상태에 맞는 작업 범위입니다.<br />
              {BRAND_NAME}은 오염도, 작업 난이도, 장비 필요 여부를 기준으로 맞춤 견적을 안내드립니다.
            </p>
          </div>

          {/* Desktop Pricing Comparison (hidden on mobile) */}
          <div className={`${styles.pricingComparison} ${styles.desktopOnly}`}>
            <div className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <span className={styles.statusBadge}>주의</span>
                <h3>저가형 업체</h3>
              </div>
              <ul className={styles.priceList}>
                <li className={styles.bad}>✖ 비숙련 인력/하청 위주</li>
                <li className={styles.bad}>✖ 구형 장비 및 독성 세제</li>
                <li className={styles.bad}>✖ 현장 추가 비용 요구</li>
                <li className={styles.bad}>✖ 부실한 사후 관리(A/S)</li>
              </ul>
            </div>
            <div className={`${styles.pricingCard} ${styles.recommend}`}>
              <div className={styles.bestBadge}>BEST CHOICE</div>
              <div className={styles.cardHeader}>
                <span className={styles.statusBadgeOk}>최적</span>
                <h3>{BRAND_NAME}</h3>
              </div>
              <ul className={styles.priceList}>
                <li className={styles.good}>✔ 청소 전문 팀 투입</li>
                <li className={styles.good}>✔ 현장 맞춤형 전문 장비</li>
                <li className={styles.good}>✔ 친환경 공인 세제 사용</li>
                <li className={styles.good}>✔ 투명한 견적 및 A/S 보장</li>
              </ul>
            </div>
            <div className={styles.pricingCard}>
              <div className={styles.cardHeader}>
                <span className={styles.statusBadge}>부담</span>
                <h3>고가 프리미엄</h3>
              </div>
              <ul className={styles.priceList}>
                <li className={styles.bad}>✖ 과도한 광고/마케팅비</li>
                <li className={styles.bad}>✖ 불필요한 공정 추가</li>
                <li className={styles.bad}>✖ 높은 본사 수수료</li>
                <li className={styles.bad}>✖ 과도한 고객 비용 부담</li>
              </ul>
            </div>
          </div>

          {/* Mobile Pricing Comparison (hidden on desktop) */}
          <div className={styles.mobilePricingContainer}>
            {/* Highlighted BRAND Card */}
            <div className={styles.mobilePricingCardRecommend}>
              <div className={styles.mobilePricingCardBadge}>BEST CHOICE</div>
              <h3 className={styles.mobilePricingCardTitle}>{BRAND_NAME}의 견적 기준</h3>
              <ul className={styles.mobilePriceListGood}>
                <li>✔ 청소 전문 팀 투입</li>
                <li>✔ 현장 맞춤형 전문 장비</li>
                <li>✔ 친환경 공인 세제 사용</li>
                <li>✔ 투명한 견적 안내</li>
                <li>✔ 작업 범위 사전 설명</li>
              </ul>
              <a href={`tel:${CONTACT_PHONE}`} className={styles.mobilePricingCta}>
                📞 전화 상담하기
              </a>
            </div>

            {/* Warning Cards Container */}
            <div className={styles.mobilePricingWarningContainer}>
              <div className={styles.mobilePricingCardWarning}>
                <div className={styles.mobilePricingCardHeader}>
                  <span className={styles.mobileStatusBadgeWarning}>주의</span>
                  <h4>저가형 업체 주의</h4>
                </div>
                <ul className={styles.mobilePriceListBad}>
                  <li>✖ 미숙련 인력 중심 작업</li>
                  <li>✖ 구형 장비 또는 독성 세제 사용 가능성</li>
                  <li>✖ 현장 추가 비용 요구 가능성</li>
                  <li>✖ 부실한 사후관리</li>
                </ul>
              </div>

              <div className={styles.mobilePricingCardWarning}>
                <div className={styles.mobilePricingCardHeader}>
                  <span className={styles.mobileStatusBadgeWarning}>주의</span>
                  <h4>과도한 고가 견적 주의</h4>
                </div>
                <ul className={styles.mobilePriceListBad}>
                  <li>✖ 불필요한 광고비·마케팅비 반영</li>
                  <li>✖ 과도한 본사 수수료</li>
                  <li>✖ 필요 이상의 옵션 추가</li>
                  <li>✖ 고객 비용 부담 증가</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 비주얼 그래프 영역 (히스토그램) */}
          <div className={styles.graphContainer}>
            <div className={styles.histogram}>
              <div className={styles.bar} style={{ height: '35%' }}>
                <span className={styles.barLabel}>저가형</span>
              </div>
              <div className={`${styles.bar} ${styles.highlight}`} style={{ height: '65%' }}>
                <span className={styles.barLabel}>{BRAND_NAME}</span>
              </div>
              <div className={styles.bar} style={{ height: '100%' }}>
                <span className={styles.barLabel}>고가형</span>
              </div>
            </div>
            <div className={styles.graphLabel}>
              <span>현장 맞춤형 적정가격</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h4>Q. 청소 작업 비용은 어떻게 확인하나요?</h4>
              <p>A. 현장 위치, 작업 범위, 오염 상태, 면적에 따라 달라질 수 있습니다. 사진과 기본 정보를 보내주시면 상담 방향을 안내해 드립니다.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Q. {service} 작업 시간은 얼마나 걸리나요?</h4>
              <p>A. 현장 규모에 따라 다르지만 보통 반나절에서 하루 정도 소요됩니다. 고객님의 일정에 맞춰 야간이나 주말 작업도 가능합니다.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Q. 세금계산서 발행이 가능한가요?</h4>
              <p>A. 네, 가능합니다. {BRAND_NAME}은 정식 등록 업체로 법인 및 개인 사업자분들을 위해 전자 세금계산서 및 현금영수증 발행을 원칙으로 하고 있습니다.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Q. 작업 현장에 의뢰인이 없어도 괜찮은가요?</h4>
              <p>A. 네, 가능합니다. 바쁘신 고객님들을 위해 비대면 서비스를 제공하며, 작업 전/후 사진을 실시간으로 전송하여 현장에 계신 것처럼 꼼꼼하게 확인하실 수 있도록 도와드립니다.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Q. 주말이나 야간에도 청소 작업이 가능한가요?</h4>
              <p>A. 네, 가능합니다. 상가나 사무실 등 영업시간을 피해야 하는 현장을 위해 연중무휴 24시간 상담 및 야간/주말 맞춤 작업을 지원합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section className={styles.contact}>
        <div className={styles.inner}>
          <div className={styles.contactCard}>
            <h2>
              지금 바로<br />
              <span style={{ color: '#00aaff' }}>{region} {service}</span> 전문가와<br />
              상담하세요!
            </h2>
            <p>24시간 친절 상담 | 현장 상담 문의 | 사후 관리 보장</p>
            <div className={styles.contactInfo}>
              <a href={`tel:${CONTACT_PHONE}`} className={styles.mainPhone}>{CONTACT_PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SEO & Internal Links (하단 배치, 자연스러운 디자인) */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', borderTop: '1px solid #eaeaea', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '15px', color: '#555', marginBottom: '15px', fontWeight: 'bold' }}>
            {region} {service} 및 주변 지역 서비스 안내
          </h3>
          <p style={{ fontSize: '13px', color: '#777', lineHeight: '1.8', marginBottom: '20px', wordBreak: 'keep-all' }}>
            {BRAND_NAME}은 {region} 지역의 {service}뿐만 아니라 입주청소, 이사청소, 준공청소, 상가청소, 외벽청소 등 
            현장에 필요한 모든 종합청소 솔루션을 상태에 맞춰 제공합니다. 
            주변 지역의 청소 서비스가 필요하시다면 아래 링크를 통해 상세 정보를 확인해 보세요.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
            {regionObj && regions.filter(r => r.districtSlug === regionObj.districtSlug && r.subDistrictSlug !== 'all' && r.subDistrictSlug !== regionObj.subDistrictSlug).slice(0, 20).map(r => {
              const serviceSlug = services.find(s => s.serviceNameKo === service)?.serviceSlug || 'interior-post';
              return (
                <Link 
                  key={r.subDistrictSlug} 
                  href={`/${r.regionSlug}/${r.districtSlug}/${r.subDistrictSlug}/${serviceSlug}`} 
                  style={{ fontSize: '12px', padding: '6px 12px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '20px', color: '#666', textDecoration: 'none' }}
                >
                  {r.district} {r.subDistrict} {service}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FloatingContact />
    </div>
  );
}
