import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
// const data = [
//   {
//     order_id: "1",
//     products: [
//       {
//         product_id: "1",
//         product_name: "aaa",
//         product_img: "http://localhost:3003/image/longvanchuyen.png",
//         product_price: 50000,
//         orders_detail_quantity: 5,
//       },
//       {
//         product_id: "1",
//         product_name: "aaa",
//         product_img: "http://localhost:3003/image/longvanchuyen.png",
//         product_price: 50000,
//         orders_detail_quantity: 5,
//       },
//     ],
//     order_status: 0,
//     order_date: "2022-04-07",
//     order_address: "CT"
//   },
//   {
//     order_id: "2",
//     products: [
//       {
//         product_id: "1",
//         product_name: "aaa",
//         product_img: "http://localhost:3003/image/longvanchuyen.png",
//         product_price: 50000,
//         orders_detail_quantity: 5,
//       },
//       {
//         product_id: "2",
//         product_name: "bbb",
//         product_img: "http://localhost:3003/image/longvanchuyen.png",
//         product_price: 150000,
//         orders_detail_quantity: 15,
//       },
//     ],
//     order_date: "2022-04-07",
//     order_status: 1,
//     order_address: "CT"
//   }
// ]

export default function ListOrdersScreen() {
  const [orders, setOrders] = useState([]);
  var ordersCheck = [];
  const url = "http://localhost:3003";

  useEffect(() => {
    axios.get("http://localhost:3003/account/orders/" + localStorage.getItem("token"))
      .then(res => {
        const data = res.data;
        setOrders(data)
        // console.log(data);
      })
      .catch(error => console.log(error))
  }, []);

  const result = Object.values(orders).filter(order => {
    var orderList = [];
    for (let index = 0; index < ordersCheck.length; index++) {
      const element = ordersCheck[index];
      if (order.order_id === element) {
        // console.log("aa")
        return;
      }
      else {
        // console.log("aaaa");
        orderList.push(order);
      }
    }
    if (ordersCheck.find(value => value === order.order_id)) {
      return;
    }
    else {
      ordersCheck.push(order.order_id)
    }
    // console.log("orderCheck: " + ordersCheck);
    return orderList;
  })

  // console.log(result)
  // console.log(orders)
  return (
    <div className="grid">
      <div className="orders-container">
        <h2 className="center" style={{ textTransform: "uppercase" }}>Thông tin đơn hàng</h2>
        {
          result.map((order, index) => (
            <Link to={'/order/' + order.order_id} key={index} className="flex column m-3 order__item" style={{ minWidth: "60%" }}>
              <div className="flex beetween p-2" style={{ backgroundColor: "var(--primary-color)", color: "#fff" }}>
                <div> Mã đơn hàng: #DH00{order.order_id} </div>
                <div> {order.order_date.split("T")[0]} </div>
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
                    src={url + order.product_image}
                    alt="img"
                    width={100}
                    height={100}
                  />
                  <div className="pl-3" style={{ flex: "1" }}>
                    <div className="flex beetween">
                      <div className="product__item--name" style={{ flex: "1", textAlign: "left" }}>{order.product_name}</div>
                      <div style={{ lineHeight: 1.5, color: "#555555" }}>
                        <span className="mx-1" style={{ fontSize: "10px" }}>x</span>
                        <span className="product__item--price">{order.orders_detail_quantity}</span>
                      </div>
                    </div>
                    <span className="product__item--price">{order.product_price}</span>
                  </div>
                </div>
              </div>
              <span className="block-separation"></span>
              <div className="product__item--detail">Xem chi tiết đơn hàng</div>
              <span className="block-separation"></span>
              <div className="flex right p-2 ">
                Thành tiền:&nbsp; 
                <span style={{color: "var(--primary-bold-color)", fontWeight: "600"}}> {(order.order_total).toLocaleString("fi-FI", { style: "currency", currency: "VND" })} </span>
              </div>
              {/* <div className="m-2" style={{ wordWrap: "break-word", width: "700px" }}>Địa chỉ giao hàng: {order.order_address} </div> */}
            </Link>
          ))
        }
      </div>
    </div>
  )
}
