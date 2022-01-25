import React from "react";
import './App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import Concept from "./Concept.jsx";
import ParallelStories from "./Parallel-Stories.jsx";
import CopyrightFragmentation from "./CopyrightFragmentation.jsx";
import EconomicModel from "./EconomicModel.jsx";
import Adoption from "./Adoption.jsx";
import About from "./About.jsx";
import Roadmap from "./Roadmap.jsx";
import Social from "./Social.jsx";
import {
  BrowserRouter as Router,
  // eslint-disable-next-line
  Switch,
  // eslint-disable-next-line
  Route,
  // eslint-disable-next-line
  Link
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Main />
        <Concept />
        <ParallelStories />
        <CopyrightFragmentation />
        <EconomicModel />
        <Adoption />
        <About />
        <Roadmap />
        {/* <Social /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
