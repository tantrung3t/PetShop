import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Product from '../components/Product'

export default function HomeScreen() {
  const url = "http://localhost:3003";
  
  const [data, setData] = useState([]);

  const loadData = () => {
    axios.get(`http://localhost:3003/home_bestseller`)
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

  return (
    <div>
      <div className="grid">
        <div className="home__container">
          <span className="home__title">{"Tên"}</span>
          <div className="block-separation my-3"></div>
          <div className="row row-cols-6 home__products">
            {render()}
          </div>
        </div>
        <div className="home__container">
          <span className="home__title">{"Tên"}</span>
          <div className="block-separation my-3"></div>
          <div className="row row-cols-6 home__products">
            {render()}
          </div>
        </div>
      </div>
    </div>
  );
}