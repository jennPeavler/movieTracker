import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'


export default class RecentMovies extends Component {
  render() {
    return(
      <div className="film-container">
        {this.props.films.map(film  => {
          return (
            <div className='film-card' key={film.id}>
              <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`}/>
            </div>
          )
        })}
      </div>
    )
  }
}
