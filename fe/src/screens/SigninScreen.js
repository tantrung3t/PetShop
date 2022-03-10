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



  const handleSubmit = (event) => {
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
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  const handleSignIn = () => {
    alert("Đăng nhập thành công!");
  }

  const handleSignUp = () => {
    alert("Đăng ký thành công!");

  }

  return (

    <div className="body-sign">
      <div className={`container-sign ${isContainerActive}`}>
        <div className="form-container sign-up-container">
          <form className="form-sign">
            <h1 className="h1-sign">Create Account</h1>
            <input className="input-sign" type="text" placeholder="Name" />
            <input className="input-sign" type="email" placeholder="Email" />
            <input className="input-sign" type="password" placeholder="Password" />
            <input className="input-sign" type="password" placeholder="Password" />
            <button className="button-sign my-2" onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit} className="form-sign">
            <h1 className="h1-sign">Sign in</h1>

            <input name="username" className="input-sign" type="text" placeholder="Username" />
            <input name="password" className="input-sign" type="password" placeholder="Password" />
            <h4>Forgot password</h4>
            <button type="submit" className="button-sign">Sign In</button>

          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={changeSignIn} className="button-sign ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={changeSignUp} className="button-sign ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}