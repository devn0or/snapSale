import shirt from '../../assets/images/category/02.jpg' 
import camera from '../../assets/images/category/01.jpg' 

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const cart = {
    products: [
        {
            name: 'Camera',
            size: 'S',
            color: 'green',
            price: 154,
            image: camera
        },
        {
            name: 'Shoe',
            size: 'XL',
            color: 'Brown',
            price: 154,
            image: shirt
        },
    ],
    totalPrice: 195
}
const Checkout = () => {
  const navigate = useNavigate()  
  const [checkoutId, setCheckOutId] = useState(null)
  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    phone: '',
  })

  const handleCreateCheckout = (e) => {
    e.preventDefault()
    setCheckOutId(1234)
  }
   return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 tracking-tighter py-10 px-6 max-w-7xl mx-auto'>
      {/* Lef section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout} >
          <h3 className="text-lg mb-4 font-medium">Contact details</h3>
          <div className="mb-4">
            <label className='block text-gray-700'>Email</label>
            <input type="email" name="" value="usereample.com" className='w-full p-2 border rounded' disabled/> 
            <h3 className="text-lg mb-4 font-medium">Delivery</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="mb-4 text-gray-700">First name</label>
                <input type="text" className="w-full p-2 border rounded" required
                 value={shippingAddress.firstName} onChange={(e)=> setShippingAddress({...shippingAddress, firstName: e.target.value})}/>
              </div>
              <div>
                <label className="mb-4 text-gray-700">Last name</label>
                <input type="text" className="w-full p-2 border rounded" required
                 value={shippingAddress.lastName} onChange={(e)=> setShippingAddress({...shippingAddress, lastName: e.target.value})}/>
              </div>
            </div>

            <div className="mb-4">
                <label className="mb-4 text-gray-700">Address</label>
              <input type="text" className="w-full p-2 border rounded" required
                 value={shippingAddress.address} onChange={(e)=> setShippingAddress({...shippingAddress, address: e.target.value})}/>
             </div>

              <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="mb-4 text-gray-700">City</label>
                <input type="text" className="w-full p-2 border rounded" required
                 value={shippingAddress.city} onChange={(e)=> setShippingAddress({...shippingAddress, city: e.target.value})}/>
              </div>
              <div>
                <label className="mb-4 text-gray-700">Postal Code</label>
                <input type="text" className="w-full p-2 border rounded" required
                 value={shippingAddress.postalcode} onChange={(e)=> setShippingAddress({...shippingAddress, postalcode: e.target.value})}/>
              </div>
            </div>

               <div className="mb-4">
                <label className="mb-4 text-gray-700">Country</label>
              <input type="text" className="w-full p-2 border rounded" required
                 value={shippingAddress.country} onChange={(e)=> setShippingAddress({...shippingAddress, country: e.target.value})}/>
             </div>   <div className="mb-4">
                <label className="mb-4 text-gray-700">Phone</label>
              <input type="text" className="w-full p-2 border rounded" required
                 value={shippingAddress.phone} onChange={(e)=> setShippingAddress({...shippingAddress, phone: e.target.value})}/>
             </div>
             <div className="mt-6">
              {!checkoutId ? (
                <button type='submit'  className='w-full bg-black text-white py-3 rounded' >Continue to payment</button>
              ) : ( <div> 
                    <h3 className='text-lg mb-4'> Pay with Paypal</h3>
                </div> ) }
             </div>
          </div>

        </form>
      </div>
      {/* Right side */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, i) => (
            <div key={i} className='flex items-start justify-between py-2 border-b'>
              <div className="flex items-start">
                <img src={product.image} className="w-20 h-24 object-cover mr-4" />
                <div>
                  <h3 className="text md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
                <p className="text-xl">${product.price?.toLocaleString()}</p>

            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-4 text-lg">
          <p>Subtotal:</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center  text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center  text-lg mt-4 pt-4 border-t">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Checkout