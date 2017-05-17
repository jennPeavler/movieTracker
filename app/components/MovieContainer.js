import { connect } from 'react-redux'
import { addFavoriteMovie } from '../actions'
import MovieList from './MovieList'

const mapStateToProps = (state) => {
  return { movies: state.movieReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {handleFavorites: (id) =>
    {dispatch(addFavoriteMovie(id)) }
  }
}



export default connect(mapStateToProps)(MovieList)
