import React, {Component} from 'react'
import styles from  './Login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:""
    }
  }



  render(){
    return(
      <section className = "login-page">
        <input
        placeholder = "email"
        className = "login email"
         value = {this.state.email}
         onChange = {(e)=>{this.setState({email:e.target.value})}}
         />
        <input
          placeholder = "password"
          className = "password"
          value = {this.state.password}
          onChange = {(e)=>{this.setState({password:e.target.value})}}
          />
        <button
        className="login-btn submit"
         onClick={()=>{this.logInfo()}}>
        Submit
        </button>
      </section>
    )
  }
}

export default Login
