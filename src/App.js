import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// UI Components
import Navbar from './Components/NavBar/Navbar';
import Info from './Components/Info/Info';
import Work from './Components/Work/Work';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Info />}/>
        <Route path='/work' element={<Work />}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;