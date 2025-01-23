import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import PomotionImage from '../assets/pomotion.png'
import CommonHeading from '../components/CommonHeading'
import CommonPara from '../components/CommonPara'
import { FaCheck } from 'react-icons/fa'
import PomotionLI from '../components/PomotionLI'

const Pomotion = () => {
  return (
    <section className='py-16'>
        <Container>
            <Flex className='items-center'>
                <div className='w-1/2'>
                <Image src={PomotionImage}/>
                </div>
                <div className='w-1/2 px-[60px]'>
                <CommonHeading className='w-[489px]' text='Always give you promo on every Month / Event'/>
                <CommonPara className='w-[431px] py-5' text='We make sure give you a lot of promo every motnh or event based on calendar. If you want, just Subscribe on Newsletter.'/>

               <Flex className='flex-wrap gap-x-7 gap-y-4'>

                        <PomotionLI  text='25% for New Members'/>
                        <PomotionLI  text='25% for New Members'/>
                        <PomotionLI  text='25% for New Members'/>
                        <PomotionLI  text='25% for New Members'/>
                        <PomotionLI  text='25% for New Members'/>



               </Flex>

                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Pomotion