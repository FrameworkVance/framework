import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SettingsPage from '../SettingsPage/SettingsPage';
import About from '../About/AboutPage';

class App extends Component {
  constructor() {
    super();
  }

  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() =>
            <HomePage
            />
          } />
          <Route exact path='/settings' render={props => 
            <SettingsPage
            />
          } />
          <Route exact path='/high-scores' render={() => (
            <About
            />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
