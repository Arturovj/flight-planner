import React, { useState, useEffect } from "react";
import { DronesList } from "../DronesList/DronesList";
import Form from "../Form/Form";
import "./CheckList.css";

export default function CheckList() {

  const initialState = JSON.parse(localStorage.getItem("drones")) || [];
  const [input, setInput] = useState("");
  const [drones, setDrones] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("drones", JSON.stringify(drones));
  }, [drones]);


  return (
    <div className="checklist-container">
      <div className="checklist-title">Drones Routes</div>
      <div>
        <Form
          input={input}
          setInput={setInput}
          drones={drones}
          setDrones={setDrones}
        />
      </div>
      <div>
        <DronesList
          drones={drones}
          setDrones={setDrones}
        />
      </div>
    </div>
  );
}
