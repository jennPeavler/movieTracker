import { connect } from 'react-redux'

import {removeFavorite} from '../../actions'
import Favorites from './Favorites'

const mapStateToProps = state => {
  return { movies: state.movieReducer, favorites: state.favoritesReducer, user: state.usersReducer }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFavorites: id => {
      dispatch(removeFavorite(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)
