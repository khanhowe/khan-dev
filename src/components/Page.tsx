import { ReactNode } from 'react';
import '../styles/Page.css';
import Contact from '../pages/Contact';

interface PageProps {
    children: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
    console.log('page');
    return (
        <div className='page-div'>
            {children}
            <Contact/>
        </div>
    );
};

export default Page;