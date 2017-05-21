import { connect } from 'react-redux'

import App from './App'
import { fetchMovieRequest, toggleUser, addFavorite , showName} from '../../actions'


function mapDispatchToProps(dispatch) {
  return {
      handleMovieFetch: payload => {
        console.log(payload, 'movie fetch')
        dispatch(fetchMovieRequest(payload))
      },
      handleUserFetch: id => {
        dispatch(toggleUser(id))
      },
      handleAddFavorite: id => {
        dispatch(addFavorite(id))
      },
      handleShowName: name => {
        dispatch(showName(name))
      }
  }
}

const mapStateToProps = (state) => {
  return{
    state:state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
