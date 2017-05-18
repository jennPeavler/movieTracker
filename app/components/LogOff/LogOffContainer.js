import { connect } from 'react-redux'

import LogOff from './LogOff'
import { logOffUser } from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    handleUser: id => {
      dispatch(logOffUser(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(LogOff)
