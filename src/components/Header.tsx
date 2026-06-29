import Link from 'next/link';
import styles from './Header.module.css';
import { services } from '@/data/services';

import { CONTACT_PHONE, CONTACT_KAKAOTALK } from '@/lib/seo';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          모두<span>종합환경</span>
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
