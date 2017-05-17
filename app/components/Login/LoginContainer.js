import { connect } from 'react-redux'
import Login from './Login'
import {toggleUser} from '../../actions'

const mapStateToProps = (state) => {
  return{user: state.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUser:(id) => {
      dispatch(toggleUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
