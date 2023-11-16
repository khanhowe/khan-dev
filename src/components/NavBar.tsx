import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

interface TabData {
    title: string;
    route: string;
}

const a11yProps = (index: number) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    };
};

const NavBar: React.FC = () => {
    const [pageSelect, setPageSelect] = useState<number>(0);
    const navigate = useNavigate();
    const tabs: TabData[] = [
        { title: 'Home', route: '/'},
        { title: 'About', route: '/about'},
        { title: 'Background', route: '/background'},
        { title: 'Projects', route: '/projects'}
    ];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setPageSelect(newValue);
        navigate(tabs[newValue].route);
    };
    return (
        <div className='navbar-div'>
            <Tabs value={pageSelect} onChange={handleChange}   textColor="secondary" indicatorColor="secondary">
                {tabs.map((tab, index) => <Tab label={tab.title}  className='navbar-tab' {...a11yProps(index)} key={index}/>)}
            </Tabs>
        </div>
    );
};

export default NavBar;