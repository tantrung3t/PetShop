import React, { useState } from "react"
import "./SigninScreen.css"

export default function Account() {

  //  const signUpButton = document.getElementById('signUp');
  //    const signInButton = document.getElementById('signIn');
  //   const container = document.getElementById('container');

  //   signUpButton.addEventListener('click', () => {
  //     container.classList.add("right-panel-active");
  //   });

  //   signInButton.addEventListener('click', () => {
  //     container.classList.remove("right-panel-active");
  //   });

  const [isContainerActive, setIsContainerActive] = useState('');
  
  const changeSignUp = () => {
    setIsContainerActive('right-panel-active');
  }
  const changeSignIn = () => {
    setIsContainerActive('');
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
          <form className="form-sign" action="#">
            <h1 className="h1-sign">Create Account</h1>
            <input className="input-sign" type="text" placeholder="Name" />
            <input className="input-sign" type="email" placeholder="Email" />
            <input className="input-sign" type="password" placeholder="Password" />
            <input className="input-sign" type="password" placeholder="Password" />
            <button className="button-sign my-2" onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form-sign" action="#">
            <h1 className="h1-sign">Sign in</h1>
            <input className="input-sign" type="email" placeholder="Email" />
            <input className="input-sign" type="password" placeholder="Password" />
            {/* <h4>Forgot password</h4> */}
            <button className="button-sign my-2" onClick={handleSignIn}>Sign In</button>
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