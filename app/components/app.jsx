import React, { Component } from 'react';
import MovieList from './MovieList'
import Favorites from './Favorites'
import Login from './Login'
import {Route, Link, Switch} from 'react-router-dom'
import {NavBar} from './NavBar'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <NavBar />
        <Switch>
          <Route path='/favorites' component={Favorites} />
          <Route path='/login' component={Login} />
          <Route path='/' component={MovieList} />

        </Switch>
        {this.props.children}
      </div>
    )
  }
}
