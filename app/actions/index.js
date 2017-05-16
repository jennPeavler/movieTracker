const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4cdebcbe2bc4761f0c631321a04c6465&language=en-US&page=1`

  function fetchMovieRequest(){
    let data = "";
     fetch(url)
    .then(response => response.json())
    .then(res=> {
    console.log(res.results)
    })
    console.log(data)
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
