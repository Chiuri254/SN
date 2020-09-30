import React from 'react'
import Avatar from './avatar.png';

function Signup() {
  return (
    <div className="loginbox">
    <img src={Avatar} className="avatar"></img>
    <h1>Create <span className="text-primary">Account</span></h1>
    <form>
      <p>username</p>
      <input type="text" name="" placeholder="Enter Username"></input>
      <p>email</p>
      <input type="text" name="" placeholder="Enter Email"></input>
      <p>Password </p>
      <input type="password" name="" placeholder="Enter Password" minLength="6 "></input>
      <p>Repeat Password </p>
      <input type="password" name="" placeholder="Enter Password"></input>
      <input type="submit" name="" value="Register"></input>
      <a href="#">Lost your password?</a><br></br>
      <a href="#">Dont have an account? </a>
    </form>
    </div>
  )
}

export default Signup
