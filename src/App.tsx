import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Home from './Components/Home/Home'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
