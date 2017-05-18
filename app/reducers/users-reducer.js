const usersReducer = (state=[], action) => {
  switch(action.type){
    case 'USER_TOGGLE':
    return  action.id === state.id ? [] : action.id

    case 'USER_LOGOUT':
    return []

    default:
    return state
  }
}

export default usersReducer
