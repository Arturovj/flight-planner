import React, { useEffect, useState } from "react";
import ".//DronesList.css";

export const DronesList = ({
  drones,
  setDrones,
  setFlightSheetId,
  deleteFlightSheet,
  flightSheetId
}) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive((current) => !current);
//   };

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
    if (drones.length !== 0) {
      setFlightSheetId(drones[drones.length - 1].id);
    }
    if (drones.length === 0) {
      setFlightSheetId(0);
    }
  }, [drones.length]);

  return (
    <div>
      {drones.map((drone) => (
        <li
          style={{
            cursor: "pointer",
            backgroundColor: drone.id === flightSheetId ? "salmon" : "#12343b",
            color: drone.id === flightSheetId  ? "white" : "#12343b",
          }}
          onClick={() => {
            // const newDrone = {
            //   ...drone,
            //   active: true,
            // };
            // setDrones((prevDrones) => {
            //   return prevDrones.map((item) => {
            //     if (item.id === drone.id) {
            //       return newDrone;
            //     } else {
            //       const oldDrone = {
            //         ...item,
            //         active: false,
            //       };
            //       return oldDrone;
            //     }
            //   });
            // });
            // handleClick();
            setFlightSheetId(drone.id);
          }}
          className="drone-item"
          key={drone.index}
        >
          <p className="list">{drone.title}</p>
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
