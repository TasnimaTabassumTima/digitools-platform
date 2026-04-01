import React from 'react';

const Pricing = () => {
    return (
        <div className='space-y-10'>
            <div className='text-center space-y-4'>
                <h3 className='text-5xl font-extrabold text-[#101727]'>Simple, Transparent Pricing</h3>
                <p className='text-zinc-600'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 p-16 lg:p-0'>
                <div className='p-6 border rounded-lg border-zinc-100 shadow mb-6 cursor-pointer space-y-6'>
                    <div className='space-y-2'>
                        <h3 className='font-bold text-2xl text-[#101727]'>Starter</h3>
                        <p className='text-[#627382] leading-5'>Perfect for getting started</p>
                    </div>
                    <div>
                        <h3 className='font-bold text-4xl'>$0<span className='text-xl text-[#627382]'>/Month</span></h3>
                    </div>
                    <div className='space-y-2 pb-12'>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>Access to 10 free tools</p>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>Basic templates</p>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>Community support</p>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>1 project per month</p>
                    </div>
                    <button  className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full py-4 text-white font-bold'>Get Started Free</button>
                </div>
                <div className='p-6 border rounded-lg border-zinc-100 shadow mb-6 cursor-pointer space-y-6 bg-linear-to-r from-[#4F39F6] to-[#9916fe] text-white/80 relative'>
                <span className='rounded-full bg-[#FEF3C6] text-sm text-[#BB4D00] font-medium px-3 py-2 absolute left-[33%] -top-4'>Most Popular</span>
                    <div className='space-y-2'>
                        <h3 className='font-bold text-2xl text-white'>Pro</h3>
                        <p className='text-white leading-5'>Perfect for getting started</p>
                    </div>
                    <div>
                        <h3 className='font-bold text-4xl text-white'>$29<span className='text-xl text-white/80'>/Month</span></h3>
                    </div>
                    <div className='space-y-2'>
                        <p className='flex gap-2 font-medium text-white'><i className="fa-solid fa-check text-xl"></i>Access to all premium tools</p>
                        <p className='flex gap-2 font-medium text-white'><i className="fa-solid fa-check text-xl"></i>Unlimited templates</p>
                        <p className='flex gap-2 font-medium text-white'><i className="fa-solid fa-check  text-xl"></i>Priority support</p>
                        <p className='flex gap-2 font-medium text-white'><i className="fa-solid fa-check text-xl"></i>Unlimited projects</p>
                        <p className='flex gap-2 font-medium text-white'><i className="fa-solid fa-check text-xl"></i>Cloud sync</p>
                        <p className='flex gap-2 font-medium text-white'><i className="fa-solid fa-check text-xl"></i>Advanced analytics</p>
                    </div>
                    <button  className='bg-white
                     rounded-full w-full py-4 text-white font-bold'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Get Started Free</span></button>
                </div>
                <div className='p-6 border rounded-lg border-zinc-100 shadow mb-6 cursor-pointer space-y-6'>
                    <div className='space-y-2'>
                        <h3 className='font-bold text-2xl text-[#101727]'>Enterprise</h3>
                        <p className='text-[#627382] leading-5'>For teams and businesses</p>
                    </div>
                    <div>
                        <h3 className='font-bold text-4xl'>$99<span className='text-xl text-[#627382]'>/Month</span></h3>
                    </div>
                    <div className='space-y-2'>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>Everything in Pro</p>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>Team collaboration</p>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>Custom integrations</p>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>Dedicated support</p>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>SLA guarantee</p>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>Custom branding</p>
                    </div>
                    <button  className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full py-4 text-white font-bold'>Get Started Free</button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;