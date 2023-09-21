import React from 'react'
import Youtube from 'react-youtube';
import '../VideoPages/Rust.css'

function NewV3() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const videoId = "b_k8yDC3hdM?si=0_3VaUwG9Av0_ygy";
  return (
    <div>
      <div className='videoHead2'>
      <h1>Learn Truffle By Creating A dApp</h1>
      <Youtube className='Yo2' videoId={videoId} opts={opts} />
    </div>
    </div>
  )
}

export default NewV3
