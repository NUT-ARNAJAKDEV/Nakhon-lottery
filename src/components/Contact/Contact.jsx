import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import { FaFacebook, FaSquareXTwitter, FaLine, FaChartSimple } from 'react-icons/fa6';

function Info() {
    const [watchNum, setWatchNum] = useState(100000);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomNumber = Math.floor(Math.random() * 100001); // สุ่มเลข 0 - 100000
            setWatchNum(randomNumber);
        }, 60000); // ทุก 60 วินาที

        return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูก unmount
    }, []);

    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_logo}>
                    <div className={styles.watch}>
                        <div className={styles.watch_detail}>
                            <FaChartSimple />
                            <p>ผู้เข้าชมปัจจุบัน</p>
                        </div>
                        <div className={styles.watch_num}>
                            <p>{watchNum.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className={styles.regist}>
                        <img src="https://ketshopweb.com/upload-img/1632477296144.webp" alt="" />
                    </div>
                </div>
                <div className={styles.contact_list}>
                    <ul className={styles.contact_nav}>
                        <li><a href="#">ลอตเตอรี่</a></li>
                        <li>|</li>
                        <li><a href="#">สุ่มตัวเลข</a></li>
                        <li>|</li>
                        <li><a href="#">ประวัติการซื้อ</a></li>
                        <li>|</li>
                        <li><a href="#">กล่องเก็บของ</a></li>
                        <li>|</li>
                        <li><a href="#">รถเข็นของฉัน</a></li>
                        <li>|</li>
                        <li><a href="#">ข่าวสารและกิจกรรม</a></li>
                        <li>|</li>
                        <li>ติดต่อเรา Contact Us :</li>
                    </ul>
                    <ul className={styles.contact_social}>
                        <li><a href="#" className={styles.facebook}><FaFacebook /></a></li>
                        <li><a href="#" className={styles.x}><FaSquareXTwitter /></a></li>
                        <li><a href="#" className={styles.line}><FaLine /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Info;
