import React from 'react'
import styles from  './MovieCard.css'

const MovieCard = ({movieInfo,handleFavorites,index,user}) => {

  const logFavorites = () => {
    console.log("!!!!!!!!")
       if(true) {
           fetch("api/users/new", {
             method: "POST",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify({
                    movie_id    : movieInfo.id,
                    user_id     : user,
                    title       : movieInfo.title,
                    poster_path : movieInfo.poster_path,
                    release_date: movieInfo.release_date,
                    vote_average: movieInfo.vote_average,
                    overview    : movieInfo.overview
                  })
           }).then((response) => {
             console.log(response)
          })
         }else{
           alert("You must be logged in to include a favorite")
         }
       }


    return(
      <div className="movie-card">
        <img src ={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}/>
        <button onClick={()=>{
          handleFavorites(index)
          logFavorites()}}>favorite</button>
      </div>
    )
}

export default MovieCard
