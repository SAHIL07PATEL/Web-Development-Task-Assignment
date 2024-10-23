import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import CardDetails from './CardDetails'
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
        {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/" element={<Nav/>} /> */}
        <Route path="/cdetails" element={<CardDetails />} />
        {/* <Route path="/" element={<Header />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
