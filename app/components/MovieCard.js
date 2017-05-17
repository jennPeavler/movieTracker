import React from 'react'
const MovieCard = ({movieInfo}) => {

    return(
      <div className="movieCard">
        <img src ={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}/>
        <button>favorite</button>
      </div>
    )
}

export default MovieCard
