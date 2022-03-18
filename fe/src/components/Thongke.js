import React from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

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
            Thống kê danh thu
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
        </div>
    );
}