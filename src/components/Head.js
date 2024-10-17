import React from 'react';
import { constant } from './Contstant';

const Head = () => {
  return (
    <div className='grid grid-flow-col items-center p-4 m-2 shadow-lg w-full'>

      <div className='flex items-center col-span-1'>
        <img className='h-10' src={constant?.HAMBERGERICON} alt='menu' />
        <img className='h-10 mx-3' src={constant?.YOUTUBE} alt='YouTube' />
      </div>

      <div className='col-span-10 flex justify-center'>
        <input 
          className='h-10 w-1/2 bg-slate-100 border border-gray-300 px-5 rounded-l-full focus:outline-none' 
          type='text' 
          placeholder='Search here...' 
        />
        <button className='h-10 w-16 bg-white border border-gray-300 shadow-md rounded-r-full'>
          <img className='h-6 w-6 mx-auto' src={constant?.SEARCHICON} alt='search' />
        </button>
      </div>

      <div className='flex justify-end items-center'>
        <img className='h-10' src={constant?.USERICON} alt='user' />
      </div>
      
    </div>
  );
};

export default Head;
