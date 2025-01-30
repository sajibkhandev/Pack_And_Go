
import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import List from '../components/List'
import Button from '../components/Button'
import LogoImage from '../assets/logo.png'

import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross } from "react-icons/im";

const Navber = () => {
  let [show,setShow]=useState(false)

  let handleClick=()=>{
    setShow(!show)
    
  }
  
  return (
    <>
    <nav className='py-12 hidden md:block'>
        <Container>
           <Flex className='items-center'>
            <div className='w-2/12'><Image src={LogoImage}/></div>
            <div className='w-8/12'>
            <ul className='flex gap-x-10 justify-center '>

              <Link to='/'><List liText="Home"/></Link>
              <Link to='/tours'><List liText="Tours"/></Link>
              <Link to='/pages'><List liText="Pages"/></Link>
              <Link to='/blogs'><List liText="Blog"/></Link>
              <Link to='/features'><List liText="Features"/></Link>  
            </ul>
            </div>
            <div className='w-2/12 text-right'>
           <Link to='/pages'>
             <Button text='Book Now'/>
           </Link>
            </div>
           </Flex>
        </Container>
    </nav>
{/* moblie design start */}
    <nav className='p-3 md:hidden '>
      <Flex className='items-center justify-between'>
        <Image className='w-[50%] sm:w-[35%]' src={LogoImage}/>
        <div onClick={handleClick} className='relative'>
        {
          show ?<ImCross />:<FaBars /> 
        }
        </div>
      </Flex>
      {
        show && 
        <ul className='w-full absolute top-[70px] left-[0] sm:top-[100px] z-50 bg-purple-400 flex flex-col justify-center items-center gap-y-3 py-10'>
        <Link to='/'>
        <li className='text-white text-base font-pop font-normal'>home</li>
        </Link>
        <Link to='/tours'>
        <li className='text-white text-base font-pop font-normal'>tour</li>
        </Link>
        <li className='text-white text-base font-pop font-normal'>home</li>
        <li className='text-white text-base font-pop font-normal'>home</li>
        <li className='text-white text-base font-pop font-normal'>home</li>
       </ul>
      
      }

    </nav>
{/* moblie design end */}
    </>
  )
}

export default Navber