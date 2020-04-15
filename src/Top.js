import logo from "./logo1.png";
import React from "react";
import Axios from "axios";
import Tab from "@material-ui/core/Tab";
import './App.css';
import {Dropdown} from "react-bootstrap";
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
            <div className="#root">
                <a href="/"> <img src={logo} className="logo"/></a>

                <Dropdown>
                    <Dropdown.Toggle variant="" id="" className="dropdown">
                        <Tab label="Health" icon={<i className={"fas fa-medkit icons"}/>}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="">Vet</Dropdown.Item>
                        <Dropdown.Item href="">Pharmacies</Dropdown.Item>
                        <Dropdown.Item href="">Hospitals</Dropdown.Item>
                        <Dropdown.Item href="">Psychologists</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Tab label="Friends" icon={<i className={"fas fa-paw icons"}/>}/>

                <Dropdown>
                    <Dropdown.Toggle variant="" id="" className="dropdown">
                        <Tab label="Places" icon={<i className={"fas fa-map-marker-alt icons"}/>}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/place/new">Recommend new place</Dropdown.Item>
                        <Dropdown.Item href="">Hotels</Dropdown.Item>
                        <Dropdown.Item href="">Restaurants</Dropdown.Item>
                        <Dropdown.Item href="">Pubs</Dropdown.Item>
                        <Dropdown.Item href="">Confectioneries</Dropdown.Item>
                        <Dropdown.Item href="">Stores</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Tab label="Sport" icon={<i className={"fas fa-baseball-ball icons"}/>}/>
                <Tab label="Education" icon={<i className={"fas fa-graduation-cap icons"}/>}/>
                <Tab label="Care" icon={<FavoriteIcon/>}/>
                <Tab label="News" icon={<i className={"fas fa-newspaper icons"}/>}/>
                <Tab label="Events" icon={<i className={"fas fa-calendar-alt icons"}/>}/>
                <Tab label="Registration" icon={<i className={"fas fa-registered icons"}/>} href="/registration"/>
                <Tab label={localStorage.getItem("username") != null ? localStorage.getItem("username") : "Log in"}
                     icon={<i className={"fas fa-smile-beam icons"}/>} href="/auth/signin"/>
                <Tab label="Log out" icon={<i className={"fas fa-times-circle icons"} onClick={sendLogOut}/>}/>

            </div>
        </>
    );
}

export default Top;