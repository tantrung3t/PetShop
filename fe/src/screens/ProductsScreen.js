import { React, useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import Axios from "axios"

import Product from "../components/Product"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function ProductsScreen() {
  const url = "http://localhost:3003";

  const [type, setType] = useState('products')
  const [data, setData] = useState([]);

  const loadData = () => {
    Axios.get(`http://localhost:3003/` + type)
      .then(res => {
        setData(res.data);
        // console.log(res.data)
      })
      .catch(error => console.log(error));
  }


  useEffect(() => {
    loadData()
  }, [type]);


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
            <h2 className="category__heading" onClick={() => {setType("products")}}>
              <FontAwesomeIcon icon={faBars} />
              &nbsp; Danh mục
            </h2>
            <ul className="category__list">
              <li className="category__item">
                <div className="category__item-link" onClick={() => {setType("products/thucancun")}}>
                  thức ăn cho cún
                </div>
              </li>
              <li className="category__item">
                <div className="category__item-link" onClick={() => {setType("products/thucanmeo")}}>
                  thức ăn cho mèo
                </div>
              </li>
              <li className="category__item">
                <div className="category__item-link" onClick={() => {setType("products/dochoithucung")}}>
                  đồ chơi thú cưng
                </div>
              </li>
              <li className="category__item">
                <div className="category__item-link" onClick={() => {setType("products/phukienthucung")}}>
                  Phụ kiện thú cưng
                </div>
              </li>
              <li className="category__item">
                <div className="category__item-link" onClick={() => {setType("products/chuongthucung")}}>
                  chuồng thú cưng
                </div>
              </li>
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