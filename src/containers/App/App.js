import React, { Component } from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import CardsContainer from '../CardsContainer/CardsContainer';
import HeaderForm from '../../components/HeaderForm/HeaderForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderForm></HeaderForm>
        <Router>
          <Switch>
            <Route exact path="/" component={CardsContainer}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;