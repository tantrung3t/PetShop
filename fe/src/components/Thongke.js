import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Thongke.css';
import axios from 'axios';

import { PieChart, Pie, RadialBarChart, RadialBar, AreaChart, Area, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const url = 'http://localhost:3003'

const box = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
    backgroundColor: '#ffffff',
    padding: '10px',
    width: '33%',
    height: '150px',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
}
const box2 = {
    margin: '10px',
    backgroundColor: '#ffffff',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
}
const box3 = {
    width: '200px',
    height: '200px',
    margin: '10px',
    backgroundColor: '#f7f7f7',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    // boxShadow: '0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
}

const box_title = {
    fontSize: '1.73rem',
    fontWeight: 'bold',
    padding: '10px',
    color: '#344050',
}
const box_value = {
    padding: '10px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#5e6e82',

}
const box_percent_increase = {
    marginLeft: '10px',
    textAlign: 'center',
    width: '60px',
    border: '1px solid #ccf6e4',
    borderRadius: '10px',
    backgroundColor: '#ccf6e4',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#16874f',
}
const box_percent_decrease = {
    marginLeft: '10px',
    textAlign: 'center',
    width: '60px',
    border: '1px solid #fde6d8',
    borderRadius: '10px',
    backgroundColor: '#fde6d8',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#9d5228',
}

