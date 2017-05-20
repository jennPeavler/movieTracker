const showNameReducer = (state="",action) =>{
  switch(action.type){
    case 'SHOW_NAME':
    return action.name

    default:
    return state
  }
}

export default showNameReducer
