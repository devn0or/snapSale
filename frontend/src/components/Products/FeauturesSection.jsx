import React from 'react'
import { FaArrowAltCircleDown, FaCreditCard, FaShoppingBag } from 'react-icons/fa'

const FeauturesSection = () => {
  return (
    <section className="py-16 px-3 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 1 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <FaShoppingBag className='text-xl'/>
                </div>
                <h2 className="tracking-tighter mb-2 capitalize">Free International Shipping</h2>
                <p className="tracking-tighter text-sm text-gray-600">On all orders above $100.00</p>
            </div>
                {/* 2 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <FaArrowAltCircleDown className='text-xl'/>
                </div>
                <h2 className="tracking-tighter mb-2 capitalize">45 Days return</h2>
                <p className="tracking-tighter text-sm text-gray-600">Money back guarantee</p>
            </div>
                {/* 3 */}
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <FaCreditCard className='text-xl'/>
                </div>
                <h2 className="tracking-tighter mb-2 capitalize">Secure checkout</h2>
                <p className="tracking-tighter text-sm text-gray-600"> 100% secure checkout process</p>
            </div>

        </div>
    </section>
  )
}

export default FeauturesSection