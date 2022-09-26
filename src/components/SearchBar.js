import React from 'react';
import { useState, useEffect } from 'react';

const SearchBar = () => {

    const [search, setSearch] = useState("");

    function isValidHttpUrl(string) {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

    function submitter(e) {
        e.preventDefault();

        if (search != "") {
            if (isValidHttpUrl(search)) {
                window.location = search;
            } else {
                window.location = "https://google.com/search?q=" + encodeURIComponent(search);
            }
        }
    }

    return (
        <form className="search" onSubmit={submitter}>
            <input type={"text"} placeholder="Search" onChange={(e) => { setSearch((e.target.value).trim()); }} />
            <i className="fas fa-search"></i>
        </form>
    );
}

export default SearchBar;
