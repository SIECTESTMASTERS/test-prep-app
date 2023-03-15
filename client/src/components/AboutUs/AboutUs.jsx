import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import aboutImg from '../../images/about-us.png'
import CountUp from 'react-countup'
import './AboutUs.css'

function AboutUs() {
  return (
    <section>
      <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="about__img">
                    <img src={aboutImg} alt='about us image' className='w-100'/>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className="about__content">
                <h2>About Us</h2>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
                </p>

                <div className="about__counter">
                  <div className='d-flex gap-5 align-items-center' >
                    <div className="single__counter">
                        <span className="counter">
                          <CountUp start={0} end={25} duration={2} suffix='K'></CountUp>  
                        </span>
                        <p className='counter__title'>Total Students Trained</p>
                    </div>

                    <div className="single__counter">
                        <span className="counter">
                          <CountUp start={0} end={1} duration={2} suffix='K'></CountUp>  
                        </span>
                        <p className='counter__title'>Total Trainers</p>
                    </div>
                  </div>

                  <div className='d-flex gap-5 align-items-center' >
                    <div className="single__counter">
                        <span className="counter">
                          <CountUp start={0} end={25} duration={2} suffix='K'></CountUp>  
                        </span>
                        <p className='counter__title'>Total Tests Taken</p>
                    </div>

                    <div className="single__counter">
                        <span className="counter">
                          <CountUp start={0} end={1} duration={2} suffix='K'></CountUp>  
                        </span>
                        <p className='counter__title'>Total Trainers</p>
                    </div>
                  </div>
                </div>

                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
