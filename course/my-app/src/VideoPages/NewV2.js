import React from 'react'
import Youtube from 'react-youtube';
import '../VideoPages/Rust.css'

function NewV() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };

      const videoId = "NxDGHynpA4s?si=fKbgNSvBfSTYz5Z7";
  return (
    <div>
      <div className='videoHead2'>
      <h1>Full-Stack Dapp using Solidity, Ether.js, Hardhat, and React JS</h1>
      <Youtube className='Yo2' videoId={videoId} opts={opts} />
    </div>
    </div>
  )
}

export default NewV
