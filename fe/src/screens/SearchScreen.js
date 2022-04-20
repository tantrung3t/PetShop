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
                console.log(response.data);
                setProduct(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [props.id])

    const renderSearch = () => {
        if (product.length === 0) {
            return (
                <div>
                    Không tìm thấy sản phẩm
                </div>
                
            )
        }
        else {
            return (
                <div className='row row-cols-2'>
                    {
                        product.map((product, index) =>
                            <Product
                                key={index}
                                id={product.product_id}
                                src={url + product.product_image}
                                name={product.product_name}
                                price={product.product_price}
                            />
                        )
                    }
                </div>
            )
        }
    }

    return (
        <div>
            {renderSearch()}
        </div>
    )
}