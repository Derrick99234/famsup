import React from 'react'

function Button({ text, height, width, className, type, icon: Icon }) {
  return (
    <button 
    className={`rounded bg-[#27ae60] flex justify-center items-center gap-[10px] hover:bg-secondcolor ${className}`}
    type={type}
    style={{ height: height, width: width }}>
      {text}
      {Icon && <Icon />}
    </button>
  )
}



export default Button