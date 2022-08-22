import React, { Component } from "react";
import { Fragment } from "react";
import mobileLogo from "../../asset/image/mobile.svg";
import WebLgo from "../../asset/image/web.svg";
import graphicLogo from "../../asset/image/graphic.svg";
import { Container, Row, Col } from "react-bootstrap";

export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="ServiceMainTitle">MY SERVICE</h1>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="ServiceCard  text-center">
                <img src={WebLgo} height="60px" alt="WebLgo" />
                <h2 className="ServiceName">Web Development</h2>
                <p className="ServiceDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="ServiceCard text-center">
                <img src={mobileLogo} height="60px" alt="WebLgo" />
                <h2 className="ServiceName">Web Development</h2>
                <p className="ServiceDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="ServiceCard text-center">
                <img src={graphicLogo} height="60px" alt="WebLgo" />
                <h2 className="ServiceName">Web Development</h2>
                <p className="ServiceDescription">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
