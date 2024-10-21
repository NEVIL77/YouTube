import React from 'react'
import Button from './Button'

const btnList = ['All','Car','Bike','Sport','Tech','Movie','Short','no btn']

const ButtonList = () => {
  return (
    <div className='w-full border shadow-lg flex' >
      {btnList.map((name,index)=>{
        return <Button name={name} key={index}/> 
      })}
    </div>
  )
}

export default ButtonList