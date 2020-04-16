import React, {useContext} from "react";
import {PlaceContext} from "./PlaceContext";


function PlaceCard() {

    const {places} = useContext(PlaceContext);
    return (
        <div>
            <h1>bazd meg magad kérlek</h1>
            <div>
                {places.map(place =>
                    <p>{place}</p>
                )}
            </div>
        </div>
    );
}

export default PlaceCard;
