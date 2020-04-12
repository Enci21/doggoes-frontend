import React, {useState} from "react";
import Axios from "axios";

function PlaceForm() {

    const [place, setPlace] = useState({name: "", address: "", openingHours: "", number: ""});
    const sendPlaceData = e => {
        e.preventDefault();
        Axios.post("http://localhost:8080/place/new", place)
            .then(response => {
                if (response.status) {
                    alert("OK");
                }
            })
            .catch(error => alert(error));
    };

    return (
        <fieldset className="reg-card">
            <div>
                <form onSubmit={sendPlaceData}>
                    <input
                        required
                        name="name"
                        id="placename"
                        className="input"
                        type="text"
                        value={place.name}
                        placeholder="Name"
                        onChange={event => setPlace({...place, name: event.target.value})}
                    />

                    <input
                        required
                        name="address"
                        id="address"
                        className="input"
                        type="text"
                        value={place.address}
                        placeholder="Address"
                        onChange={event => setPlace({...place, address: event.target.value})}
                    />

                    <input
                        required
                        name="openingHours"
                        id="openingHours"
                        className="input"
                        type="text"
                        value={place.openingHours}
                        placeholder="Opening Hours"
                        onChange={event => setPlace({...place, openingHours: event.target.value})}
                    />

                    <input
                        required
                        name="phoneNumber"
                        id="phoneNumber"
                        className="input"
                        type="text"
                        value={place.number}
                        placeholder="Phone number"
                        onChange={event => setPlace({...place, number: event.target.value})}
                    />
                    <input type="submit" value="Recommend this place!" className="button"
                           style={{marginBottom: "10%"}}/>
                </form>
            </div>
        </fieldset>

    );
}

export default PlaceForm;