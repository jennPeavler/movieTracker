import { connect } from 'react-redux'

import { NavBar } from './NavBar'

const mapStateToProps = state => {
  return { name: state.usersReducer ,userName: state.showNameReducer}
}

export default connect(mapStateToProps)(NavBar)
