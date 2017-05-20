import React, { Component } from 'react'

import styles from './Signup.css'

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
    if( this.state.password.value === this.state.retypedPassword.value ) {
      if( this.state.name !== '' && this.state.email !== '' ) {
        fetch("api/users/new", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
              })
            })
        .then((response) => response.json())
        .then( res => {
          let id = res.id
          localStorage.setItem("user",id)
          this.props.handleUser({id})
          this.props.handleShowName({name:this.state.name})
        })
      }
    }
  }

  validateInfo() {
    if(this.state.password && this.state.email){
      let userEmail = this.state.email.toLowerCase()
      fetch('http://localhost:5000/api/users/')
      .then((response) => response.json())
      .then(res => {
        let existingUser = false
        res.data.forEach( user => {
          if (user.email === userEmail) {
            existingUser = true
            alert('The user email already exists\nLogin with your account or choose a different Signup email')
          }
        })
        if (existingUser === false) {
          this.props.history.replace('/')
        }
      })
    }
  }

  render(){

    return(
      <section className = "signup-page">
        <input
          placeholder = "name"
          className = "user-input"
          value = {this.state.name}
          onChange = {(e) => {this.setState({name: e.target.value})}}
        />
        <input
          placeholder = "email"
          className = "user-input"
          value = {this.state.email}
          onChange = {(e) => {this.setState({email: e.target.value})}}
         />
        <input
          placeholder = "password"
          className = "user-input"
          value = {this.state.password}
          onChange = {(e) => {this.setState({password: e.target.value})}}
          />
        <input
          placeholder = "retype password"
          className = "user-input"
          value = {this.state.retypedPassword}
          onChange = {(e) => {this.setState({retypedPassword: e.target.value})}}
        />
        <button
        className="signup-submit"
         onClick={() => {
           this.validateInfo()
           this.logInfo()

         }}>
        Submit
        </button>
      </section>
    )
  }
}

export default Signup
