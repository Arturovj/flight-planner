import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import CheckList from "./components/CheckList/CheckList";
import Flight from "./components/Map/Flight";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [flightSheetId, setFlightSheetId] = useState(0);

  const deleteFlightSheet = (index) => {
    localStorage.removeItem(`dots${index}`);
    localStorage.removeItem(`lines${index}`);
    
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <div>
          <Flight flightSheetId={flightSheetId} />
        </div>
        <Map />
        <CheckList
          setFlightSheetId={setFlightSheetId}
          deleteFlightSheet={deleteFlightSheet}
        />
      </div>
    </>
  );
}

export default App;
