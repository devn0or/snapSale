import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from '../assets/images/category/06.jpg'
const Login = () => {
    const [email, setEmail ] =  useState()
    const [password, setPassword ] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ email, password});
        
    } 
  return (
    <div className='w-full  flex flex-col md:flex-row justify-between items-start px-8 md:px-12'>
        <form  onSubmit={handleSubmit}  className="w-full max-w-md bg-white mt-16 p-8 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
                <h2 className="text-xl font-medium">snapSale</h2>

            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Hey there!👋</h2>
            <p className="text-center mb-6">Enter your username and password to login</p>
            <div className="mb-6">
                <label  className="text-sm font-semibold mb-2 block">Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value) } className='w-full p-2 border rounded' placeholder='Enter your email address' />
            </div>
            <div className="mb-6">
                <label  className="text-sm font-semibold mb-2 block">Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value) } className='w-full p-2 border rounded' placeholder='Enter your password' />
            </div>
            <button type='submit' className="bg-black text-white font-semibold w-full p-2 rounded"> Login</button>
            <div className="text-center mt-6 text-sm"> Don't have an account? <Link to= '/register' className='text-blue-500'>Register</Link> </div>
        </form>

        <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col items-center justify-center">
            <img src={login} alt="" className='h-[750px] w-full object-cover ' />
        </div>
        </div>
    </div>
  )
}

export default Login