import React from 'react';
import './App.css';
import TopBar from "./TopBar";
import RegistrationForm from "./RegistrationForm";
import LogIn from "./LogIn";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <TopBar/>
                    <Switch>
                        <Route path="/auth/signin" component={LogIn}/>
                        <Route path="/registration" component={RegistrationForm}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
