import React, { useState } from "react";
import axios from 'axios'
// import QuantityButton from './QuantityButton'
import { Link } from "react-router-dom";

export default function CartItem(props) {

  const handleRemoveCart = () => {
    console.log("xóa" + props.id)
    axios.post('http://localhost:3003/api/cart/delete', { id: props.id })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const [isCheck, setIsCheck] = useState(false);
  const handleOnChange = () => {
    setIsCheck(!isCheck);
  }

  const [qty, setQty] = useState( props.quantity || 1 );
  localStorage.setItem('qty', qty);

  const handleIncrease = () => {
    setQty(qty + 1);
  }

  const handleDecrease = () => {
    setQty(qty - 1);
  }


  return (
    <div className="my-3">
      <div className="cart__item">
        <div className="px-4" >
          <input
            id={"cbx" + props.id}
            className="cbx__item"
            type={"checkbox"}
            checked={isCheck}
            onChange={handleOnChange}
          />
        </div>
        <Link to={'/product/' + props.id} className="flex " style={{ flex: "1", textAlign: "left" }}>
          <img
            className="cart__item--img"
            src={props.src}
            alt="img"
            width={100}
            height={100}
          />
          <span className="cart__item--name" style={{ flex: "1", textAlign: "left" }}>{props.name}</span>
        </Link>
        <span className="cart__item--price">{props.price}</span>
        <div className='qty--wrap'>
          <input className='qty__btn minus' type='button' value='-' onClick={handleDecrease} disabled={qty === 1} />
          <input className='qty__input' type='number' min='1' max={props.amount} value={qty}
            onChange={(e) => e.target.value = qty}
          />
          <input className='qty__btn plus' type='button' value='+' onClick={handleIncrease} disabled={qty >= props.amount} />
        </div>
        {/* <span className="cart__item--qty">{props.quantity}</span> */}
        <span className="cart__item--total">{props.price * qty}</span>
        <div className="cart__item--delete link " onClick={handleRemoveCart}>Xóa</div>
      </div>
    </div>
  );
}
