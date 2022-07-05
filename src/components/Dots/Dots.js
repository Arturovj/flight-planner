import React from 'react'

export default function Dots({ point }) {
  return (
    <div
          style={{
            borderRadius: '50%',
            background: 'red',
            width: 15,
            height: 15,
            position: 'absolute',
            top: point.position.y,
            left: point.position.x,
            transform: 'translate(-50%, -50%)'
          }}
          >
        </div>
  )
}
