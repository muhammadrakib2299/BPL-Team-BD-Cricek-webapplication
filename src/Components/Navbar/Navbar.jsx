import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import { TbCoinBitcoinFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className='bg-sky-50 py-5'>
        <div className='body-container flex justify-around content-center items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <a href="#" className='text-l text-stone-500 mx-5 hover:text-black'>Home</a>
                <a href="#" className='text-l text-stone-500 mx-5 hover:text-black'>Fixture</a>
                <a href="#" className='text-l text-stone-500 mx-5 hover:text-black'>Teams</a>
                <a href="#" className='text-l text-stone-500 mx-5 hover:text-black'>Schedules</a>
                <button className='border-gray-300 border-2 px-5 py-2 font-bold text-sm rounded-lg hover:text-black'>0 Coin </button>   
            </div>
        </div>
    </div>
  )
}

export default Navbar