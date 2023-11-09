import React from 'react';
import { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
import {FaUser,FaLock,FaAt} from 'react-icons/fa'
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const navigate = useNavigate();

  //Register
  async function save(event) {
    if(username != null && useremail != null && userpassword != null){
      event.preventDefault();
      try {
        await axios.post("http://localhost:8080/homepage/register",{
          username: username,
          useremail: useremail,
          userpassword: userpassword,
        });
        alert('Registered successfully');
      }
      catch(err){
        alert(err);
      }
    }
    else{
      alert('Fill all the fields');
    }
  }

  //Login
  async function saveLogin(event) {
    event.preventDefault();
    try {
        await axios.post("http://localhost:8080/homepage/login", {
            useremail: useremail,
            userpassword: userpassword,
        }).then((res) => {
            console.log(res.data);
            if(res.data.message == "Login Success"){
              alert('Login success');
                navigate('/homepage');
            }
            else if(res.data.message == "Email doesn't exist"){
                alert("Email doesn't exist");
            }
            else if(res.data.message == "Password not match"){
                alert("Password not match");
            }
        })
    }
    catch(err){
        alert(err);
    }
}
  
  document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.querySelector('.wrapper'),
        signUpLink = document.querySelector('.link .signup-link'),
        signInLink = document.querySelector(".link .signin-link");
  

  signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
  })

  signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup')
    wrapper.classList.remove('animated-signin');
  })

 });

  return (
    <div className="login">
      <div className='wrapper'>

        <div className='form-container sign-up'>
          <form action='#' className='login-form'>
                <h2>Sign up</h2>
                <div className='form-group'>
                    <input type='text' required
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    ></input>
                    <FaUser className='i'/>
                    <label htmlFor="">Username</label>
                </div>
                <div className='form-group'>
                    <input type='text' required
                        value={useremail}
                        onChange={(event) => setUseremail(event.target.value)}
                    ></input>
                    <FaAt className='i'/>
                    <label htmlFor="">Email-id</label>
                </div>
                <div className='form-group'>
                    <input type='password' required
                        value={userpassword}
                        onChange={(event) => setUserpassword(event.target.value)}
                    ></input>
                    <FaLock className='i'/>
                    <label htmlFor="">Password</label>
                </div>
                <button type='submit' className='btn' 
                    onClick={save}>Sign up</button>
                <div className='link'>
                  <p>You already have an account? <a href='#' className="signin-link">sign in</a></p>
                </div>
            </form>
          </div>


          <div className='form-container sign-in'>
          <form className='login-form'>
                <h2>login</h2>
                <div className='form-group'>
                    <input type='text' required
                        value={useremail}
                        onChange={(event) => setUseremail(event.target.value)}
                    ></input>
                    <FaAt className='i'/>
                    <label htmlFor="">Email-id</label>
                </div>
                <div className='form-group'>
                    <input type='password' required
                        value={userpassword}
                        onChange={(event) => setUserpassword(event.target.value)}
                    ></input>
                    <FaLock className='i'/>
                    <label htmlFor="">Password</label>
                </div>
                <button type='submit' className='btn'
                    onClick={saveLogin}>login</button>
                <div className="link">
                  <p>Dont have an account? <a href='#' className="signup-link">sign up</a></p>
                </div>
            </form>
          </div>
      </div>
    </div>
    
  )
}
export default Login;
