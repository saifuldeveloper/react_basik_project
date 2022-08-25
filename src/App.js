import React from "react";
import { Fragment } from "react";
import PageTop from "./components/PageTop/PageTop";
import HomePage from './Pages/Homepage';
import TopNavigation from './components/TopNavigation/TopNavigation';
import AboutPage from "./Pages/AboutPage";


function App() {
  return (
    <div>
      <Fragment>
         <AboutPage />
      </Fragment>
    </div>
  );
}

export default App;
