import React from 'react'
import "../Navbar/Navbar.css"

export default function Navbar() {
  return (
    <>
      <nav>
        <div className='container-navbar'>
          <div className='logo'>
            <img src="/Logo.svg" alt="logo" />
          </div>
          <div className='container-desktop-menu'>
              <ul>
                <li>HOME</li>
                <li><strong>01</strong> DESTINATION</li>
                <li><strong>02</strong> CREW</li>
                <li><strong>03</strong> TECHNOLOGY</li>
              </ul>
          </div>
          <div className='container-burger-menu'>
            <img src="/menu.svg" alt="burger-menu" />
          </div>
        </div>
      </nav>
    </>
  )
}
