import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetail(props) {
  const url = "http://localhost:3003";
  const [data, setData] = useState(
    [
      {
      product_id: "",
      product_name: "",
      product_price: "",
      product_image: "",
      product_sold: "",
      product_description: "",
      product_brand_name: "",
      product_type_name: ""
      }
      ]
  );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    alert("Mua hàng" + props.id);
    console.log(data[0])
  };

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
          <div className='product__description' dangerouslySetInnerHTML={{__html: data[0].product_description}}></div>
          <div className='block-separation'></div>
          <div className='flex beetween my-2'>
            <span className='product__amount'>Số lượng: 10</span>
            <span className='product__sold'>Đã bán: {data[0].product_sold}</span>
          </div>
          <div id='order' className='btn btn-primary my-2' onClick={handleClick}>Mua hàng</div>
        </div>
      </div>
    </div>

  )
}