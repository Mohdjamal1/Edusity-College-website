import React, { useRef } from 'react'
import './VideoPlayer.css'
import video_1 from '../../assets/college-video.mp4'

const VideoPlayer = ({play,setPlay}) =>{

  const playRef = useRef();

  const closePlayer = (e)=>{
    if(e.target === playRef.current){
      setPlay(false)
    }
  }
  
  return(
    <div ref={playRef} className={`player ${play?'':'hide'}`} onClick={closePlayer} >
      <video src={video_1} autoPlay muted controls ></video>
    </div>
  )
}
export default VideoPlayer;