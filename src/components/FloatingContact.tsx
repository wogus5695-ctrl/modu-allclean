import React from 'react';
import { CONTACT_PHONE, CONTACT_KAKAO } from '@/lib/seo';
import styles from './FloatingContact.module.css';

const FloatingContact = () => {
  return (
    <div className={styles.wrapper}>
      <a href={`tel:${CONTACT_PHONE}`} className={`${styles.btn} ${styles.phone}`}>
        <span className={styles.icon}>📞</span>
        <span className={styles.text}>전화상담</span>
      </a>
      <a href={CONTACT_KAKAO} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.kakao}`}>
        <span className={styles.icon}>💬</span>
        <span className={styles.text}>카톡문의</span>
      </a>
    </div>
  );
};

export default FloatingContact;
