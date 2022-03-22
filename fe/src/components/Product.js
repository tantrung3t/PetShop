import {React} from 'react';
import {Link} from 'react-router-dom'

export default function Product(props) {
  return (

    <Link to={`/product/${props.id}`} className="p-1">
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

export function ProductCart(props) {
  const handleRemoveCart = () => {
    console.log("xóa")
  }

  return (
    <Link to={`/product/${props.id}`} className="p-1">
      <div className="home__product--cart">
        <img src={props.src} alt="img" width="60px" height="60px"  className="home__product-img"></img>
        <div className="pl-2">
          <div className="home__product-name--cart">{props.name}</div>
          <div className="home__product-price--cart">{props.price} đ</div>
          <div className="link" onClick={handleRemoveCart}>Xóa</div>
        </div>
      </div>
    </Link>
  )
}