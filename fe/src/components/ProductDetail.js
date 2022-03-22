import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
// import PropTypes from 'prop-types';


export default function ProductDetail(props) {
  // ProductDetail.propTypes = {
  //   props: PropTypes.string
  // }

  const url = "http://localhost:3003";
  const [data, setData] = useState(
    [
      {
        product_id: "",
        product_name: "",
        product_price: "",
        product_image: "",
        product_amount: "",
        product_sold: "",
        product_description: "",
        product_brand_name: "",
        product_type_name: ""
      }
    ]
  );
  const [qty, setQty] = useState(1);
  localStorage.setItem('qty', qty);

  const loadData = () => {
    axios.get(`http://localhost:3003/product/` + props.id)
      .then(res => {
        const data = res.data;
        setData(data);
      })
      .catch(error => console.log(error));

  }

  useEffect(() => {
    loadData()
  }, []);


  const handleOrder = () => {
    console.log(data[0]);
    alert("Bạn đã thêm sản phẩm vào giỏ hàng.")
    axios.post('http://localhost:3003/api/cart', {
      product: data[0],
      quantity: localStorage.getItem('qty')
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleIncrease = () => {
    setQty(qty + 1);
  }

  const handleDecrease = () => {
    setQty(qty - 1);
  }


  return (
    <div>
      <div className='path'></div>
      <div className='grid flex beetween'>
        <div className='product__img'>
          <img
            src={url + data[0].product_image}
            alt='image_product'
            className='product__img--primary'
          />
        </div>
        <div className='product__info'>
          <span className='product__name'>{data[0].product_name}</span>
          <div className='block-separation'></div>
          <div className='product__price'>{data[0].product_price} đ</div>
          <div className='block-separation'></div>
          <div className='product__brand'>Thương hiệu: <Link to='' className='primary'>{data[0].product_brand_name}</Link></div>
          <div className='product__type'>Loại: <Link to='' className='primary'>{data[0].product_type_name}</Link></div>
          <div className='product__description' dangerouslySetInnerHTML={{ __html: data[0].product_description }}></div>
          <div className='block-separation'></div>
          <div className='flex beetween my-2'>
            <span className='product__amount'>Số lượng: {data[0].product_amount}</span>
            <span className='product__sold'>Đã bán: {data[0].product_sold}</span>
          </div>
          <div className='flex beetween'>
            <div className='qty--wrap'>
              <input className='qty__btn minus' type='button' value='-' onClick={handleDecrease} disabled={qty === 1}/>
              <input className='qty__input' type='number' min='1' max={data[0].product_amount} value={qty} 
                pattern='/\d{1}'
              />
              <input className='qty__btn plus' type='button' value='+' onClick={handleIncrease} disabled={qty >= data[0].product_amount}/>
            </div>
            <div id='order' className='btn btn-primary' onClick={handleOrder}>Mua hàng</div>
          </div>
        </div>
      </div>
    </div>
  )

}