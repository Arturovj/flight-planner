import React from "react";
import './Form.css';
import { v4 as uuidv4 } from "uuid";

export default function Form({ input, setInput, drones, setDrones }) {

    const onInputChange = (event) => {
        setInput(event.target.value)
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault()
        setDrones([...drones, { id: uuidv4(), title: input, completed: false }])
        setInput('')
    }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Drone Name"
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="button-add" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
