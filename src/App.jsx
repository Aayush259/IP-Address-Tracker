import React from "react";
import "./styles/styles.css";
import Search from "./components/Search";

function App() {

  return (
    <>
      <div id="app">
        <div id="patternBackground">
          <header id="header"><h1>IP Address Tracker</h1></header>
          <Search />
        </div>
      </div>
    </>
  )
}

export default App
