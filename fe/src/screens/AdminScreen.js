import React from 'react';
import {Link} from 'react-router-dom'

export default function AdminScreen() {
    return(
        <div>
            <div className="home__title my-4">
            <Link to='/admin/sanpham' >
                Quản lý sản phẩm
            </Link>
            </div>
            <div className="home__title my-4">
            <Link to='/admin/thongke' >
                Thống kê
            </Link>
            </div>
        </div>
    )
}