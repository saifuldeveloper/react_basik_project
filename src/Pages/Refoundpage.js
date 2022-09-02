import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import RefoundDescription from "../components/RefoundDesciption/RefoundDescription";
import TopNavigation from "../components/TopNavigation/TopNavigation";

export default class Refoundpage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle="Refound Page" />
        <RefoundDescription />
        <Footer />
      </Fragment>
    );
  }
}
