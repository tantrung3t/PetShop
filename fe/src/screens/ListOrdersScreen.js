import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

export default function ListOrdersScreen() {
  const [orders, setOrders] = useState([]);
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
  
  var ordersCheck = [];
  const result = Object.values(orders).filter(order => {
    var orderList = [];
    for (let index = 0; index < ordersCheck.length; index++) {
      const element = ordersCheck[index];
      if (order.order_id === element) {
        return;
      }
      else {
        orderList.push(order);
      }
    }
    if (ordersCheck.find(value => value === order.order_id)) {
      return;
    }
    else {
      ordersCheck.push(order.order_id)
    }
    return orderList;
  })
  return (
    <div className="grid">
      <div className="orders-container">
        <h2 className="center" style={{ textTransform: "uppercase" }}>Thông tin đơn hàng</h2>
        {
          result.map((order, index) => (
            <Link to={'/order/' + order.order_id} key={index} className="flex column m-3 order__item" style={{ minWidth: "60%" }}>
              <div className="flex beetween p-2" style={{ backgroundColor: "var(--primary-color)", color: "#fff" }}>
                <div> Mã đơn hàng: #DH00{order.order_id} </div>
                <div> {order.order_date.split("T")[0].slice(0,8) + (order.order_date.split("T")[0].slice(8,10) - 1 + 2)} </div>
                {
                  order.order_status === 2 ? (
                    <div>Đang giao hàng</div>
                  ) : order.order_status === 1 ? (
                    <div>Đã giao hàng</div>
                  ) : order.order_status === 3 ? (
                    <div>Người bán từ chối tiền thanh toán sẽ được hoàn trả</div>
                  ) : order.order_status === 4 ? (
                    <div>Người mua không nhận hàng</div>
                  ) : (
                    <div>Đang chờ</div>
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
                <span style={{color: "#ff383d", fontWeight: "600"}}> {(order.order_total).toLocaleString("fi-FI", { style: "currency", currency: "VND" })} </span>
              </div>
            </Link>
          )).reverse()
        }
      </div>
    </div>
  )
}
