
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import List from '../components/List'
import Button from '../components/Button'
import LogoImage from '../assets/logo.png'

const Navber = () => {
  return (
    <nav className='py-12'>
        <Container>
           <Flex className='items-center'>
            <div className='w-2/12'><Image src={LogoImage}/></div>
            <div className='w-8/12'>
            <ul className='flex gap-x-10 justify-center '>
               
               <List liText="Home"/>
                <List liText="Tours"/>
                <List liText="Booking"/>
                <List liText="Pages"/>
                <List liText="Features"/>
                <List liText="Blog"/>
            </ul>
            
            </div>
            <div className='w-2/12 text-right'>
            <Button text='Book Now'/>
            </div>
           </Flex>
        </Container>
    </nav>
  )
}

export default Navber