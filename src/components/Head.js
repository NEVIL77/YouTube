import React from 'react'
import {constant} from './Contstant'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg w-full'>
        <div className='flex col-span-1'>
          <img 
            className='h-10'
            src={constant?.HAMBERGERICON} alt='menu'/>
          <img 
            className='h-10 mx-2'
            src={constant?.YOUTUBE} alt='youTube'/>
        </div>
        <div className='col-span-10 px-10'>
          <input 
            className='h-10 w-1/2 bg-slate-100 px-5'
            type='text'placeholder='Search here...'/>
          <button>Search</button>
        </div>
        <div>
          <img 
            className='h-10'
            src={constant?.USERICON} alt='search' />
        </div>
    </div>
  )
}

export default Head