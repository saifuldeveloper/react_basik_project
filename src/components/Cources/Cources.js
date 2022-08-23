import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourcesOne from "../../asset/image/courseOne.jpg";
import CourcesTwo from "../../asset/image/corsetwo.jpg";
import CourcesThree from "../../asset/image/coursethree.jpg";
import CourcesFour from "../../asset/image/courseFour.jpg";
import { Fragment } from "react";


export default class Cources extends Component {
  render() {
    return (
      <Fragment>
        <Container>
        <h1 className="ServiceMainTitle text-center">OUR COURCES</h1>
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
    );
  }
}
