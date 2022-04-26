import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Product from '../components/Product'

export default function HomeScreen() {
  const url = "http://localhost:3003";
  const [brands, setBrands] = useState([]);
  // console.log(brands)
  const loadData = () => {
    axios.get(`http://localhost:3003/brands`)
      .then(res => {
        const data = res.data;
        // console.log("DATA:", data)
        setBrands(handleFilter(data))
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    loadData()
  }, []);

  const handleFilter = (data) => {
    var brandCheck = [];

    data.map((item, i) => {
      if (brandCheck.find(value => value.name === item.product_brand_name)) {
        let pos = brandCheck.findIndex(ele => ele.name === item.product_brand_name)
        brandCheck[pos].products.push(item)
        return;
      }
      else {
        brandCheck.push({ name: item.product_brand_name, products: [item] })

        // console.log(brandCheck)
      }
    })

    return brandCheck;
  }

  // console.log(brands)

  return (
    <div>
      <div className="grid">
        {brands.map((brand, index) => (
          <div className="home__container" key={index}>
            <span className="home__title">{brand.name}</span>
            <div className="block-separation my-3"></div>
            <div className="row row-cols-6 home__products">
              {
                brand.products.map((product, i) => (
                  <Product
                    key={i}
                    id={product.product_id}
                    src={url + product.product_image}
                    name={product.product_name}
                    price={product.product_price}
                  />
                ))
              }
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
}