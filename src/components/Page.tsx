import { ReactNode } from 'react';
import '../styles/Page.css';
import '../styles/App.css';
import { useMediaQuery } from '@mui/material';
import Footer from './Footer';

interface PageProps {
    children: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <div className='page-div'>
            {children}
            {!isSmallScreen && <Footer/>}
        </div>
    );
};

export default Page;