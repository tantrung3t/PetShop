import { Link } from 'react-router-dom';
import './AdminBrand.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';

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
    backgroundColor: '#f7f7f7',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    display: 'flex',
}

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
    'fontSize': '700',
    'fontWeight': 'bold',
    'color': '#005d80'
};
const divStyle3 = {
    'width': '400px',
    'fontSize': '700',
    'fontWeight': 'bold',
    'color': '#005d80'
};
const divStyleScroll = {
    'width': '101%',
    'height': '400px',
    'overflow': 'auto',
}
export default function AdminBrand() {

    const [dataLoad, setDataLoad] = useState([])
    const [reload, setReload] = useState("")
    const handleSubmit = async(event) => {
        event.preventDefault();
        const dataSubmit = new FormData(event.currentTarget);
        console.log(dataSubmit.get("brand_name"))

        var data = {
            brand_name: dataSubmit.get("brand_name")
          }
        
        console.log(data)
        await axios.post('http://localhost:3003/admin/brand/add', data)
            .then(function (response) {
                console.log(response.data);
                alert("Thêm thương hiệu thành công!");
                setReload(dataSubmit.get("brand_name"))
            })
            .catch(function (error) {
                console.log(error);
                alert("Thêm thương hiệu thất bại!");
            });
    }

    const loadData = async () => {
        await axios.get(`http://localhost:3003/products/brand`)
            .then(res => {
                const data = res.data;
                setDataLoad(data)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        loadData()
    }, [reload])



    const renderList = () => {
        let element = dataLoad.map((brand, index) => {
            return <Item
                key={index}
                brand_id={brand.product_brand_id}
                brand_name={brand.product_brand_name}
            />
        })
        return element;
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
                        <Link to='/admin/nhanhang'>
                            Quản lý nhãn hàng
                        </Link>
                    </div>
                    <div className="admin_title1" >
                        <Link to='/admin/dathang'>
                            Quản lý đặt hàng
                        </Link>
                    </div>
                    <div className="admin_title1" >
                    <Link to='/admin/nhanhang'>
                        Quản lý nhận hàng
                    </Link>
                </div>
                </div>
                <div style={box4}>
                    <div className="AdminBrand_form_add">
                        <div className="AdminBrand_title">
                            Thêm thương hiệu
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="brand_name" name="brand_name" className="input-add-product" placeholder="Tên thương hiệu">
                            </input>

                            <button className="AdminBrand_button">
                                Thêm
                            </button>
                        </form>
                    </div>
                    <div className="AdminBrand_list">
                        <div style={divStyle1}>
                            <div style={divStyle2}>
                                Mã thương hiệu
                            </div>
                            <div style={divStyle3}>
                                Tên
                            </div>
                        </div>
                        <div style={divStyleScroll}>
                            {renderList()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Item(props) {
    return (
        <div>
            <div style={divStyle1}>
                <div className="AdminBrand_sub_title_1">
                    TH00{props.brand_id}
                </div>
                <div className="AdminBrand_sub_title_2">
                    {props.brand_name}
                </div>
            </div>
        </div>
    )
}