import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from "react-bootstrap";

export default class PageTop extends Component {
  render() {
    return (
     <Fragment>
        <div className="TopPageFixedBanner">
          <div className="TopPageBannerOverlay">
            <Container className="TopContent">
              <Row>
                <Col className="text-center">
                  <h4 className="TopTitle">{this.props.pagetitle}</h4>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
     </Fragment>
    )
  }
}
