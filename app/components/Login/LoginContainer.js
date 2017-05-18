import { connect } from 'react-redux'

import Login from './Login'
import { toggleUser, addFavorite } from '../../actions'

const mapStateToProps = state => {
  return {user: state.user}
}

const mapDispatchToProps = dispatch => {
  return {
    handleUser: id => {
      dispatch(toggleUser(id))
    },
    handleAddFavorite: id => {
      dispatch(addFavorite(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
