import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='border-b border-gray-300' >
        {/* Topbar */}
        <Topbar/>
        {/* navbar */}
        <Navbar/>
        {/* Cartdrawer */}
    </div>
  )
}

export default Header