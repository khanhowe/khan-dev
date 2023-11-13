import { Tab, Tabs } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

interface NavBarProps {
}

const a11yProps = (index: number) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    };
}

const NavBar: React.FC<NavBarProps> = ({}) => {
    const navigate = useNavigate();
    const routes = ['/', '/about', '/skills', '/experience', '/education', '/projects', '/contact'];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log('Navigate to ', routes[newValue]);
        navigate(routes[newValue]);
    };
    return (
        <div className='navbar-div'>
            <Tabs value={false} onChange={handleChange} className='navbar'>
                <Tab label='Home' {...a11yProps(0)}/>
                <Tab label='About' {...a11yProps(1)}/>
                <Tab label='Skills' {...a11yProps(2)}/>
                <Tab label='Experience' {...a11yProps(3)}/>
                <Tab label='Education' {...a11yProps(4)}/>
                <Tab label='Projects' {...a11yProps(5)}/>
                <Tab label='Contact' {...a11yProps(6)}/>
            </Tabs>
        </div>
    );
};

export default NavBar;