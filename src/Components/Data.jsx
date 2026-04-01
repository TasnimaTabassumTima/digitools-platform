import React, { use, useState } from 'react';
import Card from './Card.jsx';

const Data = ({ dataPromise, carts, setCarts}) => {
    const datas = use(dataPromise);


    return (

        <div className="max-w-[1200px] mx-auto">
            <div className='py-10 px-15 lg:px-0 space-y-10'>

                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        datas.map(data =>
                            <Card key={data.id} data={data} carts = {carts} setCarts={setCarts} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Data;