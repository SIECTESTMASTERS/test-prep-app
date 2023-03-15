import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function CompanySection() {
  return (
    <section>
      <Container>
        <Row>
        <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <i class="ri-global-line"></i>IELTS
            </h3>
        </Col> 
        <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <i class="ri-global-line"></i>PTE
            </h3>
        </Col> 
        <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <i class="ri-global-line"></i>TOEFL
            </h3>
        </Col> 
        </Row>
      </Container>
    </section>
  )
}

export default CompanySection
