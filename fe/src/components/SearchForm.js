import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

export default function SearchForm() {
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataSubmit = new FormData(event.currentTarget);

        history.push('/search/' + dataSubmit.get('search'));
    }


    return (
        <div className="header__search">
            <form className="header__search-form" onSubmit={handleSubmit}>
                {/* <i className="ti-search header__search-icon"></i> */}
                <input
                    className="header__search-input ml-2"
                    tp="text"
                    id="search"
                    name="search"
                    placeholder="Search"
                />
                <button type="submit" className="btn-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
        </div>
    );
}
