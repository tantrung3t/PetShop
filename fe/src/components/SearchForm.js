import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchForm() {

    return (
        <div className="header__search">
            <form className="header__search-form">
                {/* <i className="ti-search header__search-icon"></i> */}
                <input
                    className="header__search-input ml-2"
                    tp="text"
                    placeholder="Search"
                />
                <button className="btn-search"><FontAwesomeIcon icon={ faMagnifyingGlass } /></button>
            </form>
        </div>
    );
}
