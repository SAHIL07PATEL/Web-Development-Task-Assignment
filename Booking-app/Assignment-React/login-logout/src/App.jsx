/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import './Login.css'

function App() {
  const [show, setShow] = useState(false);
let x;
  if(show){
   x =
   <>
    <div className="container">
        <div className="nav">
            <div className="nav-item">Navigation</div>
            <button className="login-btn" onClick={()=>{setShow(false)}}>Login</button>
        </div>
        <div className="content">
            <p>Public Views</p>
        </div>
        
        <div className="footer">
            <p>Footer</p>
        </div>
       </div>
   </>
  }else{
    x =
    <>
      <div className="container">
        <div className="nav">
            <div className="nav-item">Navigation</div>
            <button className="login-btn" onClick={()=>{setShow(true)}}>Logout</button>
        </div>
        <div className="content">
            <p>Private Views</p>
        </div>
        
        <div className="footer">
            <p>Footer</p>
        </div>
      </div>
    </>
  }
  return (
    <>
      {x}
    </>
  )
}

export default App
