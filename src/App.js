import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
/* Media and styles */
//import logo from './logo.svg';
import './App.css';
/* Pages and components */
import Navbar from "./Components/Navbar/index";
import Footer from "./Components/Footer/index";

import MainPage from './Pages/Main/index';
import Transcript from './Pages/Transcript';
import EducationPage from './Pages/Education';
import SliderTable from './Components/Swiper';
/* Template header
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/

function Dummy() {
  return (
    <SliderTable items={[<span>lol1</span>,<span>lol1</span>,<span>lol1</span>,<span>lol1</span>]} />
  )
}

function App() {
  return (
    <>
      <head className="App-header">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@200..800&display=swap" rel="stylesheet"  />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Underdog&display=swap" rel="stylesheet"></link>
      </head>
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact={true} path="/" component={MainPage} />
            <Route exact={true} path="/transcript" component={Transcript} />
            <Route exact={true} path="/portfolio" component={null /*Portfolio*/} />
            <Route exact={true} path="/emailme" component={Dummy} />
            <Route exact={true} path="/404" component={null /*Error Page*/} />
            <Redirect to="/404" />
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
