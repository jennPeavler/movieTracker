import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import styles from  './MovieList.css'

const MovieList = (props) => {
  console.log("chto")

  let renderCard = props.movies ?
    props.movies.map((movie,i)=>{
      let classname = props.favorites.includes(movie.id)?"favorite":"not-favorite"
      return (
        <MovieCard
        isFavorite = {classname}
        user={props.user}
        handleAddFavorite={props.handleAddFavorite}
        handleRemoveFavorite={props.handleRemoveFavorite}
        key={i}
        index={movie.id}
        movieInfo={movie}/>
      )
    }) : <div>loading</div>

  return(
    <section className="movie-list">
    {renderCard}
    </section>
  )
}

export default MovieList
