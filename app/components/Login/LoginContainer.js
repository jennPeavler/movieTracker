import { connect } from 'react-redux'
import Login from './Login'

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
