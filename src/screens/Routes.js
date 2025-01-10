import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'
import ContactUs from './Contact/ContactUs'
import Services from './Services/Services'
import NotFound from './NotFound/NotFound'
import Gallery from './Gallery/Gallery'

export default function   ScreensRoutes() {
  return (
    <Router>
        <Routes >
            <Route path='/' element={<Home />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/contact-us' element={<ContactUs />}/>
            <Route path='/404' element={<NotFound />}/>
            <Route path='*' element={<Navigate to={'/404'} />} />
        </Routes>
    </Router>
  )
}
