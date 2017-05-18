import { connect } from 'react-redux'

import Signup from './Signup'
import { toggleUser } from '../../actions'

const mapStateToProps = (state) => {
  return{user: state.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUser: (id) => {
      dispatch(toggleUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
