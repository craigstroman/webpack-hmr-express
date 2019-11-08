import ReactDOM from 'react-dom';
import React from 'react';

import Routes from './routes';

ReactDOM.render(
  <Routes />,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}

