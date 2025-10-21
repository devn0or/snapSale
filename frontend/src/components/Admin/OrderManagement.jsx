import React from 'react'

const OrderManagement = () => {

    const orders = [
        {
            _id: 2345223,
            user: {
                name: 'mathew rose'
            },
            price: 210,
            status: 'processing'
        }
    ]

    const handleStatusChange=(orderId, status) => {

    }
  return (
    <div className='max-w-7xl mx-auto p-6'>
        <h2 className="text-2xl font-semibold mb-6">Order Management</h2>
        <div className="overflow-x-auto shadow-ms sm:shadow-lg">
            <table className="min-w-full text-left text-gray-500">
                <thead className="bg-gray-100 text xs uppercase text-gray-700">
                    <tr>
                        <th className="px-4 py2">Order Id</th>
                        <th className="px-4 py2">Customer</th>
                        <th className="px-4 py2">Total Price</th>
                        <th className="px-4 py2">Status</th>
                        <th className="px-4 py2">Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {orders.length > 0 ? ( orders.map((order) => (
                        <tr key={order._id} className='border-b hover:bg-gray-50 cursor-pointer'>
                            <td className='px-4 py-4 font-medium text-gray-900'>#{order._id}</td>
                            <td className="p-4">{order.user.name}</td>
                            <td className="p-4"> ${order.price}</td>
                            <td className="p-4">
                                <select value={order.status}  onChange={(e)=> handleStatusChange(order._id, e.target.value)} 
                                className='bg-gray-50 border border-gray-300 text-gray-900 tex-sm rounded-lg focus:ring-blue-500 block p-2.5'>

                                    <option value='processing'>Processing</option>
                                    <option value='Shipped'>Shipped</option>
                                    <option value='Delivered'>Delivered</option>
                                    <option value='Cancelled'>Cancelled</option>
                                </select>
                            </td>
                            <td className="p-4">
                                <button onClick={()=> handleStatusChange(order._id, delivered)} className='bg-green text-white px-4 py-2 rounded hover:bg-green-600' >Mark As Delivered</button>
                            </td>
                       </tr>
                    ))) : ( <tr> <td  colSpan={5} className='p-4 text-center text-gray-500'> No orders yet! </td> </tr>)}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OrderManagement