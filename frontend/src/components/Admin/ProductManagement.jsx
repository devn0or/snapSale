import React from 'react'
import { Link } from 'react-router-dom'

const ProductManagement = () => {
    const products = [
        {
            _id: 3456312,
            name: 'Sweat',
            price: 123,
            sku: '02458765'
        }
    ]

    const handleDelete = (id) => {
        if(FaWindows.confirm('Are u sure u want to delet the product?')) {
            console.log(`product ${id} deleted`);
            
        }
    }
  return (
    <div className='max-w-7xl mx-auto p-6'>
        <h2 className="text-2xl font-bold mb-6">Product Management</h2>
        <div className="overflow-x-auto shadow-md sm:shadow-lg">
          <table className="min-w-full text-gray-500-text-left">
            <thead className="bg-gray-100 texe-xs uppercase text-gray-700">
                <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">SKU</th>
                    <th className="px-4 py-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 ? (products.map((product) => (
                    <tr key={product._id} className='border-b hover:bg-gray-50 cursor-pointer text-center'>
                        <td className='p-4 font-medium text-gray-900 whitespace-nowrap'> {product.name}</td>
                        <td className="p-4"> ${product.price}</td>
                        <td className="p-4"> {product.sku} </td>
                        <td className="p-4">
                            <Link to={`/admin/products/${product._id}/edit`} 
                            className='bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2'> Edit </Link>
                            <button onClick={() => handleDelete(product.id)} className='bg-red-500 text-white px-2 py-1 roundedhover:bg-red-600' >Delete</button>
                        </td>
                    </tr>
                ))) : ( <tr> <td  colSpan={4} className="text-center p-4 text-gray-600">No Products Found!</td> </tr> ) }
            </tbody>
          </table>
        </div>

    </div>
  )
}

export default ProductManagement