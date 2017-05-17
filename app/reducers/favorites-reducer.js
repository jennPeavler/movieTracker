const favoritesReducer = (state=[], action) => {
  switch(action.type){
    case 'TOGGLE_FAVORITE':
    return [action.id,...state]

    default:
    return state
  }
}

export default favoritesReducer
