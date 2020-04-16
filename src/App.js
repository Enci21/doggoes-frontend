import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from "./RegistrationForm";
import LogIn from "./LogIn";
import Top from "./Top";
import Geolocation from "./Geolocation";
import PlaceForm from "./PlaceForm";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import PlaceCard from "./PlaceCard";
import WelcomePage from "./WelcomePage";

function App() {
    const [uName, setUName] = useState({uname: localStorage.getItem("username" || "")});

    return (
        <>
            <Top/>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/home" render={(props) => <HomePage {...props} />}/>
                        <Route path="/auth/signin" render={(props) => <LogIn {...props} setUname={setUName}/>}/>
                        <Route path="/registration" render={(props) => <RegistrationForm {...props} uName={uName}/>}/>
                        <Route path="/place/new" render={(props) => <PlaceForm {...props} />}/>
                        <Route path="/place/all" render={(props) => <PlaceCard {...props} />}/>
                        <Route path="/welcome" render={(props) => <WelcomePage {...props} />}/>

                    </Switch>
                </div>
            </Router>
            <Geolocation/>
        </>
    );
}

export default App;
