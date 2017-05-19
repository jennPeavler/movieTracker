import React, { Component } from 'react'
import { combineReducers, bindActionCreators } from 'redux'
import { Route, Link, Switch } from 'react-router-dom'

import MovieDetails       from '../MovieDetails/MovieDetails'
import MovieListContainer from '../MovieList/MovieListContainer'
import FavoritesContainer from '../Favorites/FavoritesContainer'
import SignupContainer from '../Signup/SignupContainer.js'
import LoginContainer from '../Login/LoginContainer.js'
import LogOffContainer from '../LogOff/LogOffContainer.js'
import NavBarContainer from '../NavBar/NavBarContainer'
import styles from './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    const user = localStorage.getItem("user")
    if(user){
      console.log("HIT")
      const id = Number(user)
    this.props.handleUserFetch({id})

    fetch(`http://localhost:5000/api//users/${id}/favorites`)
     .then( response => response.json()).then((res)=>{
      //  console.log(res)
       res.data.forEach(movie=>{
        let  movieId = movie.movie_id
         this.props.handleAddFavorite(movieId)
       })

       fetch('http://localhost:5000/api/users/')
        .then( response => response.json() )
        .then( res => {
          res.data.forEach(i =>{
            if(i.id===id){
              this.props.handleShowName({name:i.name})

            }
          })
     })
     })
    }
  }


  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4cdebcbe2bc4761f0c631321a04c6465&language=en-US&page=1`
    let fetchMovieRequest = ()=>{
      let data = ""
       fetch(url)
        .then(response => response.json())
        .then(res => {
          this.props.handleMovieFetch(res.results)
        })
    }

    fetchMovieRequest()

  }

  render() {
    return (
      <div className="app">
        <h1>Movie <span className='watcher'>Watcher</span></h1>
        <NavBarContainer />
        <Switch>
          <Route path='/favorites' component={FavoritesContainer} />
          <Route path='/signup' render={({ history }) => <SignupContainer history={history}/>} />
          <Route path='/login' render={({ history }) => <LoginContainer history={history}/>} />
          <Route path='/logoff' render={({ history }) => <LogOffContainer history={history}/>} />

          <Route path='/:id' render={({ match }) => {
  const movie = this.props.state.movieReducer.find((movie) => movie.id === parseInt(match.params.id));
  console.log(movie)
  if (movie) {
    console.log(movie)
    return <MovieDetails match={match} {...movie} />;
  }
  return (<div>This idea does not exist! </div>);

}} />



          <Route path='/' render={({ history }) => <MovieListContainer history={history}/>} />
        </Switch>
        {this.props.children}
      </div>
    )
  }
}
