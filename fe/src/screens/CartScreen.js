import React, { useEffect, useState } from "react"
import CartItem from '../components/CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import './CartScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

localStorage.setItem("total", 0);


localStorage.setItem("total", 0)

export default function CartScreens() {
  console.log("re render")
  const url = "http://localhost:3003";

  const [modal, setModal] = useState("modal hide");

  const [productsCart, setProductsCart] = useState([]);
<<<<<<< HEAD
  const [modal, setModal] = useState("modal hide");
  const [total, setTotal] = useState(localStorage.getItem("total"));
=======
  // const [isCheck, setIsCheck] = useState([]);
  // const [isCheckAll, setIsCheckAll] = useState(false);
  const [totalPayment, setTotalPayment] = useState(0)
>>>>>>> dd8b25b3b2c1ebc5c43c2ee1a4493d3bfc1307a1

  const profile = JSON.parse(localStorage.getItem("profile"));

  const [order] = useState({
    fname: profile.info_fname,
    lname: profile.info_lname,
    date: profile.info_date,
    sex: profile.info_sex,
    email: profile.info_email,
    phone: profile.info_phone_number,
    address: profile.info_address
  })


  const handleSubmit = (event) => {
    event.preventDefault();
    // axios.post('http://localhost:3003/api/orders', order)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // console.log(totalPayment)
    // alert("Bạn đã đặt hàng thành công!");
    thanhtoanmomo()
  }

  const thanhtoanmomo = async () => {
    const databody = {
        "order_id": 25,
        "amount": totalPayment
    }

    await axios({
        method: 'post',
        url: 'http://localhost:3003/thanhtoan',
        data: databody
    })
        .then(function (response) {
            const data = response.data;
            console.log(data)
            window.location = data.payUrl
        })
        .catch(function (error) {
            console.log(error);
        });
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

  const close_modal = () => {
    setModal("modal hide");
  }
  const exit_modal = (e) => {
    if (e.target == e.currentTarget) close_modal();
  }

  useEffect(() => {
    loadData()
  }, []);

  // console.log(order)

  const loadData = () => {
    axios.get(`http://localhost:3003/products/cart/` + localStorage.getItem('token'))
      .then(res => {
        const data = res.data;
        if (data.status !== 401) setProductsCart(data);
      })
      .catch(error => console.log(error));

  }

<<<<<<< HEAD
  const callBackTotal = (t) => {
    console.log("Truyen" + t)
    setTotal(t)
  }
=======
  const choosePayment = () => {
    setModal("modal")
    document.getElementById("info-order__total").value = totalPayment;
    console.log(totalPayment)
  }

>>>>>>> dd8b25b3b2c1ebc5c43c2ee1a4493d3bfc1307a1

  // const [totalPayment, setTotalPayment] = useState(0);
  // const addTotal_product = (total) =>{
  //   setTotalPayment(totalPayment + total);
  //   console.log(total);
  // }

  // const handleIncrease = (quantity) => {
  //   console.log(quantity);
  //   // money = props.price * qty
  // }

<<<<<<< HEAD
  console.log(localStorage.getItem("total"))
=======

  // const handlePayment = () => {
  //   return (
  //     <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  //       <div className="modal-dialog" role="document">
  //         <div className="modal-content">
  //           aaa
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  // const handleTotal = () => {
  //   // document.getElementById
  //   // productsCart.
  //   return <div>1</div>
  // }

  const callbackhadleTotal = (total) => {
    console.log("total cha: " + total)
    setTotalPayment(total)
  }
>>>>>>> dd8b25b3b2c1ebc5c43c2ee1a4493d3bfc1307a1

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

          callbackhadleTotal={(total) => { callbackhadleTotal(total)}}

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
<<<<<<< HEAD
            onClick={() => setModal("modal")}
          >Mua Hàng</div>
        </div>
      </div>
      <div className={modal}>
=======
          onClick={choosePayment}
          >Mua Hàng</div>
        </div>
      </div>
      {/* <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            aaa
          </div>
        </div>
      </div> */}
      <div className={modal} onClick={exit_modal}>
>>>>>>> dd8b25b3b2c1ebc5c43c2ee1a4493d3bfc1307a1
        <div className="modal__inner">
          <div className="modal__header flex beetween">
            <p>Thông tin đặt hàng</p>
<<<<<<< HEAD
            <FontAwesomeIcon icon={faXmarkCircle} fontSize={35} onClick={() => setModal("modal hide")} />
=======
            <FontAwesomeIcon icon={faXmarkCircle} fontSize={35} onClick={close_modal} />
>>>>>>> dd8b25b3b2c1ebc5c43c2ee1a4493d3bfc1307a1
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
                  defaultValue={order.lname + " " + order.fname}
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
                  defaultValue={order.phone}
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
                  defaultValue={order.email}
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
                  defaultValue={order.address}
                />
              </div>
              <div className="form-input--wrap">
                <label htmlFor="info-order__total">Tổng hóa đơn: {total} </label>
                <input
                  id="info-order__total"
                  className="form-input"
                  type={'number'}
                  name="total"
                  disabled={true}
<<<<<<< HEAD
                  // defaultValue={localStorage.getItem("total")}
                  // value={localStorage.getItem("total")}
=======
>>>>>>> dd8b25b3b2c1ebc5c43c2ee1a4493d3bfc1307a1
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