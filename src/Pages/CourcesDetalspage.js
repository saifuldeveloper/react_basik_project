import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CouseDeatails from './../components/CourseDetails/CouseDeatails';


export default class CourcesDetalspage extends Component {
  render() {
    return (
     <Fragment>
        <TopNavigation />
        <CouseDeatails/> 
        <Footer />
     </Fragment>
    )
  }
}
