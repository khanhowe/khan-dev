import { ReactNode } from 'react';
import '../styles/Page.css';
import Contact from '../pages/Contact';
import { Typography } from '@mui/material';

interface PageProps {
    children: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <div className='page-div'>
            {children}
            <div className='footer'>
                <Contact/>
                <Typography style={{fontSize: '0.8rem'}}>{`©${currentYear} Khan Howe`}</Typography>
            </div>
        </div>
    );
};

export default Page;