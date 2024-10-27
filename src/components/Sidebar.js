import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const isMenuopen = useSelector(store=>store.app.isMenuopen)

  // Early Return
  if(!isMenuopen) return 0 

  return (
    <div className='w-48 l-full shadow-lg'>
      <h1 className='border-b-4 border-gray-200 my-1' >Subsribed</h1>
      <ul className='my-4'>
        <li> <Link to={"/"}> Home </Link> </li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
        <li>Six</li>
      </ul>
      <h1 className='border-b-4 border-gray-200 mb-2'>Music</h1>
      <ul>
        <li>ONE 1 </li>
        <li>Two 2</li>
        <li>Three 3</li>
        <li>Four 4</li>
        <li>Five 5 </li>
        <li>Six 6</li>
      </ul>
      
    </div>
  )
}

export default Sidebar