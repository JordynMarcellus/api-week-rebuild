import React, { Component } from 'react';
import './App.styl';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../Home/Home';
import ArtistPage from '../ArtistPage/ArtistPage'


import ErrorPage from '../../components/ErrorPage/ErrorPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/artist/:artistId" component={ArtistPage}></Route>
              <Route component={ErrorPage}></Route>
            </Switch>
        </Router>
        <footer className="app-footer">
          <p> Jordyn + Discogs = <span className="footer-emojis" role="img" aria-label="musical notes">🎶 🎶 🎶 </span></p>
        </footer>
      </div>
    );
  }
}

export default App;   