import React, { Component } from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Form, Group, Label, Button, Input } from "react-bootstrap";

export default class ContactSection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col md={6} sm={12}>
            <h1 className="ServiceName">Quick Contact </h1>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nmae</Form.Label>
                  <Form.Control type="Text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="Email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={6} sm={12} className="text-center mt-4">
              <h1 className="ServiceName">Address </h1>
              <p className="FooterInformationDesc">
                218/09 Begum Rokeya Sarani
              </p>
              <p className="FooterInformationDesc">Dhaka 1207</p>
              <p className="FooterInformationDesc">Dhaka Banladesh</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
