import React, { useEffect, useState } from "react"
// import axios from "axios";

export default function ListOrdersScreen() {
  const [orders, setOrders] = useState();

  const data = [
    {
      order_id: "1",
      products:
      {
        product_id: "1",
        product_name: "aaa",
        product_img: "",
        product_price: 50000,
        orders_detail_quantity: 5,
      },
      order_status: "0",
      order_date: "2022-04-07",
      order_address: "CT"
    },
    {
      order_id: "1",
      products:
      {
        product_id: "1",
        product_name: "aaa",
        product_img: "",
        product_price: 50000,
        orders_detail_quantity: 5,
      },
      order_status: "0",
      order_date: "2022-04-07",
      order_address: "CT"
    }
  ]

  useEffect(() => {
    // axios.get("http://localhost:3003/")
    // .then(res => {
    //   const data = res.data;
    //   setOrders(data)
    //   console.log(data);
    // })
    // .catch(error => console.log(error))
    setOrders(data)
  },[]);

  console.log(orders);
  return (
    <div className="grid">
      <div className="orders-container">
        <h2 className="center" style={{ textTransform: "uppercase" }}>Thông tin đơn hàng</h2>
      </div>

    </div>
  );
}