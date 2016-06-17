// First loaded file

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import {loadAllCourses} from './actions/courseActions';
import {loadAllAuthors} from './actions/authorActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-spinner/react-spinner.css';
import '../node_modules/toastr/build/toastr.css';
import './styles/styles.css';

const store = configureStore();
store.dispatch(loadAllCourses());
store.dispatch(loadAllAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);