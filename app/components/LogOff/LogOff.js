import React, {Component} from 'react'

import styles from  './LogOff.css'

class LogOff extends Component {
  constructor(props){
    super(props)
  }

  logOff() {
    this.props.handleUser({})
    this.sendHome()
    this.props.handleClearFavorites()
  }

  sendHome() {
    this.props.history.replace('/')
  }

  render() {
    return(
      <section className = "login-page">
        <div className="logoff-warning">
          Are you sure you want to log off?
        </div>
        <button
          className="logoff-btn yes"
          onClick={ () => {this.logOff()}}>
        yes
        </button>
        <button
          className="logoff-btn no"
          onClick={ () => {this.sendHome()}}>
        no
        </button>
      </section>
    )
  }
}

export default LogOff
