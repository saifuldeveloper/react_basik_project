import React, { Component } from "react";
import { Fragment } from "react";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      nabarTitle: "NavTitle",
      navVariant: "light",
      navBarBack: "navBackground",
      navBarItem: "NavItem",
    };
  }
  onscroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navVariant: "light",
        nabarTitle: "NavTitleScroll",
        navBarBack: "navBackgroundScroll",
        navBarItem: "NavItemScroll",

      });
    } else if (window.scrollY < 100) {
      this.setState({
        navVariant: "dark",
        nabarTitle: "NavTitle",
        navBarBack: "navBackground",      
      });
    }
    
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onscroll);
  }

  render() {
    return (
      <Fragment>
        <Navbar
          fixed="top"
          variant={this.state.vari}
          className={this.state.navBarBack}
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand className={this.state.nabarTitle} href="#home">
              CODER{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link exact  activeStyle={{ color:'#007ACC'}} className={this.state.navBarItem} to="/">HOME</Link>
                <Link  exact  activeStyle={{ color:'#007ACC'}} className={this.state.navBarItem} to="/service"> SERVICES</Link>
                <Link  exact activeStyle={{ color:'#007ACC'}} className={this.state.navBarItem} to="/cources"> COURCES</Link>
                <Link  exact activeStyle={{ color:'#007ACC'}} className={this.state.navBarItem} to="/portfolio"> PORTFOLIO</Link>
                <Link exact activeStyle={{ color:'#007ACC'}} className={this.state.navBarItem}  to="/contact"> CONTACT</Link>
                <Link exact activeStyle={{ color:'#007ACC'}} className={this.state.navBarItem}  to="/about"> ABOUT</Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
