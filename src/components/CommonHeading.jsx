import React from 'react'

const CommonHeading = ({text,className}) => {
  return (
    <h3 className={`text-[40px] text-primary font-semibold font-pop ${className}`}>{text}</h3>


  )
}

export default CommonHeading