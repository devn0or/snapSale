import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Form submitted', searchTerm);
      setIsOpen(false)
      setSearchTerm('')
    }
  return (
    <div className= {`flex items-center justify-center transition-all duration-300 ${isOpen ? 'absolute top-0 left-0 w-full h-26 z-10 bg-white' : 'w-auto'}  ` } >
        {isOpen ? 
        <form onSubmit ={handleSubmit} className=' relative flex items-center justify-center w-full'>
          <div className="relative w-1/2">
          <input type="text" value={searchTerm}  onChange = {(e)=> setSearchTerm(e.target.value)} placeholder='Search an item' className='bg-gray-100 w-full py-2 pl-4 pr-12 rounded-lg focus:outline-0 placeholder:text-gray-500 ' />

          <button type='submit' className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-800  '>
          <FaSearch onSubmit={() => setIsOpen(!isOpen)}  className=''/>
          </button>
          </div>
          <button type='button'  onClick={() => setIsOpen(!isOpen)}  className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-800 font-bold text-2xl  '>  &times;</button>

        </form> :
        <button onClick={() => setIsOpen(!isOpen)} className='-my-3'> <FaSearch className='font-thin  text-gray-600 hover:text-gray-800 cursor-pointer '/> </button> }
    </div>
  )
}

export default Searchbar