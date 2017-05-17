import { connect } from 'react-redux'
import { toggleMovie } from '../../actions'
import MovieList from './MovieList'

const mapStateToProps = (state) => {
  return { movies: state.movieReducer,user:state.usersReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFavorites: (id) =>{
      dispatch(toggleMovie(id))
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(MovieList)
