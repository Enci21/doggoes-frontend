import React, {createContext, useState} from "react";

export const PlaceContext = createContext(null);

const PlaceProvider = props => {
    const [places, setPlaces] = useState([]);
    return (
        <PlaceContext.Provider value={{places, setPlaces}}>
            {props.children}
        </PlaceContext.Provider>

    )
};
export default PlaceProvider;
