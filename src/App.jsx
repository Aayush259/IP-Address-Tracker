import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import Search from "./components/Search";
import IpDetail from "./components/IpDetail";
import Map from "./components/Map";

function App() {

  // Initializing useState to data that will be fetched from API.
  let [data, setData] = useState(null);

  // Declaring variables that will be shown up in UI and initializing them with null.
  let toReturn = null;
  let ipValue = null;
  let locationValue = null;
  let timezoneValue = null;
  let ispValue = null;
  let positionValue = null;

  // This function set data state with the data fetched from API based on user search
  const searchIP = (ip) => {

    // Removing previous data.
    setData(null);

    // Initializing API URL based on user's input IP.
    let url = `https://ipapi.co/${ip}/json/`;
    
    // Fetching data and updating.
    fetch(url)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.log("Error:", err));
  }

  // Fetching user's IP and location data and updating it in UI.
  useEffect(() => {
    fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.log("Error:", err));
  }, []);
  

  // If the data is not fetched yet, then display loader, else update data on screen.
  if (data === null) {
    toReturn = (
      <div id="loaderContainer">
        <div id="loader">Loading...</div>
      </div>
    )
  } else {
    ipValue = data.ip;
    locationValue = `${data.city}, ${data.region}, ${data.country}`
    timezoneValue = data.utc_offset.split('');
    timezoneValue.splice(-2, 0, ':');
    timezoneValue = `UTC ${timezoneValue.join('')}`;
    ispValue = data.org;
    positionValue = [data.latitude, data.longitude];

    toReturn = (<div id="map">
        <Map position={positionValue} />
     </div>)
  }

  return (
    <>
      <div id="app">
        <div id="patternBackground">
          <header id="header"><h1 className="bold-500">IP Address Tracker</h1></header>
          <Search searchIP={searchIP} />
          <IpDetail ipValue={ipValue} locationValue={locationValue} timezoneValue={timezoneValue} ispValue={ispValue} />
        </div>
      </div>
      {toReturn}
    </>
  )
}

export default App;
