import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Router from './Router';

import ErrorBoundaryLogger from './ErrorBoundaryLogger';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundaryLogger>
      <Provider store={store}>
        <Router />
      </Provider>
    </ErrorBoundaryLogger>
  </React.StrictMode>,
  document.getElementById('root')
);
