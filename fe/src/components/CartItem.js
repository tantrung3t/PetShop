import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
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
    alert("Xóa thành công!")
  }



  const [qty, setQty] = useState(props.quantity || 1);
  localStorage.setItem('qty', qty);

  var money = props.price * qty;
  var total = parseInt(localStorage.getItem("total"));


  const handleIncrease = () => {
    setQty(qty + 1);
    //qty + 1 vì callbacks function gọi trước setQty nên giá trị không đúng
    // props.handleIncreaseQuantity(qty + 1);



  }
  const handleDecrease = () => {
    setQty(qty - 1);

    //qty - 1 vì callbacks function gọi trước setQty nên giá trị không đúng
    // props.handleIncreaseQuantity(qty - 1);
    // money = props.price * qty
  }

  // const [checkbox, setCheckbox] = useState();
  useEffect(() => {
    hadleTotal()
  }, [props])

  const hadleTotal = () => {
    total = parseInt(localStorage.getItem("total"));
    var isCheck = document.getElementById("cbx" + props.id).checked;
    // var temp = total;
    money = props.price * qty;
    // console.log(isCheck)
    isCheck ? localStorage.setItem("total", total += money) : console.log(localStorage.getItem("total"));
    console.log("total: " + localStorage.getItem("total"));
    // setCheckbox(isCheck);
  }

  const callBackTotal = () => {
    props.callBackTotal(total + money)
  }



  //đặt tên function giống tên thằng cha cho dễ sử dụng
  //nhận props bên thằng cha đưa qua theo đúng cái nó truyền qua
  // const checkedAddTotal = () => {
  //   props.checkedAddTotal(props.price * qty);
  // }


  return (
    <div className="my-3">
      <div className="cart__item">
        <div className="px-4" >
          <input
            id={"cbx" + props.id}
            className="cbx__item"
            type={"checkbox"}
            name={props.id}
            checked={props.isCheck}
            onChange={props.onChange}

            onClick={callBackTotal}
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
        <span className="cart__item--money">{money}</span>
        <div className="cart__item--delete link " onClick={handleRemoveCart}>Xóa</div>
      </div>
    </div>
  );
}

export function OrdersItem(props) {
  const [ordersQty] = useState(props.quantity);
  localStorage.setItem('qty', ordersQty);

  // var money = props.price * qty;
  // var total = parseInt(localStorage.getItem("total"));

  // useEffect(() => {
  //   hadleTotal()
  // }, [props])

  // // const hadleTotal = () => {
  // //   total = parseInt(localStorage.getItem("total"));
  // //   var isCheck = document.getElementById("cbx" + props.id).checked;
  // //   money = props.price * qty;
  // // }

  // const callBackTotal = () => {
  //   props.callBackTotal(total + money)
  // }

  return (
    <div className="my-3">
      <div className="cart__item">
        <div className="px-4" >
          <input
            id={"cbx" + props.id}
            className="cbx__item"
            type={"checkbox"}
            name={props.id}
            checked={props.isCheck}
            onChange={props.onChange}

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
          <div className='qty__input'>
            {ordersQty}
          </div>
          {/* <span className="cart__item--money">{money}</span> */}
        </div>
      </div>
    </div>
  );
}