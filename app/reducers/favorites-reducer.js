const favoritesReducer = (state=[], action) => {
  switch(action.type){
    case 'TOGGLE_FAVORITE':
    console.log(action.id)
    return state
  }
  return state
}

export default favoritesReducer
