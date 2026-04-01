import React from 'react';
import Package from '../assets/package.png';
import User from '../assets/user.png';
import Rocket from '../assets/rocket.png';

const Step = () => {
    return (
        <div className='space-y-10 px-10 lg:px-0'>
            <div className='text-center space-y-4'>
                <h3 className='text-5xl font-extrabold text-[#101727]'>Get Started in 3 Steps</h3>
                <p className='text-zinc-600'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 p-16 lg:p-0'>
                <div className='p-6 border rounded-lg border-zinc-100 shadow mb-6 hover:bg-blue-400 hover:scale-105 duration-300  cursor-pointer'>
                    <div className='flex justify-end mb-7'>
                        <span className='p-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[100%] text-white text-sm '>01</span>
                    </div>
                    <div className='text-center space-y-4 mb-20'>
                        <div className='flex justify-center'><img className='bg-[#E1E7FF] rounded-full  p-6' src={User} alt="" /></div>
                        <h3 className='font-bold text-2xl text-[#101727]'>Create Account</h3>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className='p-6 border rounded-lg border-zinc-100 shadow mb-6 hover:bg-blue-400 hover:scale-105 duration-300 cursor-pointer'>
                    <div className='flex justify-end mb-7'>
                        <span className='p-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[100%] text-white text-sm '>02</span>
                    </div>
                    <div className='text-center space-y-4 mb-20'>
                        <div className='flex justify-center'><img className='bg-[#E1E7FF] rounded-full  p-6' src={Package} alt="" /></div>
                        <h3 className='font-bold text-2xl text-[#101727]'>Choose Products</h3>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className='p-6 border rounded-lg border-zinc-100 shadow mb-6 hover:bg-blue-400 hover:scale-105 duration-300 cursor-pointer'>
                    <div className='flex justify-end mb-7'>
                        <span className='p-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[100%] text-white text-sm '>03</span>
                    </div>
                    <div className='text-center space-y-4 mb-20'>
                        <div className='flex justify-center'><img className='bg-[#E1E7FF] rounded-full p-6' src={Rocket} alt="" /></div>
                        <h3 className='font-bold text-2xl text-[#101727]'>Start Creating</h3>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step;