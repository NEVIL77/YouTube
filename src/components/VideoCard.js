import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='w-full p-3 border border-gray-200 shadow-lg rounded-lg bg-white'>
      <img className='w-full h-40 object-cover rounded-lg' src={thumbnails?.medium?.url} alt='Thumbnail' />
      <ul className='mt-3'>
        <li className='font-semibold text-lg leading-tight h-12 overflow-hidden text-ellipsis whitespace-nowrap'>
          {title}
        </li>
        <li className='text-gray-600 text-sm mt-1'>{channelTitle}</li>
        <li className='text-gray-500 text-sm mt-1'>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ( { info } )=>{
  return(
    <div className='border border-red-500'>
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
