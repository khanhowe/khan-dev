import { Chip } from "@mui/material";
import '../styles/About.css';

export interface SkillChipProps {
    label: string;
    color: string;
}

const SkillChip: React.FC<SkillChipProps> = ({ label, color }) => (
    <Chip
        className='skill-chip' 
        style={{
            backgroundColor: color, color: 'white',
            transition: 'transform 0.2s ease'
        }} 
        label={label}
        onMouseOver={(event) => event.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(event) => event.currentTarget.style.transform = 'scale(1)'}
    />
);

export default SkillChip;