import { connect } from 'react-redux'

import { addFavorite,removeFavorite } from '../../actions'
import MovieList from './MovieList'

const mapStateToProps = (state) => {
  return { movies: state.movieReducer, user: state.usersReducer, favorites: state.favoritesReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {

    handleAddFavorite: (id) => {
      dispatch(addFavorite(id))
    },
    handleRemoveFavorite: (id) => {
      dispatch(removeFavorite(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
