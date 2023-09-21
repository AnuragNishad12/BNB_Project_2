import React from 'react'
import Youtube from 'react-youtube';
import '../VideoPages/Rust.css'

function Rust() {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };

      const videoId = "BpPEoZW5IiY?si=gxjecsmJ4BMDbr9r";


  return (
    <div>
       <div className='videoHead2'>
      <h1>Rust Tutorials</h1>
      <Youtube className='Yo2' videoId={videoId} opts={opts} />
    </div>
    </div>
  )
}

export default Rust
