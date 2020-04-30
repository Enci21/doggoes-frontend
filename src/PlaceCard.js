import React, {useContext} from "react";
import {PlaceContext} from "./PlaceContext";
import logo from "./logo1.png";


function PlaceCard() {
    const {places} = useContext(PlaceContext);

    return (
        <>
            <h1>These are our places</h1>
            {places.map((place) =>
                <div className="place-card">
                    <img style={{float: "right", width: "30%", marginRight: "4%", marginTop: "3%"}} src={logo}/>
                    <p style={{
                        fontWeight: "bold",
                        fontSize: "28px",
                        float: "left",
                        marginLeft: "4%",
                        marginTop: "5%"
                    }}>{place.name}</p>
                    <div style={{float: "left", clear: "left", marginLeft: "5%"}}><p>{place.type}</p></div>
                    <div style={{float: "left", clear: "left", marginLeft: "5%"}}><p>{place.postalCode}</p></div>
                    <div><p style={{float: "left"}}>, {place.city}</p></div>
                    <div><p style={{float: "left", clear: "left", marginLeft: "5%"}}>{place.street}</p></div>
                    <div><p style={{float: "left"}}>, {place.building}.</p></div>
                </div>
            )}
        </>
    );
}

export default PlaceCard;
