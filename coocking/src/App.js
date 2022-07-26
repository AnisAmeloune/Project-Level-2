import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './compounent/Navbar'
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import ListTask from './D/components-draft/ListTask';

const App = () => {
  return (
    <div className='App' >
       <NavScrollExample/>
       <Navbar/>
       <ListTask/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="draft" element={<ListTask />} />
       

      </Routes>
      
    </div>
  );
};


export default App ;