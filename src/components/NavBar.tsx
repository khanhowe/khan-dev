import { Tab, Tabs } from "@mui/material";
import React from "react";
import '../styles/NavBar.css';

interface NavBarProps {
    pageNumber: number;
    setPageNumber: (pageNumber: number) => void;
}

const a11yProps = (index: number) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    };
}

const NavBar: React.FC<NavBarProps> = ({ pageNumber, setPageNumber }) => {
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setPageNumber(newValue)
    };
    return (
        <div className='navbar-div'>
            <Tabs value={pageNumber} onChange={handleChange} className='navbar'>
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