const usersReducer = (state=[], action) => {
  console.log(action, ' usersReducer')
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
