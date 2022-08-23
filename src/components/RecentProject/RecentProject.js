import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import RecectprojectTwo from "../../asset/image/recectprojectTwo.jpg";
import RecectprojectOne from "../../asset/image/recentprojectOne.jpg";
import RecectprojectThree from "../../asset/image/recentprojectThree.jpg";

export default class RecentProject extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
        <h1 className="ServiceMainTitle">RECENT PORJECT </h1>
          <Row>
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card className="ProjectCard">
                <Card.Img variant="top" src={RecectprojectOne}/>
                <Card.Body>
                  <Card.Title className="ProjectCardTitle">Card Title</Card.Title>
                  <Card.Text className="ProjectCardDesc">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Detailsgi</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card className="ProjectCard">
                <Card.Img variant="top" src={RecectprojectTwo}/>
                <Card.Body>
                  <Card.Title className="ProjectCardTitle">Card Title</Card.Title>
                  <Card.Text className="ProjectCardDesc">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Detailsgi</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card className="ProjectCard">
                <Card.Img
                  variant="top"src={RecectprojectThree} height="240px"/>
                <Card.Body>
                  <Card.Title className="ProjectCardTitle">Card Title</Card.Title>
                  <Card.Text className="ProjectCardDesc">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Detailsgi</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
