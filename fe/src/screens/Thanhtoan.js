
import axios from "axios"

export default function Thanhtoan() {

    const thanhtoanmomo = async () => {
        const databody = {
            "order_id": 25,
            "amount": 14000
        }

        await axios({
            method: 'post',
            url: 'http://localhost:3003/thanhtoan',
            data: databody
        })
            .then(function (response) {
                const data = response.data;
                console.log(data)
                window.location = data.payUrl
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const clickMomo = () => {
        thanhtoanmomo()

    }
    const notifications = () => {
        var strurl = window.location.href;
        var url = new URL(strurl)
        // console.log(url.searchParams.get("resultCode"))
        if (url.searchParams.get("resultCode") === null) console.log("Vui lòng thanh toán")
        if (url.searchParams.get("resultCode") === '0') console.log("Thanh toán thành công")
        if (url.searchParams.get("resultCode") === '1006') console.log("Thanh toán thất bại")
    }
    return (
        <div>
            <button onClick={clickMomo}>Thanh toán MoMo</button>
            {notifications()}
        </div>
    )
}