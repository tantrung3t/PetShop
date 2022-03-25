import { React, useState, useEffect } from "react"
import Product from "./Product" 
import Axios from "axios"

export default function Thucanmeo(){

    
    const url = "http://localhost:3003";

    const [data, setData] = useState([]);

    const loadData = () => {
        Axios.get(`http://localhost:3003/products/thucanmeo`)
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

    return(
        <div>
        <h5>Trang chủ / Sản phẩm / Thức ăn mèo</h5>
        <div className="row center my-2">
          <img width="800px" height="250" alt="Thức ăn cún" src="https://petshopsaigon.vn/wp-content/uploads/2019/08/pet-shop-sai-gon-1.jpg"></img>
        </div>
        <div className="row center my-40">
        <h1>Thức ăn mèo</h1>
        </div>
        <div className="row center my-2">
        {render()}
        </div>
    </div>
)
}