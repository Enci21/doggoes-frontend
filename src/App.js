import React, {useState} from 'react';
import './App.css';
import TopBar from "./TopBar";
import RegistrationForm from "./RegistrationForm";
import LogIn from "./LogIn";
import NavigationBar from "./NavigationBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    const [username, setUsername] = useState("");

    function handleUpdateUsername(newName) {
        setUsername(newName);
    }

    return (
        <>
            <Router>
                <div className="App">
                    <TopBar/>
                    <NavigationBar/>
                    <Switch>
                        <Route path="/auth/signin"
                               render={(props) => <LogIn {...props} handleUpdateUsername={handleUpdateUsername}/>}/>
                        <Route path="/registration" component={RegistrationForm}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
