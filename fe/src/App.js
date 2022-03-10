import React from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom'
import './App.css'
import SearchForm from './components/SearchForm';
import Account from './components/Account';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen'
import RegisterScreen from './screens/RegisterScreen';

import Thucancun from './components/Thucancun';
import Thucanmeo from './components/Thucanmeo';
import Dochoithucung from './components/Dochoithucung';
import Phukienthucung from './components/Phukienthucung';
import Chuongthucung from './components/Chuongthucung';

//mai mot bo
import ProductDetail from './components/ProductDetail';
// import  from './screens/';


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
                  <Link to='/' className='nav-link'>Sản Phẩm</Link>
                </li>
                <li>
                  <Link to='/' className='nav-link'>Nhãn Hàng</Link>
                </li>
                <li>
                  <Link to='/' className='nav-link'>Giỏ hàng</Link>
                </li>
              </ul>

              <SearchForm />
              <Account />
            </div>
          </div>
        </header>

        <main>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/signin' component={SigninScreen} />
            <Route path='/register' component={RegisterScreen} />
            
            <Route path='/product/:id' component={ProductDetail_Id} />

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
