const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4cdebcbe2bc4761f0c631321a04c6465&language=en-US&page=1`



export const addFavorite = (id) => {
  return{
    type:'ADD_FAVORITE',
    id
  }
}

export const removeFavorite = (id) => {
  return{
    type:'REMOVE_FAVORITE',
    id
  }
}

export const clearFavorite = ()=>{
  return{
    type:'CLEAR_FAVORITE'
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
