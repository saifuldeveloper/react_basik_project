import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row,Card} from "react-bootstrap";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";



export default class Summary extends Component {
  render() {
    return (
      <Fragment>
        <div className="SummaryFixedBanner">
          <div className="SummaryBannerOverlay">
            <Container className="SummarySection text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="CountSection ">
                    <Col>
                      <h1 className="CountNumber">1000</h1>
                      <h4 className="CountTitle">Total Project</h4>
                      <hr className="bg-white  w-25" />
                    </Col>
                    <Col>
                      <h1 className="CountNumber">1000</h1>
                      <h4 className="CountTitle">Total Project</h4>
                      <hr className="bg-whitt w-25" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card className="CardWork">
                    <Card.Body>
                      <Card.Title className="CardTitle ">HOW I WORK</Card.Title>
                      <Card.Text>
                        <p className="CardSubTitle "><FontAwesomeIcon className="IconBullet" icon={faCheckCircle} />Requrement Gathaing</p>
                        <p className="CardSubTitle "><FontAwesomeIcon  className="IconBullet" icon={faCheckCircle} />System Analysis</p>
                        <p className="CardSubTitle "><FontAwesomeIcon className="IconBullet" icon={faCheckCircle} />Coding Testing</p>
                        <p className="CardSubTitle "><FontAwesomeIcon className="IconBullet" icon={faCheckCircle} />Implementatioon</p>
                      </Card.Text>                    
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Fragment>
    );
  }
}
