import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './containers/Dashboard/Dashboard';
import NowPlaying from './containers/NowPlaying/NowPlaying';
import Header from './containers/Header/Header';
import Upcoming from './containers/Upcoming/Upcoming';
const App = () =>{
  return (
    <>
      <div className = "App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component = {Dashboard} />
          <Route exact path="/nowplaying" component = {NowPlaying} />
          <Route exact path="/upcoming" component = {Upcoming} />
        </Switch>
      </Router>
      </div>
    </>
  );
}


export default App;
