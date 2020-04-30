import React from "react";
import Axios from "axios";


const UserActivationPage = props => {
    const userId = props.match.params.userId;

    const activation = () => {
        Axios.post("http://localhost:8080/activate/" + userId)
            .then(response => {
                if (response.status) {
                    alert("OK")

                    props.history.push("/home");
                }
            })
            .catch(error => alert(error));
    };
    activation()
    return (


        <h1 style={{fontWeight: "bold", float: "left"}}>You just activated your account!</h1>

    )
}

export default UserActivationPage;