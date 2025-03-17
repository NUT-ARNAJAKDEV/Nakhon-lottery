import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear(); // ดึงปี ค.ศ. ปัจจุบัน

  return (
    <footer>
        <p>Copyright © {currentYear}</p> {/* แสดงปี ค.ศ. ปัจจุบัน */}
    </footer>
  );
}

export default Footer;
