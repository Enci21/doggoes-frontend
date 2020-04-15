import React, {useState} from "react";
import Axios from "axios";
import {Form} from "react-bootstrap";

function PlaceForm() {
    let [types, setTypes] = useState([]);
    const [place, setPlace] = useState({
        name: "",
        type: "",
        street: "",
        building: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        openingHoursFrom: "",
        openingHoursTo: "",
        number: ""
    });

    const getTypeEnums = e => {
        e.preventDefault();
        Axios.get("http://localhost:8080/place/types")
            .then(response => {
                setTypes(response.data);
            })
            .catch(error => alert("Nem jöttek typok vagy valami" + error));
    };


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
        <div className="reg-card" onMouseOver={getTypeEnums}>
            <h1>Please recommend a new place dilom.</h1>
            <fieldset>
                <div>
                    <form onSubmit={sendPlaceData}>
                        <input
                            style={{marginTop: "5%"}}
                            required
                            name="name"
                            id="placename"
                            className="input"
                            type="text"
                            value={place.name}
                            placeholder="Name"
                            onChange={event => setPlace({...place, name: event.target.value})}
                        />
                        <div className="select">
                            <Form.Control as="select" value={place.type}
                                          onChange={event => setPlace({...place, type: event.target.value})}>
                                <option>Choose type...</option>
                                {types.map(type => (
                                    <option style={{fontVariant: "small-caps"}}>{type}</option>
                                ))}
                            </Form.Control>
                        </div>
                        <input
                            required
                            name="street"
                            id="street"
                            className="input"
                            type="text"
                            value={place.street}
                            placeholder="Street"
                            onChange={event => setPlace({...place, street: event.target.value})}
                        />

                        <input
                            required
                            name="building"
                            id="building"
                            className="input"
                            type="text"
                            value={place.building}
                            placeholder="Building"
                            onChange={event => setPlace({...place, building: event.target.value})}
                        />

                        <input
                            required
                            name="city"
                            id="city"
                            className="input"
                            type="text"
                            value={place.city}
                            placeholder="City"
                            onChange={event => setPlace({...place, city: event.target.value})}
                        />

                        <input
                            style={{marginRight: "3%"}}
                            required
                            name="state"
                            id="state"
                            className="input"
                            type="text"
                            value={place.state}
                            placeholder="State"
                            onChange={event => setPlace({...place, state: event.target.value})}
                        />

                        <input
                            required
                            name="postal code"
                            id="postal code"
                            className="input"
                            type="number"
                            min="1000"
                            max="9999"
                            value={place.postalCode}
                            placeholder="Postal code"
                            onChange={event => setPlace({...place, postalCode: event.target.value})}
                        />

                        <input
                            required
                            name="country"
                            id="country"
                            className="input"
                            type="text"
                            value={place.country}
                            placeholder="Country"
                            onChange={event => setPlace({...place, country: event.target.value})}
                        />

                        <p style={{fontWeight: 'bold'}}> Opening hours</p>
                        <input
                            style={{marginRight: "2%"}}
                            name="openingHoursFrom"
                            id="openingHoursFrom"
                            className="input"
                            type="time"
                            min="00:00"
                            max="23:59"
                            value={place.openingHoursFrom}
                            onChange={event => setPlace({...place, openingHoursFrom: event.target.value})}
                        />

                        <input
                            name="openingHoursTo"
                            id="openingHoursTo"
                            className="input"
                            type="time"
                            min="00:00"
                            max="23:59"
                            value={place.openingHoursTo}
                            onChange={event => setPlace({...place, openingHoursTo: event.target.value})}
                        />

                        <input

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
        </div>
    )
        ;
}

export default PlaceForm;