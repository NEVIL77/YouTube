import React from 'react'

const VideoCard = ({info}) => {
    console.log(">>>>",info)

    const { snippet, statistics } = info

    const { channelTitle, title, thumbnails } = snippet

  return (
    <div className='w-72 p-2 m-4 border shadow-lg rounded-lg'>
        <img className='rounded-lg' src={thumbnails?.medium?.url} alt='Thumbnail' />
        <ul>
            <li className='font-bold py-2' >{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard