import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/constant'
import VideoCard from './VideoCard'

const VideoContainer = () => {

  const [videos,setVideos] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    console.log('data: ', json);
    setVideos(json.items)
  }

  return (
    <div className='flex'>
      {videos.map((video)=> <VideoCard key={video?.id} info={video} /> )}
    </div>
  )
}

export default VideoContainer