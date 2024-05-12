import React from "react";
import "./styles/styles.css";
import Search from "./components/Search";
import IpDetail from "./components/IpDetail";

function App() {

  let ipValue = "192.212.174.101";
  let locationValue = "Brooklyn, NY 1001";
  let timezoneValue = "UTC -05:00";
  let ispValue = "SpaceX Starlink";

  return (
    <>
      <div id="app">
        <div id="patternBackground">
          <header id="header"><h1 className="bold-500">IP Address Tracker</h1></header>
          <Search />
          <IpDetail ipValue={ipValue} locationValue={locationValue} timezoneValue={timezoneValue} ispValue={ispValue} />
        </div>
      </div>
    </>
  )
}

export default App
