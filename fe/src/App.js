import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'
// import { Redirect } from 'react-router'
import './App.css'
import SearchForm from './components/SearchForm';
import Account from './components/Account';
import ProductDetail from './components/ProductDetail';
import { ProductMiniCartItem } from './components/Product';

import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen'
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import AdminScreen from './screens/AdminScreen'
import CartScreen from './screens/CartScreen'

import Thucancun from './components/Thucancun';
import Thucanmeo from './components/Thucanmeo';
import Dochoithucung from './components/Dochoithucung';
import Phukienthucung from './components/Phukienthucung';
import Chuongthucung from './components/Chuongthucung';

import Thongke from './components/Thongke'
import AdminProduct from './components/AdminProduct'


//mai mot bo


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

// import {} from '';

function App() {
  const url = "http://localhost:3003";

  const productMiniCartItem = [
    {
      product_id: 1,
      product_name: 'Lồng vận chuyểnLồng vận chuyểnLồng vận chuyểnLồng vận chuyểnLồng vận chuyển',
      product_price: 509000,
      product_image: '/image/longvanchuyen.png',
      product_amount: 100,
      product_sold: 14,
      product_description: '<p><strong>Lồng vận chuyển Ferplast Atlas Professional 70 (91x61x67cm)</strong><br>Có nắp cà tiện dụng, thiết kế hiện đại thoáng mát, giúp thú cưng nhà bạn cực kỳ thoải mái trong các chuyến đi xa.Lồng vận chuyển cho chó mèo, chất liệu tốt, bền, đẹp, chắc chắn.</p><p>Chất liệu nhựa cao cấp, không chứa chất độc hại, không gây kích ứng</p><p>Vali đạt chuẩn qui định IATA giúp có thể vận chuyển dễ dàng thú cưng khi đi máy bay, tàu thủy hoặc tàu hỏa. Với thiết kế khóa an toàn, tay cầm tiện lợi cùng với loại nhựa tốt đến từ Ý sẽ tạo sự an toàn nhất cho thú cưng.</p><p>Kích thước: 91x61x67cm</p>',
      product_brand_name: 'Ferplast',
      product_type_name: 'Chuồng thú cưng'
    },
    {
      product_id: 1,
      product_name: 'Lồng vận chuyển',
      product_price: 509000,
      product_image: '/image/longvanchuyen.png',
      product_amount: 100,
      product_sold: 14,
      product_description: '<p><strong>Lồng vận chuyển Ferplast Atlas Professional 70 (91x61x67cm)</strong><br>Có nắp cà tiện dụng, thiết kế hiện đại thoáng mát, giúp thú cưng nhà bạn cực kỳ thoải mái trong các chuyến đi xa.Lồng vận chuyển cho chó mèo, chất liệu tốt, bền, đẹp, chắc chắn.</p><p>Chất liệu nhựa cao cấp, không chứa chất độc hại, không gây kích ứng</p><p>Vali đạt chuẩn qui định IATA giúp có thể vận chuyển dễ dàng thú cưng khi đi máy bay, tàu thủy hoặc tàu hỏa. Với thiết kế khóa an toàn, tay cầm tiện lợi cùng với loại nhựa tốt đến từ Ý sẽ tạo sự an toàn nhất cho thú cưng.</p><p>Kích thước: 91x61x67cm</p>',
      product_brand_name: 'Ferplast',
      product_type_name: 'Chuồng thú cưng'
    }
  ]
  // console.log(productMiniCartItem)

  // const showCart = (cart) => {
  //   cart.length === 0 ? console.log("rong") : console.log(cart);
  // }
  // showCart(productMiniCartItem);

  // const handleShowCart = () => {
  // }

  const navLinks = [
    {
      name: 'Sản Phẩm',
      to: '/products',
      exact: false
    },
    {
      name: 'Nhãn Hàng',
      to: '/brand',
      exact: false
    },
    {
      name: 'Giới Thiệu',
      to: '/',
      exact: true
    }
  ];

  const NavLink = ({ lable, to, isExact }) => {
    return (
      <Route
        path={to}
        exact={isExact}
        children = {({ match }) => {
          var active = match ? 'active' : '';
          return (
            <li className='nav-item'>
              <Link to={to} className={'nav-link ' + active}>{lable}</Link>
            </li>
          );
        }}
      />
    );
  }

  const showNavLink = (navLinks) => {
    let result = null; 
    if(navLinks.length > 0) {
      result = navLinks.map((navLink, index) => {
        return (
          <NavLink
            key={index}
            lable={navLink.name}
            to={navLink.to}
            isExact={navLink.exact}
          />
        );
      });
    }
    return result;
  }

  return (
    <Router>
      <div className='grid-container'>
        <header className='header__navbar'>
          <div className='grid'>
            <div className='navbar'>
              <Link className='flex center' to='/'>
                <img src='../assets/img/logo.svg' alt='logo' width='200px' ></img>
              </Link>
              <ul className='navbar'>
                {showNavLink(navLinks)}
              </ul>

              <SearchForm />
              <div className='header__cart'>
                <Link to='/cart' className='header__cart-icon'>
                  <FontAwesomeIcon icon={faCartShopping} className='header__cart-icon' color='white' />
                </Link>
                {
                  productMiniCartItem.length === 0 ? (
                    <div className='header__cart-list center'>
                      <img src='../assets/img/no-item.png' alt='img' width='100%'></img>
                      <span>Chưa có sản phẩm</span>
                    </div>
                  ) : (
                    <div className='header__cart-list'>
                      <span className='px-2' style={{textTransform: "capitalize"}}>Sản phẩm mới thêm</span>
                      {
                        productMiniCartItem.map((product, index) =>
                          <ProductMiniCartItem
                            key={index}
                            id={product.product_id}
                            src={url + product.product_image}
                            name={product.product_name}
                            price={product.product_price}
                          />
                        )
                      }
                      <div className='btn btn-primary' onClick={() => document.location.href ="/cart"}>Xem Giỏ Hàng</div>
                      {/* <div className='btn btn-primary' onClick={handleShowCart}>Xem Giỏ Hàng</div> */}
                    </div>
                  )
                }
              </div>
              <Account />
            </div>
          </div>
        </header>

        <main>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/signin' render={() => {
            return (localStorage.getItem('user') !== "") ? <HomeScreen /> : <SigninScreen />
          }}
          />
          {/* Cho nay bi loi nen can phai sua lai ne */}
          {/* Loi bi chen them the <div> cua ulr /products roi moi den /:id */}
          <Route path='/product/:id' component={ProductDetail_Id} />

          <Route path='/products' component={ProductsScreen} />
          <Route path='/products/:id' component={ProductDetail_Id} />

          <Route path='/cart' component={CartScreen} />
          <Route path='/admin' component={Admin} />

          <Route path='/thucancun' component={Thucancun} />
          <Route path='/thucanmeo' component={Thucanmeo} />
          <Route path='/dochoithucung' component={Dochoithucung} />
          <Route path='/phukienthucung' component={Phukienthucung} />
          <Route path='/chuongthucung' component={Chuongthucung} />
        </main>

        <footer className='flex'>
          <div className='grid footer'>
            <Link className='header__brand' to='/'>T2K Shop</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function ProductDetail_Id() {
  let { id } = useParams();
  return (
    <ProductDetail id={id} />
  )
}

function Admin() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={AdminScreen} />
      <Route path='/admin/sanpham' component={AdminProduct} />
      <Route path='/admin/thongke' component={Thongke} />
    </Switch>
  )
}

export default App;
