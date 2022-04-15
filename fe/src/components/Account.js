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

  return (
    <div>
      {
        user === "" ? (
          <div className="account-wrap link mr-4">
            <Link to="/signin" className="header__account">
              <span className="flex left">
                <i className="flex center"><FontAwesomeIcon icon={faUser} fontSize={20} /></i>Tài khoản
              </span>
            </Link>
          </div>
        ) : (
          <div className="flex left">
            <div className="account-wrap link">
              <Link to="/profile" className="header__account">
                <span className="flex left">
                  <i className="flex center">hi</i>{user}
                </span>
              </Link>
            </div>
            <div className="account__selection-icon">
              <i className="flex center"><FontAwesomeIcon icon={faAngleDown} fontSize={20} /></i>
              <div className="account__selection">
                <div id="logout" className="btn btn-primary"
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
    </div>
  );
}