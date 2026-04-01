import React, { useState } from 'react';

const Tools = ({setHide, carts}) => {
    const [activeTab, setActiveTab] = useState("Products");
    const handleTab = (value) => {
        setActiveTab(value);
        setHide(value);
    }
    return (
        <div className='py-10 px-15 lg:px-0 space-y-10'>
            <div className='text-center space-y-4'>
                <h3 className='text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h3>
                <p className='text-zinc-600'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            < div className="tabs tabs-box justify-center bg-transparent">
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" 
                defaultChecked 
                onClick={() => 
                handleTab("Products")
                }/>

                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`}
                onClick={() => 
                handleTab("Cart")
                }/>

            </div >
        </div >
    );
};

export default Tools;