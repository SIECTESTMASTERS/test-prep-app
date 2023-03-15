import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import CompanySection from '../components/CompanySection/CompanySection'
import Courses from '../components/CoursesSection/Courses'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
    </div>
  )
}

export default Home
