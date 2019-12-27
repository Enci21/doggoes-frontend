import React, {useState} from 'react';
import './App.css';
import TopBar from "./TopBar";
import RegistrationForm from "./RegistrationForm";
import LogIn from "./LogIn";
import NavigationBar from "./NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    const [uName, setUName] = useState(localStorage.getItem("username") || "");

    return (
        <>
            <Router>
                <div className="App">
                    <TopBar/>
                    <NavigationBar/>
                    <Switch>
                        <Route path="/auth/signin" render={(props) => <LogIn {...props} setUname={setUName}/>}/>
                        <Route path="/registration" render={(props) => <RegistrationForm {...props} uName={uName}/>}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
