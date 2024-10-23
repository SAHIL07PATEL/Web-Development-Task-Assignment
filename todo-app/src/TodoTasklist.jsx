/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
 
const TodoTasklist = ({x , obid,nobj}) => {
  return (
    <div>
      {
        x.map((v,i)=>(
          <div key={v.id}>
            <li> {" "} <TodoButtons obj={v} objID={obid} nextObj={nobj} /></li> 
          </div>
        ))
      }
    </div>
  )
}

const TodoButtons = ({obj,objID,nextObj}) =>{
 const [show,setShow] =  useState(false)
 let x;
 if(show){
   x= 
   <>
    <input type="text" name="" id="" value={obj.fruit} onChange={(e)=>{
      nextObj({
        ...obj,
        fruit: e.target.value
      })
    }}/>
    <button onClick={()=>setShow(false)}>Save</button>
   </>
 }else{
  x=
  <>
    {obj.fruit}
  <button onClick={()=>setShow(true)}>Edit</button>
  </>
 }

  return(
    <>
  
    {x}
    <button onClick={()=>{objID(obj.id)}}>Delete</button>
    </>
  )
}

export default TodoTasklist
