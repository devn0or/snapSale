import React, { useState } from 'react'
import seller1 from '../../assets/images/instructor/12.jpg'
import seller2 from '../../assets/images/instructor/14.jpg'
const EditProduct = () => {
    const [productsData, setProductsData] = useState({
        name: '',
        desc: '',
        price: 0,
        countInStock: 0,
        sku: '',
        category: '',
        brand: '',
        sizes: [],
        colors: [],
        collections: '',
        material: '',
        gender: '',
        images: [
            {
                url: seller1
            },
            {
                url: seller2
            }
        ]
    })

    const  handleImageUpload = async (e) => {
       const file = e.target.files[0]
       console.log(file);
       
    }

    const handleChange = (e) => {
      const {name, value} = e.target 
      setProductsData((prevData) => ({...prevData, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(productsData);
        
    }
  return (
    <div className='max-w-5xl mx-auto p-6 shadow-md rounded-md '> 
    <form  onSubmit={handleSubmit}>
    <div className="mb-6">
        <label  className="block font-semibold mb-2">Product name</label>
        <input type="text" name='name' value={productsData.name}  onChange={handleChange} className='w-full rounded-md border border-gray-300 p-2' required />
    </div>
    <div className="mb-6">
        <label  className="block font-semibold mb-2">Description</label>
        <textarea  rows={4} name="desc" value={productsData.desc}  onChange={handleChange}  className='w-full rounded-md border border-gray-300 p-2' required />
    </div>
    <div className="mb-6">
        <label  className="block font-semibold mb-2">Price</label>
        <input type="number" name='price' value={productsData.price}  onChange={handleChange} className='w-full rounded-md border border-gray-300 p-2' required />
    </div>
    <div className="mb-6">
        <label  className="block font-semibold mb-2">Count In Stock</label>
        <input type="number" name='countInStock' value={productsData.countInStock}  onChange={handleChange} className='w-full rounded-md border border-gray-300 p-2' required />
    </div>
    <div className="mb-6">
        <label  className="block font-semibold mb-2">SKU</label>
        <input type="text" name='sku' value={productsData.sku}  onChange={handleChange} className='w-full rounded-md border border-gray-300 p-2' required />
    </div>
    <div className="mb-6">
        <label  className="block font-semibold mb-2">Sizes (comma-seperated)</label>
        <input type="text" name='sizes' value={productsData.sizes.join(', ')}
        onChange={(e) => setProductsData({...productsData , sizes:e.target.value.split(',').map((size) => size.trim())})} className='w-full rounded-md border border-gray-300 p-2' required />
    </div>
    <div className="mb-6">
        <label  className="block font-semibold mb-2">Colors (comma-seperated)</label>
        <input type="text" name='colors' value={productsData.colors.join(', ')}
        onChange={(e) => setProductsData({...productsData , colors:e.target.value.split(',').map((color) => color.trim())})} className='w-full rounded-md border border-gray-300 p-2' required />
    </div>

     <div className="mb-6">
        <label  className="block font-semibold mb-2 border">Upload Image</label>
        <input type="file" onChange={handleImageUpload} />

        <div className="flex gap-4 mt-4">
            {productsData.images.map((image, i) => (
                <div key={i} >
                    <img src={image.url} alt="" className='w-20 h-20 object-cover rounded-md shadow-md' />
               </div>
            ))}
        </div>

     </div>
     <button type="submit" className='bg-green-500 text-white w-full rounded hover:bg-green-600 py-2 transition-colors'> Update Product</button>
    </form>
    </div>
  )
}

export default EditProduct