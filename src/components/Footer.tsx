import React from 'react';
import Contact from '../pages/Contact';
import '../styles/App.css';
import { Typography } from '@mui/material';

const Footer: React.FC = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()
    return (
    <footer className="footer">
        <hr className='footer-hr'/>
        <Contact/>
        <Typography style={{fontSize: '0.8rem'}}>{`©${currentYear} Khan Howe`}</Typography>
    </footer>
    );
};

export default Footer;