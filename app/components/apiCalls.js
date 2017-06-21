const fetchFavorites = (id, responseFunc) => {
  fetch(`/api//users/${ id }/favorites`)
  .then(response => response.json())
  .then(res => {
    responseFunc(id)
  })
}



// res.data.forEach(movie => {
//   let  movieId = movie.movie_id
//   this.props.handleAddFavorite(movieId)})
