const usersReducer = (state=[], action) => {
  switch(action.type){
    case 'USER_TOGGLE':
    return  action.id===state.id? [] : action.id

    default:
    return state

  }
}

export default usersReducer
