import React, { useState } from 'react'

const UserManagement = () => {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const users = [
        {
            _id: 1,
            name: 'John Doe',
            email: 'john@gmail.com',
            role: 'admin'
        }
    ]
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'customer'  //Deafault


    })

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
      
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'customer'
      })
    }

    const handleRoleChange = (userId, newRole) => {
        console.log(userId, newRole);
        
    }

    const handleDeleteUser = (userId) => {
        if(window.confirm('Are you sure you want to delete user?')) {
            console.log(`contact number ${userId} has been deleted`);
            
        }
    }
  return (
    <div className='max-w-7xl mx-auto p-6'>
        <h2 className="text-2xl fint-bold mb-6">User Management</h2>
        {/* Add user form */}
        <div  className='p- 6 rounded-lg m-4'>
            <h2 className="text-lg mb-4 font-bold">Add New User</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label  className="block text-gray-700"> Name</label>
                <input type="text" name='name' value={formData.name} onChange={handleChange}  className='w-full p-2 border rounded ' required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-700"> Email</label>
                <input type="email" name='email' value={formData.email} onChange={handleChange}  className='w-full p-2 border rounded ' required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-700"> Password</label>
                <input type="password" name='password' value={formData.password} onChange={handleChange}  className='w-full p-2 border rounded ' required />
            </div>
            <div className="mb-4">
                <label  className="block text-gray-700"> Role</label>
                <select name="role" value={formData.role} onChange={handleChange} className='w-full border rounded'>
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <button type="submit"  className= 'bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600' >Add User</button>
            </form>
        </div>


        {/* User management */}
        <div className="overflow-x-auto shadow-md lg:shadow-lg">
            <table className="min-w-full text-lg text-gray-500">
                <thead className="text-xs bg-gray-100 text-gray-700 upppercase">
                    <tr>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Role</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                       < tr key={user._id}  className=' border-b hover:bg-gray-50'>
                         <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
                            {user.name}
                         </td>
                         <td className="p-4">{user.email}</td>
                         <td className="p-4">
                            <select value={user.role} onChange={(e) => handleRoleChange(user._id, e.target.value)} className='p-2 border rounded' >
                                <option value='customer'> Customer</option>
                                <option value='admin'> Admin</option>
                            </select>
                         </td>
                         <td className="p-4"> 
                            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            onClick={()=> handleDeleteUser(user._id)}>Delete</button> </td>
                       </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserManagement 