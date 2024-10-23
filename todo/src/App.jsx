/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react'
import './App.css'
import Parent from './Parent';


// eslint-disable-next-line react-refresh/only-export-components
export const data = createContext();

let dummyData = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 },
  { id: 4, name: 'Alice', age: 20 },
  { id: 5, name: 'Mike', age: 40 },
]
function App() {
  const [items, setItems] = useState(dummyData);

 const handleInputChange = (id,newName) =>{
   setItems(items.map((v)=>{
    if(v.id === id){
      return {...v,name:newName}
      }
      return v; 
   }))

   
  }
  const handleDeleteItem = (i) =>{
   setItems(items.filter((v)=>{
    return v.id !== i;
   }))
  }

  const inputvalues = (iname,age) =>{
    setItems([...items,{id:items.length+1,name:iname,age:age}])
  }

  const handleInputChangeAge = (id,age) =>{
    setItems(items.map((v)=>{
      if(v.id === id){
        return {...v,age:age}
        }
        return v;
    }))
  } 
  return (
    <div className='App'>

     
      <data.Provider value={{items,handleInputChange,handleDeleteItem,inputvalues,  handleInputChangeAge}}>
        <Parent/>
      </data.Provider>
    </div>
  )
}



export default App
