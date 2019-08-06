import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
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
          <Route exact path='/about' render={() => (
            <About
            />
          )} />
                    <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              
            />
          }/>
          <Route exact path='/login' render={() => 
            <LoginPage
              
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
