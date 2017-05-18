import { connect } from 'react-redux'
import LogOff from './LogOff'
import {logOffUser} from '../../actions'

const mapStateToProps = (state) => {
  return{user: state.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUser:(id) => {
      dispatch(logOffUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOff)
