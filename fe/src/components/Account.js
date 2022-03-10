import React from "react"
import { Link } from "react-router-dom";

// localStorage.setItem('user', "");

const user = localStorage.getItem('user');

export default function Account() {
  return (
    <div className="account-wrap link">
      {
        user==="" ? (
          <Link to="/signin" className="header__account">
            <span><i className="ti-user"></i>Tài khoản</span>
          </Link>
        ) : (
          <Link to="/signin" className="header__account">
            <span>
            <i className="ti-user mr-1"></i>{user}
            </span>
          </Link>
        )
      }
    </div>
  );
}