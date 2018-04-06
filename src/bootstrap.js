import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Link, NavLink, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <header>
            <NavLink to="/home">Home</NavLink><br/>
            <NavLink to="/login">Login</NavLink><br/>
            <NavLink to="/signUp">Sign Up</NavLink><br/>
          </header>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/signUp" component={SignUp}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>

    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
