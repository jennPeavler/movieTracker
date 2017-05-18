import React, {Component} from 'react'
import styles from  './LogOff.css'

class LogOff extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   email:"",
    //   password:""
    // }
  }

  logOff() {
    console.log(this.props.handleUser)
    this.props.handleUser({})
    this.props.history.replace('/')
  }

  sendHome(){
    this.props.history.replace('/')
  }

  render(){
    return(
      <section className = "login-page">
        <div className="logoff-warning">Are you sure you want to log off?</div>

        <button
        className="login-btn submit"
         onClick={()=>{this.logOff()}}>
        yes
        </button>
        <button
        className="login-btn submit"
         onClick={()=>{this.sendHome()}}>
        no
        </button>
      </section>
    )
  }
}

export default LogOff
