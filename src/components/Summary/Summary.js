import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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
                      <h1 className="CountNumber">
                        <CountUp start={0} end={100}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="CountTitle">Total Project</h4>
                      <hr className="bg-white  w-25" />
                    </Col>
                    <Col>
                      <h1 className="CountNumber">
                      <CountUp start={0} end={1000}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
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
                        <p className="CardSubTitle ">
                          <FontAwesomeIcon
                            className="IconBullet"
                            icon={faCheckCircle}
                          />
                          Requrement Gathaing
                        </p>
                        <p className="CardSubTitle ">
                          <FontAwesomeIcon
                            className="IconBullet"
                            icon={faCheckCircle}
                          />
                          System Analysis
                        </p>
                        <p className="CardSubTitle ">
                          <FontAwesomeIcon
                            className="IconBullet"
                            icon={faCheckCircle}
                          />
                          Coding Testing
                        </p>
                        <p className="CardSubTitle ">
                          <FontAwesomeIcon
                            className="IconBullet"
                            icon={faCheckCircle}
                          />
                          Implementatioon
                        </p>
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
