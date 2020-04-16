import React from "react";
import Axios from "axios";

function homePage() {

    const goHome = e => {
        e.preventDefault();
        Axios.get("http://localhost:8080/home")
            .then(response => {
                if (response.status) {
                    alert("OK")
                }
            })
            .catch(error => alert(error));
    };

    return (

        <h1 style={{fontWeight: "bold", float: "left"}}>Today most populars</h1>

    )
}

export default homePage;