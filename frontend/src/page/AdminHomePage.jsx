import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
    const orders = [
        {
           _id: 6543456,
           user: {
            name: 'zoey max',
           }  ,
           totalPrice: 212,
           status: 'processing'
        }
    ]
  return (
    <div className='max-w-8xl mx-auto p-6'>
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold">Revenue</h2>
                <p className="text-2xl">$230000</p>
            </div>
            <div className="p-4 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold">Total Orders</h2>
                <p className="text-2xl"> 344</p>
                <Link to={'/admin/orders'} className='text-blue-500 hover:underline'>Manage Orders</Link>
            </div>
            <div className="p-4 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold">Total Products</h2>
                <p className="text-2xl"> 2300</p>
                <Link to={'/admin/products'} className='text-blue-500 hover:underline'>Manage Products</Link>

            </div>
        </div>

        <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-sm text-gray-700 text-left">
                        <tr>
                            <th className="px-4 py-3">Order Id</th>
                            <th className="px-4 py-3">User</th>
                            <th className="px-4 py-3">Total</th>
                            <th className="px-4 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
        
                        {orders.length > 0 ? (
                            orders.map((order) => (
                             <tr key={order._id}  className='border-b hover:bg-gray-50 cursor-pointer' >
                                <td className="p-4"> {order._id}</td>
                                <td className="p-4">{order.user.name}</td>
                                <td className="p-4">{order.totalPrice}</td>
                                <td className="p-4">{order.status}</td>
                              </tr>
                            
                        ) 
                            ) ) :  (
                            <tr>
                                <td colSpan={4} className='text-gray-500 text-center p-4' > No recent orders found!</td>
                            </tr> )
                               }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AdminHomePage