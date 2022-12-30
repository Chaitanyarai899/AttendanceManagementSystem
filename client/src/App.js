import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Attendance from './Pages/Attendance'
import MonthlyCalendar from './Pages/MonthlyCalendar'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/attendance' element={<Attendance/>} />
        <Route path='/calender' element={<MonthlyCalendar/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
