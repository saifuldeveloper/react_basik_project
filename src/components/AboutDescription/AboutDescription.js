import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export default class AboutDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col md={12} sm={12} lg={12}>
              <h1 className="ServiceName">Who I Am</h1>
              <hr />
              <p className="ServiceDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsu
              </p>
              <h1 className="ServiceName">MY Mission</h1>
              <hr />
              <p className="ServiceDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsu
              </p>
              <h1 className="ServiceName">MY Vission</h1>
              <hr />
              <p className="ServiceDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsu
              </p>


            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
