import React, { useEffect, useState } from "react"
import CartItem from '../components/CartItem'
import axios from "axios";
import './CartScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

localStorage.setItem("total", 0);

export default function CartScreens() {
  const url = "http://localhost:3003";

  const [productsCart, setProductsCart] = useState([]);
  const [modal, setModal] = useState("modal hide");
  const [total, setTotal] = useState(localStorage.getItem("total"));

  const profile = JSON.parse(localStorage.getItem("profile"));

  const [order] = useState({
    fname: profile.fname,
    lname: profile.lname,
    date: profile.date,
    sex: profile.sex,
    email: profile.email,
    phone: profile.phone,
    address: profile.address
  })


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3003/api/orders', order)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("Bạn đã đặt hàng thành công!");
  }


  const handleCheck = (e) => {
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
  }, []);

  console.log(order)

  const loadData = () => {
    axios.get(`http://localhost:3003/products/cart/` + localStorage.getItem('token'))
      .then(res => {
        const data = res.data;
        if (data.status !== 401) setProductsCart(data);
      })
      .catch(error => console.log(error));

  }

  const callBackTotal = (t) => {
    console.log("Truyen" + t)
    setTotal(t)
  }

  // const [totalPayment, setTotalPayment] = useState(0);
  // const addTotal_product = (total) =>{
  //   setTotalPayment(totalPayment + total);
  //   console.log(total);
  // }

  // const handleIncrease = (quantity) => {
  //   console.log(quantity);
  //   // money = props.price * qty
  // }

  console.log(localStorage.getItem("total"))

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
              onChange={handleCheck}
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
            onChange={handleCheck}
            src={url + product.product_image}
            name={product.product_name}
            price={product.product_price}
            amount={product.product_amount}
            quantity={product.shopping_cart_amount}
            callBackTotal={(price) => {callBackTotal(price)}}

          // total={product.product_amount * product.shopping_cart_amount}

          //truyền thằng bên dưới qua bên CartItem để nó biết được bên thằng cha nó có function addTotal_product(price)
          //và chỉ cần thằng con nhận props thì viết code xữ lý bên function thằng cha.
          // checkedAddTotal={(total) => { addTotal_product(total) }}
          // handleIncreaseQuantity={(quantity) => {handleIncrease(quantity) }}

          />
        )
      }
      {/* <div style={{position: "fixed", bottom: "0", width: "100"}}> */}

      <div className="cart__footer--wrap">
        <div className="grid cart__footer">
          <div className="px-4">
            <input
              id={"cbx"}
              className="cbx"
              type={"checkbox"}
              name="allSelect"
              checked={!productsCart.some((product) => product?.isChecked !== true)}
              onChange={handleCheck}
            />
            &nbsp;Chọn tất cả
          </div>
          <div>Xóa</div>
          <div>Tổng hóa đơn: {localStorage.getItem('total')} </div>
          <div
            className="btn btn-primary"
            style={{ fontSize: "16px" }}
            onClick={() => setModal("modal")}
          >Mua Hàng</div>
        </div>
      </div>
      <div className={modal}>
        <div className="modal__inner">
          <div className="modal__header flex beetween">
            <p>Thông tin đặt hàng</p>
            <FontAwesomeIcon icon={faXmarkCircle} fontSize={35} onClick={() => setModal("modal hide")} />
          </div>
          <form className="modal_body" onSubmit={handleSubmit}>
            <div className="CartScreen_modal_body">
              <div className="form-input--wrap">
                <label htmlFor="info-order__name">Tên: </label>
                <input
                  id="info-order__name"
                  className="form-input"
                  type={"text"}
                  name="name"
                  placeholder="Tên"
                  defaultValue={profile.lname + " " + profile.fname}
                />
              </div>
              <div className="form-input--wrap">
                <label htmlFor="info-order__phone">Số điện thoại: </label>
                <input
                  id="info-order__phone"
                  className="form-input"
                  type={"text"}
                  name="phone"
                  placeholder="Số điện thoại"
                  defaultValue={profile.phone}
                />
              </div>
              <div className="form-input--wrap">
                <label htmlFor="info-order__email">Email: </label>
                <input
                  id="info-order__email"
                  className="form-input"
                  type={"email"}
                  name="email"
                  placeholder="Email"
                  defaultValue={profile.email}
                />
              </div>
              <div className="form-input--wrap">
                <label htmlFor="info-order__address">Địa chỉ: </label>
                <input
                  id="info-order__address"
                  className="form-input"
                  type={"text"}
                  name="address"
                  placeholder="Địa chỉ"
                  defaultValue={profile.address}
                />
              </div>
              <div className="form-input--wrap">
                <label htmlFor="info-order__total">Tổng hóa đơn: {total} </label>
                <input
                  id="info-order__total"
                  className="form-input"
                  type={"text"}
                  name="total"
                  placeholder="Tổng tiền"
                  disabled={true}
                  // defaultValue={localStorage.getItem("total")}
                  // value={localStorage.getItem("total")}
                />
              </div>
            </div>
            <div className="CartScreen_modal_footer" >
              <button
                type={"submit"}
                className="CartScreen_modal_footer_button_momo">
                <img className="CartScreen_modal_image" src='../assets/img/MoMo_Logo.png'></img>
                Thanh toán qua ví MoMo
              </button>
              <button
                type={"submit"}
                className="CartScreen_modal_footer_button_offline">
                <img className="CartScreen_modal_image" src='../assets/img/payment_logo.png'></img>
                Thanh toán khi nhận hàng
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}