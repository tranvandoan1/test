import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Orders from './Page/Orders'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/oder/id=:id' element={<Orders/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
