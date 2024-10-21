import React, { useEffect } from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/constant'

const VideoContainer = () => {

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    console.log('data: ', json);
  }

  return (
    <div className='w-full h-full shadow-lg my-2'>VideoContainer</div>
  )
}

export default VideoContainer