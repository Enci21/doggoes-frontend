import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from "./RegistrationForm";
import LogIn from "./LogIn";
import Top from "./Top";
import Geolocation from "./Geolocation";
import PlaceForm from "./PlaceForm";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    const [uName, setUName] = useState({uname: localStorage.getItem("username" || "")});

    return (
        <>
            <Top/>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/auth/signin" render={(props) => <LogIn {...props} setUname={setUName}/>}/>
                        <Route path="/registration" render={(props) => <RegistrationForm {...props} uName={uName}/>}/>
                        <Route path="/place/new" render={(props) => <PlaceForm {...props} />}/>
                    </Switch>
                </div>
            </Router>
            <Geolocation/>
        </>
    );
}

export default App;
