import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import store from './store';
import routes from './routes';

import './assets/css/contractHeader.css';
import './assets/css/header.css';
import './assets/css/history.css';
import './assets/css/index.css';
import './assets/css/main.css';
import './assets/css/template.css';
import './assets/css/templateEditor.css';
import './assets/css/top.css';
import './assets/css/react-datepicker.css';


render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
