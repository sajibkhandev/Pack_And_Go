import React from 'react'
import Image from './Image'

const AboutCard = ({cardText,cardTitle ,src}) => {
  return (
    <div className='w-[275px] px-9 py-[62px] bg-secondary  rounded-[17px]'>
        <Image src={src}/>
        <h4 className='text-[40px] text-white font-pop font-medium pt-5'>{cardTitle}</h4>
        <p className='text-base text-white font-pop font-normal'>{cardText}</p>
    </div>
  )
}

export default AboutCard