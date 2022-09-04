   import React, { Component } from 'react'
   import { Fragment } from 'react';
import Allcources from '../components/AllCourses/AllCources';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

   export default class Courcespage extends Component {
    componentDidMount(){
      window.scroll(0,0)
    }
     render() {
       return (
       
        <Fragment>
            <TopNavigation />
            <PageTop pagetitle="ALL COURCES" />
            <Allcources />
            <Footer />
        </Fragment>
       )
     }
   }
   