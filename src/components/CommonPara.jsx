import React from 'react'

const CommonPara = ({text,className}) => {
  return (
   <p className={`text-base text-third font-normal font-pop ${className}`}>{text}</p>
  )
}

export default CommonPara