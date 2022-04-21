import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch  } from 'react-router-dom'
import axios from 'axios';  

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
// import AdminScreen from './screens/AdminScreen'
import CartScreen from './screens/CartScreen'
import ProfileScreen from './screens/ProfileScreen'
import BrandScreen from './screens/BrandScreen'
import ListOrdersScreen from './screens/ListOrdersScreen'
import OrderScreen from './screens/OrderScreen'
import SearchScreen from './screens/SearchScreen'

import Thucancun from './components/Thucancun';
import Thucanmeo from './components/Thucanmeo';
import Dochoithucung from './components/Dochoithucung';
import Phukienthucung from './components/Phukienthucung';
import Chuongthucung from './components/Chuongthucung';

import Thongke from './components/Thongke'
import AdminProduct from './components/AdminProduct'
import AdminOrder from './components/AdminOrder';

import Thanhtoan from './screens/Thanhtoan'



//mai mot bo


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

// import {} from '';



function App() {
  const url = "http://localhost:3003";

  const [productCart, setProductCart] = useState([]);
  const [onChangeCart, setOnChangeCart] = useState()

  useEffect(() => {
    checkToken()
    loadData()
  }, [onChangeCart]);

  const checkToken = () => {
    axios.get(`http://localhost:3003/private/` + localStorage.getItem('token'))
      .then(res => {
        const data = res.data;
        console.log(data)
        if(data.status === 401){
          localStorage.setItem('user', "")
          localStorage.setItem('profile', "")
        }
        
      }) 
      .catch(error => console.log(error));
  }
  const loadData = () => {

    axios.get(`http://localhost:3003/products/cart/` + localStorage.getItem('token'))
      .then(res => {
        const data = res.data;
        if(data.status !== 401) setProductCart(data);
      }) 
      .catch(error => console.log(error));
  }
  
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
    // {
    //   name: 'Giới Thiệu',
    //   to: '/footer',
    //   exact: true
    // }
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
console.log(productCart)
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
                {productCart.length}
                {
                  productCart.length === 0 ? (
                    <div className='header__cart-list center'>
                      <img src='../assets/img/no-item.png' alt='img' width='100%'></img>
                      <span>Chưa có sản phẩm</span>
                    </div>
                  ) : (
                    <div className='header__cart-list'>
                      <span className='px-2' style={{textTransform: "capitalize"}}>Sản phẩm mới thêm</span>
                      {
                        productCart.map((product, index) =>
                          <ProductMiniCartItem
                            key={index}
                            id={product.product_id}
                            src={url + product.product_image}
                            name={product.product_name}
                            price={product.product_price}
                          />
                        )
                      }
                      <div className='btn btn-primary' onClick={() => window.location ="/cart"}>Xem Giỏ Hàng</div>
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
          <Route path='/brand' component={BrandScreen} />
          <Route path='/signin' render={() => {
            return (localStorage.getItem('user') !== "") ? <HomeScreen /> : <SigninScreen />
          }}
          />
          <Route path='/search/:id' component={Search} />
          <Route path='/products' component={Products} />
          <Route path='/cart' render={() => {
            return (localStorage.getItem('user') !== "") ? <CartScreen onChangeCart={value => setOnChangeCart(value)} /> : <SigninScreen />
          }}/>
          <Route path='/orders' render={() => {
            return (localStorage.getItem('user') !== "") ? <ListOrdersScreen /> : <SigninScreen />
          }}/>
          <Route path='/order' render={() => {
            return (localStorage.getItem('user') !== "") ? <Order /> : <SigninScreen />
          }}/>
          
          <Route path='/admin'  render={() => {
            return (localStorage.getItem('user') === "Admin") ? <Admin /> : <SigninScreen />
          }}/>
          <Route path='/profile' component={ProfileScreen} />

          <Route path='/thucancun' component={Thucancun} />
          <Route path='/thucanmeo' component={Thucanmeo} />
          <Route path='/dochoithucung' component={Dochoithucung} />
          <Route path='/phukienthucung' component={Phukienthucung} />
          <Route path='/chuongthucung' component={Chuongthucung} />
          <Route path='/thanhtoan' component={Thanhtoan} />
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

function Search(){
  let {id} = useParams();
  return (
    <SearchScreen id={id}/>
  )
}

function ProductDetail_Id() {
  let { id } = useParams();
  return (
    <ProductDetail id={id} />
  )
}
function Products(){
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={ProductsScreen} />
      <Route path='/products/:id' component={ProductDetail_Id} />
    </Switch>
  )
}
function Admin() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Thongke} />
      <Route path='/admin/sanpham' component={AdminProduct} />
      <Route path='/admin/thongke' component={Thongke} />
      <Route path='/admin/dathang' component={AdminOrder} />
    </Switch>
  )
}

function Order() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={ListOrdersScreen} />
      <Route path='/order/:id' component={OrderScreen} />
    </Switch>
  )
}

<Route path='/order/:id' component={OrderScreen} />

export default App;
