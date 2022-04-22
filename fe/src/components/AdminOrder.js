import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './AdminOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

import ItemOrderDetail from './ItemOrderDetail'


const modalStyle = {
    'paddingLeft': '10px',
    'paddingRight': '10px',
    'display': 'flex',
    'width': '100%',
    'justifyContent': 'space-between',
    'alignItems': 'center'
}
const modalStyle2 = {
    'paddingLeft': '200px',
    'paddingRight': '170px',
    'display': 'flex',
    'width': '100%',
    'justifyContent': 'space-between',
    'alignItems': 'center'
}
const modalStyleScroll = {
    'height': '240px',
    'overflow': 'auto',
}
const styleListItem = {
    'paddingLeft': '200px',
    'paddingRight': '170px',
    'width': '100%',
    'justifyContent': 'space-between',
    'alignItems': 'center'
}
// const styleItem = {
//     'display': 'flex',
//     'borderBottom': '1px solid #91c2cc',
//     'height': '50px',
//     'justifyContent': 'space-between',
//     'alignItems': 'center'
// }

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

    let total = 0;

    const [dataOrder, setDataOrder] = useState([]);
    const [dataItem, setDataItem] = useState([]);

    const [hide, setHide] = useState("hide");
    const [id, setId] = useState("");
    const [info_name, setName] = useState("");
    const [info_phone, setPhone] = useState("");
    const [info_address, setAddress] = useState("");
    const [payment, setPayment] = useState("Thanh toán khi nhận hàng");

    useEffect(() => {
        loadDataOrder()
    }, [])

    const AcceptOrDenyOrder = async (status_order) => {
        const data = {
            "token": localStorage.getItem('token'),
            "order_id": id,
            "status_order": status_order,
            "listProduct": dataItem
        }

        await axios({
            method: 'post',
            url: 'http://localhost:3003/admin/orders/deny_or_accept_order',
            data: data
        })
            .then(function (response) {
                console.log(response);
                loadDataOrder()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const loadDataOrder = async () => {
        await axios.get(`http://localhost:3003/admin/orders/list`)
            .then(res => {
                const data = res.data;
                setDataOrder(data)
                console.log(data)
            })
            .catch(error => console.log(error));
    }

    const loadDataOrderDetails = async (order_id) => {
        await axios.get(`http://localhost:3003/admin/order/` + order_id)
            .then(res => {
                const data = res.data;
                setDataItem(data)
                console.log(data)
            })
            .catch(error => console.log(error));
    }
    const close_modal = () => {
        setHide("modal hide");
    }

    const exit_modal = (e) => {
        if (e.target == e.currentTarget) close_modal();
    }

    const accept_order = () => {
        AcceptOrDenyOrder(1)
        close_modal();
    }
    const deny_order = () => {
        AcceptOrDenyOrder(2)
        close_modal();
    }

    const order_detail_id = (order_id, name, phone, address, payment) => {
        setHide("modal");
        setId(order_id);
        setName(name);
        setPhone(phone);
        setAddress(address);
        if(payment === 2) setPayment("Đã thanh toán qua ví MoMo")

        //loadDataItem
        loadDataOrderDetails(order_id)
    }

    // const multiPrice = (quantity, price) => {
    //     let result = quantity * price
    //     setTotal([...total, result]);
    // }

    const renderListItem = () => {
        let element = dataItem.map((item, index) => {

            total = total + (item.orders_detail_quantity * item.product_price)

            return <ItemOrderDetail
                key={index}
                index={index}
                product_name={item.product_name}
                orders_detail_quantity={item.orders_detail_quantity}
                product_id={item.product_id}
                product_price={item.product_price}
                product_total={item.orders_detail_quantity * item.product_price}
            />
        })
        return element;
    }
    const renderList = () => {
        if (dataOrder === "") {
            return (<div></div>)
        }
        else {
            let element = dataOrder.map((product, index) => {
                return <Item
                    key={index}
                    index={index}
                    order_id={product.order_id}
                    order_date={product.order_date}
                    info_name={product.info_fname}
                    info_address={product.order_address}
                    info_phone_number={product.info_phone_number}
                    order_payment_momo={product.order_payment_momo}
                    order_detail_quantity={product.order_detail_quantity}
                    order_detail_id={(order_id, info_name, info_phone_number, info_address, order_payment_momo) => { order_detail_id(order_id, info_name, info_phone_number, info_address, order_payment_momo) }}
                // buttonEdit={(index, product_id, product_name, product_type_id, product_brand_id, product_price, product_amount, product_description, product_image) => { edit_product(index, product_id, product_name, product_type_id, product_brand_id, product_price, product_amount, product_description, product_image) }}
                />
            })
            return element;
        }

    }
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
                        <Link to='/admin/dathang'>
                            Quản lý đặt hàng
                        </Link>
                    </div>
                </div>
                <div style={box4}>
                    <div style={divStyle1}>
                        <div style={divStyle3}>
                            Mã đơn hàng
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
                            Ngày đặt hàng
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
            <div className={hide} onClick={exit_modal}>
                <div className="modal__inner">
                    <div className="modal__header">
                        <p>Chi tiết đặt hàng DH00{id}</p>
                        <FontAwesomeIcon icon={faXmarkCircle} fontSize={35} onClick={close_modal} />
                    </div>

                    <div className="modal__body">

                        <div style={modalStyle}>
                            <div>
                                <h4>Người đặt hàng: </h4>
                                <h3>{info_name}</h3>

                            </div>
                            <div >
                                <h4>Số điện thoại:</h4>
                                <h3>{info_phone}</h3>
                            </div>
                            <div>
                                <h4>Địa chỉ:</h4>
                                <h3>{info_address}</h3>
                            </div>
                        </div>

                        <div style={modalStyle2}>
                            <div style={divStyle1}>
                                <div style={divStyle3}>
                                    ID sản phẩm
                                </div>
                                <div style={divStyle3}>
                                    Tên sản phẩm
                                </div>
                                <div style={divStyle3}>
                                    Đơn giá
                                </div>
                                <div style={divStyle3}>
                                    Số lượng
                                </div>
                                <div style={divStyle3}>
                                    Thành tiền
                                </div>
                            </div>
                        </div>
                        <div style={modalStyleScroll}>

                            <div style={styleListItem}>

                                {renderListItem()}

                            </div>
                        </div>
                        <div style={{paddingLeft: '450px'}}>
                            {/* <h4>{payment}</h4> */}
                            <h4>{payment} Tổng thành tiền: {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ</h4>
                        </div>


                    </div>

                    <div className="modal__footer">
                        <button onClick={accept_order} className="button-accept-order">Chấp nhận</button>
                        <button onClick={deny_order} className="button-deny-order">Từ chối</button>
                    </div>

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
    const order_detail_id = () => {
        props.order_detail_id(props.order_id, props.info_name, props.info_phone_number, props.info_address, props.order_payment_momo)
    }
    return (
        <div>
            <div style={divStyle1}>
                <div style={divStyle2}>
                    DH00{props.order_id}
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
                    {props.order_date.split("T")[0]}
                </div>

                <div style={divStyle4}>
                    {/* <button className="button-sanpham-hover" onClick={buttonDelete} style={buttonStyle1}>Xoá</button> */}
                    {/* <button className="button-sanpham-hover" onClick={buttonEdit} style={buttonStyle2}>Sửa</button> */}
                    <button className="button-order-detail" onClick={order_detail_id}>Chi tiết đặt hàng</button>
                </div>
            </div>
        </div>
    )
}