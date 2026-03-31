import React from 'react';
import bannerImg from '../assets/banner.png';
import playImg from '../assets/Play.png';

const Banner = () => {
    return (
        <div className='text-center lg:text-left px-4 lg:px-1'>
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                {/* banner left */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#E1E7FF] font-medium px-5 py-2 rounded-full">
                        <span className="flex items-center justify-center w-4 h-4 bg-violet-300 rounded-full">
                            <span className="flex items-center justify-center w-3 h-3 bg-violet-400 rounded-full">
                                <span className="items-center justify-center w-2 h-2 bg-violet-500 rounded-full"></span>
                            </span>
                        </span>
                        <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                    </div>

                    <h1 className="font-extrabold text-6xl text-[#101727] leading-17">Supercharge Your<br />Digital Workflow</h1>

                    <p className="text-[#627382] text-[18px] leading-8">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        <br />
                        Explore Products
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        <button className="btn btn-primary rounded-full cursor-pointer">Explore Products</button>

                        <button className="btn btn-outline btn-primary rounded-full cursor-pointer">
                            <img src={playImg} alt="Banner image" />Watch Demo</button>
                    </div>
                </div>

                {/* banner right */}
                <div className="flex justify-center lg:justify-end">
                    <img className='w-full mx-5' src={bannerImg} alt="Banner image" />
                </div>
            </div>

        </div>
    );
};

export default Banner;