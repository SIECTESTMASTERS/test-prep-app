import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../images/hero-img1.png'
import './heroSection.css'

function HeroSection() {
  return (
    <section>
    <Container>
        <Row>
            <Col lg='6' md='6'>
            <div className="hero___content">
                <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule  
                </h2>
                <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
                </p>
            </div>
            <div>
                {/*<input type='text' placeholder='Search'/> */}
                <a href='https://test-masters-frontend-classroom-management-system-seven.vercel.app/allcourses' target="_blank">
                <button className='btn'>Get Started</button>
                </a>
                <a href='https://test-masters-frontend-classroom-management-system-seven.vercel.app/submitcallrequest' target="_blank">
                <button className='btn'>Talk to an expert</button>
                </a>
            </div>
            </Col>
            <Col lg='6' md='6'>
                <img src={heroImg} className='w-100 hero__img'/>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default HeroSection
