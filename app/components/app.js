import React, { Component } from 'react';
import MovieList from './MovieList'
import Favorites from './Favorites'
import Login from './Login'
import {Route, Link, Switch} from 'react-router-dom'
import {NavBar} from './NavBar'
import fetchMovieRequest from '../actions/getMovies'
import { combineReducers, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // console.log(this.props);
this.props.handleMovieFetch()
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

function mapDispatchToProps(dispatch){
return{
    handleMovieFetch:()=>{
      dispatch(fetchMovieRequest())
  }
  }
}

//
// function mapStateToProps(state){
//   return{
//     data:state
//   }
// }

export default connect(null,mapDispatchToProps)(App)
