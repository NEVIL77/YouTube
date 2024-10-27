import React from 'react';
import { constant } from './Contstant';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch()
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-cols-[auto,1fr,auto] items-center p-4 m-2 shadow-lg w-full'>
      <div className='flex items-center space-x-3'>
        <img className='h-10' src={constant?.HAMBERGERICON} alt='menu' onClick={()=>toggleMenuHandler()}/>
        <img className='h-10' src={constant?.YOUTUBE} alt='YouTube' />
      </div>

      <div className='flex justify-center w-full'>
        <input 
          className='h-10 w-full max-w-lg bg-slate-100 border border-gray-300 px-5 rounded-l-full focus:outline-none' 
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

export default Head ;
