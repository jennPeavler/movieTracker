import React, { Component } from 'react';
import MovieContainer from './MovieContainer'
import Favorites from './Favorites'
import Login from './Login'
import {Route, Link, Switch} from 'react-router-dom'
import {NavBar} from './NavBar'
import fetchMovieRequest from '../actions'
import { combineReducers, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4cdebcbe2bc4761f0c631321a04c6465&language=en-US&page=1`
    let fetchMovieRequest = ()=>{
      let data = "";
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
      <div>
        <h1>Movie Watcher</h1>
        <NavBar />
        <Switch>
          <Route path='/favorites' component={Favorites} />
          <Route path='/login' component={Login} />
          <Route path='/' component={MovieContainer} />

        </Switch>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    state
  }
}


function mapDispatchToProps(dispatch){
return{
    handleMovieFetch: (payload)=>{
      dispatch(fetchMovieRequest(payload))
  }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
