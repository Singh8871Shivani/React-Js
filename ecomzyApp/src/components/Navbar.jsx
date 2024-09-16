import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import image from '../images/logo.png'
import { useSelector } from 'react-redux';


function Navbar() {
   const {cart} = useSelector( (state) => state );

  return (
    <div className='w-full max-w-6xl flex justify-between items-center mx-auto p-3'>
       <NavLink to="/">
          <div>
             <img src={image} className="lg:h-14 md:h-10 h-8" />
          </div>
       </NavLink>

       <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">

          <NavLink to="/" className='text-white'>
             <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
             <div className='relative text-white'>
               <FaShoppingCart className='text-2xl'/>
               {
                  cart.length > 0 &&
                  <span className='absolute -top-2 -right-3 bg-green-600 text-xs w-5 h-5
                  flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>
               }
             </div>
          </NavLink>

       </div>
    </div>
  )
}

export default Navbar