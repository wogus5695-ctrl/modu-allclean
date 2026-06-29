import { CONTACT_PHONE, CONTACT_KAKAOTALK } from '@/lib/seo';
import styles from './MobileFloatingCTA.module.css';

export default function MobileFloatingCTA() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <a href={`tel:${CONTACT_PHONE}`} className={`${styles.btn} ${styles.phoneBtn}`}>
          <span className={styles.icon}>📞</span>
          <span className={styles.text}>전화 상담</span>
        </a>
        <a 
          href={CONTACT_KAKAOTALK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.btn} ${styles.kakaoBtn}`}
        >
          <span className={styles.icon}>💬</span>
          <span className={styles.text}>카카오톡 문의</span>
        </a>
      </div>
    </div>
  );
}
