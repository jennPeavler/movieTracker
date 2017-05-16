export const movieDbApiCall = () => {
  return dispatch => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ccabf0973ffb8f3adedb24eb276dc907')
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((films) => {
      dispatch(getFilms(films.results))
    })
  }
}

export const getFilms = films => {
  return {
    type: 'GET_FILMS',
    films
  }
}
