import React from 'react'
import NavBar from './components/Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import SideBars from './components/SideBars/SideBars'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div>
      <ToastContainer/>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBars/>
        <Routes>
          <Route path='/add' element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path='/Orders' element={<Orders />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
