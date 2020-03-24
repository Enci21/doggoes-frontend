import React, {useState} from "react";
import Axios from "axios";
import './regForm.css';

function RegistrationForm() {

    const [user, setUser] = useState({firstname: "", lastname: "", password: "", email: "", pwagain: ""});
    const showUserDetails = e => {
        e.preventDefault();
        Axios.post("http://localhost:8080/registration", user)
            .then(response => {
                if (response.status) {
                    alert("OK");
                }
            })
            .catch(error => alert(error));
    };

    return (
        <fieldset className="reg-card">
            <p className="input-names">Sign up</p>
            <form onSubmit={showUserDetails}>
                <div style={{float: "left"}}>
                    <input
                        required
                        name="First name"
                        id="firstname"
                        className="input"
                        type="text"
                        value={user.firstname}
                        placeholder="First name"
                        onChange={event => setUser({...user, firstname: event.target.value})}
                    />
                </div>
                <div style={{float: "right"}}>
                    <input
                        required
                        name="Last name"
                        id="lastname"
                        className="input"
                        type="text"
                        value={user.lastname}
                        placeholder="Last name"
                        onChange={event => setUser({...user, lastname: event.target.value})}
                    />
                </div>

                <div style={{float: "left"}}>
                    <input
                        required
                        className="input"
                        id="password"
                        type="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={event => setUser({...user, password: event.target.value})}
                    />
                </div>
                <div style={{float: "right"}}>
                    <input
                        required
                        className="input"
                        id="pwagain"
                        type="password"
                        value={user.pwagain}
                        placeholder="Password again"
                        onChange={event => setUser({...user, pwagain: event.target.value})}
                    />
                </div>
                <div>
                    <input
                        required
                        className="input"
                        type="email"
                        value={user.email}
                        placeholder="Email"
                        onChange={event => setUser({...user, email: event.target.value})}
                    />
                </div>
                <div>
                    <input type="submit" value="Registration" className="button" style={{marginBottom: "10%"}}/>
                </div>
            </form>
        </fieldset>
    );
}

export default RegistrationForm;
