import React from 'react'
import Container from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import CommonPara from '../components/CommonPara'
import PopularCard from '../components/PopularCard'
import Flex from '../components/Flex'
import ImageOne from '../assets/popularImage1.png'


const Populaer = () => {
  return (
   <section className='py-[150px]'>
    <Container>
    <CommonHeading className='text-center text-3xl md:text-5xl leading-[50px] md:leading-[70px]' text='Popular Destination'/>
    <CommonPara className='text-center mx-auto md:w-[614px] pt-5' text='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.'/>
    </Container>
   <Flex className='gap-x-[30px] justify-center pt-12 md:!flex !block   mx-2'>

   <PopularCard image={ImageOne} title="Venice, Italy" text='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' price="$100"/>
    <PopularCard image={ImageOne} title="Paris, France" text='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' price="$150"/>
    <PopularCard image={ImageOne} title="Venice, Italy" text='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' price="$10"/>
   <PopularCard image={ImageOne} title="Venice, Italy" text='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' price="$100"/>
    



    
   </Flex>
    
    
   </section>
  )
}

export default Populaer