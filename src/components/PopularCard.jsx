import React from 'react'

import Image from './Image'
import Button from './Button'
import Flex from './Flex'
import { FaStar } from 'react-icons/fa'

const PopularCard = ({image,title,text,price}) => {
  return (
    <div className='w-[300px] md:w-[370px]  bg-white hover:shadow-xl duration-500 p-5 rounded-[14px] my-10 md:my-0'>
        <div className='w-[250px] md:w-[329px] h-[203px] rounded-[14px]'>
        <Image className='w-full rounded-[14px]' src={image}/>
        </div>
        
            <Flex className='gap-x-[6px] items-center pt-9 pb-4'>
            <li className='list-none'><FaStar className='text-[#FF8B00]'/></li>
            <li className='list-none'><FaStar className='text-[#E0E0E0]'/></li>
            <li className='list-none'><FaStar className='text-[#E0E0E0]'/></li>
            <li className='list-none'><FaStar className='text-[#E0E0E0]'/></li>
            <li className='list-none'><FaStar className='text-[#E0E0E0]'/></li>
            <li className='list-none text-[#FF8B00] text-base font-pop font-normal pl-[10px]'>5 review</li>
            </Flex>
            <h4 className='text-2xl text-primary font-pop font-medium'>{title}</h4>
            <p className='text-base text-third font-pop font-normal py-5'>{text}</p>
            <Flex>
                <h5 className='text-2xl text-primary font-pop font-medium'>{price}<span className='text-base text-third font-pop font-normal'>/ Person</span></h5>
            </Flex>

            <Button className='mt-[30px] mb-[42px] py-[10px]' text="Book Now"/>
        
    </div>
  )
}

export default PopularCard