import React, { Component,Fragment } from 'react'
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation"
import TermsCondition from './../components/TermsCondition/TermsCondition';

export default class Termspage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
    <Fragment>
        <TopNavigation />
        <PageTop pagetitle="Terms And Condition Page" />
        <TermsCondition />
        <Footer />
    </Fragment>
    )
  }
}





