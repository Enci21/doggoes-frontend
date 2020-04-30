import React, {useState} from "react";
import Axios from "axios";
import './regForm.css';

function RegistrationForm(props) {

    const [user, setUser] = useState({username: "", password: "", email: "", pwagain: ""});
    const [error, setError] = useState(null);
    const showUserDetails = e => {
        e.preventDefault();
        Axios.post("http://localhost:8080/registration", user)
            .then(response => {
                if (response.status) {
                    alert("OK");
                    props.history.push("/home");
                }
            })
            .catch(
                error => setError(error.response.data.message));
    };

    return (
        <fieldset className="reg-card">
            <p className="input-names">Sign up</p>

            {(error !== null) ?
                <div style={{color: 'red'}}><p>{error}</p></div> : null}

            <form onSubmit={showUserDetails} noValidate>
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
                        name="password"
                        id="password"
                        className="input"
                        type="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={event => setUser({...user, password: event.target.value})}
                    />
                </div>
                <div>
                    <input
                        required
                        name="pwagain"
                        id="pwagain"
                        className="input"
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
