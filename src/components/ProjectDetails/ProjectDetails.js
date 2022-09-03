import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";

export default class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="mt-5">
            <Col xs={12} md={6} sm={12}>
              {/* <img src={RecectprojectThree} alt="Project Image" style="width:200px;height:200px"/> */}
            </Col>
            <Col xs={12} md={6} sm={12}>
              <h2 className="ProjectCardTitle">Sunlight ProjectDetails</h2>
              <p className="ProjectCardDesc">
                urvived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <ul>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
              </ul>

              <Button variant="primary">Details</Button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
