
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard'
import Header from './containers/headers/Header';
import NowPlaying from './containers/NowPlaying/NowPlaying'
import Upcoming from './containers/Upcoming/Upcoming'
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
              <Route exact path="/nowplaying" component={NowPlaying} />
              <Route exact path="/upcoming" component={Upcoming} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/genre" component={Genre} />
              <Route exact path="/" component={Dashboard} />
            </div>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
