import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import styles from  './MovieList.css'

const MovieList = (props) => {


    let renderCard = props.movies ?
    props.movies.map((movie,i)=>{

      return (
        <MovieCard
        user={props.user}
        handleFavorites={props.handleFavorites}
        key={i}
        index={movie.id}
        movieInfo={movie}/>
      )
})
      :
      <div>loading</div>


  return(
    <section className="movie-list">
    {
      renderCard
    }

    </section>
  )
}

export default MovieList
