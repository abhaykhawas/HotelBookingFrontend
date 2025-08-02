import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavbarComponent/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Listing from './Pages/Listings/Listing'
import Bookings from './Pages/Booking/Bookings'

function App() {

  return (
    <div className='container'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/listings' element={<Listing />}/>
        <Route path='/bookings' element={<Bookings />}/> 
      </Routes>
    </div>
  )
}

export default App
