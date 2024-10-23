
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Models from './Models'
import Profile from './Profile'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Models/>}/>
      <Route path='/profile' element={ <Profile/>}/>

    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
