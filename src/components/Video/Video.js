import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { BigPlayButton, Player } from "video-react";

export default class Video extends Component {
  constructor() {
    super();
    this.state={
      show: false
    }
  }
  MdalClose=()=>this.setState({ show: false })
  ModalOpen=()=>this.setState({ show: true })

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col lg={12} sm={12} md={12}>
              <div className="VideoCard">
                <p className="VideoTitle">How I Do</p>
                <p className="VIdeoDescription">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in
                </p>
                <p>
                  <FontAwesomeIcon
                    onClick={this.ModalOpen}
                    className="PlayBtn"
                    icon={faPlayCircle}
                  ></FontAwesomeIcon>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* ====================MOdal Section ============= */}
        <Modal size="lg" show={this.state.show} onHide={this.MdalClose}>
          <Modal.Body>
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              <BigPlayButton position="center"></BigPlayButton>
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.MdalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}
