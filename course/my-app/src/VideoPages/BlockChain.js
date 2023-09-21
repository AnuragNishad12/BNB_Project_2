import React from 'react'
import '../VideoPages/BlockChain.css'
import Youtube from 'react-youtube';
// 

function BlockChain() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const videoId = "gyMwXuJrbJQ?si=7CGuer5BBrKF_NGH";






  return (
    <div>
       <div className='videoHead3'>
      <h1>BlockChain Full Course</h1>
      <Youtube className='Yo3' videoId={videoId} opts={opts} />
    </div>
    </div>
  )
}

export default BlockChain
