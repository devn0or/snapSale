import React from 'react'
import { FaFacebook, FaGithub, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t border-gray-300 py-12'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
      <div>
        <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
        <p className="text-gray-500 mb-4"> Be the first to hear about our new product, exclusive and online offers. </p>
        <p className='text-medium text-sm text-gray-600'>Sign up and get 10% off on your first offer.</p>
        <form className="flex mt-2">
          <input type="email" name="" placeholder= 'Enter Email' className='border-t border-l border-b border-gray-500 rounded-l-md focused:outline-none focus:ring-2 focus:ring-gray-500 transition-all p-3 w-full  text-sm' required />
          <button className='bg-black px-6 md:px-2 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all text-white'>Subscribe</button>
        </form>
      </div>

      <div>
        <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="flex flex-col space-y-2 text-gray-600">
            <Link to='#' className='hover:text-black transition-all'>Mens's Top Wear</Link>
            <Link to='#' className='hover:text-black transition-all'>Womens's Top Wear</Link>
            <Link to='#' className='hover:text-black transition-all'>Mens's Bottom Wear</Link>
            <Link to='#' className='hover:text-black transition-all'>Womens's Bottom Wear</Link>

          </ul>
      </div>

      <div>
        <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="flex flex-col space-y-2 text-gray-600">
            <Link to='#' className='hover:text-black transition-all'>Contact Us</Link>
            <Link to='#' className='hover:text-black transition-all'>About Us</Link>
            <Link to='#' className='hover:text-black transition-all'> FAQs</Link>
            <Link to='#' className='hover:text-black transition-all'>Feautures</Link>

          </ul>
      </div>

      <div>
        <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com" target='_blank' rel= 'noopenner noreferrer' className='hover:text-orange-500'> <FaFacebook/> </a>
          <a href="https://www.twitter.com" target='_blank' rel= 'noopenner noreferrer' className='hover:text-orange-500'> <FaTwitter/> </a>
          <a href="https://www.Github.com" target='_blank' rel= 'noopenner noreferrer' className='hover:text-orange-500'> <FaGithub/> </a>
        </div>
        <p className='text-gray-500 mt-2'>Call Us</p>
        <p><FaPhoneAlt className='inline-block mr-2'/> +234-814 623 7437 </p>
      </div>

    </div>

    <div className="container mx-auto px-4 mt-12 pt-6 border-t border-gray-300">
      <p className='text-sm tracking-tighter text-gray-500 text-center'> &copy; 2025, devn0or.  All Rights Reserved. </p>
    </div>
    </footer>
  )
}

export default Footer