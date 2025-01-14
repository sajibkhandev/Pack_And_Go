import React from 'react'
import Container from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import CommonPara from '../components/CommonPara'
import TravelCard from '../components/TravelCard'
import Flex from '../components/Flex'
import Icon1 from '../assets/travalIcon1.png'
import Icon2 from '../assets/travalIcon2.png'

const Travel = () => {
  return (
    <section className='py-[150px]'>
        <Container>
            <CommonHeading className="text-center" text='Travel Benefit For User'/>
            <CommonPara className="w-[692px] text-center mx-auto pt-5 pb-[112px]" text='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.'/>

            
            <Flex className='flex-wrap gap-[30px]'>
              
            <TravelCard cardTitle="Cheap than Other" cardText="Travelya is cheaper than other travel agency." src={Icon1}/>
            <TravelCard cardTitle="Secure Payment" cardText="You can pay your book without doubt again." src={Icon2}/>
            <TravelCard cardTitle="Secure Payment" cardText="You can pay your book without doubt again." src={Icon2}/>
            <TravelCard cardTitle="Secure Payment" cardText="You can pay your book without doubt again." src={Icon2}/>
            <TravelCard cardTitle="Secure Payment" cardText="You can pay your book without doubt again." src={Icon2}/>
            <TravelCard cardTitle="Secure Payment" cardText="You can pay your book without doubt again." src={Icon2}/>

            </Flex>
            

        </Container>
    </section>
  )
}

export default Travel