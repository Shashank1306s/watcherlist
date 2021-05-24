
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './containers/dashboard/Dashboard'
import './App.css';
import Header from './containers/headers/Header';
import NowPlaying from './containers/nowplaying/NowPlaying'
import Upcoming from './containers/upcoming/Upcoming'
import Search from './containers/search/Search'
import Genre from './containers/genre/Genre'
import store from './store'
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <div className="App">
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/nowplaying" component={NowPlaying} />
              <Route exact path="/upcoming" component={Upcoming} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/genre" component={Genre} />
            </div>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
