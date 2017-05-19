import React, { Component } from 'react'

// import styles from './Login.css'

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
      let userName = this.state.email.toLowerCase()
       fetch('http://localhost:5000/api/users/')
        .then( response => response.json() )
        .then( res => {
          let signedOn = false
           res.data.forEach( user => {
              if ( user.email === userName.toLowerCase() ){
                signedOn = true
                this.props.handleUser({id:user.id})

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
