import { connect } from 'react-redux'

import Login from './Login'
import { toggleUser, addFavorite, showName } from '../../actions'

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
    },
    handleShowName : name => {
      dispatch(showName(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
