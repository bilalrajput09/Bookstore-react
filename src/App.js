import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import DisplayBooks from './Components/DisplayBook';
import Categories from './Components/Categories';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<DisplayBooks />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
