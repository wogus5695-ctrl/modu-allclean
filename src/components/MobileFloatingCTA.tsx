import { CONTACT_PHONE, CONTACT_SMS, CONTACT_KAKAO } from '@/lib/seo';
import styles from './MobileFloatingCTA.module.css';

export default function MobileFloatingCTA() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <a href={`tel:${CONTACT_PHONE}`} className={styles.btn}>
          <div className={styles.icon}>📞</div>
          <div className={styles.text}>전화상담</div>
        </a>
        <a href={CONTACT_SMS} className={styles.btn}>
          <div className={styles.icon}>✉️</div>
          <div className={styles.text}>문자상담</div>
        </a>
        <a href={CONTACT_KAKAO} className={styles.btn} target="_blank" rel="noreferrer">
          <div className={styles.icon}>💬</div>
          <div className={styles.text}>카톡상담</div>
        </a>
      </div>
    </div>
  );
}
