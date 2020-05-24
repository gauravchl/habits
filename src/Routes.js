import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './containers/home';
import Settings from './containers/settings';
import history from './history.js';

export default () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route exact path="/settings" component={Settings} />
    </Router>
  );
};
