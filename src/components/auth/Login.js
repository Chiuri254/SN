import React from 'react'
import Avatar from './avatar.png';


function Login() {
  return (
    <div className="loginbox">
      <img src={Avatar} class="avatar"></img>
      <h1>Login Here</h1>
      <form>
      <p>username</p>
      <input type="text" name="" placeholder="Enter Username"></input>
      <p>Password </p>
      <input type="password" name="" placeholder="Enter Password"></input>
      <input type="submit" name="" value="Login"></input>
      <a href="#">Lost your password?</a><br></br>
      <a href="#">Dont have an account? </a>
      
    </form>
    </div>
  )
}

export default Login
