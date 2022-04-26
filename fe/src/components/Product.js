import {React} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function Product(props) {
  return (
    <Link to={`/products/${props.id}`} className="p-1">
      <div className="home__product">
        <img src={props.src} alt="img" width="100%" height="200px"  className="home__product-img"></img>
        <div className="p-2">
          <div className="home__product-name">{props.name}</div>
          <div className="home__product-price">{(props.price).toLocaleString("fi-FI")} đ</div>
        </div>
      </div>
    </Link>
  )
}

export function ProductMiniCartItem(props) {

  const handleDeleteProduct = () => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    console.log("xóa" + props.id)
    axios.post('http://localhost:3003/shoppingcart/delete', {
      "account_id": profile.account_id,
      "product_id": props.id
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

  return (
    <li className="p-1" style={{position: "relative"}}>
      <Link to={`/products/${props.id}`} className="product--minicart">
        <img src={props.src} alt="img" width="60px" height="60px"  className="product-img"></img>
        <div className="pl-2" style={{flex: 1}}>
            <div className="product-name--minicart">{props.name}</div>
          <div className='flex'>
          <div className="product-price--minicart"> {(props.price).toLocaleString("fi-FI", /*{ style: "currency", currency: "VND" }*/)} đ</div>
            <div style={{lineHeight: 1.5, color: "#ccc"}}>
              <span className='mx-1' style={{fontSize: "10px"}}>x</span>
              <span className=''>{props.qty}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="link delete-minicart" onClick={handleDeleteProduct}>Xóa</div>
    </li>
  )
}