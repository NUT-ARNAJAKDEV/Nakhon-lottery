import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { FaFire, FaArrowsSpin, FaBook, FaBoxArchive, FaCartShopping, FaNewspaper, FaPhone } from "react-icons/fa6";

function Hero() {
    const targetDate = new Date("March 27, 2025 00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            return { days: "00", hours: "00", minutes: "00", seconds: "00" };
        }

        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
            minutes: String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
            seconds: String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, "0"),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.hero_wrapper}>
            <div className={styles.hero_con}>
                <div className={styles.sidenav_con}>
                    {!isMobile && (
                        <div className={styles.sidenav}>
                            <a href="#"><FaFire /> &nbsp;&nbsp;&nbsp;&nbsp;ลอตเตอรี่</a>
                            <a href="#"><FaArrowsSpin /> &nbsp;&nbsp;&nbsp;&nbsp;สุ่มตัวเลข</a>
                            <a href="#"><FaBook /> &nbsp;&nbsp;&nbsp;&nbsp;ประวัติการซื้อ</a>
                            <a href="#"><FaBoxArchive /> &nbsp;&nbsp;&nbsp;&nbsp;กล่องเก็บของ</a>
                            <a href="#"><FaCartShopping /> &nbsp;&nbsp;&nbsp;&nbsp;รถเข็นของฉัน</a>
                            <a href="#"><FaNewspaper /> &nbsp;&nbsp;&nbsp;&nbsp;ข่าวสารและกิจกรรม</a>
                            <a href="#"><FaPhone /> &nbsp;&nbsp;&nbsp;&nbsp;ติดต่อเรา</a>
                        </div>
                    )}
                    <div className={styles.stopwatch}>
                        <div className={styles.stopwatch_detail}>
                            <p>เตรียมตัว ถูกรางวัลที่ 1 ในอีก</p>
                        </div>
                        <div className={styles.stopwatch_time}>
                            <div className={styles.stw_days}>
                                <h2>{timeLeft.days}</h2>
                                <h3>วัน</h3>
                            </div>
                            <div className={styles.stw_hour}>
                                <h2>{timeLeft.hours}</h2>
                                <h3>ชั่วโมง</h3>
                            </div>
                            <div className={styles.stw_min}>
                                <h2>{timeLeft.minutes}</h2>
                                <h3>นาที</h3>
                            </div>
                            <div className={styles.stw_sec}>
                                <h2>{timeLeft.seconds}</h2>
                                <h3>วินาที</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.hero_img_container}>
                    <div className={styles.hero_img1}>
                        <div className={styles.hero_title}>
                            <h3>ผลฉลากกินแบ่งรัฐบาล</h3>
                        </div>
                        <div className={styles.hero_date}>
                            <p>วันที่ 1 มีนาคม 2568</p>
                        </div>
                    </div>
                    <div className={styles.hero_img2}>
                        <div className={styles.hero_img2_part1}>
                            <div className={styles.hero_detail_one}>
                                <p>รางวัลที่ 1</p>
                            </div>
                            <div className={styles.hero_one}>
                                <h1>108111</h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hero_img3}>
                        <div className={styles.hero_img3_part1}>
                            <div className={styles.hero_detail_threef}>
                                <p>เลขหน้า 3 ตัว</p>
                            </div>
                            <div className={styles.hero_threef}>
                                <h1>233</h1>
                                <h1>184</h1>
                            </div>
                        </div>
                        <div className={styles.hero_img3_part2}>
                            <div className={styles.hero_detail_threeb}>
                                <p>เลขหลัง 3 ตัว</p>
                            </div>
                            <div className={styles.hero_threeb}>
                                <h1>264</h1>
                                <h1>241</h1>
                            </div>
                        </div>
                        <div className={styles.hero_img3_part3}>
                            <div className={styles.hero_detail_two}>
                                <p>เลขท้าย 2 ตัว</p>
                            </div>
                            <div className={styles.hero_two}>
                                <h1>51</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
