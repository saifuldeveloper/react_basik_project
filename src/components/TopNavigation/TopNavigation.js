import React, { Component } from "react";
import { Fragment } from "react";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import { Navbar,Container,Nav } from "react-bootstrap";


export default class TopNavigation extends Component {

    constructor() {
        super();
        this.state = {
            nabarTitle: "NavTitle",
            navBarBack: "navBackground",
            navBarItem: "NavItem"
        };
    }
    onscroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                nabarTitle: "NavTitleScroll",
                navBarBack: "navBackgroundScroll",
                navBarItem: "NavItemScroll"
            });
        } else if(window.scrollY < 100){
            this.setState({
                nabarTitle: "NavTitle",
                navBarBack: "navBackground",
                navBarItem: "navItem"

            });
        }
    }
           
    componentDidMount() {
        window.addEventListener("scroll", this.onscroll);
    }


  render() {
    return (
      <Fragment>
        <Navbar fixed="top" className={this.state.navBarBack} collapseOnSelect expand="lg"  variant="dark">
          <Container>
            <Navbar.Brand className={ this.state.nabarTitle } href="#home">CODER </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
            
              </Nav>
              <Nav>
                <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                <Nav.Link  className={this.state.navBarItem} href="#deets">SERVICES</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">COURCES</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
