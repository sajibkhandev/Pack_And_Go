import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CommonPara from '../components/CommonPara'
import { TbSquareRoundedFilled } from "react-icons/tb";
import { SlArrowUp } from "react-icons/sl";
import { TbSquareRounded } from "react-icons/tb";
import Image from '../components/Image'
import MonyImage from '../assets/monyPart.png'

const MonyPart = () => {
  return (
    
    <section className='pb-[140px]'>
        <Container>
            <Flex>
                <div className='w-2/4'>
                <CommonHeading className='w-[507px]'  text='100% Money back Guarantee If you Cancel'/>
                <CommonPara className='w-[516px] pt-5 pb-10' text='We Promises in this case. We still want to refund your money when you cancel order.'/>

                <div className='w-[420px] bg-[#E4F1EE] p-5'>
                    <Flex className='gap-x-3 items-center'>
                    <TbSquareRoundedFilled />
                        <p className='text-lg text-[#1E1E1E] font-medium font-pop'>Friendly, Quick, Easy</p>
                        <SlArrowUp />
                    </Flex>
                    <p className='text-lg text-[#616161] font-normal font-pop pt-[10px] pb-[10px]'>Business messaging that feels just like the messenger apps you and your customers 
                        use every day.</p>

                </div>
                <Flex className='gap-x-3 items-center py-3'>
                    <TbSquareRounded />
                        <p className='text-lg text-[#1E1E1E] font-medium font-pop'>Friendly, Quick, Easy</p>
                        <SlArrowUp />
                    </Flex>
                    <Flex className='gap-x-3 items-center py-3'>
                    <TbSquareRounded />
                        <p className='text-lg text-[#1E1E1E] font-medium font-pop'>Friendly, Quick, Easy</p>
                        <SlArrowUp />
                    </Flex>
                </div>
                <div className='w-2/4 relative'>
                <Image src={MonyImage}/>
                <div className='bg-white py-3 px-6 rounded-[8px] shadow-2xl absolute bottom-[152px] left-[40px]'>Hi, Can you help me? 😔</div>
                <div className='bg-white py-3 px-6 rounded-[8px] shadow-2xl absolute bottom-[80px] left-[14px]'>Hi, Can you help me? 😔</div>
                <div className='bg-white py-3 px-6 rounded-[8px] shadow-2xl absolute bottom-[10px] left-[10px]'>Hi, Can you help me? 😔</div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default MonyPart