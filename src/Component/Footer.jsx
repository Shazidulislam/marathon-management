import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="px-4 divide-y  bg-gray-100  text-gray-800">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-3/5">
                  <span className="self-center text-2xl  md:text-3xl text_rancho font-semibold">Marathon Hub</span>
                </div>
                <div className="grid md:grid-cols-3 not-only:">
                    <div className='pt-5 col-span-2'>
                       <p className='text-[#403f3f] px-6 lg:mx-auto lg:w-9/12 font-medium text-sm   lg:text-center'>Marathon Hub is your go-to resource for marathon training, events, and community. Join us to explore tips, gear, and major races to fuel your running journey.</p>
                    </div>
                    <div className='pt-5 text-sm col-span-1 px-6'>
                            <h2 className='self-center text-2xl   font-semibold'>Useful Links</h2>

                        <ul className='font-medium'>
                            <li>
                                <Link className='hover:text-blue-500' to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link  className='hover:text-blue-500' >Marathon</Link>
                            </li>
                            <li>
                                <Link  className='hover:text-blue-500' >Training Tips</Link>
                            </li>
                            <li>
                                <Link  className='hover:text-blue-500' >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center  text-gray-600">© 2025 Marathon Hub. All rights reserved.</div>
        </footer>
    );
};

export default Footer;