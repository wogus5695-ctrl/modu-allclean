import { services } from '@/data/services';
import { portfolioItems } from '@/data/portfolio';
import { BRAND_NAME, CONTACT_PHONE } from '@/lib/seo';
import SectionCTA from '@/components/SectionCTA';
import FloatingContact from '@/components/FloatingContact';
import styles from '@/app/page.module.css';

interface MainTemplateProps {
  region?: string;
  service?: string;
}

export default function MainTemplate({ 
  region = '서울·경기', 
  service = '종합청소' 
}: MainTemplateProps) {
  
  // 메인 페이지용 서비스 그룹화 로직 (Sitemap-Seoul에는 영향을 주지 않음)
  const getDisplayServices = () => {
    const items = [];
    let hasAddedAwningGroup = false;
    let hasAddedInteriorGroup = false;

    for (const s of services) {
      // 메인 페이지에서는 쓰레기집청소와 특수청소 노출 제외 (사용자 요청)
      if (s.id === 'trash-house' || s.id === 'special-cleaning') {
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
            desc: '공사 분진과 시멘트 가루를 완벽 제거하여 즉시 입주 가능한 쾌적한 상태를 만듭니다.',
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

  return (
    <div className={styles.container}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.inner}>
          <div className="animate-fade-up">
            <span className={styles.badge}>서울·경기 No.1 청소 전문 업체</span>
            <h1 className={styles.heroTitle}>
              {region} <span className={styles.highlight}>{service}</span> 전문<br />
              압도적인 청결 솔루션
            </h1>
            <p className={styles.heroDesc}>
              서울·경기 고객님이 신뢰하는 브랜드, {BRAND_NAME}입니다.<br />
              합리적인 비용과 전문 장비로 완벽한 결과를 약속드립니다.
            </p>
            <div className={styles.heroCta}>
              <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.primary}`}>무료 방문 견적 신청</a>
              <a href={`tel:${CONTACT_PHONE}`} className={`${styles.ctaBtn} ${styles.outline}`}>실시간 전화 상담</a>
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
                <p>{service}의 특성에 최적화된 최첨단 장비와 친환경 세제를 사용합니다.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureImage}>
                <img src="/images/why/team.jpg" alt="100% 직영 팀 운영" />
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>👤</div>
                <h3>100% 직영 팀 운영</h3>
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
          <div className={styles.serviceCards}>
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
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section className={styles.portfolio}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>서울·경기 실제 작업 현장</h2>
            <p className={styles.sectionDesc}>거짓 없는 작업 전후 사진으로 증명합니다.</p>
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
          <div className={styles.sectionHeader}>
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

          <div className={styles.pricingComparison}>
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
                <li className={styles.good}>✔ 100% 본사 직영 팀 운영</li>
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
              <h4>Q. 서울·경기 지역 견적 비용은 어떻게 되나요?</h4>
              <p>A. 현장의 면적, 오염도, 작업 방식에 따라 상이하므로 무료 방문 견적을 통해 정확한 금액을 산출해 드립니다.</p>
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
            <p>24시간 친절 상담 | 무료 방문 견적 | 사후 관리 보장</p>
            <div className={styles.contactInfo}>
              <a href={`tel:${CONTACT_PHONE}`} className={styles.mainPhone}>{CONTACT_PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      <FloatingContact />
    </div>
  );
}
