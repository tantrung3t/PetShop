import { React, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetail(props) {
  const ProductID = props.match.params.id;
  const { addProductInCart, setChangeCart, onChangeCart } = props;
  const history = useHistory();
  const url = "http://localhost:3003";
  const [link, setLink] = useState('');
  const [product, setProduct] = useState({});

  const loadData = () => {
    axios.get(`http://localhost:3003/product/` + ProductID)
      .then(res => {
        const data = res.data[0];
        setProduct({...product, ...data});
        // phân loại loại sản phẩm để đưa vào link
        switch (data.product_type_id) {
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
  }, [ProductID]);

  const [qty, setQty] = useState( 1 );

  const handleIncrease = () => {
    setQty(qty + 1);
  }

  const handleDecrease = () => {
    setQty(qty - 1);
  }

  const handleOrder = (e) => {
    // var onChangeCart = true;
    if (localStorage.getItem("user") === "") {
      console.log("fail")
      history.push('/signin')
    } else {
      e.preventDefault();
      addProductInCart(product, qty);
      setChangeCart(!onChangeCart);

      alert("Bạn đã thêm sản phẩm vào giỏ hàng.")
    }
  };
  return (
    <div>
      <div className='path'>
        <div className='grid'> 
          <Link to={'/'}>Trang chủ</Link> / <Link to={'/products'}>Sản phẩm</Link> / <Link to={link}>{product.product_type_name}</Link> / {product.product_name}
        </div>
      </div>
      <div className='grid flex beetween'>
        <div className='product__img'>
          <img
            src={url + product.product_image}
            alt='image_product'
            className='product__img--primary'
          />
        </div>
        <div className='product__info'>
          <span className='product__name'>{product.product_name}</span>
          <div className='block-separation'></div>
          <div className='product__price'>{(product?.product_price || 0).toLocaleString("fi-FI",)} đ</div>
          <div className='block-separation'></div>
          <div className='product__brand'>Thương hiệu: <Link to='' className='primary'>{product.product_brand_name}</Link></div>
          <div className='product__type'>Loại: <Link to={link} className='primary'>{product.product_type_name}</Link></div>
          <div className='product__description' dangerouslySetInnerHTML={{ __html: product.product_description }}></div>
          <div className='block-separation'></div>
          <div className='flex beetween my-2'>
            <span className='product__amount'>Số lượng: {product.product_amount - product.product_sold}</span>
            <span className='product__sold'>Đã bán: {product.product_sold}</span>
          </div>
          <div className='flex beetween'>
          <div className='qty--wrap'>
            <input className='qty__btn minus' type='button' value='-' onClick={handleDecrease} disabled={qty === 1} />
            <input className='qty__input' type='number' min='1' max={props.product_amount} value={qty}
              onChange={(e) => e.target.value = qty}
            />
            <input className='qty__btn plus' type='button' value='+' onClick={handleIncrease} disabled={qty >= product.product_amount - product.product_sold} />
          </div>
            <button id='order' className='btn btn-primary' onClick={handleOrder} disabled={product.product_amount < 1}>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  )

}