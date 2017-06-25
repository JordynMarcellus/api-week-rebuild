import React, { Component } from 'react';
import './App.styl';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
// import CardsContainer from '../CardsContainer/CardsContainer';
import Home from '../Home/Home';
import ArtistPage from '../ArtistPage/ArtistPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/artist/:artistId" component={ArtistPage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;