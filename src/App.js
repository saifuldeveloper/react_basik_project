import React from "react";
import { Fragment } from "react";
import PageTop from "./components/PageTop/PageTop";
import HomePage from './Pages/Homepage';
import TopNavigation from './components/TopNavigation/TopNavigation';


function App() {
  return (
    <div>
      <Fragment>
        <TopNavigation/>
        <PageTop pagetitle="About Me" />
      </Fragment>
    </div>
  );
}

export default App;
