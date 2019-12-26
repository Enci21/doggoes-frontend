import React, {useState} from 'react';
import './App.css';
import TopBar from "./TopBar";
import RegistrationForm from "./RegistrationForm";
import LogIn from "./LogIn";
import NavigationBar from "./NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

    const [username, setUsername] = useState("");
    const handleUpdateUsername = (newName) => {
        setUsername(newName);
    };

    return (
        <>
            <Router>
                <div className="App">
                    <TopBar/>
                    <NavigationBar/>
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
