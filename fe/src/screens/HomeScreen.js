import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {

  const [data, setData] = useState([]);

  setData({
    id: 1,
    name: 'abc'
  })

  console.log(data);

  return (
    <div>
      <div className="banner">
        <img src="../assets/img/banner.jpg" alt="banner" style={{ width: '100%' }}></img>
      </div>
      <center className="home__title">Sản phẩm của T2K Shop</center>
      <div className="category-wrap my-4">
        <div className="row center my-2">
          <Link to='/'>
            <img src="../assets/img/thuc-an-cho.png" alt="Thức ăn chó" width='200px' className="category-item"></img>
          </Link>
          <Link to='/'>
            <img src="../assets/img/thuc-an-meo.png" alt="Thức ăn mèo" width='200px' className="category-item"></img>
          </Link>
          <Link to='/'>
            <img src="../assets/img/do-choi-thu-cung.png" alt="Đồ chơi thú cưng" width='200px' className="category-item"></img>
          </Link>
        </div>
        <div className="row center my-2">
          <Link to='/'>
            <img src="../assets/img/phu-kien-thu-cung.png" alt="Phụ kiện thú cưng" width='200px' className="category-item"></img>
          </Link>
          <Link to='/'>
            <img src="../assets/img/chuong-thu-cung.png" alt="Chuồng thú cưng" width='200px' className="category-item"></img>
          </Link>
        </div>
      </div>
      <div className="grid">
        <div className="home__container">
          <span className="home__title">Sản phẩm bán chạy</span>
          <div className="block-separation my-3"></div>
          <div className="row row-cols-6 home__products">

          </div>
        </div>
        <div className="home__container">
          <span className="home__title">Sản phẩm khuyến mãi</span>
          <div className="block-separation my-3"></div>
          <div className="row row-cols-6 home__products">
            
          </div>
        </div>
      </div>
    </div>
  );
}