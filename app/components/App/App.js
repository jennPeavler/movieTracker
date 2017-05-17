import React, { Component } from 'react';
import { combineReducers, bindActionCreators } from 'redux'
import {Route, Link, Switch} from 'react-router-dom'

import MovieListContainer from '../MovieList/MovieListContainer'
import FavoritesContainer from '../Favorites/FavoritesContainer'
import SignupContainer from '../Signup/SignupContainer.js'
import LoginContainer from '../Login/LoginContainer.js'
import NavBarContainer from '../NavBar/NavBarContainer'
import styles from  './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4cdebcbe2bc4761f0c631321a04c6465&language=en-US&page=1`
    let fetchMovieRequest = ()=>{
      let data = ""
       fetch(url)
      .then(response => response.json())
      .then(res=> {
       this.props.handleMovieFetch(res.results)

      })
    }
    fetchMovieRequest()
  }

  render() {
    return (
      <div className="app">
        <h1>Movie Watcher</h1>
        <NavBarContainer />
        <Switch>
          <Route path='/favorites' component={FavoritesContainer} />
          <Route path='/signup' component={SignupContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/' component={MovieListContainer} />
        </Switch>
        {this.props.children}
      </div>
    )
  }
}
