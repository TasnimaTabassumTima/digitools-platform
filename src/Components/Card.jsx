import React, { useState } from 'react';

const Card = ({data}) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClicked = () => {
        setIsClicked(isClicked === true ? false : true);
    }

    return (
        <div className='border border-zinc-100 shadow p-6 '>
            <div className='flex justify-end'>
                {
                    data.tag === "Best Seller"
                        ? <span className='bg-[#FEF3C6] text-[#BB4D00] rounded-full py-2 px-3'>{data.tag}</span>
                        : data.tag === "Popular" ? <span className='bg-[#E1E7FF] text-[#9514FA] rounded-full py-2 px-3'>{data.tag}</span>
                            : <span className='bg-[#DBFCE7] text-[#0A883E] rounded-full py-2 px-3'>{data.tag}</span>

                }
            </div>

            {/*  <span className='bg-[#FEF3C6] text-[#BB4D00] rounded-full py-2 px-3'>{data.tag}</span> */}

            {/*  <div className='flex justify-end'>
                                <span className='bg-[#FEF3C6] text-[#BB4D00] rounded-full py-2 px-3'>{data.tag}</span>
                            </div> */}

            <div className='space-y-4'>
                <div className='border border-zinc-200 inline-block rounded-full p-4'>
                    <img className='w-8 h-8' src={data.icon} alt="" />
                </div>

                <h3 className='font-bold text-2xl text-[#101727]'>{data.name}</h3>

                <p className='text-zinc-600 leading-5'>{data.description}</p>

                <div className='font-bold text-2xl text-[#101727]'>${data.price}<span className='text-zinc-600 text-[16px] font-normal'>/{data.period}</span></div>

                <div className='space-y-2 pb-12'>
                    {data.features.map(value =>
                        <p className='flex gap-2 font-medium text-[#627382]'><i className="fa-solid fa-check text-green-400 text-xl"></i>{value}</p>
                    )}
                </div>

                <button onClick={() => handleClicked()} className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full py-4 text-white font-bold hover:scale-105 duration-300 cursor-pointer'>
                    {isClicked === true ? "Added" : "Buy Now"}
                </button>
            </div>
        </div>
    );
};

export default Card;