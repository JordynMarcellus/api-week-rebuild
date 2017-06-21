import React, { Component } from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
// import CardsContainer from '../CardsContainer/CardsContainer';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;