const chart = {
    float: 'right',
    margin: '10px',
    // border: '2px solid',
}
const data = [
    { name: 'Thức ăn cún', "Tháng trước": 400, "Tháng này": 500 },
    { name: 'Thức ăn mèo', "Tháng trước": 200, "Tháng này": 310 },
    { name: 'Đồ chơi thú cưng', "Tháng trước": 100, "Tháng này": 300 },
    { name: 'Phụ kiện thú cưng', "Tháng trước": 400, "Tháng này": 540 },
    { name: 'Chuồng thú cưng', "Tháng trước": 400, "Tháng này": 480 }
];
const datademoThang = [
    { name: 'Tháng 1', "total": 100000 },
    { name: 'Tháng 2', "total": 2000000 },
    { name: 'Tháng 3', "total": 1700000 },
    { name: 'Tháng 4', "total": 1300000 },
];
// const data4Thang = [
//     { name: 'Tháng 1', "sold": 20 },
//     { name: 'Tháng 2', "sold": 40 },
//     { name: 'Tháng 3', "sold": 100 },
//     { name: 'Tháng 4', "sold": 110 },
// ];
const dataDemo = [
    { name: 'Thức ăn cún', "uv": 23, "fill": "#8884d8" },
    { name: 'Thức ăn mèo', "uv": 30, "fill": "#83a6ed" },
    { name: 'Đồ chơi thú cưng', "uv": 17, "fill": "#8dd1e1" },
    { name: 'Phụ kiện thú cưng', "uv": 20, "fill": "#82ca9d" },
    { name: 'Chuồng thú cưng', "uv": 10, "fill": "#a4de6c" }
];
export default function Thongke() {

    const [dataProduct, setDataProduct] = useState()
    const [dataOutStockProduct, setDataOutStockProduct] = useState()
    const [dataThang, setDataThang] = useState(datademoThang);
    const [total_sales, setTotal_Sales] = useState(0);
    const [percent_sales, setPercent_Sales] = useState(0);
    const [dataProductType, setDataProductType] = useState(data);
    const [dataOrdesAndQuantity, setDataOrdesAndQuantity] = useState({
        thisMonth: {
            quantityOrder: 0,
            quantityProductSales: 0
        },
        lastMonth: {
            quantityOrder: 1,
            quantityProductSales: 1
        }
    })

    useEffect(() => {
        setTimeout(function () {
            loadDataThang()
            loadDataProductType()
            load_orders_and_quantity_sales()
            
        }, 1800);
        load_data_product()
        load_data_out_stock_product() 
    }, [])

    const loadDataThang = async () => {
        await axios.get(`http://localhost:3003/admin/statistic/4month`)
            .then(res => {
                const data = res.data;
                setDataThang(data)
                setTotal_Sales(data[3].total)
                setPercent_Sales(data[3].total / data[2].total)
            })
            .catch(error => console.log(error))
    }

    const loadDataProductType = async () => {
        let dataTemp1 = []
        let dataThisMonth = []
        let dataLastMonth = []

        await axios.get(`http://localhost:3003/admin/statistic/sales_this_month`)
            .then(res => {
                dataThisMonth = res.data;
            })
            .catch(error => console.log(error))

        await axios.get(`http://localhost:3003/admin/statistic/sales_last_month`)
            .then(res => {
                dataLastMonth = res.data;
            })
            .catch(error => console.log(error))
        for (let i = 1; i < 6; i++) {
            let dataTemp2 = { 'name': '', "Tháng trước": 0, "Tháng này": 0 }
            switch (i) {
                case 1:
                    dataTemp2.name = 'Thức ăn cún'
                    break;
                case 2:
                    dataTemp2.name = 'Thức ăn mèo'
                    break;
                case 3:
                    dataTemp2.name = 'Đồ chơi thú cưng'
                    break;
                case 4:
                    dataTemp2.name = 'Phụ kiện thú cưng'
                    break;
                case 5:
                    dataTemp2.name = 'Chuồng thú cưng'
                    break;
                default:
                    dataTemp2.name = ''
            }

            dataThisMonth.map((data) => {
                if (data.product_type_id === i) dataTemp2["Tháng này"] = data.total
            })
            dataLastMonth.map((data) => {
                if (data.product_type_id === i) dataTemp2["Tháng trước"] = data.total
            })
            dataTemp1.push(dataTemp2)
        }
        setDataProductType(dataTemp1);
    }

    const load_orders_and_quantity_sales = async () => {
        let thisMonth = { quantityOrder: 0, quantityProductSales: 0 }
        let lastMonth = { quantityOrder: 0, quantityProductSales: 0 }
        await axios.get(`http://localhost:3003/admin/statistic/orders_and_quantity_sales`)
            .then(res => {
                res.data.thisMonth.map((data) => {
                    thisMonth.quantityOrder += 1
                    thisMonth.quantityProductSales += data.orders_detail_quantity
                })
                res.data.lastMonth.map((data) => {
                    lastMonth.quantityOrder += 1
                    lastMonth.quantityProductSales += data.orders_detail_quantity
                })

                setDataOrdesAndQuantity({ thisMonth, lastMonth })
            })
            .catch(error => console.log(error))
    }
    const load_data_product = async () => {
        await axios.get(`http://localhost:3003/admin/statistic/inventory_product`)
            .then(res => {
                const data = res.data;
                setDataProduct(data);
                // console.log(data)
            })
            .catch(error => console.log(error));
    }
    const load_data_out_stock_product = async () => {
        await axios.get(`http://localhost:3003/admin/statistic/outstockproduct`)
            .then(res => {
                const data = res.data;
                setDataOutStockProduct(data);
                // console.log(data)
            })
            .catch(error => console.log(error));
    }



    const render_Tongdoanhthu = () => {
        if (percent_sales >= 1) {
            return (
                <div>
                    <div style={box_title}>
                        Tổng doanh thu
                    </div>
                    <div style={box_value}>
                        {total_sales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VNĐ
                    </div>
                    <div style={box_percent_increase}>
                        +{((percent_sales - 1) * 100).toFixed(1)}%
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div style={box_title}>
                        Tổng doanh thu
                    </div>
                    <div style={box_value}>
                        {total_sales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VNĐ
                    </div>
                    <div style={box_percent_decrease}>
                        -{((1 - percent_sales) * 100).toFixed(1)}%
                    </div>
                </div>
            )
        }
    }

    const render_Tongsanpham = () => {
        console.log(dataOrdesAndQuantity)
        let percent = dataOrdesAndQuantity.thisMonth.quantityProductSales / dataOrdesAndQuantity.lastMonth.quantityProductSales
        if (percent >= 1) {
            return (
                <div>
                    <div style={box_title}>
                        Tổng sản phẩm đã bán
                    </div>
                    <div style={box_value}>
                        {dataOrdesAndQuantity.thisMonth.quantityProductSales}
                    </div>
                    <div style={box_percent_increase}>
                        +{((percent - 1) * 100).toFixed(1)}%
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div style={box_title}>
                        Tổng sản phẩm đã bán
                    </div>
                    <div style={box_value}>
                        {dataOrdesAndQuantity.thisMonth.quantityProductSales}
                    </div>
                    <div style={box_percent_decrease}>
                        -{((1 - percent) * 100).toFixed(1)}%
                    </div>
                </div>
            )
        }
    }
    const render_Tongdonhang = () => {
        let percent = dataOrdesAndQuantity.thisMonth.quantityOrder / dataOrdesAndQuantity.lastMonth.quantityOrder
        if (percent >= 1) {
            return (
                <div>
                    <div style={box_title}>
                        Tổng đơn hàng
                    </div>
                    <div style={box_value}>
                        {dataOrdesAndQuantity.thisMonth.quantityOrder}
                    </div>
                    <div style={box_percent_increase}>
                        +{((percent - 1) * 100).toFixed(1)}%
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div style={box_title}>
                        Tổng đơn hàng
                    </div>
                    <div style={box_value}>
                        {dataOrdesAndQuantity.thisMonth.quantityOrder}
                    </div>
                    <div style={box_percent_decrease}>
                        -{((1 - percent) * 100).toFixed(1)}%
                    </div>
                </div>
            )
        }
    }

    const ListItemProduct = () => {
        if (dataProduct === undefined) return <div></div>
        let element = dataProduct.map((product, index) => {
            return <ItemAdminProduct
                key={index}
                id={product.product_id}
                src={url + product.product_image}
                name={product.product_name}
                price={product.product_price}
            />
        })
        return element;
    }
    const ListItemOutStockProduct = () => {
        if (dataOutStockProduct === undefined) return <div></div>
        let element = dataOutStockProduct.map((product, index) => {
            return <ItemAdminProduct
                key={index}
                id={product.product_id}
                src={url + product.product_image}
                name={product.product_name}
                price={product.product_price}
            />
        })
        return element;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={box3}>

                <div className="admin_title2">
                    <Link to='/admin/thongke' >
                        Thống kê
                    </Link>
                </div>
                <div className="admin_title1" >
                    <Link to='/admin/sanpham'>
                        Quản lý sản phẩm
                    </Link>
                </div>
                <div className="admin_title1" >
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
            <div style={{ paddingLeft: '10px', paddingRight: '10px', width: '1250px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={box}>
                        {render_Tongdoanhthu()}
                        <div style={chart}>
                            <AreaChart width={130} height={110} data={dataThang}>
                                <defs>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1f89e5" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#1f89e5" stopOpacity={0} />
                                    </linearGradient>
                                </defs>


                                {/* <Tooltip /> */}
                                <Area type="monotone" dataKey="total" stroke="#1f89e5" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </div>

                    </div>
                    <div style={box}>
                        {render_Tongsanpham()}
                        <div style={chart}>
                            <PieChart width={130} height={110}>
                                <Pie data={data} dataKey="Tháng trước" nameKey="name" cx="50%" cy="50%" innerRadius={30} outerRadius={50} fill="#2c7be5" />
                            </PieChart>
                        </div>
                    </div>
                    <div style={box}>
                        {render_Tongdonhang()}
                        <div style={chart}>

                            <RadialBarChart
                                width={160}
                                height={180}
                                innerRadius="50%"
                                outerRadius="100%"
                                data={dataDemo}
                                startAngle={180}
                                endAngle={0}
                            >
                                <RadialBar minAngle={15} background clockWise={true} dataKey='uv' />

                            </RadialBarChart>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={box2}>
                        <div style={box_title}>Doanh thu 4 tháng vừa qua</div>
                        <AreaChart width={450} height={300} data={dataThang}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#1f89e5" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#1f89e5" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            {/* <Area type="monotone" dataKey="sold" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
                            <Area type="monotone" dataKey="total" stroke="#1f89e5" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>

                    </div>

                    <div style={box2}>
                        <div style={box_title}>Doanh thu theo loại sản phẩm</div>
                        <BarChart width={700} height={350} data={dataProductType} >
                            {/* biểu đồ đường */}
                            {/* màu đường lưới */}
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* tên trên cột dưới chân */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            {/* mô tả Bar */}
                            <Legend />
                            <Bar dataKey="Tháng trước" fill="#2d81ef" animationDuration={1000} />
                            <Bar dataKey="Tháng này" fill="#00d27a" animationDuration={1000} />
                        </BarChart>

                    </div>
                </div>
                <div className='Thongke_box'>
                    <div style={box_title}>Sản phẩm tồn kho</div>
                    <div className='Thongke_ListProduct'>
                        {ListItemProduct()}
                    </div>
                </div>
                <div className='Thongke_box'>
                    <div style={box_title}>Sản phẩm sắp hết hàng</div>
                    <div className='Thongke_ListProduct'>
                        {ListItemOutStockProduct()}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ItemAdminProduct(props) {
    return (

        // <Link className="Thongke_link">
        //     <div className="home__product">
        //         <img src={props.src} alt="img" width="100%" height="200px" className="home__product-img"></img>
        //         <div className="p-2">
        //             <div className="home__product-name">{props.name}</div>
        //             {/* <div className="home__product-price">{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}  đ</div> */}
        //         </div>
        //     </div>
        // </Link>
        <div className="Thongke_link">
            <img src={props.src} alt="img" width="100%" height="200px" className="home__product-img"></img>
            <div className="home__product-name">{props.name}</div>
            {/* <div className="home__product-price">{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}  đ</div> */}
        </div>
    )
}