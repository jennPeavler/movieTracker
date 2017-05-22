import React, { Component } from 'react'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  logOn() {
    if( this.state.password && this.state.email ){
      const userName = this.state.email.toLowerCase()
      const password = this.state.password.toLowerCase()
      fetch('http://localhost:5000/api/users/')
      .then( response => response.json() )
      .then( res => {
        let signedOn = false
        res.data.forEach( user => {
          if (user.email === userName && user.password === password){
            signedOn = true
            localStorage.setItem("user", user.id)
            this.props.handleUser({id: user.id})
            this.props.handleShowName({name: user.name})
            fetch(`http://localhost:5000/api//users/${user.id}/favorites`)
            .then( response => response.json())
            .then( res => {
              res.data.forEach( movie => {
                let movieId = movie.movie_id
                this.props.handleAddFavorite(movieId)
              })
            })
          }
        })
        if( signedOn === false ) {
          alert('username and password not found')
        } else {
          this.props.history.replace('/')
        }
      })
    }
  }

  render() {
    return (
      <section className = "login-page">
        <input
          placeholder = "email"
          className = "login email"
          value = {this.state.email}
          onChange = { e  => {this.setState({ email: e.target.value })}}
        />
        <input
          placeholder = "password"
          className = "password"
          value = {this.state.password}
          onChange = { e => {this.setState({ password: e.target.value })}}
        />
        <button
          className = "login-btn submit"
          onClick = { () => { this.logOn() }}>
          Submit
        </button>
      </section>
    )
  }
}

export default Login
