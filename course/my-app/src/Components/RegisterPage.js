
import React, { useState } from 'react'
import "../Components/Register.css"
// import Image from './img/clapper.png'
// import { useNavigate } from 'react-router-dom';
import {auth} from "../FireConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {ethers} from "ethers"




function RegisterPage(props) {
    const navigate = useNavigate();


const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword]= useState('');

const SignUp=async(e)=>{
e.preventDefault();
const{contract}= props.state;
createUserWithEmailAndPassword(auth,email,password).then(()=>{
alert("User Created");
}).catch((error)=>{
  console.log(error);
})
const name = document.querySelector("#name").value;
const amount = {value:ethers.utils.parseEther("0.0001")};
  const transaction = await contract.buyCourse(name,amount);
  alert("Wait let the transaction complete");
  await transaction.wait();
  alert("Transaction is Successfull");
  navigate("/Header");

}

const handleName =(e)=>
{
setName(e.target.value);
}

const handleEmail=(e)=>{
  setEmail(e.target.value);
}

const handlePassword =(e)=>{
  setPassword(e.target.value);
}

const HandleRegister=()=>{
  navigate('/');
}

  return (
   <>
   <div className='MainCon'>
    <form className='Login' onSubmit={SignUp}>
    <div>
    <p className='Reg'>Register</p>
    </div>
      <div className='an'>
        <p className='anP'>CryptoCourse</p>
      </div>
    <input type='text' placeholder='Name' id='name' required autoComplete='off' value={name} onChange={handleName}/>
    <input type='text' placeholder='Email' required autoComplete='off' value={email} onChange={handleEmail}/>
    <input type='text' placeholder='password' required autoComplete='off' value={password} onChange={handlePassword}/>  
    <label>Connect Your MetaMask Wallet</label>
    <p>{props.account}</p>
    <h3>Eth: 0.0001</h3>
    <button className='button2' >Submit</button>
    <p className='para5' onClick={HandleRegister}>Already Have Account PLease <span>LOGIN</span></p>
    </form>
    </div>
   
   
   
   </>
  )
}

export default RegisterPage
