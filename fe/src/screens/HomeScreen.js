import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomeScreen() {

  const [data, setData] = useState([]);

  const loadData = () => {

    axios.get(`http://localhost:3003/test`)
      .then(res => {
        const persons = res.data;
        setData(persons);
        console.log(persons)
      })
      .catch(error => console.log(error));
  }


  useEffect(() => {
    loadData()
  }, []);

  
  const render = () => {
    let element = data.map((product, index) => {
      let turn = '';

      turn = <Product
        key={index}
        id={product.id}
        src={product.src}
        name={product.name}
        price={product.price}
      />
      return turn;
    })
    return element;
  }

  return (
    <div>
      <div className="banner">
        <img src="../assets/img/banner.jpg" alt="banner" style={{ width: '100%' }}></img>
      </div>
      <center className="home__title">Sản phẩm của T2K Shop</center>
      <div className="category-wrap my-4">
        <div className="row center my-2">
          <Link to='/'>
            <img src="../assets/img/thuc-an-cho.png" alt="Thức ăn chó" width='200px' className="category-item"></img>
          </Link>
          <Link to='/'>
            <img src="../assets/img/thuc-an-meo.png" alt="Thức ăn mèo" width='200px' className="category-item"></img>
          </Link>
          <Link to='/'>
            <img src="../assets/img/do-choi-thu-cung.png" alt="Đồ chơi thú cưng" width='200px' className="category-item"></img>
          </Link>
        </div>
        <div className="row center my-2">
          <Link to='/'>
            <img src="../assets/img/phu-kien-thu-cung.png" alt="Phụ kiện thú cưng" width='200px' className="category-item"></img>
          </Link>
          <Link to='/'>
            <img src="../assets/img/chuong-thu-cung.png" alt="Chuồng thú cưng" width='200px' className="category-item"></img>
          </Link>
        </div>
      </div>
      <div className="grid">
        <div className="home__container">
          <span className="home__title">Sản phẩm bán chạy</span>
          <div className="block-separation my-3"></div>
          <div className="row row-cols-6 home__products">

            {render()}
          </div>
        </div>
        <div className="home__container">
          <span className="home__title">Sản phẩm khuyến mãi</span>
          <div className="block-separation my-3"></div>
          <div className="row row-cols-6 home__products">
          </div>
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  return (

    <Link to={`/${props.id}`} className="p-1">
      <div className="home__product">
        <img src={props.src} alt="product" width="100%" className="home__product-img"></img>
        <div className="p-2">
          <div className="home__product-name">{props.name}</div>
          <div className="home__product-price">{props.price} đ</div>
        </div>
      </div>
    </Link>
  )
}