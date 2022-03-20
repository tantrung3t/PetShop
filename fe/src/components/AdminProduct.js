import React, { useState } from 'react';

import './AdminProduct.css';

const modalStyle = {
    'paddingLeft': '10px',
    'display': 'flex',
    'width': '90%',
    'justifyContent': 'space-between',
    'alignItems': 'center'
}

const divStyle1 = {
    'paddingLeft': '10px',
    'display': 'flex',
    'borderBottom': '1px solid #91c2cc',
    'width': '90%',
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
const buttonStyle1 = {
    'padding': '10px 20px',
    'margin': '3px 3px 3px 3px',
    'outline': 'none',
    'border': 'none',
    'backgroundColor': '#e33939',
    'color': '#f7f7f7',
    'borderRadius': '6px',
    'cursor': 'pointer',
    'fontSize': '12px',
    'fontWeight': 'bold',
};

const buttonStyle2 = {
    'padding': '10px 20px',
    'margin': '3px 3px 3px 3px',
    'outline': 'none',
    'border': 'none',
    'backgroundColor': '#1e931c',
    'color': '#f7f7f7',
    'borderRadius': '6px',
    'cursor': 'pointer',
    'fontSize': '12px',
    'fontWeight': 'bold',
};

export default function AdminProduct() {

    const [hide, setHide] = useState("modal");
    const [id, setID] = useState("");

    const data = [
        {
            product_id: 7,
            product_name: "Pate vị gà cho chó lớn",
            product_price: 50000,
            product_image: "/image/patevigachocholon.png",
            product_sold: 47,
            product_brand_name: "Smartheart",
            product_type_name: "Thức ăn cho cún"
        },
        {
            product_id: 8,
            product_name: "Thức ăn dinh dưỡng",
            product_price: 50000,
            product_image: "/image/thucandinhduong.png",
            product_sold: 34,
            product_brand_name: "Smartheart",
            product_type_name: "Thức ăn cho cún"
        },
        {
            product_id: 9,
            product_name: "Thức ăn hạt hữu cơ",
            product_price: 140000,
            product_image: "/image/thucanhathuuco.png",
            product_sold: 32,
            product_brand_name: "ANF",
            product_type_name: "Thức ăn cho mèo"
        },
        {
            product_id: 10,
            product_name: "Thức ăn hạt hữu cơ cho mèo con",
            product_price: 120000,
            product_image: "/image/thucanhathuucochomeocon.png",
            product_sold: 21,
            product_brand_name: "ANF",
            product_type_name: "Thức ăn cho mèo"
        }
    ]

    const delete_product = (index, id) => {
        alert("Đã xoá sản phẩm có id = " + id + " và index = " + index);
    }

    const edit_product = (index, id) => {
        setID(id);
        alert("Chỉnh sửa sản phẩm có id = " + id + " và index = " + index);
        setHide("modal");
    }

    const close_modal = () => {
        setHide("modal hide");
    }
    const renderList = () => {
        let element = data.map((product, index) => {

            return <Item
                key={index}
                index={index}
                product_id={product.product_id}
                product_name={product.product_name}
                product_price={product.product_price}
                product_sold={product.product_sold}
                product_brand_name={product.product_brand_name}
                buttonDelete={(index, product_id) => { delete_product(index, product_id) }}
                buttonEdit={(index, product_id) => { edit_product(index, product_id) }}
            />
        })
        return element;
    }
    return (
        <div>
            <div style={divStyle1}>
                <div style={divStyle3}>
                    ID
                </div>
                <div style={divStyle3}>
                    Tên sản phẩm
                </div>
                <div style={divStyle3}>
                    Giá bán
                </div>
                <div style={divStyle3}>
                    Số lượng bán
                </div>
                <div style={divStyle3}>
                    Thương hiệu
                </div>
                <div style={divStyle4}>
                    Tuỳ chỉnh
                </div>
            </div>
            {renderList()}
            <div className={hide}>
                <div className="modal__inner">
                    <div className="modal__header">
                        <p>Chỉnh sửa cho sản phẩm có id = {id}</p>
                    </div>
                    <div className="modal__body">
                        <div style={modalStyle}>
                            <div>
                                <h2>Tên sản phẩm</h2>
                                <input type="text" />
                            </div>
                            <div>
                                <h2>Thương hiệu</h2>
                                <input type="text" />
                            </div>
                            <div>
                                <h2>Giá bán</h2>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="modal__footer">
                        <button className="modal-save" onClick={close_modal}>Lưu</button>
                        <button className="modal-cancel" onClick={close_modal}>Huỷ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Item(props) {
    const buttonDelete = () => {
        props.buttonDelete(props.index, props.product_id)
    }
    const buttonEdit = () => {
        props.buttonEdit(props.index, props.product_id)
    }
    return (
        <div style={divStyle1}>
            <div style={divStyle2}>
                {props.product_id}
            </div>
            <div style={divStyle2}>
                {props.product_name}
            </div>
            <div style={divStyle2}>
                {props.product_price}
            </div>
            <div style={divStyle2}>
                {props.product_sold}
            </div>
            <div style={divStyle2}>
                {props.product_brand_name}
            </div>
            <div style={divStyle4}>
                <button className="button-sanpham-hover" onClick={buttonDelete} style={buttonStyle1}>Xoá</button>
                <button className="button-sanpham-hover" onClick={buttonEdit} style={buttonStyle2}>Sửa</button>
            </div>
        </div>
    )
}