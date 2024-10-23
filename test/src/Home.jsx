/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const values = useSelector((state)=>state.xyz)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{dispatch({type:"inc"})}}>+</button>
      <h1>Example of React redux {values}</h1>
      <button onClick={()=>{dispatch({type:"dec"})}}>-</button>
    </div>
  )
}

export default Home
