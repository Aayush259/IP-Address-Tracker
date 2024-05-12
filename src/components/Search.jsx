import React from "react";
import ArrowImg from "../images/icon-arrow.svg";

function Search() {

    return (
        <>
        <div id="search" className="flex">
            <label htmlFor="ipInput" className="flex">
                <input type="text" id="ipInput" placeholder="Search for any IP address or domain" />
            </label>
            <button type="button" id="ipSearchBtn"><img src={ArrowImg} alt="Search for IP" /></button>
        </div>
        </>
    )
}

export default Search;