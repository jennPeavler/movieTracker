import React from 'react'
import styles from  './MovieCard.css'

const MovieCard =({movieInfo ,handleAddFavorite, handleRemoveFavorite, index, user, isFavorite, changePath}) => {

  const logFavorites = () => {
    if(!user.id){
      alert("You must be logged in to add a movie as a favorite")
    } else {
         const movie_id = movieInfo.id
         const user_id = user.id
         const title = movieInfo.title
         const poster_path = movieInfo.poster_path
         const release_date = movieInfo.release_date
         const vote_average = movieInfo.vote_average
         const overview = movieInfo.overview
         if(isFavorite === "not-favorite"){

         fetch('/api/users/favorites/new', {
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify({  movie_id, user_id, title, poster_path, release_date, vote_average, overview })
             }).then( () => { handleAddFavorite(index)})

       } else {

          fetch(`/api/users/${user_id}/favorites/${movie_id}`, {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ user_id, movie_id })
          })
        .then((response) => { handleRemoveFavorite(index) })
        }
      }
}
const buttonText = isFavorite === "not-favorite" ? "favorite" : "unfavorite"
const buttonClass = isFavorite === "not-favorite" ? "button-not-favorite" : "button-favorite"
    return(
      <div className = {isFavorite}>
        <img onClick={() => changePath(movieInfo)} src = {`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}/>

        <button className={buttonClass} onClick={()=>{
          logFavorites()
          }}>{buttonText}</button>
      </div>
    )

  return(
    <div className="movie-card">
      <img onClick={() => changePath(movieInfo)} src ={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}/>
      <button onClick={() => {
        handleFavorites(index)
        logFavorites()}}>favorite</button>
    </div>
  )
}

export default MovieCard
