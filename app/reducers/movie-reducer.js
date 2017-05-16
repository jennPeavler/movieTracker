const movieReducer = (state=[], action) => {
  console.log("woof")

  switch(action.type){
    case'FETCH_REQUEST':
    return state

    default:
    return state
  }
}

// const movieReducer = (state=[], action) => {
// return state}

export default movieReducer
