import React, { Component } from 'react'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      signedOn: false
    }
  }

  logOn() {
    if( this.state.password && this.state.email ){
      this.fetchUsers()
    }
  }

  fetchUsers() {
    fetch('http://localhost:5000/api/users/')
    .then( response => response.json() )
    .then( userData => {
      this.validateUser(userData)
    })
  }

  validateUser(userData) {
    userData.data.forEach( user => {
      this.logInUser(user)
    })
    if( this.state.signedOn === false ) {
      alert('username and password not found')
    } else {
      this.props.history.replace('/')
    }
  }

  logInUser(user) {
    const userName = this.state.email.toLowerCase()
    const password = this.state.password.toLowerCase()
    if (user.email === userName && user.password === password){
      this.state.signedOn = true
      localStorage.setItem("user", user.id)
      this.props.handleUser({id: user.id})
      this.props.handleShowName({name: user.name})
      this.fetchFavorites(user.id)
    }
  }

  fetchFavorites (userId) {
    fetch(`http://localhost:5000/api//users/${userId}/favorites`)
    .then( response => response.json())
    .then( res => {
      res.data.forEach( movie => {
        let movieId = movie.movie_id
        this.props.handleAddFavorite(movieId)
      })
    })
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
