import { Link } from 'react-router-dom';

const box3 = {
    width: '200px',
    height: '200px',
    margin: '10px',
    backgroundColor: '#f7f7f7',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
}

export default function AdminBrand() {

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={box3}>
                    <div className="admin_title1">
                        <Link to='/admin/thongke' >
                            Thống kê
                        </Link>
                    </div>
                    <div className="admin_title1" >
                        <Link to='/admin/sanpham'>
                            Quản lý sản phẩm
                        </Link>
                    </div>
                    <div className="admin_title2" >
                        <Link to='/admin/nhanhang'>
                            Quản lý nhãn hàng
                        </Link>
                    </div>
                    <div className="admin_title1" >
                        <Link to='/admin/dathang'>
                            Quản lý đặt hàng
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}