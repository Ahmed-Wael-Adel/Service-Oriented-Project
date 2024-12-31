import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/login';
import Signup from './Pages/signup';
import Home from './Pages/Home';
import AddMedia from './Pages/AddMedia';
import UpdateMedia from './Pages/UpdateMedia';
import AddBook from './Pages/AddBook';
import './App.css'
import Media from './Pages/Media';
import Book from './Pages/Book';
import Stationery from './Pages/Stationery';
import AddStationery from './Pages/AddStationery';
import UpdateStationery from './Pages/UpdateStationery';
import UpdateBook from './Pages/UpdateBook';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='Home' element={<Home/>}/>
          <Route path="Media" element={<Media/>}/>
          <Route path="Book" element={<Book/>}/>
          <Route path="Stationery" element={<Stationery/>}/>
          <Route path="AddMedia" element={<AddMedia/>}/>
          <Route path="AddStationery" element={<AddStationery/>}/>
          <Route path="AddBook" element={<AddBook/>}/>
          <Route path="UpdateMedia" element={<UpdateMedia/>}/>
          <Route path="UpdateBook" element={<UpdateBook/>}/>
          <Route path="UpdateStationery" element={<UpdateStationery/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
