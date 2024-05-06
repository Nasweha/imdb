import React from 'react'
import {Menu ,MenuItem} from '@mui/material';
import { Link } from 'react-router-dom';

import { routePath } from '../constant/Route';
const HeaderMenu =({open, handleClose,handleToggle}) =>{
    const openMenu = Boolean(open)
   
    return (
        <div>


            <Menu
                id="basic-menu"
                anchorEl={open}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
            <Link to={`${routePath.categories}?category=popular`} style={{ textDecoration: 'none', color: 'inherit'}}>
            <MenuItem onClick={handleToggle}>Popular</MenuItem>
        </Link>
        <Link to={`${routePath.categories}?category=toprated`} style={{ textDecoration: 'none', color: 'inherit'}}>
            <MenuItem onClick={handleToggle}>Top Rated</MenuItem>
        </Link>
        <Link to={`${routePath.categories}?category=upcoming`} style={{ textDecoration: 'none', color: 'inherit'}}>
            <MenuItem onClick={handleToggle}>Upcoming</MenuItem>
        </Link>
            </Menu>
        </div>


    )
}

export default HeaderMenu