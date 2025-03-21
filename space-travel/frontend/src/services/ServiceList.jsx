import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `🛰 Galactic Weather Forecast`,
      desc: `Receive real-time updates on space weather conditions, ensuring a safe and comfortable journey.`,
   },
   {
      imgUrl: guideImg,
      title: `🌟 Expert Space Tour Guides`,
      desc: `Trained astronauts and AI-powered guides provide educational insights and engaging experiences.`,
   },
   {
      imgUrl: customizationImg,
      title: '✨ Customizable Travel Packages',
      desc: `Pick from adventure-packed spacewalks, luxury stays, or scientific exploration missions.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList