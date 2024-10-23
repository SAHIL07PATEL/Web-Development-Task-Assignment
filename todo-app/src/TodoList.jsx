/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import TodoTasklist from './TodoTasklist'
import AddItem from './AddItem'

let dummyData = [
  {id:1,fruit:"Apple"},
  {id:2,fruit:"Kiwi"},
  {id:3,fruit:"Dragonfruit"}
]

const TodoList = () => {    
  const [todos, setTodos] = useState(dummyData)  

  const handleDelete = (e) => {
  setTodos(todos.filter((v)=>v.id !== e))    
  }

  const handleUpdate = (e) =>{
    setTodos(todos.map((v)=>{
      if(v.id === e.id){
        return {...v,fruit:e.fruit}
      }
      return v
    }))
    
  }

  const handleAddItem = (fruitName) =>{
    setTodos([...todos,{id:todos.length+1,fruit:fruitName }])
  }
  return (
    <div>
       <AddItem f={handleAddItem}/> 
       <TodoTasklist x={todos} obid={handleDelete} nobj={handleUpdate} />
    </div>
  )
}

export default TodoList
