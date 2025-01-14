import React from 'react'
import Image from './Image'

const TravelCard = ({cardTitle,cardText, src,alt}) => {
  return (
    <div className='w-[370px]  px-[54px] py-[63px] hover:shadow-xl rounded-[14px] duration-300'>
        <Image src={src} alt={alt}/>
        <h4 className='text-2xl text-primary font-medium font-pop pt-10 pb-5'>{cardTitle}</h4>
        <p className='text-base text-third font-normal font-pop'>{cardText}</p>

    </div>
  )
}

export default TravelCard