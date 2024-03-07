import React from 'react';
import Contact from '../pages/Contact';
import '../styles/App.css';
import ResponsiveTypography from './ResponsiveText';

const Footer: React.FC = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className="footer">
            <Contact />
            <ResponsiveTypography variant="body2">{`©${currentYear} Khan Howe`}</ResponsiveTypography>
        </footer>
    );
};

export default Footer;
