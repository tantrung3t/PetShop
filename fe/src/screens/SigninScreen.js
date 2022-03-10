import React, { useState } from "react"
import "./SigninScreen.css"
import axios from "axios"

export default function Account() {

  const [isContainerActive, setIsContainerActive] = useState('');

  const changeSignUp = () => {
    setIsContainerActive('right-panel-active');
  }
  const changeSignIn = () => {
    setIsContainerActive('');
  }



  const handleSignIn = (event) => {

    event.preventDefault();
    const dataSubmit = new FormData(event.currentTarget);


    var data = JSON.stringify({
      "username": dataSubmit.get('username'),
      "password": dataSubmit.get('password')
    });

    var config = {
      method: 'post',
      url: 'http://localhost:3003/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        if(response.data.name === undefined) {
          localStorage.setItem('user', "")
          alert('Dang nhap khong thanh cong')
        }
        else {
          localStorage.setItem('user', response.data.name)
          localStorage.setItem('token', response.data.token)
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      

    }

  const handleSignUp = (event) => {

    event.preventDefault();
    const dataSubmit = new FormData(event.currentTarget);

    var data = JSON.stringify({
      "username": dataSubmit.get('username'),
      "password": dataSubmit.get('password')
    });

    var config = {
      method: 'post',
      url: 'http://localhost:3003/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        if(response.data.name === undefined) {
          localStorage.setItem('user', "")
          alert('Dang nhap khong thanh cong')
        }
        else {
          localStorage.setItem('user', response.data.name)
          localStorage.setItem('token', response.data.token)
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      

  }

  return (

    <div className="body-sign">
      <div className={`container-sign ${isContainerActive}`}>
        <div className="form-container sign-up-container">
          <form className="form-sign" onSubmit={handleSignUp}>
            <h1 className="h1-sign">Tạo tài khoản</h1>
            <input className="input-sign" type="text" placeholder="Tên đăng nhập" />
            <input className="input-sign" type="password" placeholder="Nhập mật khẩu" />
            <input className="input-sign" type="password" placeholder="Nhập lại mật khẩu" />
            <input className="input-sign" type="text" placeholder="Nhập họ tên" />
            <input className="input-sign" type="email" placeholder="Nhập email" />

            <button type="submit" className="button-sign my-2">Đăng ký</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn} className="form-sign">
            <h1 className="h1-sign">Đăng nhập</h1>

            <input name="username" className="input-sign" type="text" placeholder="Tên tài khoản" />
            <input name="password" className="input-sign" type="password" placeholder="Mật khẩu" />
            <h4>Quên mật khẩu</h4>
            <button type="submit" className="button-sign">Đăng nhập</button>

          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng trở lại!</h1>
              <p>Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân mà bạn đã đăng ký!</p>
              <button onClick={changeSignIn} className="button-sign ghost" id="signIn">Đăng nhập</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Xin chào bạn!</h1>
              <p>Nếu bạn chưa có tài khoản, hãy thử tạo tài khoản tại đây!</p>
              <button onClick={changeSignUp} className="button-sign ghost" id="signUp">Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}