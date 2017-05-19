import { combineReducers } from 'redux'

import favoritesReducer from './favorites-reducer'
import usersReducer from './users-reducer'
import movieReducer from './movie-reducer'
import showNameReducer     from './username-reducer'

const rootReducer = combineReducers({
  favoritesReducer,
  usersReducer,
  movieReducer,
  showNameReducer
})

export default rootReducer
