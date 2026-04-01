import React from 'react';

const Footer = () => {
    return (
        <footer className="max-w-[1200px] mx-auto pt-32 pb-8 px-8 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 text-center">
                    {/* footer top 1 */}
                    <div className="space-y-4 text-center lg:text-left md:col-span-2">
                        <h2 className="text-3xl font-bold text-white">DigiTools</h2>
                        <p className="text-zinc-400">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* footer top 2 */}
                    <div className="md:col-span-1">
                        <h3 className="text-zinc-300 font-medium mb-4 text-[20px]">Product</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="">Features</a>
                            </li>
                            <li>
                                <a href="">Pricing</a>
                            </li>
                            <li>
                                <a href="">Templates</a>
                            </li>
                            <li>
                                <a href="">Integrations</a>
                            </li>
                        </ul>
                    </div>

                    {/* footer top 3 */}
                    <div className="md:col-span-1">
                        <h3 className="text-zinc-300 font-medium mb-4 text-[20px]">Company</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Careers</a>
                            </li>
                            <li>
                                <a href="">Press</a>
                            </li>
                        </ul>
                    </div>

                    {/* footer top 4 */}
                    <div className="md:col-span-1">
                        <h3 className="text-zinc-300 font-medium mb-4 text-[20px]">Resources</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="">Documentation</a>
                            </li>
                            <li>
                                <a href="">Help Center</a>
                            </li>
                            <li>
                                <a href="">Community</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* footer top 5 */}
                    <div className='md:col-span-1 flex justify-center'>
                        <div>
                            <h3 className="text-zinc-400 font-semibold mb-6 text-lg">Social Links</h3>
                            <div className='flex flex-wrap gap-2'>
                                <span className='bg-white rounded-full p-2 hover:scale-105 duration-300 cursor-pointer'><i class="fa-brands fa-instagram"></i></span>
                                <span className='bg-white rounded-full p-2 hover:scale-105 duration-300 cursor-pointer'><i class="fa-brands fa-facebook"></i></span>
                                <span className='bg-white rounded-full p-2 hover:scale-105 duration-300 cursor-pointer'><i class="fa-brands fa-x-twitter"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer bottom */}
                <div className="mt-20 pt-8 border-t border-zinc-600 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500">
                    <p>© 2026 Digitools. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a className='cursor-pointer' href="">Privacy Policy</a>
                        <a className='cursor-pointer' href="">Terms of Service</a>
                        <a className='cursor-pointer' href="">Cookies</a>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;