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

  logOn() {
    if(this.state.password !== '' && this.state.email !== ''){
      let userName = this.state.email.toLowerCase()
       fetch('http://localhost:5000/api/users/')
        .then((response) => response.json())
        .then(res => {
           res.data.forEach((user) => {
            if (user.email === userName.toLowerCase()){
              this.props.handleUser({name: user.name, email: user.email})
            }
          })
        })
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
         onClick={()=>{this.logOn()}}>
        Submit
        </button>
      </section>
    )
  }
}

export default Login
