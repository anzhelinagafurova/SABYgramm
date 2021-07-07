import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import SabygramService from './services/SabygramService';
import { ServiceProvider } from './components/Context';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ServiceProvider value={SabygramService}>
      <Router>
        <App />
      </Router>
    </ServiceProvider>    
  </Provider>,
  document.getElementById('root')
);
