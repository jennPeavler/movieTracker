import React from 'react'

import MovieCard from '../MovieCard/MovieCard'

const Favorites = ({ movies, favorites, handleFavorites, user, history }) => {
  let list = movies.filter((movie) => {
    return favorites.includes(movie.id)
  })

  const changePath = (route) => {
    history.replace(`/${route.id}`)
  }

  const renderList = () =>{
  return  list.map(( movie, i ) => {
      return (
        <MovieCard
        changePath = {changePath}
        user = {user}
        isFavorite = {'favorite'}
        handleRemoveFavorite={handleFavorites}
        key={i}
        index={movie.id}
        movieInfo={movie}/>
      )
    })
  }

  let renderCard = list.length ?
  renderList(): <div className="no-favorites-container">No favorite movies? Come on...</div>

  return(
    <section className="favorites-list">
    {renderCard}
    </section>
  )
}

export default Favorites
