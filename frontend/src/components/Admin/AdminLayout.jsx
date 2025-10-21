import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    const [isSideBarOn, setIsSideBarOn] = useState(false)

    const toggleSideBar = () => {
        setIsSideBarOn(!isSideBarOn)
        
    }
  return (
    <div className='relative min-h-screen flex flex-col sm:flex-row'>
         {/* mobile button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-10">
        <button onClick={toggleSideBar}> <FaBars size={24}/>    </button>
             <h2 className="ml-4 text-xl font-medium">Admin Dashboard</h2>
     </div>   
     {/* mobile overlay */}
     {isSideBarOn && (<div className='fixed inset-0 bg-black opacity-40 z-40 md:hidden' onClick={toggleSideBar}> </div>) }
     {/* sidebar */}
     <div className={`absolute left-0 top-0 bg-gray-900 w-64 min-h-screen text-black md:relative transform ${isSideBarOn ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 md:translate-x-0 md:static md:block z-50`}>
      {/* */}
      
      <AdminSidebar />
     </div>

     <div className="flex-grow p-6 overflow-auto">
      <Outlet/>
     </div>
    </div>
  )
}

export default AdminLayout