import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Navbar from './Navbar';
// import TodoList from './TodoList'


// const nums = new Array(30_000_000).fill(0).map((_,i)=>{
//   return {
//     index:i,
//     isMagical:i=== 29_000_000
//   }
// })

function App() {

  const [count, setcount] = useState(0);
  // const [num, setNum] = useState(nums);
  
  // const magical = useMemo(()=> num.find((item)=>item.isMagical),[num])
  
  const [adjactive, setAdjactive] = useState('Good');

  const getAdjactive  = useCallback(() =>{
    return "another" + count
  },[])
  
  return (
    <>
      {/* <TodoList/> */}

      <Navbar adjactive={adjactive} getAdjactive={getAdjactive}/>
      {/* <button onClick={() => {
        setcount(count + 1)
        if(count === 10 ){
          setNum( new Array(10_000_000).fill(0).map((_,i)=>{
            return {
              index:i,
              isMagical:i=== 9_000_000
            }
          }))
        }
        }}>Count</button> */}
      <button onClick={()=>setcount(count + 1)}>Count</button>

        {/* {magical.index} */}
      <h1>

        {count}
      </h1>
    </>
  )
}

export default App
