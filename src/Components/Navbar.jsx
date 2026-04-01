import React from 'react';
import cartIcon from '../assets/cart.png';
const Navbar = ({ carts }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className='font-semibold text-[#101727] cursor-pointer'>Products</a></li>
                        <li><a className='font-semibold text-[#101727] cursor-pointer'>Features</a></li>
                        <li><a className='font-semibold text-[#101727] cursor-pointer'>Pricing</a></li>
                        <li><a className='font-semibold text-[#101727] cursor-pointer'>Testimonials</a></li>
                        <li><a className='font-semibold text-[#101727] cursor-pointer'>FAQ</a></li>
                    </ul>
                </div>
                <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-3xl'>DigiTools</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='font-semibold text-[#101727] cursor-pointer'>Products</a></li>
                    <li><a className='font-semibold text-[#101727] cursor-pointer'>Features</a></li>
                    <li><a className='font-semibold text-[#101727] cursor-pointer'>Pricing</a></li>
                    <li><a className='font-semibold text-[#101727] cursor-pointer'>Testimonials</a></li>
                    <li><a className='font-semibold text-[#101727] cursor-pointer'>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div className='flex gap-2'>
                    <div className='relative'>
                        {
                        carts.length > 0 && <span className='bg-red-600 text-white rounded-[50%] h-4 w-4 flex justify-center items-center text-[9px] absolute left-4 -top-1'>{carts.length}</span>
                        }
                        <img className='text-[#101727] w-7 h-7 cursor-pointer' src={cartIcon} alt="" />
                    </div>
                    <p className='font-semibold text-[#101727] cursor-pointer'>Login</p>
                </div>
                <a className="btn btn-primary rounded-full cursor-pointer">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;