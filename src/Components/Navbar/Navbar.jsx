import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import { TbCoinBitcoinFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className='bg-sky-50 py-5'>
        <div className='body-container flex justify-between content-center items-center'>
            {/* Logo */}
            <div><img src={logo} alt="" /></div>
            {/* Desktop Menu */}
            <div className='hidden sm:block'>
                <a href="#" className='text-l text-stone-500 mx-5 hover:text-black'>Home</a>
                <a href="#" className='text-l text-stone-500 mx-5 hover:text-black'>Fixture</a>
                <a href="#" className='text-l text-stone-500 mx-5 hover:text-black'>Teams</a>
                <a href="#" className='text-l text-stone-500 mx-5 hover:text-black'>Schedules</a>
                <a href='#' className='border-gray-300 border-2 px-5 py-2 font-bold text-sm rounded-lg hover:text-black'>0 Coin </a>   
            </div>
        </div>
            {/* Mobile Menu */}
        <div className='block sm:hidden py-10 px-5 text-center'>
            <a href="#" className='text-l text-stone-500 mx-5 hover:text-black block py-2'>Home</a>
            <a href="#" className='text-l text-stone-500 mx-5 hover:text-black block py-2'>Fixture</a>
            <a href="#" className='text-l text-stone-500 mx-5 hover:text-black block py-2'>Teams</a>
            <a href="#" className='text-l text-stone-500 mx-5 hover:text-black block py-2'>Schedules</a>
         </div>
    </nav>
  )
}

export default Navbar