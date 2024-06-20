import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Header } from './components/Header';
import './App.css';
import { Homepage } from './components/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import { Loginpage } from './components/Loginpage/Loginpage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path={"/home"} element={<Homepage/>}/>
        <Route path="/" element={<Loginpage/>} />
      </Routes>
    </div>
  );
}

export default App;
