import React, { useEffect, useState } from "react"
import CartItem from '../components/CartItem'
import axios from "axios";

export default function CartScreens() {
  const url = "http://localhost:3003";

  const [productsCart, setProductsCart] = useState([]);
  // const [isCheck, setIsCheck] = useState([]);
  // const [isCheckAll, setIsCheckAll] = useState(false);

  const handleOnChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempProduct = productsCart.map((product) => {
        return { ...product, isChecked: checked };
      });
      setProductsCart(tempProduct);
    } else {
      let tempProduct = productsCart.map((product) =>
        name == product.product_id ? { ...product, isChecked: checked } : product
      );
      setProductsCart(tempProduct);
    }
  };

  useEffect(() => {
    loadData()
    // console.log(isCheckAll)
  }, []);

  const loadData = () => {
    axios.get(`http://localhost:3003/products/cart/` + localStorage.getItem('token'))
      .then(res => {
        const data = res.data;
        if (data.status !== 401) setProductsCart(data);
      })
      .catch(error => console.log(error));

  }


  // const handleTotal = () => {

  // }

  return (
    <div className="grid">
      <div className="my-3">
        <div className="cart__title">
          <div className="px-4" >
            <input
              className="cbx"
              type={"checkbox"}
              name="allSelect"
              checked={!productsCart.some((product) => product?.isChecked !== true)}
              onChange={handleOnChange}
            />
          </div>
          <span style={{ flex: "1", textAlign: "left" }}>Sản phẩm</span>
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Thành tiền</span>
          <span>Thao tác</span>
        </div>
      </div>
      {
        productsCart.map((product, index) =>
          <CartItem
            key={index}
            id={product.product_id}
            isCheck={product?.isChecked || false}
            handleOnChange={handleOnChange}
            src={url + product.product_image}
            name={product.product_name}
            price={product.product_price}
            amount={product.product_amount}
            quantity={product.shopping_cart_amount}
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
              name="allSelect"
              checked={!productsCart.some((product) => product?.isChecked !== true)}
              onChange={handleOnChange}
            />
            &nbsp;Chọn tất cả
          </div>
          <div>Xóa</div>
          <div>Tổng hóa đơn:</div>
          <div
            className="btn btn-primary"
            style={{ fontSize: "16px" }}
          >Thanh Toán</div>
        </div>
      </div>
    </div>
  );
}