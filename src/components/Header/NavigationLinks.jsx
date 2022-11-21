import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationLinks=({linksList, handleClose, anchorEl, open})=> {

    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";

  return (
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
        {
            linksList.filter(link=> !link.action).map((link, i)=> {

                return (
                    <MenuItem key={i}>
                        <NavLink
                            to={link.to}
                            activeClassName={activeClassName}
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            className={`flex items-center`}
                        >
                            {link.icon} {link.text}
                        </NavLink>
                    </MenuItem>
                )
            })
        }
        <Divider />

        {
            linksList.filter(link=>link.action).map((link, i)=> {

                return (
                    <MenuItem key={i}>
                        <NavLink
                            to={link.to}
                            activeClassName={activeClassName}
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            className={`flex items-center`}
                        >
                            <ListItemIcon>{link.icon}</ListItemIcon>
                            {link.text}
                        </NavLink>
                    </MenuItem>
                )
            })
        }
    </Menu>
  )

}

export default NavigationLinks;