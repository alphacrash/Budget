import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';

import ErrorBoundaryLogger from './ErrorBoundaryLogger';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundaryLogger>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundaryLogger>
  </React.StrictMode>,
  document.getElementById('root')
);
