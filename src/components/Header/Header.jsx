import { FaSearch, FaHamburger, FaCartArrowDown, FaCookieBite, FaUserCheck, FaUserAlt, FaSearchLocation } from 'react-icons/fa';
import {Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import logo from '../../assets/lardees.png';
import { useState } from 'react';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section className={`rounded-b-2xl border w-full p-2 flex flex-col bg-red-700`}>
            <div className={`w-full mb-4 flex items-center justify-between`}>
                <div className={`w-1/4 h-10 overflow-hidden`}>
                    <img src={logo} className={`h-10`} alt="logo" />
                </div>
                <div className={`w-1/6 flex justify-center lg:hidden`}>
                    <button onClick={handleClick} className={`text-white opacity-90`}><FaHamburger size={'25'}/></button>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                            },
                            '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                            },
                        },
                        }}
                        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem>
                            <FaCartArrowDown className={`text-2xl mr-2 text-orange-500`} /> My Cart
                        </MenuItem>
                        <MenuItem>
                            <FaCookieBite className={`text-2xl mr-2 text-orange-500`} /> Food Catalogue
                        </MenuItem>
                        <MenuItem>
                            <FaSearchLocation className={`text-2xl mr-2 text-orange-500`} /> Track Order
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                        <ListItemIcon>
                            <FaUserAlt className={`text-xl mr-2 text-orange-500`} />
                        </ListItemIcon>
                            Create account
                        </MenuItem>
                        <MenuItem>
                        <ListItemIcon>
                            <FaUserCheck className={`text-2xl mr-2 text-orange-500`} />
                        </ListItemIcon>
                            Login
                        </MenuItem>
                    </Menu>
                </div>
            </div>

            <div className={`rounded-full border w-full my-4 flex items-center bg-white opacity-90`}>
                <input type="text" className={`rounded-l-full w-4/5 py-2 pl-4 focus:outline-none`} placeholder="Search for something tasty..." />
                <button className={`rounded-full border w-1/5 p-2.5 flex justify-center bg-gray-100`}><FaSearch /></button>
            </div>
        </section>
    )
}

export default Header;