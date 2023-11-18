import { Typography } from "@mui/material";
import '../styles/App.css';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className='section-title sticky'>
            <Typography variant='h4'>{title}</Typography>
        </div>
    );
}

export default SectionTitle;