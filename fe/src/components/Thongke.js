import React from "react";
import { Link } from 'react-router-dom';
import './Thongke.css';

import { PieChart, Pie, RadialBarChart, RadialBar, AreaChart, Area, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function Thongke() {

    const data = [
        { name: 'Thức ăn cún', "Tháng trước": 400, "Tháng này": 500 },
        { name: 'Thức ăn mèo', "Tháng trước": 200, "Tháng này": 310 },
        { name: 'Đồ chơi thú cưng', "Tháng trước": 100, "Tháng này": 300 },
        { name: 'Phụ kiện thú cưng', "Tháng trước": 400, "Tháng này": 540 },
        { name: 'Chuồng thú cưng', "Tháng trước": 400, "Tháng này": 480 }
    ];
    const dataThang = [
        { name: 'Tháng 1', "sold": 130 },
        { name: 'Tháng 2', "sold": 200 },
        { name: 'Tháng 3', "sold": 170 },
        { name: 'Tháng 1', "sold": 130 },
        { name: 'Tháng 5', "sold": 150 },
        { name: 'Tháng 6', "sold": 100 },
    ];
    const data4Thang = [
        { name: 'Tháng 1', "sold": 20 },
        { name: 'Tháng 2', "sold": 40 },
        { name: 'Tháng 3', "sold": 100 },
        { name: 'Tháng 4', "sold": 110 },
    ];
    const dataDemo = [
        { name: 'Thức ăn cún', "uv": 150, "fill": "#8884d8" },
        { name: 'Thức ăn mèo', "uv": 200, "fill": "#83a6ed" },
        { name: 'Đồ chơi thú cưng', "uv": 50, "fill": "#8dd1e1" },
        { name: 'Phụ kiện thú cưng', "uv": 160, "fill": "#82ca9d" },
        { name: 'Chuồng thú cưng', "uv": 120, "fill": "#a4de6c" }
    ]

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
            </div>
            <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={box}>
                        <div>
                            <div style={box_title}>
                                Tổng doanh thu
                            </div>
                            <div style={box_value}>
                                15.500.000 VNĐ
                            </div>
                            <div style={box_percent_increase}>
                                +3.5%
                            </div>
                        </div>
                        <div style={chart}>
                            <AreaChart width={130} height={110} data={data4Thang}>
                                <defs>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1f89e5" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#1f89e5" stopOpacity={0} />
                                    </linearGradient>
                                </defs>


                                <Tooltip />
                                <Area type="monotone" dataKey="sold" stroke="#1f89e5" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </div>

                    </div>
                    <div style={box}>
                        <div>
                            <div style={box_title}>
                                Tổng sản phẩm đã bán
                            </div>
                            <div style={box_value}>
                                232 SP
                            </div>
                            <div style={box_percent_increase}>
                                +19.5%
                            </div>
                        </div>
                        <div style={chart}>
                            <PieChart width={130} height={110}>
                                <Pie data={data} dataKey="Tháng trước" nameKey="name" cx="50%" cy="50%" innerRadius={30} outerRadius={50} fill="#2c7be5" />
                            </PieChart>
                        </div>
                    </div>
                    <div style={box}>
                        <div>
                            <div style={box_title}>
                                Tổng đơn hàng
                            </div>
                            <div style={box_value}>
                                134 ĐH
                            </div>
                            <div style={box_percent_decrease}>
                                -1.5%
                            </div>
                        </div>
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
                            <Area type="monotone" dataKey="sold" stroke="#1f89e5" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </div>

                    <div style={box2}>
                        <BarChart width={700} height={350} data={data}>
                            {/* biểu đồ đường */}
                            {/* màu đường lưới */}
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* tên trên cột dưới chân */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            {/* mô tả Bar */}
                            <Legend />
                            <Bar dataKey="Tháng trước" fill="#8884d8" />
                            <Bar dataKey="Tháng này" fill="#ffba57" />
                        </BarChart>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={box2}>
                        <BarChart width={700} height={350} data={data}>
                            {/* biểu đồ đường */}
                            {/* màu đường lưới */}
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* tên trên cột dưới chân */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            {/* mô tả Bar */}
                            <Legend />
                            <Bar dataKey="Tháng trước" fill="#2d81ef" />
                            <Bar dataKey="Tháng này" fill="#00d27a" />
                        </BarChart>
                    </div>
                    <div style={box2}>
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
                            <Area type="monotone" dataKey="sold" stroke="#1f89e5" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </div>
                </div>
            </div>
        </div>
    );
}