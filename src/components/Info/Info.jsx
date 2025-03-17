import React from 'react'
import styles from './Info.module.css'

function Info() {
    return (
        <div className={styles.info_wrapper}>
            <div className={styles.info_con}>
                <div className={styles.title}>
                    {/* ส่วนหัวเรื่องข่าวสารและกิจกรรม */}
                    <div className={styles.info_line}>
                        <hr className={styles.info_hr} />
                        <h3 className={styles.info_title}>ข่าวสารและกิจกรรม</h3>
                    </div>
                    {/* ปุ่ม "ดูเพิ่มเติม" */}
                    <div className={styles.see_more}>
                        <a href="#" className={styles.info_more_button}>ดูเพิ่มเติม</a>
                    </div>
                </div>
                <div className={styles.info_list}>
                    <div className={styles.info_items}>
                        <div className={styles.info_img}>
                            <img src="https://sm.pcmag.com/pcmag_me/review/c/chatgpt-4o/chatgpt-4o_9w63.jpg" alt="" />
                        </div>
                        <div className={styles.info_amount}>
                            <p>ChatGPT-4o คืออะไร ทำไมคนไทยควรจะศึกษา</p>
                        </div>
                        <div className={styles.info_actions}>
                            <a href="#" className={styles.info_buttom}>อ่านต่อ.</a>
                            <p className={styles.info_date}>19 มกราคม 2568</p>
                        </div>
                    </div>

                    <div className={styles.info_items}>
                        <div className={styles.info_img}>
                            <img src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1683024084/attached_image_th/vapedeviceatcloudofvaporbackground-vapeconcepttoned.jpg" alt="" />
                        </div>
                        <div className={styles.info_amount}>
                            <p>5 อันตรายจากบุหรี่ไฟฟ้าที่ควรรู้ก่อนสูบ</p>
                        </div>
                        <div className={styles.info_actions}>
                            <a href="#" className={styles.info_buttom}>อ่านต่อ.</a>
                            <p className={styles.info_date}>9 กุมภาพันธ์ 2568</p>
                        </div>
                    </div>

                    <div className={styles.info_items}>
                        <div className={styles.info_img}>
                            <img src="https://image.bangkokbiznews.com/uploads/images/contents/w1024/2025/02/gbs2qdPgURTGHwaex7i3.webp?x-image-process=style/xs-webp" alt="" />
                        </div>
                        <div className={styles.info_amount}>
                            <p>พวงมาลัย น้ำแดงเข้าแล้ว สายมู บูชาออพติมัส ไพร์ม ขอความสำเร็จ</p>
                        </div>
                        <div className={styles.info_actions}>
                            <a href="#" className={styles.info_buttom}>อ่านต่อ.</a>
                            <p className={styles.info_date}>12 มีนาคม 2568</p>
                        </div>
                    </div>

                    <div className={styles.info_items}>
                        <div className={styles.info_img}>
                            <img src="https://www.infoquest.co.th/wp-content/uploads/2024/11/20241106_Canva_donald-trump-1.png" alt="" />
                        </div>
                        <div className={styles.info_amount}>
                            <p>บทความและข่าว “เลือกตั้งอเมริกา” ล่าสุด วันนี้</p>
                        </div>
                        <div className={styles.info_actions}>
                            <a href="#" className={styles.info_buttom}>อ่านต่อ.</a>
                            <p className={styles.info_date}>10 มีนาคม 2568</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Info
