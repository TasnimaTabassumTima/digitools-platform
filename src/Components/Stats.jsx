import React from 'react';

const Stats = () => {
    return (
        <div className='max-w-[1200px] text-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 px-4 lg:px-0 gap-10 md:gap-0'>
            <div className='px-10 md:px-10 lg:px-32'>
                <h3 className='font-extrabold text-6xl text-white'>50K+</h3>
                <p className='font-medium text-2xl text-white/80'>Active Users</p>
            </div>
            <div className='px-7 md:px-10 lg:px-28 md:border-l lg:border-r lg:border-[#FFFF]/80'>
                <h3 className='font-extrabold text-6xl text-white'>200+</h3>
                <p className='font-medium text-2xl text-white/80'>Premium Tools</p>
            </div>
            <div className='px-10 md:px-10 lg:px-32'>
                <h3 className='font-extrabold text-6xl text-white'>4.9</h3>
                <p className='font-medium text-2xl text-white/80'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;