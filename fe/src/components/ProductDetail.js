import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {axios} from 'axios'

export default function Product(props) {
  const [data, setData] = useState([]);

  const loadData = () => {
    axios.get(`http://localhost:3003/product/` + props.id)
      .then(res => {
        const data = res.data;
        setData(data);
        console.log(data)
      })
      .catch(error => console.log(error));
  }
  // useEffect(() => {
  //   loadData()
  // }, []);

  const handleClick = () => {
    alert("Mua hàng");
  };

  return (
    <div>
      <div className='path'></div>
      <div className='grid flex beetween'>
        <div className='product__img'>
          <img
            src='../assets/img/product1.png'
            alt='image'
            className='product__img--primary'
          />
        </div>
        <div className='product__info'>
          <span className='product__name'>Gối nằm Doremon</span>
          <div className='block-separation'></div>
          <div className='product__price'>100 000 đ</div>
          <div className='block-separation'></div>
          <div className='product__brand'>Thương hiệu: <Link to='' className='primary'>ABC</Link></div>
          <div className='product__type'>Loại: <Link to='' className='primary'>Thức ăn cho chó</Link></div>
          <div className='product__description'>GỐI NẰM DOREMONGối nằm Doremon là vật dụng không thể thiếu trong phòng ngủ của bé yêu. Chúng giúp nâng đỡ phần đầu, cổ, vai gáy tạo cảm giác thoải mái nhất cho con.Hiểu được điều này Lamell đã ưu tiên lựa chọn chất liệu êm ái là gòn lông vũ.  Kết hợp với đó là vải mộc 100% Cotton có tác dụng thấm hút mồ hôi tốt. Tất cả đều nhằm mục đích chăm sóc và bảo vệ sức khỏe của bé được tốt nhất.Những tưởng sản phẩm được tạo ra từ những người thợ lành nghề. Nhưng tất cả đều là nỗ lực của các nghệ nhân đã dành cả tâm huyết, thổi hồn vào từng thiết kế. Do vậy, mẹ nên sớm cân nhắc và mua ngay cho bé chiếc gối nằm đẹp, bền, đầy ý nghĩa này.</div>
          <div className='block-separation'></div>
          <div className='flex beetween my-2'>
            <span className='product__amount'>Số lượng: 10</span>
            <span className='product__sold'>Đã bán: 9</span>
          </div>
          <div id='order' className='btn btn-primary my-2' onClick={handleClick}>Mua hàng</div>
        </div>
      </div>
    </div>

  )
}