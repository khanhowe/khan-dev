import { ReactNode } from 'react';
import '../styles/Page.css';
import '../styles/App.css';

interface PageProps {
    children: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <div className='page-div'>
            {children}
        </div>
    );
};

export default Page;