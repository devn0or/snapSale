import { Link } from 'react-router-dom'
import img from '../assets/images/category/03.jpg'
import { useState } from 'react'


const Register = () => {
    const [email, setEmail ] =  useState()
    const [name, setName ] =  useState()
    const [password, setPassword ] = useState()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({name, email, password});
        
    } 




  return (
    <div className='w-full  flex flex-col md:flex-row justify-between items-start px-8 md:px-12'>
        <form  onSubmit={handleSubmit} className="w-full max-w-md bg-white mt-16 p-8 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
                <h2 className="text-xl font-medium">snapSale</h2>

            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Hey there!👋</h2>
            <p className="text-center mb-6">Enter your your nformation to sign-up</p>
            <div className="mb-6">
                <label  className="text-sm font-semibold mb-2 block">Name</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value) } className='w-full p-2 border rounded' placeholder='Enter your name' />
            </div>
            <div className="mb-6">
                <label  className="text-sm font-semibold mb-2 block">Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value) } className='w-full p-2 border rounded' placeholder='Enter email address' />
            </div>
            <div className="mb-6">
                <label  className="text-sm font-semibold mb-2 block">Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value) } className='w-full p-2 border rounded' placeholder='Enter your password' />
            </div>
            <button type='submit'  className="bg-black text-white font-semibold w-full p-2 rounded"> Signup</button>
            <div className="text-center mt-6 text-sm"> Have an account already? <Link to= '/login' className='text-blue-500'>Login</Link> </div>
        </form>

        <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col items-center justify-center">
            <img src={img} alt="" className='h-[750px] w-full object-cover ' />
        </div>
        </div>
    </div>
  )
}

export default Register