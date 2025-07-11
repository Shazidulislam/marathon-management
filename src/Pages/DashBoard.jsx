import React from 'react';
import { Link, Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Dashboard = () => {
    return (
        <div>
            <header>
                 <Navbar></Navbar>
            </header>
            <main>
                <div className='grid grid-cols-12  bg-base-100'>
                    <div className=' col-span-12 flex md:col-span-2 text-sm py-8  font-medium bg-base-100 shadow-xl'>
                        <ul className=''>
                        <h2 className='font-bold  lg:text-xl pl-6 pb-2 text_rancho'>Useful Links</h2>

                            <li>
                               <p className=' py-3 pl-1 md:pl-6 text-xs text-gray-900 border-t font-medium'>
                                 <Link to={"/board"}>Add Marathon</Link>
                               </p>
                            </li>
                            <li>
                               <p className=' py-3 pl-1 md:pl-6 text-xs text-gray-900 border-t  font-medium'>
                                 <Link to={"/board/mymarathon"}>My Marathon</Link>
                               </p>
                            </li>
                            <li>
                                <p className=' py-3 pl-1 md:pl-6 text-xs text-gray-900 border-t border-b font-medium'>
                                    <Link to={"/board/myapply"}>My App lyList</Link>
                                </p>
                            </li>
                        </ul>
                        <div className='block md:hidden'>
                            <h2>animation</h2>
                        </div>
                    </div>
                    <div className= '  col-span-12 md:col-span-10'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Dashboard;