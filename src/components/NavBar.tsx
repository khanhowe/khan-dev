import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
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

const NavBar: React.FC<NavBarProps> = () => {
    const [pageSelect, setPageSelect] = useState<number>(0);
    const navigate = useNavigate();
    const routes = ['/', '/about', '/skills', '/experience', '/education', '/projects', '/contact'];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setPageSelect(newValue);
        navigate(routes[newValue]);
    };
    return (
        <div className='navbar-div'>
            <Tabs value={pageSelect} onChange={handleChange} className='navbar'>
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