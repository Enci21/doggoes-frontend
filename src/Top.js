import logo from "./logo1.png";
import React from "react";
import Axios from "axios";

function Top() {

    const sendLogOut = e => {
        e.preventDefault();
        Axios.get("http://localhost:8080/log/out")
            .then(response => {
                if (response.status) {
                    localStorage.removeItem("username");
                    alert("OK")
                }
            })
            .catch(error => alert(error));
    };

    return (
        <>
            <div className="top">
                <h2>
                    <i className={"fas fa-smile-beam icons"} style={{marginRight: "1%", float: "right"}}/>
                    <a className="topButton"
                       href="/auth/signin">{localStorage.getItem("username") != null ? localStorage.getItem("username") : "Log in"}</a>
                </h2>


                <h2>
                    <i className={"fas fa-registered icons"} style={{marginRight: "2%", float: "right"}}/>
                    <a className="topButton" href="/registration">Registration</a>
                </h2>

                <h2>
                    <i className={"fas fa-times-circle"} style={{marginRight: "2%", float: "right"}}/>
                    <a className="topButton" href="/log/out" onClick={sendLogOut}>Log out</a>
                </h2>
            </div>
            <div className="topWithLogo">
                <img src={logo} className="logo"/>
            </div>
        </>
    );
}

export default Top;