

export default function Thanhtoan() {

    const notifications = () => {
        var strurl = window.location.href;
        var url = new URL(strurl)
        // console.log(url.searchParams.get("resultCode"))
        if (url.searchParams.get("resultCode") === null) {
            return(
                <div></div>
            )
        }
        if (url.searchParams.get("resultCode") === '0') {
            return(
                <div>Thanh toán thành công!</div>
            )
        }
        if (url.searchParams.get("resultCode") === '1006') {
            return(
                <div>Thanh toán thất bại vui lòng thanh toán lại!</div>
            )
        }
    }
    return (
        <div>
            {notifications()}
        </div>
    )
}