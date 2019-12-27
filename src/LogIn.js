import React, {useState} from "react";
import Axios from "axios";


function LogIn(props) {
    const [user, setUser] = useState({username: "", password: ""});

    const showUserDetails = e => {
        e.preventDefault();
        Axios.post("http://localhost:8080/auth/signin", user)
            .then(response => {
                if (response.status === 200 && response.data.token !== null) {
                    alert("OK");
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("username", user.username);
                    props.handleUpdateUsername(localStorage.getItem("username"));
                    console.log(props.username);
                }
            })
            .catch(error => alert(error));
    };

    return (
        <form className="reg-card" onSubmit={showUserDetails}>
            <p className="input-names" style={{selfAlign: "center"}}>Log in</p>
            <div>
                <input
                    style={{marginLeft: "10px", marginRight: "10px"}}
                    required
                    className="input"
                    type="text"
                    placeholder="Username"
                    onChange={event => setUser({...user, username: event.target.value})}
                />
            </div>
            <div>
                <input
                    style={{marginLeft: "10px", marginRight: "10px"}}
                    required
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={event => setUser({...user, password: event.target.value})}
                />
            </div>
            <input type="submit" value="Log in" className="button" style={{marginBottom: "10%"}}/>
        </form>
    );
}

export default LogIn;
