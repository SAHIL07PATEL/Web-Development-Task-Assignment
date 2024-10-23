/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react'
import { data } from './App';

const Parent = () => {
    const {items,inputvalues} = useContext(data);
    const [inputVal, setInputVal] = useState("");
    const [inputAge, setInputAge] = useState("");


    const addItems = () =>{ 
      inputvalues(inputVal,inputAge)
    }

  return (
    <div>
      
      <input type="text" onChange={(e)=>{setInputVal(e.target.value)}} placeholder='Name'/> {" "}
      <input type="text" onChange={(e)=>{setInputAge(e.target.value)}} placeholder='Age'/> {" "}
      <button onClick={addItems}>Add Now</button> 
      <br />
      <br />
    {
       items.map((item, index) =>(
        <div  key={item.id}>
            <li>  <TodoButtons objItems={item} /> {" "}   </li><br/>
        </div>
      ))
    }
    </div>
  )
}

const TodoButtons = ({objItems}) =>{

  const [show, setShow] = useState(false);
  const {handleInputChange,handleDeleteItem,handleInputChangeAge} = useContext(data)


  const handleChange = (e) =>{
    handleInputChange(objItems.id,e.target.value)
  }

  const handleDelete = () =>{
    handleDeleteItem(objItems.id)
  }

  const handleChangeAge = (e) =>{
    handleInputChangeAge(objItems.id,e.target.value)
  }
  
  return(
    <>


    {
      show ? (
        <>
        <input type="text"  value={objItems.name}  onChange={handleChange}/> {" "}
        <input type="text"  value={objItems.age}  onChange={handleChangeAge}/> {" "}
        <button onClick={() => setShow(false)}>Save</button>
        </>
      ) : (
        <>
        {objItems.name} {" "} 
        {objItems.age} {" "} 
        <button onClick={() => setShow(true)}>Edit</button>
        </>
      )
    }
     
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Parent
