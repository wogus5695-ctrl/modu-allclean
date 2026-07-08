"use client";

import Link from 'next/link';
import styles from './Header.module.css';
import { services } from '@/data/services';
import { CONTACT_PHONE, CONTACT_KAKAOTALK } from '@/lib/seo';

interface HeaderProps {
  isMoveInOnly?: boolean;
}

export default function Header({ isMoveInOnly = false }: HeaderProps) {
  if (isMoveInOnly) {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            모두종합환경
          </Link>
          
          {/* PC 전용 헤더 메뉴 (모바일에서는 display: none 처리 등으로 숨김) */}
          <nav className={styles.nav} style={{ display: 'flex' }}>
            <ul className={`${styles.menu} move-in-header-menu`}>
              <li>
                <a href="#service-guide">작업범위</a>
              </li>
              <li>
                <a href="#process-flow">진행과정</a>
              </li>
              <li>
                <a href="#estimate-standard">견적기준</a>
              </li>
              <li>
                <a href="#faq">자주묻는질문</a>
              </li>
            </ul>
          </nav>

          <div className={styles.cta} style={{ display: 'flex' }}>
            <a href={`tel:${CONTACT_PHONE}`} className={styles.phoneBtn}>
              전화상담
            </a>
          </div>
        </div>

        <style jsx global>{`
          @media (max-width: 768px) {
            .move-in-header-menu {
              display: none !important;
            }
          }
        `}</style>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          모두종합환경
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {services.slice(0, 5).map(service => (
              <li key={service.id}>
                <Link href={`/service/${service.serviceSlug}`}>{service.serviceNameKo}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.cta}>
          <a href={`tel:${CONTACT_PHONE}`} className={styles.phoneBtn}>
            전화 상담
          </a>
          <a 
            href={CONTACT_KAKAOTALK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.kakaoBtn}
          >
            카카오톡 문의
          </a>
        </div>
      </div>
    </header>
  );
}
