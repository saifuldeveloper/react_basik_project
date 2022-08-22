import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Summary extends Component {
  render() {
    return (
      <Fragment>
        <div className="SummaryFixedBanner">
          <div className="SummaryBannerOverlay">
            <Container className="SummarySection text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row>
                    <Col>
                         <h1 className="CountNumber">1000</h1>
                         <h4>Total Project</h4>
                    </Col>
                    <Col>
                         <h1>1000</h1>
                         <h4>Total Project</h4>
                    </Col>
                       
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}></Col>
              </Row>
            </Container>
          </div>
        </div>
      </Fragment>
    );
  }
}
