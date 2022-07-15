import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import AlbumIcon from '@mui/icons-material/Album';
import { NavLink } from 'react-router-dom';

const Header = () => {
        const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{ backgroundColor: '#232F3D'}} position='sticky'>
                <Toolbar>
                    <NavLink to='/' style={{color: 'white'}}>
                    <Typography>
                        <AlbumIcon />
                    </Typography></NavLink>
                    <Tabs 
                            sx={{ ml: 'auto'}}
                        textColor='inherit' 
                        indicatorColor='secondary' 
                        value={value} 
                        onChange={(e, val) => setValue(val)}
                        >

                        <Tab LinkComponent={NavLink} to='/add' label='Add product'/>
                        <Tab LinkComponent={NavLink} to='/records' label='Records'/>
                        <Tab LinkComponent={NavLink} to='/about' label='About Us'/>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;