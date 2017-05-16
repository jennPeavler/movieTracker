import { connect } from 'react-redux'
// import { addFavoriteMovie } from '../actions'
// import FavoriteMovie from './Favorites'
import MovieList from './MovieList'

const mapStateToProps = (state) => {
  return { movies: state.movieReducer }
}



export default connect(mapStateToProps)(MovieList)
