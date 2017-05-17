import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import styles from  './Favorites.css'

const Favorites = ({movies,favorites,handleFavorites}) => {
  let list = movies.filter(movie => {
  return favorites.includes(movie.id)
})

let renderCard = list.length ?
  list.map((movie,i)=>{
    return (
      <MovieCard
      handleFavorites={handleFavorites}
      key={i}
      index={movie.id}
      movieInfo={movie}/>
    )
  }) : <div className="no-favorites-container">No favorite movies? Come on...</div>

  return(
    <section className="favorites-list">
    {renderCard}
    </section>
  )
}

export default Favorites
