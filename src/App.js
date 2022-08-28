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

function App() {
  return (
    <div>
      <Fragment>
        {/* <Portfolio /> */}
       <Contactpage />
      </Fragment>
    </div>
  );
}

export default App;
