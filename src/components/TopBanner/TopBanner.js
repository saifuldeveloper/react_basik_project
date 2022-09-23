import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default class TopBanner extends Component {

  render() {
    return (
      <Fragment>
        <div className="TopFixedBanner">
          <div className="TopBannerOverlay">
            <Container className="TopContent">
              <Row>
                <Col className="text-center">
                  <h1 className="TopTitle">Software Development</h1>
                  <h4 className="TopSubTitle">
                    Mobile Application Development
                  </h4>
                  <Button variant="primary">More Info</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Fragment>
    );
  }
}
