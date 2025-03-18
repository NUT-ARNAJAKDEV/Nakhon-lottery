import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear(); // ดึงปี ค.ศ. ปัจจุบัน

  return (
    <div className={styles.footer}>
        <p>Copyright © {currentYear}</p> {/* แสดงปี ค.ศ. ปัจจุบัน */}
    </div>
  );
}

export default Footer;
