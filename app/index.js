import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/App/AppContainer';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Link, Switch} from 'react-router-dom'
import promiseMiddleware from 'redux-promise'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools, applyMiddleware(...middleware))
const middleware = [routerMiddleware(history), thunk]
const history = createHistory();

ReactDOM.render(<Provider store={store}>
                  <ConnectedRouter history={history}>
                    <Route to='/' component={AppContainer}/>
                  </ConnectedRouter>
                </Provider>, document.getElementById('main'))


// <Router history={history}>
