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

      const videoId = "_H9Qppf13GI?si=GAI-MTpJ95JRo04P";
  return (
    <div>
      <div className='videoHead2'>
      <h1>Code a Web 3.0 Ticketmaster Clone Step-By-Step with Solidity, Ethers.js, React & Hardhat</h1>
      <Youtube className='Yo2' videoId={videoId} opts={opts} />
    </div>
    </div>
  )
}

export default NewV
