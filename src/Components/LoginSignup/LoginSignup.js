import React, { useState } from 'react';
import '../styles/LoginSignup.css'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import '/home/rahul/Desktop/sign-up /login-signup-react/src/Components/styles/LoginSignup.css'

function LoginSignup() {

const [action, setAction] = useState("Sign up");

  return (
    <div className='container'>
      <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
          <AccountCircleIcon />
          <input type='text' placeholder='Enter name..'/>
        </div>}

      <div className='inputs'>
        <div className='input'>
          <EmailIcon />
          <input type='email' placeholder='Enter Email..' />
        </div>
      </div>

      <div className='inputs'>
        <div className='input'>
          <LockIcon />
          <input type='password' placeholder='Enter Password..'/>
        </div>
      </div>

      {action==="Sign up"?<div></div>:<div className='forgot-password'>forgot password? <span>Click Here</span></div>
      }
      
      <div className='submit-container'>
        <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign up")}}>Sign Up</div>
        <div  className={action==="Sign up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    </div>
  )
}

export default LoginSignup;