import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`text-base text-white font-pop font-semiblod bg-secondary px-9 py-4 rounded-2xl border border-transparent hover:bg-transparent hover:border-secondary hover:text-black duration-500 ${className}`}>{text}</button>
  )
}

export default Button