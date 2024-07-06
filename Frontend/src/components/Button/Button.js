import React from 'react'

function Button({ text, height, width, className, type }) {
  return (
    <button 
    className={`rounded bg-[#27ae60] px-[40px] py-[5px] ${className}`}
    type={type}
    style={{ height: height, width: width }}>
      {text}
    </button>
  )
}



export default Button