import React from 'react'
import Flex from './Flex'
import { FaCheck } from 'react-icons/fa'

const PomotionLI = ({text}) => {
  return (
    
    <Flex className='gap-x-[10px] items-center'>
        <FaCheck className='text-[#007F5F]'/><li className='list-none text-base text-[#616161] font-normal font-pop'>{text}</li>
    </Flex>
  )
}

export default PomotionLI