import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BigPlayButton, Player } from "video-react";


export default class CouseDeatails extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopPageFixedBanner">
          <div className="TopPageBannerOverlay">
            <Container className="TopContentCouseDetails">
              <Row className="text-white">
                <Col sm={12} md={6} lg={6}>
                  <h3 className="couseDetailsTilte">Full Daynamic Website with Admin Panle</h3>
                  <p className="CouseSubtile mt-3">Total Lecture 30</p>
                  <p  className="CouseSubtile">Total Lecture 30</p>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <p className="CouseDetailsDescription">
                    urvived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                </Col>
              </Row>
            </Container>
            
          </div>
        </div>

        <Container className="mt-5">
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <h3 className="CouseTile">Skill you Get</h3>
                  <ul>
                    <li>
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </li>
                    <li>
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </li>
                    <li>
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </li>
                    <li>
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </li>
                    <li>
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </li>
                    <li>
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </li>
                    <li>
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </li>
                    <li>
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </li>
                    <li>
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </li>
                  </ul>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Player>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    <BigPlayButton position="center"></BigPlayButton>
                  </Player>
                </Col>
              </Row>
            </Container>
      </Fragment>
    );
  }
}
