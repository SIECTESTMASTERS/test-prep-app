import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import CompanySection from '../components/CompanySection/CompanySection'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUs />
    </div>
  )
}

export default Home
