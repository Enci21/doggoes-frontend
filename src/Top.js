import logo from "./logo1.png";
import React, {useContext} from "react";
import Axios from "axios";
import Tab from "@material-ui/core/Tab";
import './App.css';
import {Dropdown} from "react-bootstrap";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {makeStyles} from "@material-ui/core";
import {PlaceContext} from "./PlaceContext";

const useStyles = makeStyles({
    dropdown: {
        float: 'left',
        padding: '6px, 0px',
    },

    tab: {
        minWidth: '85px',
    },
});

function Top() {

    /*
        const placeOnClickEvents = function () {
            getPlaces();
            PlaceCard
        };
    */

    const {setPlaces} = useContext(PlaceContext);

    const getPlaces = () => {
        Axios.get("http://localhost:8080/place/all")
            .then(response => {
                console.log(response.data);
                setPlaces(response.data);
            })

            .catch(error => alert(error));
    };

    const sendLogOut = e => {
        e.preventDefault();
        Axios.get("http://localhost:8080/log/out")
            .then(response => {
                if (response.status === 200) {
                    localStorage.removeItem("username");
                    window.location = '/home';
                }
            })
            .catch(error => alert(error));
    };

    const classes = useStyles();

    const isLoggedIn = localStorage.getItem("username");

    return (
        <>
            <div className="#root">
                <a href="/home"> <img src={logo} className="logo"/></a>

                <Dropdown className={classes.dropdown}>
                    <Dropdown.Toggle variant="" id="">
                        <Tab classes={{wrapper: classes.tab, root: classes.tab}} label="Health"
                             icon={<i className={"fas fa-medkit icons"}/>}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="">Vet</Dropdown.Item>
                        <Dropdown.Item href="">Pharmacies</Dropdown.Item>
                        <Dropdown.Item href="">Hospitals</Dropdown.Item>
                        <Dropdown.Item href="">Psychologists</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown className={classes.dropdown}>
                    <Dropdown.Toggle variant="" id="">
                        <Tab classes={{wrapper: classes.tab, root: classes.tab}} label="Friends"
                             icon={<i className={"fas fa-paw icons"}/>}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown className={classes.dropdown}>
                    <Dropdown.Toggle variant="" id="">
                        <Tab onClick={getPlaces} classes={{wrapper: classes.tab, root: classes.tab}} label="Places"
                             icon={<i className={"fas fa-map-marker-alt icons"}/>}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/place/new">Recommend new place</Dropdown.Item>
                        <Dropdown.Item href="/place/all">All</Dropdown.Item>
                        <Dropdown.Item href="">Hotels</Dropdown.Item>
                        <Dropdown.Item href="">Restaurants</Dropdown.Item>
                        <Dropdown.Item href="">Pubs</Dropdown.Item>
                        <Dropdown.Item href="">Confectioneries</Dropdown.Item>
                        <Dropdown.Item href="">Stores</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown className={classes.dropdown}>
                    <Dropdown.Toggle variant="" id="">
                        <Tab classes={{wrapper: classes.tab, root: classes.tab}} label="Sport"
                             icon={<i className={"fas fa-baseball-ball icons"}/>}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown className={classes.dropdown}>
                    <Dropdown.Toggle variant="" id="">
                        <Tab classes={{wrapper: classes.tab, root: classes.tab}} label="Education"
                             icon={<i className={"fas fa-graduation-cap icons"}/>}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown className={classes.dropdown}>
                    <Dropdown.Toggle variant="" id="">
                        <Tab classes={{wrapper: classes.tab, root: classes.tab}} label="Care"
                             icon={<FavoriteIcon/>}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown className={classes.dropdown}>
                    <Dropdown.Toggle variant="" id="">
                        <Tab classes={{wrapper: classes.tab, root: classes.tab}} label="Events"
                             icon={<i className={"fas fa-calendar-alt icons"}/>}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown className={classes.dropdown}>
                    <Dropdown.Toggle variant="" id="">
                        <Tab classes={{wrapper: classes.tab, root: classes.tab}} label="News"
                             icon={<i className={"fas fa-newspaper icons"}/>}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>

                {isLoggedIn

                    ?
                    <div>
                        <Tab classes={{wrapper: classes.tab, root: classes.tab}}
                             style={{marginLeft: "2%", marginTop: "10px"}}
                             label={localStorage.getItem("username") != null ? localStorage.getItem("username") : "Log in"}
                             icon={<i className={"fas fa-smile-beam icons"}/>} href="/auth/signin"/>

                        <Tab classes={{wrapper: classes.tab, root: classes.tab}}
                             style={{marginLeft: "2%", marginTop: "10px"}}
                             label="Log out"
                             icon={<i className={"fas fa-times-circle icons"} onClick={sendLogOut}/>}/>
                    </div>

                    :

                    <div>
                        <Tab classes={{wrapper: classes.tab, root: classes.tab}}
                             style={{marginLeft: "2%", marginTop: "10px"}}
                             label={localStorage.getItem("username") != null ? localStorage.getItem("username") : "Log in"}
                             icon={<i className={"fas fa-smile-beam icons"}/>} href="/auth/signin"/>

                        <Tab classes={{wrapper: classes.tab, root: classes.tab,}}
                             style={{marginLeft: "2%", marginTop: "10px"}}
                             label="Registration" icon={<i className={"fas fa-registered icons"}/>}
                             href="/registration"/>
                    </div>
                }
            </div>
        </>
    );
}

export default Top;