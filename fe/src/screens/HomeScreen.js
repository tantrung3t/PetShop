import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
// import Carousel from 'react-elastic-carousel'
import Product from '../components/Product'
import { Slide } from 'react-slideshow-image'

export default function HomeScreen() {
  const url = "http://localhost:3003";
  
  const [data, setData] = useState([]);

  const loadData = () => {
    Axios.get(`http://localhost:3003/home_bestseller`)
      .then(res => {
        const data = res.data;
        setData(data);
        // console.log(data)
      })
      .catch(error => console.log(error));
  }


  useEffect(() => {
    loadData()
  }, []);

  
  const render = () => {
    if(data.length === 0) return <div></div>
    let element = data.map((product, index) => {
      return <Product
              key={index}
              id={product.product_id}
              src={ url + product.product_image}
              name={product.product_name}
              price={product.product_price}
            />
    })
    return element;
  }

  const slideImages = [
    '../assets/img/banner2.jpg',
    '../assets/img/banner3.png',
    '../assets/img/banner5.png'
  ];

  return (
    <div>
      <div className="banner">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </div>
      <center className="home__title my-4">Sản phẩm của T2K Shop</center>
      <div className="home__category-wrap my-4">
        <div className="row center my-2">
          <Link to='/thucancun'>
            <img src="../assets/img/thuc-an-cho.png" alt="Thức ăn chó" width='200px' className="home__category-item"></img>
          </Link>
          <Link to='/thucanmeo'>
            <img src="../assets/img/thuc-an-meo.png" alt="Thức ăn mèo" width='200px' className="home__category-item"></img>
          </Link>
          <Link to='/dochoithucung'>
            <img src="../assets/img/do-choi-thu-cung.png" alt="Đồ chơi thú cưng" width='200px' className="home__category-item"></img>
          </Link>
        </div>
        <div className="row center my-2">
          <Link to='/phukienthucung'>
            <img src="../assets/img/phu-kien-thu-cung.png" alt="Phụ kiện thú cưng" width='200px' className="home__category-item"></img>
          </Link>
          <Link to='/chuongthucung'>
            <img src="../assets/img/chuong-thu-cung.png" alt="Chuồng thú cưng" width='200px' className="home__category-item"></img>
          </Link>
        </div>
      </div>
      <div className="grid">
        <div className="home__container">
          <span className="home__title">Sản phẩm bán chạy</span>
          <div className="block-separation my-3"></div>
          <div className="carousel-control-wrap">
            <button type="button" className="carousel-control-prev">prev</button>
            <button type="button" className="carousel-control-next">next</button>
          </div>
          <div className="row row-cols-6 home__products">
            {render()}
          </div>
        </div>
        <div className="home__container">
          <span className="home__title">Sản phẩm khuyến mãi</span>
          <div className="block-separation my-3"></div>
          <div className="row row-cols-6 home__products">
            {/* {render()} */}
          </div>
        </div>
      </div>
    </div>
  );
}