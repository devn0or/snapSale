import React, { useState } from "react";
import CartContent from "../Cart/CartContent";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({openCart, setOpenCart}) => {
 const navigate = useNavigate()
 const handleCartCheckout = () => {
    navigate('checkout')
    setOpenCart(!openCart)
 }
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        openCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4" >
        <button  onClick = {()=> setOpenCart(!openCart)} className="text-2xl font-bold text-gray-600 cursor-pointer"> &times;</button>
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl mb-4 font-semibold">Your Cart</h2>
        {/* Component for cart items  */}
        <CartContent/>
      </div>

      <div className="sticky bottom-0 p-4 bg-white"> 
        <button  onClick={handleCartCheckout} className="bg-black text-white font-bold text-center py-3 rounded-lg w-full hover:bg-gray-800">Checkout</button>
        <p className="font-sm tracking-tighter text-center text-gray-500 mt-2 ">Shipping, taxes & discount codes calculated at checkout. </p>
      </div>

    </div>
  );
};

export default CartDrawer;
