import React, { cacheSignal } from 'react';
import { toast } from 'react-toastify';

const AddedCard = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment Successfull");
    }
    const handleDelete = (item) => {
        const filtered = carts.some(dltItem => dltItem.id !== item.id)
        setCarts(filtered);
        toast.success("Product deleted");
    }
    return (
        <div className="max-w-[1200px] mx-auto p-10 space-y-6 border border-zinc-50 shadow">
            <h2 className='font-bold text-2xl text-[#101727]'>Your Cart</h2>
            {
                carts.length === 0
                    ? <p className='text-center text-3xl font-semibold'>cart is Empty</p>
                    : <>
                        <div className='flex flex-col gap-4'>
                            {
                                carts.map(item => <div key={item.id}>
                                    <div className='flex justify-between items-center shadow p-4 rounded-lg'>
                                        <div className='flex gap-4'>
                                            <div className='border border-zinc-200 inline-block rounded-full p-3'>
                                                <img className='w-6 h-6' src={item.icon} alt="" />
                                            </div>
                                            <div>
                                                <h2 className='font-semibold text-xl text-[#101727]'>{item.name}</h2>
                                                <span>${item.price}</span>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDelete(item)} className='text-[#FF3980] font-bold'>
                                            Remove
                                        </button>
                                    </div>
                                </div>)
                            }
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='text-[#627382]'>Total</div>
                            <div className='font-bold  text-2xl text-[#101727]'>$<span>{totalPrice}</span></div>
                        </div>

                        <button onClick={() => handlePayment()} className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full py-4 text-white font-bold hover:scale-105 duration-300 cursor-pointer'>Proceed to Checkout</button>
                    </>
            }


        </div>
    );
};

export default AddedCard;