import React from 'react'

function Button({ text, height, width, className }) {
  return (
    <button 
    className={`rounded bg-[#3F43FD] ${className}`}
    style={{ height: height, width: width }}>
      {text}
    </button>
  )
}



export default Button