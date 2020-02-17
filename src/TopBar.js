import React from "react";

function TopBar() {

    return (
        <div className="top-bar">
            <img src="logo1.png" className="logo"/>
            <button className="nav-button">Registration</button>
            <button className="nav-button">Sign in</button>
        </div>
    );

}

export default TopBar;