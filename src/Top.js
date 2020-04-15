import logo from "./logo1.png";
import React from "react";
import Axios from "axios";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/core/Tab";
import './App.css';
import FavoriteIcon from "@material-ui/icons/Favorite";
import PropTypes from "prop-types";

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

    const [value, setValue] = React.useState(0);

    function a11yProps(index) {
        return {
            id: `scrollable-force-tab-${index}`,
            'aria-controls': `scrollable-force-tabpanel-${index}`,
        };
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    return (
        <>
            <div className="top">
                <a href="/"> <img src={logo} className="logo"/></a>
                <Tab label="Health" icon={<i className={"fas fa-medkit icons"} {...a11yProps(0)}/>}/>
                <Tab label="Friends" icon={<i className={"fas fa-paw icons"}{...a11yProps(1)}/>}/>
                <Tab label="Places" icon={<i className={"fas fa-map-marker-alt icons"} {...a11yProps(2)}/>}/>
                <Tab label="Sport" icon={<i className={"fas fa-baseball-ball icons"}{...a11yProps(3)}/>}/>
                <Tab label="Education" icon={<i className={"fas fa-graduation-cap icons"}/>}/>
                <Tab label="Care" icon={<FavoriteIcon/>}/>
                <Tab label="News" icon={<i className={"fas fa-newspaper icons"}/>}/>
                <Tab label="Events" icon={<i className={"fas fa-calendar-alt icons"}/>}/>
                <Tab label="Registration" icon={<i className={"fas fa-registered icons"}/>}
                     href="/registration"/>
                <Tab
                    label={localStorage.getItem("username") != null ? localStorage.getItem("username") : "Log in"}
                    icon={<i className={"fas fa-smile-beam icons"}/>} href="/auth/signin"/>
                <Tab label="Log out" icon={<i className={"fas fa-times-circle icons"} onClick={sendLogOut}/>}/>

                <TabPanel value={value} index={0}>
                    Vet <br/>
                    Pharmacies <br/>
                    Hospitals <br/>
                    Psychologists <br/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Hotels <br/>
                    Restaurants <br/>
                    Pubs <br/>
                    Confectioneries <br/>
                    Stores <br/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Dog running parks <br/>
                    Tours <br/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Schools <br/>
                    Trainers <br/>
                    Day cares <br/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Food shops <br/>
                    Equipment <br/>
                    Walkers and babysitters <br/>
                    Cosmetics <br/>
                    Pet shops <br/>
                    Masseures <br/>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Breaking: A koronát nem kapják el a kutyák.
                </TabPanel>

            </div>
        </>
    );
}

export default Top;