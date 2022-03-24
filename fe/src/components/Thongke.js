import React from "react";

import { LineChart, BarChart, Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function Thongke() {

    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 200, pv: 2400, amt: 2400 },
        { name: 'Page C', uv: 100, pv: 1400, amt: 2400 },
        { name: 'Page D', uv: 700, pv: 900, amt: 2400 },
        { name: 'Page E', uv: 800, pv: 1300, amt: 2400 }
    ];

    return (
        <div>
            Thống kê danh thu đường
            <LineChart width={600} height={300} data={data}>
                {/* biểu đồ đường */}
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#000000" />
                {/* màu đường lưới */}
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                {/* tên trên cột dưới chân */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* mô tả line */}
                <Legend />
            </LineChart>
            Thống kê theo cột
            <BarChart width={600} height={300} data={data}>
                {/* biểu đồ đường */}
                {/* màu đường lưới */}
                <CartesianGrid strokeDasharray="3 3" />
                {/* tên trên cột dưới chân */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* mô tả Bar */}
                <Legend />
                <Bar dataKey="uv" fill="#8884d8" />
                <Bar dataKey="pv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}