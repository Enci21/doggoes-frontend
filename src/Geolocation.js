import React, {useRef, useState} from "react";
import ReactMapGl from "react-map-gl";
/*
import useSupercluster from "use-supercluster";
*/
import './App.css';

function Geolocation() {
/*    const position = navigator.geolocation ?
        navigator.geolocation.getCurrentPosition((position) => viewport.latitude= position.coords.latitude && viewport.longitude = position.coords.longitude)) :
        alert("Position not found!");*/

    const [viewport, setViewport] = useState({
        latitude: navigator.geolocation.getCurrentPosition((lat) => lat.coords.latitude) || 47.497913,
        longitude: navigator.geolocation.getCurrentPosition((long) => long.coords.longitude) || 19.040236,
        width: "100%",
        height: "250px",
        zoom: 12
    });

    const mapRef = useRef();

    return (

        <ReactMapGl
            {...viewport}
            maxZoom={20}
            mapboxApiAccessToken={"pk.eyJ1IjoiZW5jaTIxIiwiYSI6ImNrODdjMWE5bTBkNXczZnBycXIycmo5cjgifQ.epS5ZM8enXRO3IvLbWaObQ"}
            onViewportChange={newViewport => {
                setViewport({...newViewport});
            }}
        >
        </ReactMapGl>
    );

}

export default Geolocation;