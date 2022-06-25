import type { NextPage } from 'next'
import React from 'react'
import HeroSection from '../components/HeroSection'
import Mission from '../components/Mission'
import Partners from '../components/Partners'
import Career from '../components/Career'
import Products from '../components/Products'
import Community from '../components/Community'
import Newsletter from '../components/Newsletter'
import Testimonial from '../components/Testimonial'
import Faqs from '../components/Faqs'
const Home: NextPage = () => {
  return (
    <div className="">
      <HeroSection />
      <Mission />
      <Partners />
      <Career />
      <Products />
      <Community />
      <Newsletter />
      <Testimonial />
      <Faqs />
    </div>
  )
}

export default Home
