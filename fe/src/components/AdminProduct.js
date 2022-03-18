import React from 'react';

const divStyle1 = {
    'padding-left': '10px',
    'display': 'flex',
    'borderTop': '1px solid #91c2cc',
    'width': '90%',
    'height': '60px',
    'justify-content': 'space-between',
    'align-items': 'center'
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
const buttonStyle1 = {
    'padding' : '5px',
    'margin': '3px 3px 3px 3px',
    'color': '#f44235',
};

const buttonStyle2 = {
    'padding' : '5px',
    'margin': '3px 3px 3px 3px',
    'color': '#005d80',
};

export default function AdminProduct() {

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

    const renderList = () => {
        let element = data.map((product, index) => {

            return <Item
                key={index}
                product_id={product.product_id}
                product_name={product.product_name}
                product_price={product.product_price}
                product_sold={product.product_sold}
                product_brand_name={product.product_brand_name}
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
                <div style={divStyle3}>
                    Tuỳ chỉnh
                </div>
            </div>
            {renderList()}
        </div>
    )
}

function Item(props) {
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
            <div style={divStyle2}>
                <button style={buttonStyle1}>Xoá</button>
                <button style={buttonStyle2}>Chỉnh</button>
            </div>
        </div>
    )
}