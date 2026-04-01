import React from 'react';

const Workflow = () => {
    return (
        <div className="max-w-[1200px] mx-auto py-28 px-10 lg:px-0 space-y-10">
            <div className='text-center space-y-4'>
                <h3 className='text-5xl font-extrabold text-white'>Ready to Transform Your Workflow?</h3>
                <p className='text-white/90'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>

            <div className='space-y-4 text-center'>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button className='bg-white
                     rounded-full p-4 font-bold cursor-pointer'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>

                    <button className="border border-white text-white py-4 px-9 rounded-full cursor-pointer">View Pricing</button>
                </div>
                <p className='text-white/80'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;