import React from 'react';
import UserTable from './UserTable'; // Make sure to adjust this path if it's different
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditUser from './EditUser';
import AddUser from './AddUser';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<UserTable/>}/>
      <Route path='/edituser/:eid'  element={<EditUser/>}/>
      <Route path='/adduser'  element={<AddUser/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
