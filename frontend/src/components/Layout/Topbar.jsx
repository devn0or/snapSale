import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Topbar = () => {
  return (
    <div className='bg-orange-500 text-white'>
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
            <div className='hidden md:flex items-center space-x-4'>
                <a href="#" className='hover:text-gray-500'>  <FaGithub/>  </a>
                <a href="#" className='hover:text-gray-500'>  <FaTwitter/>  </a>
                <a href="#" className='hover:text-gray-500'>  <FaLinkedin/>  </a>
            </div>
            <div className='text-sm text-center flex-grow'> 
                <span>We ship worldwide - Fast & Reliable</span>
            </div>
            <div className='text-sm '> 
                <a href="#" className='hover:text-gray-500 md:block hidden'>  (+234) 81456788 </a>
            </div>
        </div>
    </div>
  )
}

export default Topbar