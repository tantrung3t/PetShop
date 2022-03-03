import React, { useState } from "react";
// import { Link } from "react-router-dom";

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
                <button className="btn-search"><i className="ti-search"></i></button>
            </form>
        </div>
    );
}
