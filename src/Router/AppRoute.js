import React, { Component, Fragment } from 'react'
import { Routes, Route,} from "react-router-dom";
import HomePage from './../Pages/Homepage';
import Servicepage from './../Pages/Servicepage';
import Courcespage from './../Pages/Courcespage';
import Portfolio from './../Pages/Portfolio';
import Contactpage from './../Pages/Contactpage';
import AboutPage from './../Pages/AboutPage';

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
         </Routes>

 
      </Fragment>
    )
  }
}
