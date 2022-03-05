import {React} from 'react';
import {Link} from 'react-router-dom'

export default function Product(props) {
  return (

    <Link to={`/${props.id}`} className="p-1">
      <div className="home__product">
        <img src={props.src} alt="product" width="100%" height="200px"  className="home__product-img"></img>
        <div className="p-2">
          <div className="home__product-name">{props.name}</div>
          <div className="home__product-price">{props.price} đ</div>
        </div>
      </div>
    </Link>
  )
}