import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='main-layout'>
        <Home />
        <About />
        <Projects />
      </div>
      
    </div>
  );
}

export default App;
