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

export default connect(null, mapDispatchToProps)(LogOff)
