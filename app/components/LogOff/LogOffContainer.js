import { connect } from 'react-redux'

import LogOff from './LogOff'
import { logOffUser, clearFavorite } from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    handleUser: id => {
      dispatch(logOffUser(id))
    },
    handleClearFavorites: () => {
      dispatch(clearFavorite())
    }
  }
}

const mapStateToProps = (state) =>{
  return{userName:state.showNameReducer}
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOff)
