import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Home from './Home';
import AddUsers from './AddUsers';
import "../node_modules/bootstrap/dist/css/bootstrap.css";


import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import ViewUser from './ViewUser';
function App() {
//  const u =  useSelector((state)=>{return state.usersData})

const users = useSelector(state=>state.usersData)
//  console.log(users)
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddUsers/>}></Route>
        <Route path='/view/:vId' element={<ViewUser/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
