import React from 'react';
import locationIcon from '../images/icon-location.svg';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map(props) {

    const customIcon = new L.Icon({
        iconUrl: locationIcon,
        iconRetinaUrl: locationIcon,
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(40, 50)
    })

    return (
        <MapContainer 
            center={props.position} 
            zoom={13} 
            style={
                { height: '60vh', width: '100%' }
            }
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href=http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={props.position} icon={customIcon}></Marker>
        </MapContainer>
    );
};