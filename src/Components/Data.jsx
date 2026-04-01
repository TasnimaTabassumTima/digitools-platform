import React, { use, useState } from 'react';
import Card from './Card.jsx';

const Data = ({ dataPromise }) => {
    const datas = use(dataPromise);


    return (
        <div className='py-28 px-15 lg:px-0 space-y-10'>
            <div className='text-center space-y-4'>
                <h3 className='text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h3>
                <p className='text-zinc-600'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    datas.map(data =>
                        <Card data = {data}/>
                    )
                }
            </div>
        </div>
    );
};

export default Data;