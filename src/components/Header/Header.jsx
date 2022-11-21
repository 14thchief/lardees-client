import { FaSearch, FaHamburger, FaCartArrowDown, FaCookieBite, FaUserCheck, FaUserAlt, FaSearchLocation, FaUser } from 'react-icons/fa';
import {Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import logo from '../../assets/lardees.png';
import { useState } from 'react';
import NavigationLinks from './NavigationLinks';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = ({navList}) => {
    const menuList = navList || [
        {
            to: "cart",
            text: "My Cart",
            icon: <FaCartArrowDown className={`text-2xl mr-2 text-orange-500`} />,
            action: null,
        },
        {

            to: "catalogue",
            text: "Food Catalogue",
            icon: <FaCookieBite className={`text-2xl mr-2 text-orange-500`} />,
            action: null,
        },
        {
            to: "tracker",
            text: "Track Order",
            icon: <FaSearchLocation className={`text-2xl mr-2 text-orange-500`} />,
            action: null,
        },
        {
            to: "register",
            text: "Create account",
            icon: <FaUserAlt className={`text-xl mr-2 text-orange-500`} />,
            action: true,
        },
        {
            to: "login",
            text: "Login",
            icon: <FaUserCheck className={`text-2xl mr-2 text-orange-500`} />,
            action: true,
        },
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section className={`Header rounded-b-2xl w-full p-2 flex flex-col`} >
            <div className={`w-full mb-4 flex items-center justify-between`}>
                <div className={` px-1 w-1/4 h-10 overflow-hidden`}>
                    <Link to="/"><img src={logo} className={`h-13`} alt="logo" /></Link>
                </div>
                <div className='flex items-center justify-between w-32 px-2'>
                    <p className='flex items-center text-xs text-white'>Sign in <span className='text-orange-400 '><FaUser size={23} /></span></p>

                    <div className='relative'>
                        <p className='text-white'><FaCartArrowDown size={28} /></p>
                        <div className='absolute top-0 right-0 h-4 w-4 bg-orange-600 rounded-full text-center'>
                            <p className='text-white text-xs'><small>{50}</small></p>
                        </div>
                    </div>
                </div>
                {/* <div className={`w-1/6 flex justify-center lg:hidden`}>
                    <button onClick={handleClick} className={`text-white opacity-90`}><FaHamburger size={'25'}/></button>
                    <NavigationLinks 
                        linksList={menuList} 
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                        open={open}
                    />
                </div> */}
            </div>

            <div className={`rounded-full border w-full my-4 flex items-center bg-white `}>
                <input type="text" className={`rounded-l-full w-4/5 py-2 pl-4 focus:outline-none`} placeholder="Search for something tasty..." />
                <button className={`rounded-full border w-1/5 h-10 p-2.5 flex justify-center bg-red-700 text-white`}><FaSearch /></button>
            </div>
        </section>
    )
}

export default Header;