import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Components/Scroll.css'

function Srcoll() {
    const navigate = useNavigate();

    const HandleMove=()=>{
        navigate("/Web3");
      }
    
      const HandleMove2=()=>{
        navigate("/Rust");
      }
    
      const HandleMove3=()=>{
        navigate("/BlockChain");
      }

      const HandleMove4=()=>{
        navigate("/tick");
      }

      const HandleMove5=()=>{
        navigate("/tick2");
      }
      const HandleMove6=()=>{
        navigate("/tick3");
      }


  return (
    <>
    <h1 className='head'>Our Cousres</h1>
    <div className="carousel-container">
 <div className='box'>
  <img onClick={HandleMove} src='https://firebasestorage.googleapis.com/v0/b/gokqmp.appspot.com/o/CousreImage%2FWeb3%2Fphoto_6273580462534407847_y.jpg?alt=media&token=2f7868e6-ccdb-4aa1-989b-5b34df040aa4' alt=''/>
 </div>
 <div className='box'>
  <img  onClick={HandleMove2} src='https://www.freecodecamp.org/news/content/images/size/w300/2023/06/rust.png' alt=''/>
 </div>
 <div className='box'>
  <img onClick={HandleMove3} src='https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/blockchain1.png' alt=''/>
 </div>
</div> 
<div className='Next'>
 <div className='box'>
  <img  onClick={HandleMove4} src='https://firebasestorage.googleapis.com/v0/b/gokqmp.appspot.com/o/maxresdefault.jpg?alt=media&token=8d5eb7a4-659b-4aae-90d3-415b13fac8c6' alt=''/>
 </div>
 <div className='box'>
  <img onClick={HandleMove5}  src='https://img.youtube.com/vi/NxDGHynpA4s/maxresdefault.jpg' alt=''/>
 </div>

 <div className='box'>
  <img onClick={HandleMove6} src='https://img.youtube.com/vi/b_k8yDC3hdM/maxresdefault.jpg' alt=''/>
 </div>







 </div>
    
    
    </>
  )
}

export default Srcoll
