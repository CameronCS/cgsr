import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='credits'>
        <p className='dev'>Website Developed By Cameron Stocks</p>
        <p className='designer'>Designed by Liezel De Kock</p>
    </div>
      <div className='copyright'>
        <p className='company'>Copyright &copy; of Classic Generator Services and Repairs </p>
        <p className='arr'>All Rights Reserved</p>
      </div>

      {/* <div className='additional'>
        <p className='addtional-p'>
          <a className='additional-link' href='/privacy-policy'>Privacy Policy</a>
        </p>
        <p className='addtional-p'>
          <a className='additional-link' href='/terms-and-conditions'>Terms and Condition</a>
        </p>
      </div> */}
    </footer>
  )
}
