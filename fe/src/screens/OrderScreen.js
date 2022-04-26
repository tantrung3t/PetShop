import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

// const data = [
//   {
//     order_id: "1",
//     product_id: "1",
//     product_name: "aaa",
//     product_img: "http://localhost:3003/image/longvanchuyen.png",
//     product_price: 50000,
//     orders_detail_quantity: 5,
//     order_status: 0,
//     order_date: "2022-04-07",
//     order_address: "CT"
//   },
//   {
//     order_id: "1",
//     product_id: "2",
//     product_name: "bbb",
//     product_img: "http://localhost:3003/image/dochoimeocauca.png",
//     product_price: 150000,
//     orders_detail_quantity: 3,
//     order_status: 0,
//     order_date: "2022-04-07",
//     order_address: "CT"
//   },
// ]

export default function OrderScreen(props) {
  const orderID = props.match.params.id;
  const [order, setOrder] = useState([]);
  const url = "http://localhost:3003";

  useEffect(() => {
    axios.get("http://localhost:3003/account/order/" + orderID)
      .then(res => {
        const data = res.data;
        setOrder(...order, data)
        console.log(data);
      })
      .catch(error => console.log(error))
  }, [orderID])

  // console.log(order);

  return (
    order.length ? (
      <div className="grid">
        <div className="orders-container">
          <Link to={"/orders"} id="order__arrow-left">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <h2 className="center my-3" style={{ textTransform: "uppercase" }}>Đơn hàng #DH00{orderID} </h2>
          <div className="flex column m-3 order__item" style={{ minWidth: "60%" }}>
            <div className="flex beetween p-2" style={{ backgroundColor: "var(--primary-color)", color: "#fff" }}>
              <div> Mã đơn hàng: #DH00{order[0].order_id} </div>
              <div> {order[0].order_date/*.split("T")[0]*/} </div>
              {
                order[0].order_status === 1 ? (
                  <div>Đang giao hàng</div>
                ) : order[0].order_status === 2 ? (
                  <div>Đã giao hàng</div>
                ) : (
                  <div>Đang chuẩn bị hàng</div>
                )
              }
            </div>
            {
              order.map((product, index) =>
                <Link to={"/products/" + product.product_id} key={index} className="product__item">
                  <div className="flex " style={{ flex: "1", textAlign: "left", border: "1px solid #f8f8f8" }}>
                    <img
                      className="product__item--img"
                      src={url + product.product_image}
                      alt="img"
                      width={100}
                      height={100}
                    />
                    <div className="pl-3" style={{ flex: "1" }}>
                      <div className="flex beetween">
                        <div className="product__item--name" style={{ flex: "1", textAlign: "left" }}>{product.product_name}</div>
                        <div style={{ lineHeight: 1.5, color: "#555555" }}>
                          <span className="mx-1" style={{ fontSize: "10px" }}>x</span>
                          <span className="product__item--price">{product.orders_detail_quantity}</span>
                        </div>
                      </div>
                      <span className="product__item--price">{product.product_price}</span>
                    </div>
                  </div>
                </Link>
              )
            }
            <span className="block-separation"></span>
            <div className="flex beetween p-2">
              {
                !order[0].order_payment_momo ? (
                  <div style={{color: "#ff383d", fontWeight: "600"}}>Thanh toán khi nhận hàng</div>
                ) : (
                  <div style={{color: "#ff383d", fontWeight: "600"}}>Đã thanh toán qua MoMo</div>
                )
              }
              <div className="">
                Thành tiền:&nbsp; 
                <span style={{color: "#ff383d", fontWeight: "600"}}> {(order[0].order_total).toLocaleString("fi-FI", { style: "currency", currency: "VND" })} </span>
              </div>
            </div>
            <div className="m-2" style={{ wordWrap: "break-word", width: "700px" }}>
              Địa chỉ giao hàng:&nbsp;
              {order[0].order_address} 
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    )
  );
}