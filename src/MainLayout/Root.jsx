import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <header>
               <h3>Hello</h3>
                 
            </header>
            <main>
                    <Outlet></Outlet>   
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Root;