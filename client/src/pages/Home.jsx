import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import CompanySection from '../components/CompanySection/CompanySection'
import Courses from '../components/CoursesSection/Courses'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import Testimonials from '../components/Testimonials/Testimonials'

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Testimonials />
    </div>
  )
}

export default Home
