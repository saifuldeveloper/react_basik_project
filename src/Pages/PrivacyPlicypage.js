import React, { Component, Fragment } from "react";
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import TopNavigation from '../components/TopNavigation/TopNavigation'
export default class PrivacyPlicypage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle="PrivacyPolicy  Page" />
        <PrivacyPolicy />
        <Footer />
      </Fragment>
    );
  }
}
