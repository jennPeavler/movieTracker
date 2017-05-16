import favoritesReducer from './favorites-reducer'
import usersReducer from './users-reducer'
import movieReducer from './movie-reducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  favoritesReducer,
  usersReducer,
  movieReducer,
})

export default rootReducer
