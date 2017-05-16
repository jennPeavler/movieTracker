import React, { Component } from 'react';
import RecentMoviesContainer from '../RecentMovies/RecentMoviesContainer'
// import MovieList from './MovieList'
// import Favorites from './Favorites'
// import Login from './Login'
import {Route, Link, Navlink} from 'react-router-dom'
// import {NavBar} from './NavBar'

export default class App extends Component {
  // constructor() {
  //   super();
  // }
  componentWillMount(dispatch) {
    this.props.movieDbApiCall()
  }
  
  render() {
    return (
      <div>
        <header>
          <h1>Movie Tracker</h1>
        </header>
        <Route exact path='/' component={ RecentMoviesContainer } />
        {/* <Route path='/favorites' component={Favorites} />
        <Route path='/login' component={Login} /> */}
      </div>
    )
  }
}
