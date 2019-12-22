import React from 'react';
import './App.css';
import TopBar from "./TopBar";
import RegistrationForm from "./RegistrationForm";

function App() {
    return (
        <>
            <TopBar/>
            <div className="App">
                <RegistrationForm/>
            </div>
        </>
    );
}

export default App;
