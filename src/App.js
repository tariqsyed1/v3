import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// UI Components
import Construction from './Components/Construction';
import Navbar from './Components/NavBar/Navbar';
import './App.css';

function App() {

  return (
    <BrowserRouter>
        <Navbar />
    </BrowserRouter>
    );
}

export default App;