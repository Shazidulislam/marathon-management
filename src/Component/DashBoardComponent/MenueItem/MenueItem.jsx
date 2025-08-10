import React from 'react';
import { NavLink } from 'react-router';

const MenueItem = ({level , icon:Icon  , path}) => {
    return (
        <div className='   '>
            <NavLink to={path} className={" flex justify-start pl-2 md:pl-4 items-center gap-4 py-3 hover:bg-black/30"}>
                <span> <Icon/></span>
                <span>{level}</span>
            </NavLink>
        </div>
    );
};

export default MenueItem;