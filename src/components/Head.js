import React, { useEffect, useState } from 'react';
import { constant } from './Contstant';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState(["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4"]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store)=>store.search)

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (searchQuery) {
      const timer = setTimeout(() => 
        {
          if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
          }
          else{
            getSearchSuggestion()
          }
        }
      , 500);

      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const getSearchSuggestion = async () => {

    console.log("Suggestions:", suggestions);
    console.log("Search Query is:", searchQuery);

    dispatch(cacheResults({
      [searchQuery]:[]
    }))
    debugger
  };

  return (
    <div className='grid grid-cols-[auto,1fr,auto] items-center p-4 m-2 shadow-lg w-full bg-white relative'>
      <div className='flex items-center space-x-3'>
        <img
          className='h-10 cursor-pointer'
          src={constant?.HAMBERGERICON}
          alt='menu'
          onClick={toggleMenuHandler}
        />
        <img className='h-10' src={constant?.YOUTUBE} alt='YouTube' />
      </div>

      <div className='flex justify-center items-center w-full relative' onBlur={() => setShowSuggestion(false)}>
        <div className='flex w-full max-w-lg'>
          <input
            className='h-10 w-full bg-slate-100 border border-gray-300 px-5 rounded-l-full focus:outline-none focus:border-blue-500 focus:bg-white transition duration-200 ease-in-out'
            type='text'
            placeholder='Search here...'
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestion(true);
            }}
            onFocus={() => setShowSuggestion(true)}
          />
          <button className='h-10 w-12 bg-white border-t border-r border-b border-gray-300 rounded-r-full flex items-center justify-center hover:bg-gray-100'>
            <img className='h-5 w-5' src={constant?.SEARCHICON} alt='search' />
          </button>
        </div>

        {/* Suggestion List */}
        {showSuggestion && suggestions.length > 0 && (
          <ul className='absolute top-12 w-full bg-white border border-gray-300 rounded-b-lg shadow-md z-10'>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                onMouseDown={() => setSearchQuery(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='flex justify-end items-center'>
        <img className='h-10' src={constant?.USERICON} alt='user' />
      </div>
    </div>
  );
};

export default Head;
