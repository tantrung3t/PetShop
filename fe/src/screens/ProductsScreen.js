import { React, useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import Axios from "axios"

import Product from "../components/Product"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Account() {
  const url = "http://localhost:3003";

  const [data, setData] = useState([]);

  const loadData = () => {
    Axios.get(`http://localhost:3003/products`)
      .then(res => {
        const data = res.data;
        setData(data);
        console.log(data)
      })
      .catch(error => console.log(error));
  }


  useEffect(() => {
    loadData()
  }, []);


  const render = () => {
    let element = data.map((product, index) => {
      return <Product
                key={index}
                id={product.product_id}
                src={url + product.product_image}
                name={product.product_name}
                price={product.product_price}
              />
    })
    return element;
  }


  return (
    <div className="grid py-4">
      <div className="row">
        <div className="col-2 px-1">
          <div className="category">
            <h2 className="category__heading">
              <FontAwesomeIcon icon={faBars} />
              &nbsp; Danh mục
            </h2>
            <ul className="category__list">
              <li className="category__item">thức ăn cho cún</li>
              <li className="category__item">thức ăn cho mèo</li>
              <li className="category__item">đồ chơi thú cưng</li>
              <li className="category__item">Phụ kiện thú cưng</li>
              <li className="category__item">chuồng thú cưng</li>
            </ul>
          </div>
        </div>
        <div className="col-10 products px-1">
          <div className="row left row-cols-5">
            {render()}
          </div>
        </div>
      </div>
    </div>
  );
}