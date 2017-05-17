import { connect } from 'react-redux'
import App from './App'
import {fetchMovieRequest} from '../../actions'


function mapDispatchToProps(dispatch){
return{
    handleMovieFetch: (payload)=>{
      dispatch(fetchMovieRequest(payload))
  }
  }
}

export default connect(null,mapDispatchToProps)(App)
