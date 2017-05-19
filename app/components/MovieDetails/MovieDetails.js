import React from 'react'
import style from './MovieDetails.css'

const MovieDetails = ({title,overview, vote_average,poster_path,popularity,release_date,vote_count}) => {
  return (
    <div className="movie-details">
      <h3 className="movie-details-title">{title}</h3>
      <img className="movie-details-img" src={`https://image.tmdb.org/t/p/original${poster_path}`}/>
      <p className="movie-details-overview">{overview}</p>
      <p className="movie-details-release">release date: {release_date}</p>
      <p className="movie-details-popularity">popularity:{popularity}</p>
      <p className="movie-details-vote-average">vote average:{vote_average}</p>
      <p className="movie-details-vote-average">vote count:{vote_count}</p>
    </div>
  )
}


export default MovieDetails
