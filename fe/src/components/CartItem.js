import React, {useState } from "react";
// import ReactDOM from 'react-dom';
import axios from 'axios'
// import QuantityButton from './QuantityButton'
import { Link } from "react-router-dom";

export default function CartItem(props) {
  const { addProductInCart, removeProductInCart, product } = props;
  const url = "http://localhost:3003";
  // console.log(product)

  const handleDeleteProduct = () => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    axios.post('http://localhost:3003/shoppingcart/delete', {
      "account_id": profile.account_id,
      "product_id": product.product_id
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    props.setIsDelete(!props.isDelete)
    alert("Xóa sản phẩm thành công!!");
  }

  const [qty, setQty] = useState(product.shopping_cart_amount || 1);
  var money = product.product_price * qty;

  return (
    <div className="my-3">
      <div className="cart__item">
        <div className="px-4" >
          <input
            id={"cbx" + product.product_id}
            className="cbx"
            type={"checkbox"}
            name={product.product_id}
            checked={props.isChecked}
            onChange={props.handleCheck}
          />
        </div>
        <Link to={'/products/' + product.product_id} className="flex " style={{ flex: "1", textAlign: "left" }}>
          <img
            className="cart__item--img"
            src={url + product.product_image}
            alt="img"
            width={100}
            height={100}
          />
          <span className="cart__item--name" style={{ flex: "1", textAlign: "left" }}>{product.product_name}</span>
        </Link>
        <span className="cart__item--price">{product.product_price.toLocaleString("fi-FI")} đ</span>
        <div className='qty--wrap'>
          <input 
            className='qty__btn minus' 
            type='button' 
            value='-' 
            disabled={qty === 1}
            onClick={() => { 
              props.setChange({product_id: product.product_id, shopping_cart_amount: qty - 1})
              props.setChangeCart(qty)
              setQty(qty - 1)
              removeProductInCart(product, 1)
            }} 
          />
          <input className='qty__input' type='number' min='1' max={product.product_amount - product.product_sold} value={qty}
            onChange={(e) => e.target.value = qty}
          />
          <input 
            className='qty__btn plus' 
            type='button' 
            value='+' 
            disabled={qty >= product.product_amount - product.product_sold}
            onClick={() => { 
              props.setChange({product_id: product.product_id, shopping_cart_amount: qty + 1})
              props.setChangeCart(qty)
              setQty(qty + 1)
              addProductInCart(product, 1)
            }} 
          />
        </div>
        <span className="cart__item--money">{money.toLocaleString("fi-FI")} đ</span>
        <div className="cart__item--delete link " onClick={handleDeleteProduct}>Xóa</div>
      </div>
    </div>
  );
}
