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
          <div className="home__product-price">{props.price}  đ</div>
        </div>
      </div>
    </Link>
  )
}

export function ProductMiniCartItem(props) {

  const handleRemoveCart = () => {
    console.log("xóa " + props.id)
    axios.post('http://localhost:3003/api/cart/delete', {id: props.id})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("Xóa thành công!") 
  }

  return (
    <li className="p-1 mx-2" style={{position: "relative"}}>
      <Link to={`/product/${props.id}`} className="home__product--minicart">
        <img src={props.src} alt="img" width="60px" height="60px"  className="home__product-img"></img>
        <div className="pl-2">
          <div className="home__product-name--minicart">{props.name}</div>
          <div className="home__product-price--minicart">{props.price} đ</div>
        </div>
      </Link>
      <div className="link btn-remove" onClick={handleRemoveCart}>Xóa</div>
    </li>
  )
}

export function ProductCartItem(props) {

  const handleRemoveCart = () => {
    // console.log("xóa")
    axios.post('http://localhost:3003/api/cart/delete', {id: props.id})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <li className="p-1" style={{position: "relative"}}>
      <Link to={`/product/${props.id}`} className="home__product--cart">
        <img src={props.src} alt="img" width="100px" height="100px"  className="home__product-img"></img>
        <div className="pl-2">
          <div className="home__product-name--cart">{props.name}</div>
          <div className="home__product-price--cart">{props.price} đ</div>
        </div>
      </Link>
      <div className="link btn-remove" onClick={handleRemoveCart}>Xóa</div>
    </li>
  )
}