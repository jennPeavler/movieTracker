import { connect } from 'react-redux'
import { addFavoriteMovie } from '../actions'
import FavoriteMovie from '../components/FavoriteMovie'
import MovieList from './MovieList'

const mapStateToProps = (state) => {
  return { favorites: state.favories }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleSubmit: (text, id) => {
      dispatch(addTodo(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
