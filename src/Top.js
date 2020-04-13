import logo from "./logo1.png";
import React from "react";
import Axios from "axios";
import Tab from "@material-ui/core/Tab";
import './App.css';
import FavoriteIcon from "@material-ui/icons/Favorite";

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
                <img src={logo} className="logo"/>
                <Tab label="Health" icon={<i className={"fas fa-medkit icons"}/>}/>
                <Tab label="Friends" icon={<i className={"fas fa-paw icons"}/>}/>
                <Tab label="Places" icon={<i className={"fas fa-map-marker-alt icons"}/>}/>
                <Tab label="Sport" icon={<i className={"fas fa-baseball-ball icons"}/>}/>
                <Tab label="Education" icon={<i className={"fas fa-graduation-cap icons"}/>}/>
                <Tab label="Care" icon={<FavoriteIcon/>}/>
                <Tab label="News" icon={<i className={"fas fa-newspaper icons"}/>}/>
                <Tab label="Events" icon={<i className={"fas fa-calendar-alt icons"}/>}/>
                <Tab label="Registration" icon={<i className={"fas fa-registered icons"}/>} href="/registration"/>
                <Tab label={localStorage.getItem("username") != null ? localStorage.getItem("username") : "Log in"}
                     icon={<i className={"fas fa-smile-beam icons"}/>} href="/auth/signin"/>
                <Tab label="Log out"
                     icon={<i className={"fas fa-times-circle icons"} href="/log/out" onClick={sendLogOut}/>}/>


                {/*  <h2>
                    <i className={"fas fa-registered icons"} style={{marginRight: "2%", float: "right"}}/>
                    <a className="topButton" href="/registration">Registration</a>
                </h2>
                <h2>
                    <i className={"fas fa-times-circle"} style={{marginRight: "2%", float: "right"}}/>
                    <a className="topButton" href="/log/out" onClick={sendLogOut}>Log out</a>
                </h2>*/}
                {/*<h2>
                    <i className={"fas fa-smile-beam icons"} style={{marginRight: "1%", float: "right"}}/>
                    <a className="topButton"
                       href="/auth/signin">{localStorage.getItem("username") != null ? localStorage.getItem("username") : "Log in"}</a>
                </h2>*/}
            </div>
        </>
    );
}

export default Top;