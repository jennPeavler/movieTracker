import { combineReducers } from 'redux'

import favoritesReducer from './favorites-reducer'
import usersReducer from './users-reducer'
import movieReducer from './movie-reducer'

const rootReducer = combineReducers({
  favoritesReducer,
  usersReducer,
  movieReducer,
})

export default rootReducer
