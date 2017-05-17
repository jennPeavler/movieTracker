import React from 'react'
import styles from  './MovieCard.css'

const MovieCard = ({movieInfo,handleFavorites,index}) => {

    return(
      <div className="movie-card">
        <img src ={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}/>
        <button onClick={()=>{handleFavorites(index)}}>favorite</button>
      </div>
    )
}

export default MovieCard
