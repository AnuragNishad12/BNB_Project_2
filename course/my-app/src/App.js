import React,{useState,useEffect} from 'react'
import Header from './Components/Header'
import RegisterPage from './Components/RegisterPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Web3 from './VideoPages/Web3';
import Rust from './VideoPages/Rust';
import BlockChain from './VideoPages/BlockChain';
import Srcoll from './Components/Srcoll';
import abi from './Components/ABI.json'
import {ethers} from 'ethers';
import LogIn from './Components/LogIn';
import Blogs from './Components/Blogs';
import About from './Components/About';
import NewV from './VideoPages/NewV'
import NewV2 from './VideoPages/NewV2'
import NewV3 from './VideoPages/NewV3'

function App() {
     const [state, setState] = useState({
          provider:null,
          signer:null,
          contract:null
        })

        const [account,setAccount] = useState('Not Connected');

        useEffect(()=>{
          const template =async()=>{
          const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
          const contarctABI =abi.abi;
          //MetaMask
          try{
            const {ethereum} = window;
          const account = await ethereum.request({
            method:"eth_requestAccounts"
          })
          window.ethereum.on("accountsChanged",()=>{
            window.location.reload();
          })
          window.ethereum.on("accountChanged",()=>{
            window.location.reload();
          })
          
          setAccount(account);
        
          const provider = new ethers.providers.Web3Provider(ethereum)
          
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contarctABI,
            signer
          )
        
          console.log(contract);
        
          setState({provider,signer,contract});
          alert("Connected to MetaMask");
          } catch (error) {
          alert("Install MetaMask Account if U don't Have");
          
        }
          };
          template();
        },[])




  return (
    <Router>
       <Routes>
        { <Route path="/" element={
             <LogIn />
         } /> }
       <Route path="/Register" element={
              <RegisterPage state={state} account={account}/>
        } />
           { <Route path="/Header" element={
             <Header />
         } /> }
       { <Route path="/Web3" element={
             <Web3/> } />}
        <Route path="/Rust" element={
             <Rust/> } />
              <Route path="/BlockChain" element={
             <BlockChain/> } />
             <Route path="/Course" element={
             <Srcoll/> } /> 
             <Route path="/blog" element={
             <Blogs/> } /> 
             <Route path="/about" element={
             <About/> } /> 
             <Route path="/tick" element={
             <NewV/> } /> 
              <Route path="/tick2" element={
             <NewV2/> } /> 
             <Route path="/tick3" element={
             <NewV3/> } /> 
        </Routes>
        </Router>

  )
}

export default App;