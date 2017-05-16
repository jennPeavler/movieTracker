import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Link, Switch} from 'react-router-dom'
import promiseMiddleware from 'redux-promise';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools,applyMiddleware(promiseMiddleware));

ReactDOM.render(<Provider store={store}>
                  <Router >
                    <Route to='/' component={App}/>
                  </Router>
                </Provider>, document.getElementById('main'))
