import React from 'react'
import '../VideoPages/Web3.css'
import Youtube from 'react-youtube';




function Web3() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const videoId = "rXZSnUOhnwc?si=NxWjjX1EDauTgDpC";
  const videoId2= "alQlKsoO_aQ?si=5rJOD3Kt-YuVwyhK";
  const videoId3= "FNfcdkPb4rg?si=8Z13X6DjLWGIRYip";
  const videoId4= "nvBAalvRHOI?si=X1tcE766_We8LIta";
  const videoId5= "4cPEGO4NAao?si=jztTe5qs2znpihqP";
  const videoId6= "xChKky8kb6A?si=ScB82jDAkgIW0s8w";
  const videoId7= "xFOb8sGNrEQ?si=Qiv5cKjfooc4fXDE";
  const videoId8= "oQ5yPKdjxFQ?si=1pzIM9zLXR1A8kAQ";
  const videoId9= "hpyWNudPDjk?si=HaA_W2Mx9zP6JZVY";
  const videoId10= "LzdMosLzj80?si=4VClAsq0Rfktmakd";
  const videoId11= "rXZSnUOhnwc?si=Pr-ut_zPJ73lCuSi";


  return (
    <>
   <div className='videoHead'>
      <h1>Web3.js Tutorials</h1>
      <Youtube className='Yo' videoId={videoId} opts={opts} />
    </div>

    <div className='videoHead'>
      <Youtube className='Yo' videoId={videoId2} opts={opts} />
    </div>
    <div className='videoHead'>
      <Youtube className='Yo' videoId={videoId3} opts={opts} />
    </div>
    <div className='videoHead'>
      <Youtube className='Yo' videoId={videoId4} opts={opts} />
    </div>
    <div className='videoHead'>
      <Youtube className='Yo' videoId={videoId5} opts={opts} />
    </div>
    <div className='videoHead'>
      <Youtube className='Yo' videoId={videoId6} opts={opts} />
    </div>
    <div className='videoHead'>
      <Youtube className='Yo' videoId={videoId7} opts={opts} />
    </div>
    <div className='videoHead'>
      <Youtube className='Yo' videoId={videoId8} opts={opts} />
    </div>
    <div className='videoHead'>
      <Youtube className='Yo' videoId={videoId9} opts={opts} />
    </div>
    <div className='videoHead'>
      <Youtube className='Yo' videoId={videoId10} opts={opts} />
    </div>
    <div className='videoHead'>
      <Youtube className='Yo' videoId={videoId11} opts={opts} />
    </div>

    </>
  )
}

export default Web3
