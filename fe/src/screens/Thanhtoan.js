
import "./Thanhtoan.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Thanhtoan() {

    const notifications = () => {
        var strurl = window.location.href;
        var url = new URL(strurl)
        // console.log(url.searchParams.get("resultCode"))
        if (url.searchParams.get("resultCode") === null) {
            return (
                <div></div>
            )
        }
        if (url.searchParams.get("resultCode") === '0') {
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
                </div>
            )
        }
        if (url.searchParams.get("resultCode") === '1006') {
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