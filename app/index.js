import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Link, Switch } from 'react-router-dom'
import promiseMiddleware from 'redux-promise'
import createHistory from 'history/createBrowserHistory'

import AppContainer from './components/App/AppContainer'
import rootReducer from './reducers'

const history = createHistory()
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools,applyMiddleware(promiseMiddleware))

ReactDOM.render(<Provider store={store}>
                  <Router history={history} >
                    <Route to='/' component={AppContainer}/>
                  </Router>
                </Provider>, document.getElementById('main'))
