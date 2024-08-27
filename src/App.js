import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// UI Components
import Construction from './Components/Construction';
import Navbar from './Components/NavBar/Navbar';
import Info from './Components/Info/Info';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Info />}/>
        <Route path='/work' element={<Construction />}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;