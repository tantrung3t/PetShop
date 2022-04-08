import React, { useEffect, useState } from "react"
import { OrdersItem } from "../components/CartItem";
// import axios from "axios";
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
    order_status: 0,
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
    order_date: "2022-04-07",
    order_status: 1,
    order_address: "CT"
  }
]

export default function ListOrdersScreen() {
  const [orders, setOrders] = useState(data);

  useEffect(() => {
    // axios.get("http://localhost:3003/")
    // .then(res => {
    //   const data = res.data;
    //   setOrders(data)
    //   console.log(data);
    // })
    // .catch(error => console.log(error))
    // data1 = data;
    setOrders(data)
  }, []);
  // var date = Date.parse("2000-09-09").toString();

  console.log(orders);

  return (
    <div className="grid">
      {
        orders ? (
          <div className="orders-container">
            <h2 className="center" style={{ textTransform: "uppercase" }}>Thông tin đơn hàng</h2>
            {
              orders.map((order, index) => (
                <div key={index} className="flex column">
                  <div className="flex beetween">
                    <div> Mã đơn hàng: #{order.order_id} </div>
                    <div> {order.order_date} </div>
                    {
                      order.order_status === 1 ? (
                        <div>Đang giao hàng</div>
                      ) : order.order_status === 2 ? (
                        <div>Đã giao hàng</div>
                      ) : (
                        <div>Đang chuẩn bị hàng</div>
                      )
                    }
                  </div>
                  <div>
                    <OrdersItem
                    />
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <div></div>
        )
      }
    </div>
  )
}