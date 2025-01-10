import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='image-wrapper'>
        <img src='/build/Logo.jpeg' alt='logo' className='logo' />
      </div>

      <div className='home-content'>
        <h1 className='home-title'>Welcome to Classic Generator Services & Repairs</h1>
        <p className='home-description'>
          At <strong>Classic Generator Services & Repairs</strong>, we specialize in the comprehensive repair, maintenance, and servicing of all types of generators. With expertise in wiring, troubleshooting, and ensuring the highest performance, we work with leading generator brands such as <strong>Iveco</strong>, <strong>Volvo</strong>, <strong>Penta</strong>, <strong>Perkins</strong>, <strong>SDEC</strong>, <strong>FAW</strong>, <strong>Baudouin</strong>, and <strong>Lister</strong>.
        </p>
        <p className='home-description'>
          We also provide top-tier services for <strong>control panels</strong>, including renowned brands like <strong>Deepsea Electronics</strong>, <strong>DES7320</strong>, <strong>Bunto Power</strong>, <strong>Intelilite 9</strong>, <strong>ComAp</strong>, <strong>Lister Peter</strong>, and <strong>Genset Controller Datacom</strong>. Our team is equipped to handle all types of <strong>AVRs</strong> and offers a variety of <strong>service kits</strong> to keep your generators running smoothly.
        </p>
        <p className='home-description'>
          Whether you need quick repairs, regular maintenance, or full-scale servicing, we are here to ensure your generator performs at its best.
        </p>
      </div>
    </div>
  )
}