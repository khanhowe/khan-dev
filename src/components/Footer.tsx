import React from 'react';
import '../styles/App.css';
import ResponsiveTypography from './ResponsiveText';

const Footer: React.FC = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className="footer">
            <hr style={{ minWidth: '200px' }} />
            <ResponsiveTypography variant="subtitle1">{`©${currentYear} Khan Howe`}</ResponsiveTypography>
        </footer>
    );
};

export default Footer;
