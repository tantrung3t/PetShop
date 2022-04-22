import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from "../components/Product"

const url = "http://localhost:3003";
export default function SearchScreen(props) {

  const [product, setProduct] = useState([])

  useEffect(() => {
    var data = {
      search: props.id,
    }
    axios.post('http://localhost:3003/products/search', data)
      .then(function (response) {
        // console.log(response.data);
        setProduct(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.id])

  return (
    <div className='grid'>
      <h2>Kết quả tìm kiếm cho: <span style={{color: "var(--primary-color)"}}>{props.id}</span></h2>
          <div className='row row-cols-6 left'>
            {
              product.length ? (
                product.map((product, index) =>
                  <Product
                    key={index}
                    id={product.product_id}
                    src={url + product.product_image}
                    name={product.product_name}
                    price={product.product_price}
                  />
                )
              ) : (
                <div>Không tìm thấy sản phẩm</div>
              )
            }
          </div>
    </div>
  )
}