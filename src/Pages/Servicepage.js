import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";

export default class Servicepage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle="Services page" />
        <Services />
        <Footer />
      </Fragment>
    );
  }
}
