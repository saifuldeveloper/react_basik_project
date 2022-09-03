import React, { Component, Fragment } from 'react'
import { Routes, Route,} from "react-router-dom";
import HomePage from './../Pages/Homepage';
import Servicepage from './../Pages/Servicepage';
import Courcespage from './../Pages/Courcespage';
import Portfolio from './../Pages/Portfolio';
import Contactpage from './../Pages/Contactpage';
import AboutPage from './../Pages/AboutPage';
import Refoundpage from '../Pages/Refoundpage';
import Termspage from '../Pages/Termspage';
import PrivacyPlicypage from '../Pages/PrivacyPlicypage';
import ProjectDetailspage from '../Pages/ProjectDetailspage';
import CourcesDetalspage from '../Pages/CourcesDetalspage';

export default class AppRoute extends Component {
  render() {
    return (
 
      <Fragment>

         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<Servicepage/>} />
            <Route path="/cources" element={<Courcespage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/refound" element={<Refoundpage />} />
            <Route path="/terms" element={<Termspage />} />
            <Route path="/privacy" element={<PrivacyPlicypage />} />
            <Route path="/ProjectDetails" element={<ProjectDetailspage />} />
            <Route path="/CourseDetails" element={<CourcesDetalspage />} />
            

            


         </Routes>

 
      </Fragment>
    )
  }
}
