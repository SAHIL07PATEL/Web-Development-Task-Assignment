import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Adduser from './Adduser'
import ViewUser from './ViewUser'
import EditUser from './EditUser'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<Adduser/>} />
          <Route path='/view/:vId' element={<ViewUser/>} />
          <Route path='/edit/:eId' element={<EditUser/>} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
