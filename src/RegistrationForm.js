import React, {useState} from "react";
import Axios from "axios";
import './regForm.css';

function RegistrationForm() {

    const [user, setUser] = useState({username: "", password: "", email: "", pwagain: ""});
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
                <div>
                    <input
                        required
                        name="username"
                        id="username"
                        className="input"
                        type="text"
                        value={user.username}
                        placeholder="Username"
                        onChange={event => setUser({...user, username: event.target.value})}
                    />
                </div>

                <div>
                    <input
                        required
                        id="password"
                        type="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={event => setUser({...user, password: event.target.value})}
                    />
                </div>
                <div>
                    <input
                        required
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
