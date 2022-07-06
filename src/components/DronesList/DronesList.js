import React, { useEffect } from "react";
import ".//DronesList.css";

export const DronesList = ({
  drones,
  setDrones,
  setFlightSheetId,
  deleteFlightSheet,
}) => {
  const handleDelete = (droneIdToDelete) => {
    setDrones(
      drones.filter((drone) => {
        return drone.id !== droneIdToDelete;
      })
    );
    deleteFlightSheet(droneIdToDelete);
  };

  const handleCheck = ({ drone }) => {
    setDrones(
      drones.map((item) => {
        if (item.id === drone.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    
    if(drones.length !== 0) {
        setFlightSheetId(drones[drones.length-1].id);
    }
    if(drones.length === 0) {
        setFlightSheetId(0);
    }
    console.log(drones.length);
  }, [drones.length]);

  return (
    <div>
      {drones.map((drone) => (
        <li
          style={{
            cursor: "pointer",
          }}
          onClick={() => setFlightSheetId(drone.id)}
          className="drone-item"
          key={drone.index}
        >
          <p type="text" className="list">
            {drone.title}
          </p>
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleCheck(drone)}
            >
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            </button>
            <button className="button-delete task-button">
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => handleDelete(drone.id)}
              ></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
