import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {


    let renderCard = props.movies ?
    props.movies.map((movie,i)=>{
      return (
        <MovieCard key={i} index={i} movieInfo={movie}/>
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
