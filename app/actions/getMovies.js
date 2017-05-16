import axios from 'axios'

const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4cdebcbe2bc4761f0c631321a04c6465&language=en-US&page=1`

  function fetchMovieRequest(){
    let data = "";
    fetch(url)
    .then(response => response.json())
    .then(res=> {
      console.log(res.results, ' response')
      return res.results
    })
    // console.log(data)
    return {
      type:"BANANAS",
      payload:data
    }
}


 function fetchMovie(stu){
   apiCall().then((response)=>{
    return {
      type: "FETCH_REQUEST",
      payload:response
    }
  })
}

export default fetchMovieRequest



// return

//  function fetchPostsSuccess(payload) {
//   return {
//     type: "FETCH_SUCCESS",
//     payload
//   }
// }
//
//  function fetchPostsError() {
//   return {
//     type: "FETCH_ERROR"
//   }
// }

// const fetchMovieRequest = () => {
//   return dispatch => {
//     fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ccabf0973ffb8f3adedb24eb276dc907')
//     .then((response) => {
//       return response.json()
//     })
//     .then((films) => {
//     return  dispatch(getFilms(films.results))
//     })
//   }
// }
//
// export const getFilms = films => {
//   return {
//     type: 'GET_FILMS',
//     films
//   }
// }
