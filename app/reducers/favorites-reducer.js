const favoritesReducer = (state=[], action) => {

  if(state.includes(action.id)){

  }
  switch(action.type){
    case 'ADD_FAVORITE':
    return [action.id,...state]

    case 'REMOVE_FAVORITE':
    let newState = state;
    newState.splice(newState.indexOf(action.id),1)
    return [...newState]

    case 'CLEAR_FAVORITE':
    return []

    default:
    return state
  }
}

export default favoritesReducer
