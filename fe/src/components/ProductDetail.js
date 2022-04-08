import { React, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import QuantityButton from '../components/QuantityButton';


export default function ProductDetail(props) {
  // ProductDetail.propTypes = {
  //   props: PropTypes.string
  // }
  const history = useHistory();
  const url = "http://localhost:3003";
  const [link, setLink] = useState('');
  const [data, setData] = useState(
    [
      {
        product_type_id: "",
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

  const loadData = () => {
    axios.get(`http://localhost:3003/product/` + props.id)
      .then(res => {
        const data = res.data;
        setData(data);
        // phân loại loại sản phẩm để đưa vào link
        switch (data[0].product_type_id) {
          case 1:
            setLink('/thucancun');
            break;
          case 2:
            setLink('/thucanmeo');
            break;
          case 3:
            setLink('/dochoithucung');
            break;
          case 4:
            setLink('/phukienthucung');
            break;
          case 5:
            setLink('/chuongthucung');
            break;
          default:
            setLink('');
        }

      })
      .catch(error => console.log(error));

  }

  useEffect(() => {
    loadData()
  }, [props.id]);


  const handleOrder = (e) => {
    if(localStorage.getItem("user") === "") {
      console.log("fail")
      history.push('/signin')
    } else {
      e.preventDefault();
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
  
      // console.log(data[0]);
      alert("Bạn đã thêm sản phẩm vào giỏ hàng.")
    }
  };


  return (
    <div>
      <div className='path'><Link to={'/'}>Trang chủ</Link> / <Link to={'/products'}>Sản phẩm</Link> / <Link to={link}>{data[0].product_type_name}</Link> / {data[0].product_name}</div>
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
          <div className='product__price'>{data[0].product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} đ</div>
          <div className='block-separation'></div>
          <div className='product__brand'>Thương hiệu: <Link to='' className='primary'>{data[0].product_brand_name}</Link></div>
          <div className='product__type'>Loại: <Link to={link} className='primary'>{data[0].product_type_name}</Link></div>
          <div className='product__description' dangerouslySetInnerHTML={{ __html: data[0].product_description }}></div>
          <div className='block-separation'></div>
          <div className='flex beetween my-2'>
            <span className='product__amount'>Số lượng: {data[0].product_amount}</span>
            <span className='product__sold'>Đã bán: {data[0].product_sold}</span>
          </div>
          <div className='flex beetween'>
            <QuantityButton product_amount={data[0].product__amount} />
            <button id='order' className='btn btn-primary' onClick={handleOrder} disabled={data[0].product_amount < 1}>Mua hàng</button>
          </div>
        </div>
      </div>
    </div>
  )

}