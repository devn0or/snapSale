import React from 'react'
import {Link} from 'react-router-dom'

const ProductGrid = ({products}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((product,i) => (
            <Link key={i} to={`product/${product.id}`} className='block'>
            <div className='bg-white p-4 rounded-lg'> 
                <div className="w-full h-96 mb-4">
                    <img src={product.image[0].img} alt=""  className='w-full h-full object-cover rounded-lg'/>
                </div>
                <h2 className="text-sm mb-2">{product.name}</h2>
                <p className="text-sm tracking-tighter font-medium text-gray-500"> ${product.price}</p>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default ProductGrid