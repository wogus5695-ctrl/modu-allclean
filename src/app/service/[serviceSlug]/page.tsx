import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { regions } from '@/data/regions';
import { getServiceMetadata, BRAND_NAME, CONTACT_PHONE } from '@/lib/seo';
import Link from 'next/link';
import styles from './page.module.css';
import SectionCTA from '@/components/SectionCTA';

type Props = {
  params: Promise<{ serviceSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = services.find(s => s.serviceSlug === serviceSlug);
  if (!service) return {};
  return getServiceMetadata(service.id);
}

export default async function ServicePage({ params }: Props) {
  const { serviceSlug } = await params;
  const service = services.find(s => s.serviceSlug === serviceSlug);

  if (!service) {
    notFound();
  }



  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>{service.serviceNameKo} 전문 {BRAND_NAME}</h1>
          <p className={styles.subtitle}>{service.shortDescription}</p>
          <div className={styles.headerCta}>
            <a href={`tel:${CONTACT_PHONE}`} className={styles.primaryBtn}>무료 견적 상담</a>
          </div>
        </div>
      </header>
      
      <SectionCTA 
        title={`${service.serviceNameKo} 무료 견적 상담`}
        subtitle="상가, 빌딩, 관공서 등 모든 현장 맞춤형 시공이 가능합니다."
      />

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.mainGrid}>
            <div className={styles.leftCol}>
              {/* Situations */}
              <div className={styles.card}>
                <h2>이런 상황에 <span>{service.serviceNameKo}</span>가 필요합니다</h2>
                <ul className={styles.checkList}>
                  {service.neededSituations.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Working Method */}
              <div className={styles.card}>
                <h2>작업 방식 및 특장점</h2>
                <p className={styles.longText}>{service.workingMethod}</p>
                <div className={styles.subContent}>
                  <h3>주요 오염 원인</h3>
                  <div className={styles.tagGroup}>
                    {service.commonProblems.map((p, i) => <span key={i} className={styles.tag}>{p}</span>)}
                  </div>
                </div>
              </div>

              {/* Pre-check Items */}
              <div className={styles.card}>
                <h2>작업 전 확인 사항</h2>
                <ul className={styles.bulletList}>
                  {service.preCheckItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className={styles.card}>
                <h2>{service.serviceNameKo} 진행 프로세스</h2>
                <div className={styles.processSteps}>
                  {service.process.map((step, i) => (
                    <div key={i} className={styles.processStep}>
                      <span className={styles.stepNum}>{i + 1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className={styles.card}>
                <h2>자주 묻는 질문 (FAQ)</h2>
                <div className={styles.faqContainer}>
                  {service.faq.map((item, i) => (
                    <div key={i} className={styles.faqItem}>
                      <div className={styles.faqQ}>Q. {item.question}</div>
                      <div className={styles.faqA}>A. {item.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.rightCol}>
              {/* Target Buildings */}
              <div className={styles.sideCard}>
                <h3>주요 작업 대상</h3>
                <ul className={styles.sideList}>
                  {service.targetBuildings.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>



              {/* Contact Info */}
              <div className={`${styles.sideCard} ${styles.contactCard}`}>
                <h3>빠른 상담 신청</h3>
                <p>24시간 연중무휴</p>
                <a href={`tel:${CONTACT_PHONE}`} className={styles.sideCta}>전화 연결</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA 
        title={`${service.serviceNameKo} 작업이 고민이신가요?`}
        subtitle="지금 바로 전문가와 상의하고 최적의 견적을 확인하세요."
      />
    </div>
  );
}

export async function generateStaticParams() {
  return services.map(s => ({
    serviceSlug: s.serviceSlug,
  }));
}
