/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const AddItem = ({f}) => {

  const [fruitName, setfruitName] = useState("");
  return (
    <div>
         <input type="text" name="" id="" onChange={(e)=> setfruitName(e.target.value)}/> {" "}{" "} 
        <button onClick={()=>{f(fruitName)}}>Add now</button>
        <br></br>
        <br></br>
    </div>
  )
}

export default AddItem
