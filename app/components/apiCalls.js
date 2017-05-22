const fetchFavorites = (id, responseFunc) => {
  fetch(`http://localhost:5000/api//users/${ id }/favorites`)
  .then(response => response.json())
  .then(res => {
    responseFunc(id)
  })
}



// res.data.forEach(movie => {
//   let  movieId = movie.movie_id
//   this.props.handleAddFavorite(movieId)})
