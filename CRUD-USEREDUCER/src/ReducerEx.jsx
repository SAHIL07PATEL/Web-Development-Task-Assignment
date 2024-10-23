/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react'

let num = {number:12}
const ReducerEx = () => {
  const addNum = (state,action) =>{
    switch(action.type){
      case 'increment':
        return {number : state.number + 1};
      
      case 'decrement':
        return {number : state.number - 1};
      
      default:
        return {number : state.number};
    }
  }
  const [state, setState] = useReducer(addNum,num)
  return (
    <div>
      <button onClick={()=>{setState({type:"increment"})}}>Increment</button><br/><br/>
       {state.number}
       <br/><br/>
       <button onClick={()=>{setState({type:"decrement"})}}>Decrement</button>
    </div>
  )
}

export default ReducerEx
