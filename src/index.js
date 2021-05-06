import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Providor } from 'react-redux';

import store from './redux/store';

import './index.css';
import App from './App';


ReactDOM.render(
  <Providor store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Providor>,
    document.getElementById('root')
);
