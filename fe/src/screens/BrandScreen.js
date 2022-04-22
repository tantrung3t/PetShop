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
        setBrands(data);
        console.log(data)
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    loadData()
  }, []);

  var brandCheck = [];
  const result = Object.values(brands).filter(brand => {
    var brandList = [];
    for (let index = 0; index < brandCheck.length; index++) {
      const element = brandCheck[index];
      if (brand.brandName === element) {
        return;
      }
      else {
        brandList.push(brand);
      }
    }
    if (brandCheck.find(value => value === brand.brandName)) {
      return;
    }
    else {
      brandCheck.push(brand.brandName)
    }
    return brandList;
  })
  const resultsBrand = result.filter(brand => {
    for (let index = 0; index < brand.products.length; index++) {
      const element = brand.products[index];
      if (element.product_brand_name !== brand.brandName) {
        brand.products.splice(index, 1)
      }
    }
    return brand;
  })


  console.log(resultsBrand)

  return (
    <div>
      <div className="grid">
        {resultsBrand.map((brand, index) => (
          <div className="home__container" key={index}>
            <span className="home__title">{brand.brandName}</span>
            <div className="block-separation my-3"></div>
            <div className="row row-cols-6 home__products">
              {
                brand.products.map((product, i) => (
                  <Product
                    key={i}
                    id={product.product_id}
                    src={ url + product.product_image}
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