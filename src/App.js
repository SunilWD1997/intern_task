import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Task1 from './pages/task1/Task1';
import Task3 from './pages/task_3/Task3';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/task1' element={<Task1/>}/>
    <Route path='/task3' element={<Task3/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App