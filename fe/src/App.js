import React from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom'
import './App.css'
import SearchForm from './components/SearchForm';
import Account from './components/Account';
import ProductDetail from './components/ProductDetail';

import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen'
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';

import Thucancun from './components/Thucancun';
import Thucanmeo from './components/Thucanmeo';
import Dochoithucung from './components/Dochoithucung';
import Phukienthucung from './components/Phukienthucung';
import Chuongthucung from './components/Chuongthucung';


import Allproduct from './components/Allproduct';

//mai mot bo


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

// import {} from '';


function App() {
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
                <li className='nav-item'>
                  <Link to='/products' className='nav-link'>Sản Phẩm</Link>
                </li>
                <li>
                  <Link to='/' className='nav-link'>Nhãn Hàng</Link>
                </li>
                <li>
                  <Link to='/' className='nav-link'>Giỏ hàng</Link>
                </li>
              </ul>

              <SearchForm />
              <div className='header__cart'>
                <div className='header__cart-icon'>
                  <FontAwesomeIcon icon={faCartShopping} className='header__cart-icon' color='white'/>
                </div>
                <div className='header__cart-list'>
                  <img src='../assets/img/no-item.png' alt='img' width='100%' ></img>
                  <span>Chưa có sản phẩm</span>
                </div>
              </div>
              <Account />
            </div>
          </div>
        </header>

        <main>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/signin' render={() => {

                                          return (localStorage.getItem('user') !== "") ? <HomeScreen /> : <SigninScreen />}} />

            <Route path='/products' component={Allproduct} />


            {/* Cho nay bi loi nen can phai sua lai ne */}
            {/* Loi bi chen them the <div> cua ulr /products roi moi den /:id */}
            <Route path='/product/:id' component={ProductDetail_Id} />

            <Route path='/register' component={RegisterScreen} />
            <Route path='/products' component={ProductsScreen} />
            
            <Route path='/products/:id' component={ProductDetail_Id} />


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

function ProductDetail_Id(){
  let {id } = useParams();

  return (
    <ProductDetail id={id}/>
  )
}

export default App;
