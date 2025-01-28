import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import { FaFacebook, FaLinkedin, FaPinterestSquare, FaTwitter } from 'react-icons/fa'
import FooterUl from '../components/FooterUl'

const Footer = () => {
  return (
   <section className='pt-[150px] pb-[100px]'>
<Container>
    <Flex>
        <div className='w-6/12'>
        <Image  src={Logo}/>

        <ul className='flex list-none gap-x-10 py-10'>
        <li className=''><FaFacebook className='text-4xl text-blue-500'/></li>
        <li className=''><FaLinkedin className='text-4xl text-blue-500'/> </li>
        <li className=''><FaTwitter className='text-4xl text-blue-500'/> </li>
        <li className=''><FaPinterestSquare className='text-4xl text-red-500'/> </li>
        </ul>
        <ul className='list-none text-base text-[#616161] font-pop font-normal flex flex-col gap-y-1.5'>
            <li>Business Number : +12 4825415478 </li>
            <li>3131 Doctor Drive. LA, California</li>
            <li>Complaints/Enquiries: pack&go@mail.com</li>
        </ul>
        
        
        </div>
        <div className='w-2/12'>
        <FooterUl headingSix="Tour" liOne="Thailand" litwo="Vietnam" liThree="Korea" liFour="Mexico" liFive="Italy"/>
        </div>
        <div className='w-2/12'>
        <FooterUl headingSix="Support" liOne="Account" litwo="Legal" liThree="Contact" liFour="Affiliate Program" liFive="Privacy Policy"/>
        </div>
        <div className='w-2/12'>
        <FooterUl headingSix="Useful Pages" liOne="Deals" litwo="FAQs" liThree="Why Choose Us" liFour="Subscribe" />
        </div>
    </Flex>

</Container>
   </section>
  )
}

export default Footer