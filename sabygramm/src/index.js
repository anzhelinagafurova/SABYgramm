import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// import { PersistGate } from 'redux-persist/integration/react'


// import {store, persistor} from './store';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router>
        <App />
      </Router>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
