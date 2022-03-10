import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

// localStorage.setItem('user', "");

const user = localStorage.getItem('user');

export default function Account() {

  const handleSignOff =  () => {
    localStorage.setItem('user', "");
    window.location.reload();
  } 

  return (
    <div className="account-wrap link">
      {
        user === "" ? (
          <Link to="/signin" className="header__account">
            <span className="flex left">
              <i className="flex center"><FontAwesomeIcon icon={faUser} fontSize={20} /></i>Tài khoản
            </span>
          </Link>
        ) : (
          <div>
            <Link to="/signin" className="header__account">
              <span className="flex left">
                <i className="flex center">hì</i>{user}
              </span>
            </Link>
            <div>
              <button onClick={handleSignOff}>dang xuat</button>
            </div>
          </div>
        )
      }
    </div>
  );
}