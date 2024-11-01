import React, { useEffect, useState } from 'react';
import { constant } from './Contstant';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useRef } from 'react';

const Head = () => {

  let debounceTimer  = useRef(null)

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  
  useEffect(()=>{
    getSearchQuery()
  },[searchQuery])

  const getSearchQuery = async () => {
    let data = await fetch()
    data = data.JSON()
  }
  
  const seachFunction = (e) => {
    const query = e.target.value;

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      setSearchQuery(query);
      console.log("searchQuery:", query);
      debugger
    }, 500);
  };

  return (
    <div className='grid grid-cols-[auto,1fr,auto] items-center p-4 m-2 shadow-lg w-full bg-white'>
      <div className='flex items-center space-x-3'>
        <img
          className='h-10 cursor-pointer'
          src={constant?.HAMBERGERICON}
          alt='menu'
          onClick={toggleMenuHandler}
        />
        <img className='h-10' src={constant?.YOUTUBE} alt='YouTube' />
      </div>

      <div className='flex justify-center items-center w-full'>
        <input
          className='h-10 w-full max-w-lg bg-slate-100 border border-gray-300 px-5 rounded-l-full focus:outline-none focus:border-blue-500 focus:bg-white transition duration-200 ease-in-out'
          type='text'
          placeholder='Search here...'
          value={searchQuery}
          onChange={(e)=>seachFunction(e)}
        />
        <button className='h-10 w-12 bg-white border border-l-0 border-gray-300 shadow-md rounded-r-full flex items-center justify-center hover:bg-gray-100'>
          <img className='h-5 w-5' src={constant?.SEARCHICON} alt='search' />
        </button>
      </div>

      <div className='flex justify-end items-center'>
        <img className='h-10' src={constant?.USERICON} alt='user' />
      </div>
    </div>
  );
};

export default Head;
