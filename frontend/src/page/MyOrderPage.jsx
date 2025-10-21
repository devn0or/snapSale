import React, { useEffect, useState } from 'react'
import shirt from '../assets/images/category/02.jpg' 
import camera from '../assets/images/category/01.jpg' 
import { useNavigate } from 'react-router-dom'
const MyOrderPage = () => {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: 1,
                    createdAt: new Date(),
                    shippingAddress: { city: 'Minna' , country: 'Nigeria'},
                    orderItems: [
                        { name: 'product 1',
                          img:   shirt
                        }
                    ],
                    totaPrice: 100,
                    isPaid:  true

                },
                {
                    _id: 2,
                    createdAt: new Date(),
                    shippingAddress: { city: 'Minna' , country: 'Nigeria'},
                    orderItems: [
                        { name: 'product 3',
                          img:   camera
                        }
                    ],
                    totaPrice: '200',
                    isPaid:  true

                },

            ]
            setOrders(mockOrders)
            
        }, 1000)
    },[])

    const handleRowClick = (orderId) => {
        navigate(`/order/${orderId}`)
    }

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className="text-xl md:text-2xl font-bold mb-6"> My Orders</h2>
        <div className="relative shadow-md sm:rounded-lg overflow-hidden">
            <table className='min-w-full text-left text-gray-500'>
                <thead className="bg-gray-100 text-sm text-gray-700 uppercase">
                    <tr>
                        <th className="py-2 px-4 sm:py-3">Image</th>
                        <th className="py-2 px-4 sm:py-3">Order ID </th>
                        <th className="py-2 px-4 sm:py-3">Created </th>
                        <th className="py-2 px-4 sm:py-3">Shipping Address </th>
                        <th className="py-2 px-4 sm:py-3">Items </th>
                        <th className="py-2 px-4 sm:py-3">Price </th>
                        <th className="py-2 px-4 sm:py-3">Status </th>
                    </tr>
                </thead>
                <tbody>
                     {orders ? ( 
                        orders.map((order) => (
                        <tr key={order._id}  onClick={()=> handleRowClick(order._id)} className='border-b hover:border-gray-50 cursor-pointer'>
                            <td className='py- px-2 sm:py-4 sm:px-4'>
                                <img src={order.orderItems[0].img} alt={order.orderItems[0].name}  className='w-10 h-10  sm:w-12 sm:h-12 rounded-lg object-cover'/>
                            </td>
                            <td className='py- px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap' > {order._id}</td>
                            <td className="py- px-2 sm:py-4 sm:px-4 ">
                                {new Date( order.createdAt).toLocaleDateString()}
                                {new Date( order.createdAt).toLocaleTimeString()}
                            </td>
                            <td className="py- px-2 sm:py-4 sm:px-4 "> 
                                {order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` : 'N/A' }
                            </td>
                            <td className="py- px-2 sm:py-4 sm:px-4 "> {order.orderItems.length}</td>
                            <td className="py- px-2 sm:py-4 sm:px-4 "> $ {order.totalPrice}</td>
                            <td className="py- px-2 sm:py-4 sm:px-4 ">
                                <span className={`${order.isPaid? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}> {order.isPaid ? 'paid' : "pending.." }</span>
                            </td>
                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan={7} className='px-4 py-4 text-gray-500 text-center'> No orders yet!</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MyOrderPage