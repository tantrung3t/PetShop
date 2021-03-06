import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons'

// localStorage.setItem('user', "");

const user = localStorage.getItem('user');

export default function Account() {

  // const handleSignOff =  () => {
  //   localStorage.setItem('user', "");
  //   window.location.reload();
  // } 

  const render = () => {
    if (user === "") {
      return (
        <div className="account-wrap link mr-4">
          <Link to="/signin" className="header__account">
            <span className="flex left">
              <i className="flex center mr-1"><FontAwesomeIcon icon={faUser} fontSize={20} /></i>Tài khoản
            </span>
          </Link>
        </div>
      )
    }
    else if (user === "Admin") {
      return (
        <div className="flex left">
          <div className="account-wrap link">
            <Link to="/profile" className="header__account">
              <span className="flex left">
                <i className="flex center mr-1">AD</i>{user}
              </span>
            </Link>
          </div>
          <div className="account__selection-icon">
            <i className="flex center"><FontAwesomeIcon icon={faAngleDown} fontSize={20} /></i>
            <div className="account__selection">
              <div id="dashboard" className="btn btn-primary btn-selection"
                onClick={() => {
                  window.location = "/admin";
                }}
              >Quản lý T2K Shop</div>
              <div id="logout" className="btn btn-primary btn-selection"
                onClick={() => {
                  localStorage.setItem("user", "");
                  localStorage.setItem("token", "");
                  localStorage.setItem("profile", "");
                  window.location = "/signin";
                }}
              >Đăng xuất</div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="flex left">
          <div className="account-wrap link">
            <Link to="/profile" className="header__account">
              <span className="flex left">
                <i className="flex center mr-1">hi</i>{user}
              </span>
            </Link>
          </div>
          <div className="account__selection-icon">
            <i className="flex center"><FontAwesomeIcon icon={faAngleDown} fontSize={20} /></i>
            <div className="account__selection">
              <Link to="/orders" className="btn btn-primary btn-selection">
                Lịch sử mua hàng
              </Link>
              <Link to="/profile" className="btn btn-primary btn-selection">
                Thông tin cá nhân
              </Link>
              <Link to="/changepassword" className="btn btn-primary btn-selection">
                Đổi mật khẩu
              </Link>
              <div id="logout" className="btn btn-primary btn-selection"
                onClick={(e) => {
                  e.preventDefault;
                  localStorage.setItem("user", "");
                  localStorage.setItem("token", "");
                  localStorage.setItem("profile", "");
                  window.location = "/signin";
                }}
              >Đăng xuất</div>
            </div>

          </div>
        </div>
      )
    }
  }

  return (
    render()
  )
}