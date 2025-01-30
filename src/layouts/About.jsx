import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CommonPara from '../components/CommonPara'
import Button from '../components/Button'
import { IoMdCheckmark } from 'react-icons/io'
import AboutCard from '../components/AboutCard'
import Icon1 from '../assets/aboutIcon1.png'

const About = () => {
  return (
    
    <section className='py-[150px] bg-[#1e1e1e0d] px-3 md:px-0'>
        <Container>
            <Flex className='!block md:!flex'>
                <div className='md:w-1/2'>
                <CommonHeading text='Go Travel, Discover Remember Us' />
                <CommonPara className='md:w-[516px]' text='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.' />
                
                    <Flex className='gap-x-2.5 py-2.5 '>
                    <IoMdCheckmark  className='text-secondary pt-1 text-2xl'/>
                    <CommonPara className='w-[338px] ' text='We are self-service data software visually appealing data visualizations.' />
                    </Flex>
                    <Flex className='gap-x-2.5 py-2.5 '>
                    <IoMdCheckmark  className='text-secondary pt-1 text-2xl'/>
                    <CommonPara className='w-[338px] ' text='We are self-service data software visually appealing data visualizations.' />
                    </Flex>
                    <Flex className='gap-x-2.5 py-2.5 '>
                    <IoMdCheckmark  className='text-secondary pt-1 text-2xl'/>
                    <CommonPara className='w-[338px] ' text='We are self-service data software visually appealing data visualizations.' />
                    </Flex>
                    
                    
                
                <Button text='Discover Place' className='mt-[30px]'/>
                </div>
                <div className='md:w-1/2'>
                <Flex className='flex-wrap gap-[30px] my-10 md:my-0'>
                <AboutCard src={Icon1} cardText="Satisfied Clients" cardTitle='500K+'/>
                <AboutCard src={Icon1} cardText="Satisfied Clients" cardTitle='500K+'/>
                <AboutCard src={Icon1} cardText="Satisfied Clients" cardTitle='500K+'/>
                <AboutCard src={Icon1} cardText="Satisfied Clients" cardTitle='500K+'/>
                </Flex>
                </div>
                

            </Flex>
        </Container>
    </section>
  )
}

export default About