import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className='navbar'>
        <div className='nav01'>
        <a href=''>LOGO</a>
        </div>
        <div className='nav02'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Contact</a>
        </div>
        <div className='nav03'>
        <a href=''>FB</a>
        <a href=''>TW</a>
        <a href=''>INS</a>
        </div>
    </div>
  )
}

export default Header