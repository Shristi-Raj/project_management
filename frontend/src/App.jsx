import React from 'react'
import Login from './login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Project from './project'
import Leave from './leave'
import Home from './home'
import Leavestatus from './leavestatus'
import AddProject from './AddProject'
import EditProject from './Editproject'
import Start from './start'
import Projectdetail from './projectdetail'
import Employeelogin from './Employeelogin'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}>
      <Route path='' element={<Home />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/leave' element={<Leave />}></Route>
        <Route path='/leavestatus/:id' element={<Leavestatus />}></Route>
        <Route path='/create' element={<AddProject />}></Route>
        <Route path='/projectEdit/:id' element={<EditProject />}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/start' element={<Start />}></Route>
      <Route path='/employeelogin' element={<Employeelogin />}></Route>
      <Route path='/projectdetail/:id' element={<Projectdetail />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
