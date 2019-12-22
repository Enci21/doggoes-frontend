import React, {useState} from "react";
import './regForm.css';

function RegistrationForm() {
    const [user, setUser] = useState({username: "", password: "", email: ""});

    return (
        <div className="reg-card">
            <p className="input-names">Registration</p>
            <form>
                <div>
                    <input
                        required
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
                        className="input"
                        type="email"
                        value={user.email}
                        placeholder="Email"
                        onChange={event => setUser({...user, email: event.target.value})}
                    />
                </div>
                <input type="submit" value="Registration" className="button" style={{marginBottom: "10%"}}/>
            </form>
        </div>
    );
}

export default RegistrationForm;
