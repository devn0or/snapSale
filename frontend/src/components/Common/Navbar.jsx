import React, { useState } from 'react'
import { FaBars, FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { Link, Links } from 'react-router-dom'
import Searchbar from './Searchbar'
import CartDrawer from '../Layout/CartDrawer'

const Navbar = () => {
   const [openCart, setOpenCart] = useState(false);
   const [toggleMobileCart, setToggleMobileCart] = useState(false)
  return (
   <>
   <nav className='container mx-auto flex items-center justify-between px-4 md:px-16 lg:px-24 py-4'>
    <div>
        <Link to ='/' className='text-2xl font-medium'> snapSale</Link>
    </div>
       <div className='hidden md:flex items-center space-x-4'>
        <Link to='/collections/all' className='text-gray-700 hover:text-black text-sm font-medium'>MEN</Link>
        <Link className='text-gray-700 hover:text-black text-sm font-medium'>WOMEN</Link>
        <Link className='text-gray-700 hover:text-black text-sm font-medium'>TOPWEAR</Link>
        <Link className='text-gray-700 hover:text-black text-sm font-medium'>BOTTOMWEAR</Link>
       </div>
       <div className='flex items-center space-x-4'>
        <Link to={'/admin'} className='bg-black text-white rounded text-sm px-2'>Admin</Link>
        <Link to={'/profile'} className='hover:text-black'> <FaUserAlt className='h-4 w-4 text-gray-600'/></Link>
        <button onClick = {()=> setOpenCart(!openCart)}  className='hover:text-black relative'>
            < FaShoppingCart  className='h-4 w-5 text-gray-700'/>
            <span className='absolute -top-3 -rigt-1 px-1.5  rounded-full bg-orange-500 text-white'> 2  </span>
        </button>
          {/* Search */}
          <Searchbar/>
          <button onClick = {()=> setToggleMobileCart(!toggleMobileCart)} className="md:hidden">
            <FaBars className='h-5 w-5 text-gray-700'/>
          </button>
       </div> 
   </nav>
       <CartDrawer openCart={openCart}  setOpenCart={setOpenCart}/>

       {/* Mobile Cart */}
         <div
      className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        toggleMobileCart ? "translate-x-0" : "-translate-x-full"
      }`}
    >
       <div className="flex justify-end p-4" >
        <button  onClick = {()=> setToggleMobileCart(!toggleMobileCart)} className="text-2xl font-bold text-gray-600 cursor-pointer"> &times;</button>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <nav className='space-y-4'>
          <Link to='#' onClick={()=> setToggleMobileCart(!toggleMobileCart)} className='text-gray-600 hover:text-black block'>Men</Link>
          <Link to='#' onClick={()=> setToggleMobileCart(!toggleMobileCart)} className='text-gray-600 hover:text-black block'>Women</Link>
          <Link to='#' onClick={()=> setToggleMobileCart(!toggleMobileCart)} className='text-gray-600 hover:text-black block'>Top Wear</Link>
          <Link to='#' onClick={()=> setToggleMobileCart(!toggleMobileCart)} className='text-gray-600 hover:text-black block'>Bottom Wear</Link>
        </nav>
      </div>
    </div>
   </>
  )
}

export default Navbar