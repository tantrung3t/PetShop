
import "./Thanhtoan.css"
import { useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


export default function Thanhtoan() {

    console.log("render")
    var strurl = window.location.href;
    var url = new URL(strurl);

    var state = 0;

    const sendOrderStatus = (order_id, order_status) => {
        const databody = {
            "order_id": order_id,
            "payment_status": order_status
        }

        axios({
            method: 'post',
            url: 'http://localhost:3003/payment/status',
            data: databody
        })
            .then(function (response) {
                const data = response.data;
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        if (state !== 0) {
            var order_id = url.searchParams.get("orderId").slice(4)
            sendOrderStatus(order_id, state)
        }
    }, [])

    const notifications = () => {
        // var order_id;
        // console.log(url.searchParams.get("resultCode"))
        // if (url.searchParams.get("resultCode") === null) {
        //     return (
        //         <div></div>
        //     )
        // }

        if (url.searchParams.get("payment") === 'cashPayment') {
            return (
                <div className='Thanhtoan_notification'>
                    <div className="Thanhtoan_border_icon">
                        <div className='Thanhtoan_icon'>
                            <FontAwesomeIcon icon={faCheck} fontSize={80} />
                        </div>
                    </div>
                    <div className='Thanhtoan_title'>
                        Đặt hàng thành công
                    </div>
                    <div className='Thanhtoan_title1'>
                        Cảm ơn bạn đã ủng hộ chúng tôi
                    </div>
                    <Link to={'/'} className="btn btn-primary" style={{fontSize: "16px"}}>
                        Trang chủ
                    </Link>
                </div>
            )
        }

        if (url.searchParams.get("resultCode") === '0') {
            //thong bao thanh toan thanh cong va chuyen order_payment_momo = 2
            state = 2
            return (
                <div className='Thanhtoan_notification'>
                    <div className="Thanhtoan_border_icon">
                        <div className='Thanhtoan_icon'>
                            <FontAwesomeIcon icon={faCheck} fontSize={80} />
                        </div>
                    </div>
                    <div className='Thanhtoan_title'>
                        Thanh toán thành công
                    </div>
                    <div className='Thanhtoan_title1'>
                        Cảm ơn bạn đã ủng hộ chúng tôi
                    </div>
                    <Link to={'/'} className="btn btn-primary" style={{fontSize: "16px"}}>
                        Trang chủ
                    </Link>
                </div>
            )
        }
        if (url.searchParams.get("resultCode") === '1006') {
            // order_id = url.searchParams.get("orderId").slice(4) //cắt lấy chuổi orderId momo gửi về để xác định order_id
            state = 1
            return (
                <div className='Thanhtoan_notification'>
                    <div className="Thanhtoan_border_icon_x">
                        <div className='Thanhtoan_icon_x'>
                            <FontAwesomeIcon icon={faXmark} fontSize={80} />
                        </div>
                    </div>
                    <div className='Thanhtoan_title'>
                        Thanh toán không thành công
                    </div>
                    <div className='Thanhtoan_title1'>
                        Vui lòng thanh toán lại hoặc sữ dụng phương thức thanh toán khác
                    </div>
                    <Link to={'/'} className="btn btn-primary" style={{fontSize: "16px"}}>
                        Trang chủ
                    </Link>
                </div>
            )
        }
    }
    return (
        <div>
            {notifications()}
        </div>
    )
}