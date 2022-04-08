import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import axios from "axios";
const data = [
  {
    order_id: "1",
    products: [
      {
        product_id: "1",
        product_name: "aaa",
        product_img: "http://localhost:3003/image/longvanchuyen.png",
        product_price: 50000,
        orders_detail_quantity: 5,
      },
      {
        product_id: "1",
        product_name: "aaa",
        product_img: "http://localhost:3003/image/longvanchuyen.png",
        product_price: 50000,
        orders_detail_quantity: 5,
      },
    ],
    order_status: 0,
    order_date: "2022-04-07",
    order_address: "CT"
  },
  {
    order_id: "2",
    products: [
      {
        product_id: "1",
        product_name: "aaa",
        product_img: "http://localhost:3003/image/longvanchuyen.png",
        product_price: 50000,
        orders_detail_quantity: 5,
      },
      {
        product_id: "2",
        product_name: "bbb",
        product_img: "http://localhost:3003/image/longvanchuyen.png",
        product_price: 150000,
        orders_detail_quantity: 15,
      },
    ],
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


  return (
    <div className="grid">
      <div className="orders-container">
        <h2 className="center" style={{ textTransform: "uppercase" }}>Thông tin đơn hàng</h2>
        {
          orders && orders.length > 0 ? (
            orders.map((order, index) => (
              <Link to={'/order/' + order.order_id} key={index} className="flex column m-3 order__item" style={{ minWidth: "60%" }}>
                <div className="flex beetween p-2">
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
                <div className="product__item">
                  <div className="flex " style={{ flex: "1", textAlign: "left", border: "1px solid #f8f8f8" }}>
                    <img
                      className="product__item--img"
                      src={order.products[0].product_img}
                      alt="img"
                      width={100}
                      height={100}
                    />
                    <div className="pl-3" style={{ flex: "1" }}>
                      <div className="product__item--name" style={{ flex: "1", textAlign: "left" }}>{order.products[0].product_name}</div>
                      <span className="product__item--price">{order.products[0].product_price}</span>
                      <span>x</span>
                      <span className="product__item--price">{order.products[0].orders_detail_quantity}</span>
                    </div>
                  </div>
                </div>
                <span className="block-separation"></span>
                <div className="flex right p-2 ">Thành tiền: {100000} </div>
                <div className="m-2" style={{ wordWrap: "break-word", width: "700px" }}>Địa chỉ giao hàng: {order.order_address} </div>
              </Link>
            ))
          ) : (
            <div className="my-2">Hiện không có đơn hàng nào!!</div>
          )
        }
      </div>
    </div>
  )
}
