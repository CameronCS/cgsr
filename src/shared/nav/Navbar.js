import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav-header'>
        <nav className='nav-bar'>
          <ul className='nav-list'>
            <li className='nav-list-item'>
              <a className='nav-list-link' href="/">Home</a>
            </li>
            <li className='nav-list-item'>
              <a className='nav-list-link' href='/services'>Services</a>
            </li>
            <li className='nav-list-item'>
              <a className='nav-list-link' href='/gallery'>Gallery</a>
            </li>
            <li className='nav-list-item'>
              <a className='nav-list-link' href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}
