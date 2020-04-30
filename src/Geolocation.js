import React, {useRef, useState} from "react";
import ReactMapGl from "react-map-gl";

/*
import useSupercluster from "use-supercluster";
*/

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
        <div style={{height: "250%", marginTop: "800px"}}>
            <ReactMapGl
                {...viewport}
                maxZoom={20}
                minZoom={8}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/enci21/ck8xbp6bb43m91ipm1d7xi9uh"
                onViewportChange={newViewport => {
                    setViewport({...newViewport});
                }}
                ref={mapRef}
            >
            </ReactMapGl>
        </div>
    );

}

export default Geolocation;