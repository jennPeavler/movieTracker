import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {


    let renderCard = props.movies ?
    props.movies.map(movie=>{
      return (
        <div className="card">
        <img src = {`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
        </div>
      )
})
      :
      <div>loading</div>


  return(
    <section>
    {
      renderCard
    }

    </section>
  )
}

export default MovieList
