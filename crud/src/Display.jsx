/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { data } from './App'

const Display = () => {

  const {items,handleAddInput} = useContext(data)
  const [inputVal, setInputVal] = useState();

  const handlAdd = (e)=>{
    handleAddInput(inputVal)
  }
  
  return (
    <div>
      <input type="text" onChange={(e)=>{setInputVal(e.target.value)}} placeholder='Enter Your Data' /> {" "}
      <button onClick={handlAdd}>ADD</button>
      <br/>
      <br/>
      {
        items.map((item, index) => (
          <div key={item.id}>
            <li><Buttons obj={item}/> {" "} </li> <br/>
          </div>
        ))
      }
    </div>
  )
}

const Buttons = ({obj}) =>{
  const [show, setShow] = useState(false);

  const {handleChangeInput,deleteItem} = useContext(data);

  const handlChange = (e) =>{
    handleChangeInput(obj.id,e.target.value)
  }

  const handleDelete = () =>{
    deleteItem(obj.id)
  }
  return(
    <>
      {
        (show) ? (
          <>
              <input type="text" name="" id="" value={obj.name} onChange={handlChange}/>
              <button onClick={() => setShow(false)}>Save</button>
          </>
        ) : (
          <>
            {obj.name} {" "}  
            <button onClick={() => setShow(true)}>Edit</button>
          </>
        )
      }
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Display
