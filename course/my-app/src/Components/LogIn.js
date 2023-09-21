import React, { useState } from 'react'
import '../Components/LogIn.css'
import {auth} from '../FireConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from "react-router-dom";

function LogIn() {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password,setPassword] = useState('');

const handleEmail=(e)=>{
   setEmail(e.target.value);
}

const handlePass =(e)=>{
    setPassword(e.target.value);
}

const signIn=(e)=>{
e.preventDefault();
signInWithEmailAndPassword(auth,email,password)
.then(()=>{
alert("User Loged In");
navigate('/Header');
}).catch(()=>{
   alert("User Not Found");
})
setEmail('');
setPassword('');

};

const HandleRegister =()=>{
    navigate("/Register");
}



  return (
    <>
     <div className='MainCon'>
    <form className='Login' onSubmit={signIn}>
    <div>
    <p className='Reg'>LOGIN</p>
    </div>
      <div className='an'>
        <p className='anP'>CryptoCourse</p>
      </div>
    <input type='text' placeholder='Email' required autoComplete='off' value={email} onChange={handleEmail}/>
    <input type='text' placeholder='password' required autoComplete='off' value={password} onChange={handlePass}/>  
    <button className='button2'>Submit</button>
    <p className='para4' onClick={HandleRegister}>Don't Have Account PLease <span>Register</span></p>
    </form>
    </div>
    </>
  )
}

export default LogIn

