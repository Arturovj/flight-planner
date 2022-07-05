import React, { useState, useEffect} from "react";
import Dots from "../Dots/Dots";
import './Flight.css'

const Flight = () => {
  
 
  const [dots, setDots] = useState([])
  const [lines, setLines] = useState([])

  useEffect(() => {

    
    if(dots.length > 1) {
               const firstPoint = dots[dots.length -1]
               const secondPoint = dots[dots.length -2]
               
              setLines(lines => {
          const line ={
            label: 
             <svg 
               height={window.innerHeight}
               width={window.innerWidth}
               style={{
                 zIndex: 999,
                 position: 'absolute',
                 top: 0,
                 left: 0
               }}
               >
        <line 
          x1={firstPoint?.position.x} 
          y1={firstPoint?.position.y} 
          x2={secondPoint?.position.x} 
          y2={secondPoint?.position.y} 
          style={{stroke: 'rgb(255,0,0)',
          strokeWidth: 2}} />
      </svg>
            
          }
          const newLines = [
            ...lines,
            line
          ]
          return newLines
        })

             }
  }, [dots])

  
 
  return (
    <>
    <div className="flight-container">
        <div
           onClick={(event) => {
             const point = {
               position: {
                 x: event.clientX,
                 y: event.clientY
               }
             }
             setDots(actualDots => {
               const newDots = [...actualDots]
               newDots.push(point)
               return newDots
             })
             
             
           }}
           style={{
             position: 'absolute',
             width: '1080px',
             height: '490px',
             background: 'transparent',
            margin: '0px'
           }}
           >
        </div>
      {dots.length && dots.map((point) => {
      return(
        <Dots point={point}/>
      )
      })}
        <div 
          style={{
            background: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1000px',
            height: window.innerHeight,
            zIndex: -1
          }}
          >
      {
        lines.length && lines.map(line => {
      return line.label
      })
      }
        </div>
        </div>
    </>
      )
}
export default Flight
