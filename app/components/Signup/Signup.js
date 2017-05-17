import React, {Component} from 'react'
import styles from  './Signup.css'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      email:"",
      password:"",
      retypedPassword:""
    }
  }

  logInfo() {
    if(this.state.password.value === this.state.retypedPassword.value) {
      if(this.state.name !== '' && this.state.email !== '') {
        fetch("api/users/new", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({name: this.state.name,
                email: this.state.email,
                password: this.state.password})})
        .then((response) => {
          this.props.handleUser({name:this.state.name,email:this.state.email})})
      }
    }
  }

  render(){
    return(
      <section className = "signup-page">
        <input
        placeholder = "name"
        className = "signup-name"
         value = {this.state.name}
         onChange = {(e)=>{this.setState({name:e.target.value})}}
        />
        <input
        placeholder = "email"
        className = "signup-email"
         value = {this.state.email}
         onChange = {(e)=>{this.setState({email:e.target.value})}}
         />
        <input
          placeholder = "password"
          className = "signup-password"
          value = {this.state.password}
          onChange = {(e)=>{this.setState({password:e.target.value})}}
          />
        <input
          placeholder = "retype password"
         className = "signup-retypedPassword"
          value = {this.state.retypedPassword}
          onChange = {(e)=>{this.setState({retypedPassword:e.target.value})}}
        />
        <button
        className="signup-submit"
         onClick={()=>{this.logInfo()}}>
        Submit
        </button>
      </section>
    )
  }
}

export default Signup
