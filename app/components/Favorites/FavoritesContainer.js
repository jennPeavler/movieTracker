import { connect } from 'react-redux'
import {toggleMovie} from '../../actions'
import Favorites     from './Favorites'

const mapStateToProps = (state) => {
  return{movies:state.movieReducer,favorites:state.favoritesReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFavorites:(id) => {
      dispatch(toggleMovie(id))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Favorites)
