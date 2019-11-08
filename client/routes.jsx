import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import App from './app';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes
