/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react'
import './App.css'
import Display from './Display';


const dummyData = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob',},
]

// eslint-disable-next-line react-refresh/only-export-components
export const data = createContext();
function App() {
  const [items, setItem] = useState(dummyData);
  
  const handleChangeInput = (id,newName) =>{
    setItem(items.map((v)=>{
      if(v.id === id){
        return {...v,name:newName}
      }else{
        return v;
      }
    }))    
  }
  
  const handleAddInput = (add) => {
    if (!add) {
      alert('Please enter a name');
    } else {
      setItem([...items, { id: items.length + 1, name: add }]);
    }
  }
  
 
  const deleteItem = (i) => {
    setItem(items.filter((v)=>{
      return v.id !== i
    }))
  }

  return (
    <>
      <data.Provider value={{items,handleChangeInput,handleAddInput,deleteItem}}>
        <Display/>
      </data.Provider>
    </>
  )
}

export default App
