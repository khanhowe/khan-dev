import { ReactNode } from 'react';
import '../styles/App.css';
import { Box } from '@mui/material';

interface PageProps {
    children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1000px',
                padding: '10px auto',
            }}
        >
            {children}
        </Box>
    );
};

export default Page;
