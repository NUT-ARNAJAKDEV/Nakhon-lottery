import React from 'react'
import styles from './Search.module.css'
import { FaBook, FaBoxArchive, FaCartShopping, FaArrowsSpin, FaUser } from 'react-icons/fa6'

function Services() {
    return (
        <div className={styles.container}>

            <a href="#" className={styles.logo}>
                <img src="/img/logo.ico" alt="โลโก้ นครลอตเตอรี่" />
                <h1>นครลอตเตอรี่</h1>
            </a>
            <div className={styles.group}>
                <div className={styles.searchBar}>
                    <input type="number" placeholder="กรอกตัวเลขที่ต้องการค้นหา..." />
                </div>

                <div className={styles.action_button}>
                    <div className={styles.icons1}>
                        <FaBook />
                    </div>
                    <div className={styles.icons2}>
                        <FaBoxArchive />
                    </div>
                    <div className={styles.icons3}>
                        <FaCartShopping />
                    </div>
                    <div className={styles.icons4}>
                        <FaUser />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
