import React from 'react'
import styles from './Order.module.css'
import { FaCartShopping } from "react-icons/fa6";

function Order() {
    return (
        <div className={styles.order_con}>
            <div className={styles.title}>
                <hr className={styles.port_line} />
                <h3 className={styles.order_title}>ลอตเตอรี่</h3>
            </div>
            <div className={styles.order_list}>

                <div className={styles.order_items}>
                    <div className={styles.order_amount}>
                        <p>เลขชุด&nbsp;&nbsp;4&nbsp;&nbsp;ใบ&nbsp;&nbsp;24&nbsp;&nbsp;ล้าน</p>
                    </div>
                    <div className={styles.order_img}>
                        <img src="https://s.isanook.com/ca/0/ud/279/1399935/tumblr_3fb4a292ec783774bceae6.jpg?ip/resize/w728/q80/jpg" alt="" />
                    </div>
                    <a href="#" className={styles.order_buttom}><FaCartShopping />&nbsp;&nbsp;&nbsp;เพิ่มใส่รถเข็น</a>
                </div>

                <div className={styles.order_items}>
                    <div className={styles.order_amount}>
                        <p>เลขชุด&nbsp;&nbsp;2&nbsp;&nbsp;ใบ&nbsp;&nbsp;12&nbsp;&nbsp;ล้าน</p>
                    </div>
                    <div className={styles.order_img}>
                        <img src="https://s.isanook.com/ca/0/ud/279/1399935/tumblr_3fb4a292ec783774bceae6.jpg?ip/resize/w728/q80/jpg" alt="" />
                    </div>
                    <a href="#" className={styles.order_buttom}><FaCartShopping />&nbsp;&nbsp;&nbsp;เพิ่มใส่รถเข็น</a>
                </div>

                <div className={styles.order_items}>
                    <div className={styles.order_amount}>
                        <p>เลขชุด&nbsp;&nbsp;1&nbsp;&nbsp;ใบ&nbsp;&nbsp;6&nbsp;&nbsp;ล้าน</p>
                    </div>
                    <div className={styles.order_img}>
                        <img src="https://s.isanook.com/ca/0/ud/279/1399935/tumblr_3fb4a292ec783774bceae6.jpg?ip/resize/w728/q80/jpg" alt="" />
                    </div>
                    <a href="#" className={styles.order_buttom}><FaCartShopping />&nbsp;&nbsp;&nbsp;เพิ่มใส่รถเข็น</a>
                </div>

                <div className={styles.order_items}>
                    <div className={styles.order_amount}>
                        <p>เลขชุด&nbsp;&nbsp;4&nbsp;&nbsp;ใบ&nbsp;&nbsp;24&nbsp;&nbsp;ล้าน</p>
                    </div>
                    <div className={styles.order_img}>
                        <img src="https://s.isanook.com/ca/0/ud/279/1399935/tumblr_3fb4a292ec783774bceae6.jpg?ip/resize/w728/q80/jpg" alt="" />
                    </div>
                    <a href="#" className={styles.order_buttom}><FaCartShopping />&nbsp;&nbsp;&nbsp;เพิ่มใส่รถเข็น</a>
                </div>

                <div className={styles.order_items}>
                    <div className={styles.order_amount}>
                        <p>เลขชุด&nbsp;&nbsp;2&nbsp;&nbsp;ใบ&nbsp;&nbsp;12&nbsp;&nbsp;ล้าน</p>
                    </div>
                    <div className={styles.order_img}>
                        <img src="https://s.isanook.com/ca/0/ud/279/1399935/tumblr_3fb4a292ec783774bceae6.jpg?ip/resize/w728/q80/jpg" alt="" />
                    </div>
                    <a href="#" className={styles.order_buttom}><FaCartShopping />&nbsp;&nbsp;&nbsp;เพิ่มใส่รถเข็น</a>
                </div>

                <div className={styles.order_items}>
                    <div className={styles.order_amount}>
                        <p>เลขชุด&nbsp;&nbsp;4&nbsp;&nbsp;ใบ&nbsp;&nbsp;24&nbsp;&nbsp;ล้าน</p>
                    </div>
                    <div className={styles.order_img}>
                        <img src="https://s.isanook.com/ca/0/ud/279/1399935/tumblr_3fb4a292ec783774bceae6.jpg?ip/resize/w728/q80/jpg" alt="" />
                    </div>
                    <a href="#" className={styles.order_buttom}><FaCartShopping />&nbsp;&nbsp;&nbsp;เพิ่มใส่รถเข็น</a>
                </div>

                <div className={styles.order_items}>
                    <div className={styles.order_amount}>
                        <p>เลขชุด&nbsp;&nbsp;3&nbsp;&nbsp;ใบ&nbsp;&nbsp;18&nbsp;&nbsp;ล้าน</p>
                    </div>
                    <div className={styles.order_img}>
                        <img src="https://s.isanook.com/ca/0/ud/279/1399935/tumblr_3fb4a292ec783774bceae6.jpg?ip/resize/w728/q80/jpg" alt="" />
                    </div>
                    <a href="#" className={styles.order_buttom}><FaCartShopping />&nbsp;&nbsp;&nbsp;เพิ่มใส่รถเข็น</a>
                </div>

                <div className={styles.order_items}>
                    <div className={styles.order_amount}>
                        <p>เลขชุด&nbsp;&nbsp;1&nbsp;&nbsp;ใบ&nbsp;&nbsp;6&nbsp;&nbsp;ล้าน</p>
                    </div>
                    <div className={styles.order_img}>
                        <img src="https://s.isanook.com/ca/0/ud/279/1399935/tumblr_3fb4a292ec783774bceae6.jpg?ip/resize/w728/q80/jpg" alt="" />
                    </div>
                    <a href="#" className={styles.order_buttom}><FaCartShopping />&nbsp;&nbsp;&nbsp;เพิ่มใส่รถเข็น</a>
                </div>
            </div>
            <div className={styles.order_more}>
                <a href="#" className={styles.order_more_button}>ดูเพิ่มเติม</a>
            </div>

        </div>
    )
}

export default Order
