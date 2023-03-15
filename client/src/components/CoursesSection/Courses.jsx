import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import courseImg1 from '../../images/course1.jpg'
import courseImg2 from '../../images/course2.jpg'
import courseImg3 from '../../images/corse3.jpg'
import CourseCard from './CourseCard'

const coursesData = [
    {
      id: "01",
      title: "IELTS Practice General Training Test",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg1,
    },
  
    {
      id: "02",
      title: "Academic Writing Tak 2- Direct Question Essay",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg2,
    },
  
    {
      id: "03",
      title: "Voabulary for IELTS: How to develop your Vocabulary",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg3,
    },
  ];

function Courses() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Join our live lessons</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">Explore More</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Courses
