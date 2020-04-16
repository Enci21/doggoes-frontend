import React from "react";

function WelcomePage() {

    return (
        <h1 style={{fontWeight: "bold"}}>Welcome {localStorage.getItem("username")}</h1>
    )
}

export default WelcomePage;