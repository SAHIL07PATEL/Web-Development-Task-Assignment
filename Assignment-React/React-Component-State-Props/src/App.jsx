
import './App.css'

import Counter from './Components/Counter'
import Login from './Components/Login'
import TodoList from './Components/Props-example/TodoList'

function App() {

  return (
    <div>
      <div className="App">

      <div style={{
        marginBottom:"100px"
      }}>
          <h2 style={{color:"lightblue",marginTop:"50px",marginBottom:"30px"}}>========= Counter App Using UseState Hooks ========</h2>
          <Counter/>
      </div> 


       <div>
        <h2 style={{color:"lightblue",marginTop:"50px",marginBottom:"20px"}}> ============ CRUD Using Props ============</h2>
       <TodoList/>
       </div>

       <div>
       <h2 style={{color:"lightblue",marginTop:"50px"}}> ============ Login & Logout  ============</h2>
        <Login/>
       </div>
      </div>
    </div>
  )
}

export default App
