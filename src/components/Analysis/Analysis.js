import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { BarChart, Bar ,ResponsiveContainer,XAxis,Tooltip} from "recharts";

export default class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Technology: "React", Percentage: 98 },
        { Technology: "NodeJs", Percentage: 70 },
        { Technology: "MongoDB", Percentage: 60 },
        { Technology: "Express", Percentage: 50 },
        { Technology: "Mongoose", Percentage: 40 },
        { Technology: "Bootstrap", Percentage: 30 },
        { Technology: "PHP", Percentage:65 },
        { Technology: "Materialize", Percentage: 100 },
      ],
    };
  }

  render() {
    var blue = "rgb(0,115,230,0.8)";
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="ServiceMainTitle">Technology Used</h1>
          <Row>
            <Col lg={6}md={12} sm={12}  style={{ height:'300px'}}>
              <ResponsiveContainer >
                <BarChart width={100} height={400} data={this.state.data}>
                  <Tooltip />
                  <XAxis dataKey="Technology" />
                  <Bar dataKey="Percentage" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="text-justify des">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
