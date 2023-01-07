import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Attendance from './Pages/Attendance'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/attendance' element={<Attendance/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
