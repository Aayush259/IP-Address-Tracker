import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import Search from "./components/Search";
import IpDetail from "./components/IpDetail";
import Map from "./components/Map";

function App() {

  let [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.log("Error:", err));
  }, []);
  
  console.log(data);

  if (data === null) {
    return (
      <>
      <div id="loaderContainer">
        <div id="loader">Loading...</div>
      </div>
      </>
    )
  }

  let ipValue = data.ip;
  let locationValue = `${data.city}, ${data.region}, ${data.country}`
  let timezoneValue = data.utc_offset.split('');
  timezoneValue.splice(-2, 0, ':');
  timezoneValue = `UTC ${timezoneValue.join('')}`;
  let ispValue = data.org;
  let positionValue = [data.latitude, data.longitude];

  return (
    <>
      <div id="app">
        <div id="patternBackground">
          <header id="header"><h1 className="bold-500">IP Address Tracker</h1></header>
          <Search />
          <IpDetail ipValue={ipValue} locationValue={locationValue} timezoneValue={timezoneValue} ispValue={ispValue} />
        </div>
      </div>
      <div id="map">
        <Map position={positionValue} />
      </div>
    </>
  )
}

export default App
