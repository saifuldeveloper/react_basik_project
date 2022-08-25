import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import CourcesOne from "../../asset/image/courseOne.jpg";
import CourcesTwo from "../../asset/image/corsetwo.jpg";
import CourcesThree from "../../asset/image/coursethree.jpg";
import CourcesFour from "../../asset/image/courseFour.jpg";

export default class Allcources extends Component {
  render() {
    return (
       <Fragment>
         <Container className="mt-4">
          <Row>
            <Col lg={6} sm={12} md={12} className="CouserPartiton">
              <Row>
                <Col lg={6} sm={12} md={6}>
                  <img className="CourseImage" src={CourcesOne} alt={CourcesOne} />
                </Col>
                <Col lg={6} sm={12} md={6}>
                  <h5 className="CourseTitle">Web Development</h5>
                  <p className="CourseDescription">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. 
                    ummy text of the printing and
                    typesetting industry. 
                  </p>
                  <a className="CourseDetails" href="#" >Detils</a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} sm={12} md={12} className="CouserPartiton">
              <Row>
                <Col lg={6} sm={12} md={6}>
                  <img className="CourseImage" src={CourcesTwo} alt={CourcesTwo} />
                </Col>
                <Col lg={6} sm={12} md={6}>
                  <h5 className="CourseTitle">Web Development</h5>
                  <p className="CourseDescription">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. 
                    ummy text of the printing and
                    typesetting industry. 
                  </p>
                  <a className="CourseDetails" href="#" >Detils</a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} sm={12} md={12} className="CouserPartiton">
              <Row>
                <Col lg={6} sm={12} md={6}>
                  <img className="CourseImage" src={CourcesOne} alt={CourcesOne} />
                </Col>
                <Col lg={6} sm={12} md={6}>
                  <h5 className="CourseTitle">Web Development</h5>
                  <p className="CourseDescription">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. 
                    ummy text of the printing and
                    typesetting industry. 
                  </p>
                  <a className="CourseDetails" href="#" >Detils</a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} sm={12} md={12} >
              <Row>
                <Col lg={6} sm={12} md={6}>
                  <img className="CourseImage" src={CourcesOne} alt={CourcesOne} />
                </Col>
                <Col lg={6} sm={12} md={6}>
                  <h5 className="CourseTitle">Web Development</h5>
                  <p className="CourseDescription">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. 
                    ummy text of the printing and
                    typesetting industry. 
                  </p>
                  <a className="CourseDetails" href="#" >Detils</a>
                </Col>
              </Row>
            </Col>
            
          </Row>
        </Container>
       </Fragment>
    )
  }
}
