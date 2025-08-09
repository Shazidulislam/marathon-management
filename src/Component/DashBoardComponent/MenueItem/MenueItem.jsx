import React from 'react';
import { NavLink } from 'react-router';

const MenueItem = ({level , icon:Icon  , path}) => {
    return (
        <div className='border-t-2 border-black py-3 hover:'>
            <NavLink to={path} className={"text-black flex justify-start pl-2 md:pl-4 items-center gap-4 "}>
                <span> <Icon/></span>
                <span>{level}</span>
            </NavLink>
        </div>
    );
};

export default MenueItem;