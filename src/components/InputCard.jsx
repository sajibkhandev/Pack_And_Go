import React from 'react'
import Flex from './Flex'
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from 'react-icons/io';

const InputCard = () => {
  return (
    <div>
        <Flex className='md:gap-x-3 items-center'>
        <IoLocationOutline  className='text-secondary'/>
        <p className='text-xs md:text-base text-four font-bold font-nun'>Locition</p>
        <IoIosArrowDown  className='text-secondary'/>
        </Flex>
        <p className='text-xs md:text-base text-third font-normal font-nun pt-2 pl-[10px] md:pl-7'>Enter your location</p>
    </div>
  )
}

export default InputCard