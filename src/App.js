import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
/* Media and styles */
//import logo from './logo.svg';
import './App.css';
/* Pages and components */
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";
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
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={null/*Main Page*/} />
          <Route exact={true} path="/streams" component={null/*Streams*/} />
          <Route exact={true} path="/community" component={null/*Community*/} />
          <Route exact={true} path="/joinus" component={null/*Some Page IDK*/} />
          <Route exact={true} path="/pagenotfound" component={null/*Error Page*/} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
