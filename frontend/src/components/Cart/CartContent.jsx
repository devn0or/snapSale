import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const CartContent = () => {
    const cartProducts = [
        {
           id : 1,
           name: 'T-Shirt',
           size: 'M',
           color: 'green',
           quantity: 2,
           price: 122,
           image: 'https://picsum.photos/200?random=1'
        },
        {
           id : 2,
           name: 'Pants',
           size: 'M',
           color: 'Red',
           quantity: 15,
           price: 244,
           image: 'https://picsum.photos/200?random=2'
        },
    ]
  return (
    <div>
        {cartProducts.map((product, i) => (
            <div key={i} className="flex items-start justify-between  py-4 border-b">
                <div className="flex items-start">
                    <img src={product.image} alt="" className='w-20 h-20 mr-4 rounded object-cover' />
                <div>
                    <h3>{product.name}</h3>
                    <p className="text-sm text-gray-500">Size: {product.size} | color: {product.color}</p>
                    <div className="flex items center mt-2">
                        <button className="border cursor-pointer rounded px-2 py-1 text xl font medium">-</button>
                        <span className='p-1 font-medium'> {product.quantity} </span>
                        <button className="border cursor-pointer rounded px-2 py-1 text xl font medium">+</button>
                    </div>
                 </div>
                </div>
                <div>
                <p>${product.price.toLocaleString()}</p>
                <button className='text-red-600 mt-2 mx-2'><FaTrashAlt/> </button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CartContent