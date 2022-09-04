import React, { Component, Fragment } from "react";
import AllPortfolio from "../components/AllPortfolio/AllPortfolio";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

export default class Portfolio extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle="Portfolio page" />
        <AllPortfolio />
        <Footer />
      </Fragment>
    );
  }
}
