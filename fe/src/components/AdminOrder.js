import React from "react";
import { Link } from 'react-router-dom';
import './AdminOrder.css';


const divStyle1 = {
    'display': 'flex',
    'borderBottom': '1px solid #91c2cc',
    'width': '100%',
    'height': '60px',
    'justifyContent': 'space-between',
    'alignItems': 'center'

};
const divStyle2 = {
    'width': '120px',
};

const divStyle3 = {
    'width': '120px',
    'fontSize': '700',
    'fontWeight': 'bold',
    'color': '#005d80'
};
const divStyle4 = {
    'width': '160px',
    'fontSize': '700',
    'fontWeight': 'bold',
    'color': '#005d80'
};
const divStyleScroll = {
    'width': '101%',
    'height': '400px',
    'overflow': 'auto',
}

const box3 = {
    width: '200px',
    height: '200px',
    margin: '10px',
    backgroundColor: '#f7f7f7',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
}
const box4 = {
    width: "81%",
    margin: '10px',
    backgroundColor: '#ffffff',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
}

export default function AdminOrder() {
    const data = [
        {
            account_id: 2,
            account_username: "user2",
            info_name: "Ngọc Ngạn",
            info_address: "Hưng Lợi, Ninh Kiều, Cần Thơ",
            info_phone_number: "032889933",
            product_name: "Thức ăn mèo lớn",
            product_id: 4,
            product_price: 60000,
            order_detail_quantity: 5
        },
        {
            account_id: 2,
            account_username: "user2",
            info_name: "Ngọc Ngạn",
            info_address: "Hưng Lợi, Ninh Kiều, Cần Thơ",
            info_phone_number: "032889977",
            product_name: "Thức ăn mèo",
            product_id: 11,
            product_price: 40000,
            order_detail_quantity: 2
        },
        {
            account_id: 3,
            account_username: "user3",
            info_name: "Trà Long",
            info_address: "Hưng Lợi, Ninh Kiều, Cần Thơ",
            info_phone_number: "032889900",
            product_name: "Lồng mèo con",
            product_id: 9,
            product_price: 590000,
            order_detail_quantity: 1
        },
        {
            account_id: 2,
            account_username: "user2",
            info_name: "Ngọc Ngạn",
            info_address: "Hưng Lợi, Ninh Kiều, Cần Thơ",
            info_phone_number: "032889933",
            product_name: "Thức ăn mèo lớn",
            product_id: 4,
            product_price: 60000,
            order_detail_quantity: 5
        },
        {
            account_id: 2,
            account_username: "user2",
            info_name: "Ngọc Ngạn",
            info_address: "Hưng Lợi, Ninh Kiều, Cần Thơ",
            info_phone_number: "032889977",
            product_name: "Thức ăn mèo",
            product_id: 11,
            product_price: 40000,
            order_detail_quantity: 2
        },
        {
            account_id: 3,
            account_username: "user3",
            info_name: "Trà Long",
            info_address: "Hưng Lợi, Ninh Kiều, Cần Thơ",
            info_phone_number: "032889900",
            product_name: "Lồng mèo con",
            product_id: 9,
            product_price: 590000,
            order_detail_quantity: 1
        },
        {
            account_id: 2,
            account_username: "user2",
            info_name: "Ngọc Ngạn",
            info_address: "Hưng Lợi, Ninh Kiều, Cần Thơ",
            info_phone_number: "032889933",
            product_name: "Thức ăn mèo lớn",
            product_id: 4,
            product_price: 60000,
            order_detail_quantity: 5
        },
        {
            account_id: 2,
            account_username: "user2",
            info_name: "Ngọc Ngạn",
            info_address: "Hưng Lợi, Ninh Kiều, Cần Thơ",
            info_phone_number: "032889977",
            product_name: "Thức ăn mèo",
            product_id: 11,
            product_price: 40000,
            order_detail_quantity: 2
        },
        {
            account_id: 3,
            account_username: "user3",
            info_name: "Trà Long",
            info_address: "Hưng Lợi, Ninh Kiều, Cần Thơ",
            info_phone_number: "032889900",
            product_name: "Lồng mèo con",
            product_id: 9,
            product_price: 590000,
            order_detail_quantity: 1
        }
    ]
    const renderList = () => {
        let element = data.map((product, index) => {

            return <Item
                key={index}
                index={index}
                product_id={product.product_id}
                product_name={product.product_name}
                product_price={product.product_price}
                account_id={product.account_id}
                account_username={product.account_username}
                info_name={product.info_name}
                info_address={product.info_address}
                info_phone_number={product.info_phone_number}
                order_detail_quantity={product.order_detail_quantity}
            // buttonDelete={(product_id) => { delete_product(product_id) }}
            // buttonEdit={(index, product_id, product_name, product_type_id, product_brand_id, product_price, product_amount, product_description, product_image) => { edit_product(index, product_id, product_name, product_type_id, product_brand_id, product_price, product_amount, product_description, product_image) }}
            />
        })
        return element;
    }
    return (
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
                    <Link to='/admin/dathang'>
                        Quản lý đặt hàng
                    </Link>
                </div>
            </div>
            <div style={box4}>
                <div style={divStyle1}>
                    <div style={divStyle3}>
                        Tài khoản
                    </div>
                    <div style={divStyle3}>
                        Họ và Tên
                    </div>
                    <div style={divStyle3}>
                        Số điện thoại
                    </div>
                    <div style={divStyle3}>
                        Địa chỉ
                    </div>
                    <div style={divStyle3}>
                        Sản phẩm
                    </div>
                    <div style={divStyle3}>
                        Số lượng
                    </div>
                    
                    <div style={divStyle4}>
                        Tuỳ chỉnh
                    </div>

                </div>
                <div style={divStyleScroll}>
                    {renderList()}
                </div>
            </div>
        </div>
    )
}

function Item(props) {
    // const buttonDelete = () => {
    //   props.buttonDelete(props.product_id)
    // }
    // const buttonEdit = () => {
    //   props.buttonEdit(props.index, props.product_id, props.product_name, props.product_type_id, props.product_brand_id, props.product_price, props.product_amount, props.product_description, props.product_image)
    // }
    return (
        <div style={divStyle1}>
            <div style={divStyle2}>
                {props.account_username}
            </div>
            <div style={divStyle2}>
                {props.info_name}
            </div>
            <div style={divStyle2}>
                {props.info_phone_number}
            </div>
            <div style={divStyle2}>
                {props.info_address}
            </div>
            <div style={divStyle2}>
                {props.product_name}
            </div>
            <div style={divStyle2}>
                {props.order_detail_quantity}
            </div>
            <div style={divStyle4}>
                {/* <button className="button-sanpham-hover" onClick={buttonDelete} style={buttonStyle1}>Xoá</button> */}
                {/* <button className="button-sanpham-hover" onClick={buttonEdit} style={buttonStyle2}>Sửa</button> */}
                <button>Chấp nhận</button>
            </div>
        </div>
    )
}