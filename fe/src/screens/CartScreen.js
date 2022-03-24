import React, {useEffect, useState} from "react"
import CartItem from '../components/CartItem'
import axios from "axios";

export default function CartScreens() {
  const url = "http://localhost:3003";

  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    loadData()
  }, []);

  const loadData = () => {
    axios.get(`http://localhost:3003/products/cart/` + localStorage.getItem('token'))
      .then(res => {
        const data = res.data;
        if(data !== "") setProductsCart(data);      
      }) 
      .catch(error => console.log(error));

  }

  return (
    <div className="grid">
      <div className="my-3">
        <div className="cart__title">
          <div className="px-4" >
            <input className="cbx" type={"checkbox"} />
          </div>
          <span style={{ flex: "1", textAlign: "left" }}>Sản phẩm</span>
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Thành tiền</span>
          <span>Thao tác</span>
        </div>
      </div>
      {
        productsCart.map((productCart, index) =>
          <CartItem
            key={index}
            id={productCart.product_id}
            src={url + productCart.product_image}
            name={productCart.product_name}
            price={productCart.product_price}
            amount={productCart.product_amount}
            quantity={productCart.shopping_cart_amount}
          />
        )
      }
      {/* <div style={{position: "fixed", bottom: "0", width: "100"}}> */}

        <div className="cart__footer--wrap">
          <div className="grid cart__footer">
            <div className="px-4">
              <input
                id={"cbx"}
                className="cbx__item"
                type={"checkbox"}
              />
              &nbsp;Chọn tất cả
            </div>
            <div>Xóa</div>
            <div>Tổng hóa đơn:</div>
            <div 
              className="btn btn-primary"
              style={{fontSize: "16px"}}
              
            >Thanh Toán</div>
          </div>

        </div>
      </div>
    // </div>
  );
}