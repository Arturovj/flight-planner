import React from "react";
import './/DronesList.css';

export const DronesList = ({ drones, setDrones }) => {

    const handleDelete = ({ id }) => {
        setDrones(drones.filter(drone => drone.id !== id));
    }

    const handleCheck = ({ drone }) => {
        setDrones(drones.map((item) => {
            if (item.id === drone.id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        }
        ));
    }

  


  return (
    <div>
      {drones.map((drone) => (
        <li className="drone-item" key={drone.id}>
          <input
            type="text"
            value={drone.title}
          
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button" onClick={() => handleCheck(drone)}>
                <i className="fa fa-check-circle" aria-hidden="true"></i>
            </button>
            <button className="button-delete task-button">
                <i className="fa fa-trash" aria-hidden="true" onClick={() => handleDelete(drone)}></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
