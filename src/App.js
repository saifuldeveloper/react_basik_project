import React from "react";
import { Fragment } from "react";
import PageTop from "./components/PageTop/PageTop";
import HomePage from "./Pages/Homepage";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AboutPage from "./Pages/AboutPage";
import Courcespage from "./Pages/Courcespage";
import Portfolio from "./Pages/Portfolio";
import ContactSection from './components/ContactSection/ContactSection';
import Contactpage from "./Pages/Contactpage";
import Servicepage from "./Pages/Servicepage";
import { BrowserRouter } from "react-router-dom";
import AppRoute from './Router/AppRoute';
 


function App() {
  return (
    <div>
      <Fragment>
      <BrowserRouter>
       <AppRoute/>
      </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
