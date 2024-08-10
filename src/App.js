import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
/* Media and styles */
//import logo from './logo.svg';
import './App.css';
/* Pages and components */
import Navbar from "./Components/Navbar/index";
import Footer from "./Components/Footer/index";

import MainPage from './Pages/Main/index';
import EducationPage from './Pages/Education/index';
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

function App() {
  return (
    <>
      <head className="App-header">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@200..800&display=swap" rel="stylesheet"  />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact={true} path="/" component={MainPage} />
            <Route exact={true} path="/aboutme" component={null /* About Me*/} />
            <Route exact={true} path="/education" component={EducationPage} />
            <Route exact={true} path="/interests" component={null /*Interests*/} />
            <Route exact={true} path="/404" component={null /*Error Page*/} />
            <Redirect to="/404" />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
