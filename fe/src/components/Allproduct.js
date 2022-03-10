
import React, { useState, useEffect } from "react";
import Axios from "axios";
// import Carousel from 'react-elastic-carousel'
import Product from '../components/Product'

export default function Allproduct() {

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
        <div>
            {render()}
        </div>
    )
}