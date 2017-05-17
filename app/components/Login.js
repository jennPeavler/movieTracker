import React, {Component} from 'react'
import MovieCard from './MovieCard'

class Login extends Component {
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
                  password: this.state.password})
         }).then((response) => {
           console.log(response)
         })
       }
     }
}
render(){

  return(
    <section className = "login-page">
    <input
    placeholder = "name"
    className = "login-name"
     value = {this.state.name}
     onChange = {(e)=>{this.setState({name:e.target.value})}}
     />

    <input
    placeholder = "email"
    className = "login-email"
     value = {this.state.email}
     onChange = {(e)=>{this.setState({email:e.target.value})}}
     />
    <input
      placeholder = "password"
      className = "login-password"
      value = {this.state.password}
      onChange = {(e)=>{this.setState({password:e.target.value})}}
      />
      <input
        placeholder = "retype password"
       className = "login-retypedPassword"
        value = {this.state.retypedPassword}
        onChange = {(e)=>{this.setState({retypedPassword:e.target.value})}}
        />
        <button
        className="login-submit"
         onClick={()=>{this.logInfo()}}>
        Submit
        </button>
    </section>
  )
  }
}
//
// <input
// className = "login-name"
//  value = {this.state.name}
//  onChange = {(e)=>{this.setState({name:e.target.value}})}
//  />
//
// <input
// className = "login-email"
//  value = {this.state.email}
//  onChange = {(e)=>{this.setState({email:e.target.value}})}
//  />
// <input
//  className = "login-password"
//   value = {this.state.password}
//   onChange = {(e)=>{this.setState({password:e.target.value}})}
//   />
//   <input
//    className = "login-retypedPassword"
//     value = {this.state.retypedPassword}
//     onChange = {(e)=>{this.setState({name:e.target.retypedPassword}})}
//     />
//     <button
//     className="login-submit"
//      onClick={()=>{this.logInfo()}}>
//     Submit
//     </button>

export default Login
