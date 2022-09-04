import React, { Component, Fragment } from "react";
import TopBanner from "./../components/TopBanner/TopBanner";
import Services from "./../components/Services/Services";

import Analysis from "./../components/Analysis/Analysis";
import Summary from "./../components/Summary/Summary";
import RecentProject from "./../components/RecentProject/RecentProject";
import Cources from "./../components/Cources/Cources";
import Video from "./../components/Video/Video";
import ClientReview from "./../components/ClientReview/ClientReview";
import TopNavigation from './../components/TopNavigation/TopNavigation';
import Footer from './../components/Footer/Footer';

export default class HomePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <RecentProject />
        <Cources />
        <Video />
        <ClientReview />
        <Footer />
      </Fragment>
    );
  }
}
