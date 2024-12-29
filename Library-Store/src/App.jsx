import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/login';
import Signup from './Pages/signup';
import Home from './Pages/Home';
import AddMedia from './Pages/AddMedia';
import UpdateMedia from './Pages/UpdateMedia';
import './App.css'
import Media from './Pages/Media';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='Home' element={<Home/>}/>
          <Route path="Media" element={<Media/>}/>
          <Route path="AddMedia" element={<AddMedia/>}/>
          <Route path="UpdateMedia" element={<UpdateMedia/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
