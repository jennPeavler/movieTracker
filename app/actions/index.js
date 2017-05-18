const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4cdebcbe2bc4761f0c631321a04c6465&language=en-US&page=1`

export const toggleMovie = (id) => {
  return {
    type:'TOGGLE_FAVORITE',
    id
  }
}

export const fetchMovieRequest = (response) => {
  return {
    type: 'FETCH_REQUEST',
    payload: response
  }
}

export const toggleUser = (id) =>{
  return{
    type: 'USER_TOGGLE',
    id
  }
}

export const logOffUser = (id) =>{
  return{
    type: 'USER_LOGOUT',
    id
  }
}
