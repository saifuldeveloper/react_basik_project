
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react"
import { Fragment } from "react"
import { Container } from "react-bootstrap"
import { Row, Col } from "react-bootstrap"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"


export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container  className=" pt-5 ">
          <Row>
            <Col md={6} sm={12} lg={3} className=" FooterSection text-justify pl-5 ml-5" >
              <h1 className="ServiceName">Follow </h1>
              <p className="FooterInformationDesc"><FontAwesomeIcon className="FooterSocialcon" icon={faFacebook} />Facebook
              </p>
              <p className="FooterInformationDesc"><FontAwesomeIcon className="FooterSocialcon" icon={faYoutube} />Youtube</p>
              <p className="FooterInformationDesc"><FontAwesomeIcon className="FooterSocialcon"icon={faLinkedin} />faLinkedinIn</p>
            </Col>
            <Col md={6} sm={12} lg={3}>
              <h1 className="ServiceName">Address </h1>
              <p className="FooterInformationDesc">218/09 Begum Rokeya Sarani</p>
              <p className="FooterInformationDesc">Dhaka 1207</p>
              <p className="FooterInformationDesc">Dhaka Banladesh</p>
            </Col>
            <Col md={6} sm={12} lg={3}>
              <h1 className="ServiceName">Infroamtion </h1>
              <a href="#" className="FooterInformationDesc">About Me</a>
              <br />
              <a href="#" className="FooterInformationDesc">My Reesume</a>
              <br />
              <a href="#" className="FooterInformationDesc">Contacat Me</a>
              <br />
            </Col>
            <Col md={6} sm={12} lg={3} classNam="text-end">
              <h1 className="ServiceName">Follow </h1>
              <p className="FooterInformationDesc">Facebook</p>
              <p className="FooterInformationDesc"> Demo Image Designing Is A Key For </p>
              <p className="FooterInformationDesc"> Software Development </p>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="text-center bg-primary py-3">
                   <Row className="justify-content-center">
                     <Col>
                     <a className="ConpyRightsection" href="#">Saiful.com &copy; 2020 -2022</a>
                     </Col>
                    </Row>   
        </Container>
       
      </Fragment>
    );
  }
}
