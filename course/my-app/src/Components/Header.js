import React from 'react'
import '../Components/Header.css'
import image1 from '../img/facebook.png';
import image2 from '../img/instagram.png';
import image3 from '../img/twitter.png';
import image4 from '../img/youtube.png';
import { useNavigate } from 'react-router-dom';





function Header() {
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

  const Course=()=>{
    navigate("/course");
  }

 

  const blog=()=>{
    navigate("/blog");
  }
  const about=()=>{
    navigate("/about");
  }
  




  return (
    <>
<div className='Container'>
   <div className='header'>

<p className='color'>CourseBlock</p>
<div className='Header2'>
<p className='items' onClick={about}>About</p>
<p className='items' onClick={Course}><span>Our Courses</span></p>
<p className='items' onClick={blog}>Blog</p>
</div>
   </div>
   </div>
   <div className='pam'>
  <div className='Cont'>
   <h1>Learn Without Limits</h1>
   <p>"Explore the future with our cutting-edge website offering courses on blockchain, Ethereum, Web3, and Rust programming.
     Unleash your potential with the latest technologies and trends."</p>
   <button onClick={Course}>Explore Our Courses</button>
  </div>
  </div>
  <h1 className='headCousre' >Our Course</h1>
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
 
    <div className='middle'>
    <div className='Conat'>
        <h1>About Us</h1>
        <p>Welcome to our cutting-edge online platform dedicated to providing comprehensive 
            courses on blockchain technology, Web3 development, and Solidity programming.
             Whether you're an aspiring developer, a tech enthusiast, or a seasoned professional
              looking to expand your skill set, our website offers an array of meticulously
               crafted courses that empower you to harness the potential of these revolutionary 
               technologies.</p>
    </div>
    </div>
    <h1 className='H1'>Our Blogs</h1>
    <div class="Blogs">
   <div class="Blocks">
    <div className='imageblog'>
      <a href="https://blog.ethereum.org/2023/08/07/nb-fellows-cohort-3">
            <img src="https://blog.ethereum.org/_ipx/w_3840,q_75/https%3A%2F%2Fstorage.googleapis.com%2Fethereum-hackmd%2Fupload_bc451adb280fe2de40c39e1246ddd6db.png?url=https%3A%2F%2Fstorage.googleapis.com%2Fethereum-hackmd%2Fupload_bc451adb280fe2de40c39e1246ddd6db.png&w=3840&q=75" alt="" />
      </a>
      </div>
      <h3>The Human Stories of Ethereum</h3>
   </div>
   <div className='Blocks'>
   <div className='imageblog'>
    <a href='https://www.risein.com/blog/how-do-you-attract-developers-to-your-chain-and-ecosystem-2'>
      <img src='https://uploads-ssl.webflow.com/649ed911a30a27fa26890a5a/64b91281c83686e55e88a55e_pexels-cottonbro-studio-7437489.jpg' alt=''/>
      </a>
      </div>
    <h3>How do you attract developers to your chain and ecosystem?</h3>

   </div>
   <div className='Blocks'>
   <div className='imageblog'>
    <a href='https://blogs.oracle.com/blockchain/post/blockchain-adoption-supply-chain-and-sustainability-applications'>
        <img src='https://blogs.oracle.com/content/published/api/v1.1/assets/CONTDD2055A17D5B497ABD054FB1A8B9AF41/Medium?format=jpg&type=responsiveimage&channelToken=23dcd1b04a6f4bedbfe37fb8181fd098&cb=_cache_847a' alt=''/>
        </a>
        </div>
    <h3>Blockchain Adoption</h3>
   </div>
    </div>
    <div className='bottom'>
    <a href='https://www.facebook.com/freecodecamp/'><img src={image1}  className="Anurah"   alt='Facebook'/></a>
     <a href='https://www.instagram.com/freecodecamp/'><img src={image2}  className="Anurah"   alt='Facebook'/></a>
     <a href='https://twitter.com/ReyedgeM'><img src={image3}  className="Anurah"   alt='Facebook'/></a>
     <a href='https://www.youtube.com/@freecodecamp'><img src={image4}  className="Anurah"   alt='Facebook'/></a>
    
    </div>
    <h2>Thanks for visiting...</h2>
    </>
  )
}

export default Header
