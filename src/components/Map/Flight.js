import React, { useState, useEffect } from "react";
import Dots from "../Dots/Dots";
import "./Flight.css";

const Flight = ({ flightSheetId }) => {
  const [dots, setDots] = useState([]);
  const [lines, setLines] = useState([]);

  const getDotsItems = () => {
    let dots = localStorage.getItem(`dots${flightSheetId}`);
    if (dots) {
      return JSON.parse(localStorage.getItem(`dots${flightSheetId}`));
    } else {
      return [];
    }
  };

  const getLinesItems = () => {
    let lines = localStorage.getItem(`lines${flightSheetId}`);
    if (lines) {
      return JSON.parse(localStorage.getItem(`lines${flightSheetId}`));
    } else {
      return [];
    }
  };

  useEffect(() => {
    if (dots.length > 1) {
      const firstPoint = dots[dots.length - 1];
      const secondPoint = dots[dots.length - 2];

      setLines((lines) => {
        const line = {
          position: {
            x1: firstPoint?.position.x,
            x2: secondPoint?.position.x,
            y1: firstPoint?.position.y,
            y2: secondPoint?.position.y,
          },
        };
        const newLines = [...lines, line];
        return newLines;
      });
      localStorage.setItem(`dots${flightSheetId}`, JSON.stringify(dots));

      // localStorage.setItem(`dots${drone}`)
    }
  }, [dots]);

  // cuando cambie el setDrones => un getItem (con un useEffect) del localStorage con el numero de drone

  //add data to localStorage

  useEffect(() => {
    setDots(getDotsItems());
    setLines(getLinesItems());
    console.log("patata");
  }, [flightSheetId]);

  useEffect(() => {
    if (lines.length > 0) {
      localStorage.setItem(`lines${flightSheetId}`, JSON.stringify(lines));
    }
  }, [lines]);

  return (
    <>
      <div className="flight-container">
        <div
          onClick={(event) => {
            const point = {
              position: {
                x: event.clientX,
                y: event.clientY,
              },
            };
            if (flightSheetId) {
              setDots((actualDots) => {
                const newDots = [...actualDots];
                newDots.push(point);
                return newDots;
              });
            } else{
              alert("Please Add a drone first");
            }

          }}
          style={{
            position: "absolute",
            width: "1080px",
            height: "490px",
            background: "transparent",
            margin: "0px",
          }}
        ></div>
        {dots.length &&
          dots.map((point) => {
            return <Dots point={point} />;
          })}
        <div
          style={{
            background: "transparent",
            position: "absolute",
            top: 0,
            left: 0,
            width: "1000px",
            height: window.innerHeight,
            zIndex: -1,
          }}
        >
          {lines.length &&
            lines.map((line) => {
              const { position } = line;
              return (
                <svg
                  height="100%"
                  width="100%"
                  style={{
                    zIndex: 999,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <line
                    x1={position.x1}
                    y1={position.y1}
                    x2={position.x2}
                    y2={position.y2}
                    style={{ stroke: "rgb(255,0,0)", strokeWidth: 2 }}
                  />
                </svg>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Flight;
