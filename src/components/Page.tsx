import { ReactNode } from 'react';
import '../styles/Page.css';
interface PageProps {
    children: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
    console.log('page');
    return (
        <div className='page-div'>
            {children}
        </div>
    );
};

export default Page;