import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Image from '../components/Image'
import BannerOne from '../assets/bannerOne.png'
import BannerTwo from '../assets/bannerTwo.png'
import InputCard from '../components/InputCard'
import { CiSearch } from 'react-icons/ci'
import { IoLocationOutline } from "react-icons/io5";

const Banner = () => {
  return (
    
    <section className='bg-[#F8F8F8] py-[135px] relative'>
      <div className='absolute top-[300px] right-[80px]'><Image className='w-[80%]'  src={BannerOne}/></div>
      <div className='absolute top-[446px] right-[420px]'><Image className='w-[80%]' src={BannerTwo}/></div>
      <Container>
        <Flex>
          <div className='w-1/2'>
           <h1 className='text-[65px] text-primary font-semibold font-pop leading-[100px]'>Start Exploring to Find Inner Peace by Traveling</h1>
          <p className='w-[597px] text-base text-third font-semibold font-pop pt-8 pb-10'>pLost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.</p>
          <Button className='mb-10' text='Discover Now'/>

          <div className='relative w-[825px] bg-white rounded-[10px]'>
            <Flex  className='py-9 px-6 gap-x-[70px]'>
              <InputCard/>
               <InputCard/>
               <InputCard/>
              </Flex>
              <button className='absolute top-1/2 -translate-y-1/2 right-6 p-[30px] bg-secondary rounded-[10px]'><CiSearch  className='text-white text-xl'/></button>
            

          </div>
          </div>

        </Flex>
      </Container>

    </section>
  )
}

export default Banner