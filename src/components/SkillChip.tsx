import { Chip } from "@mui/material";
import '../styles/About.scss';

export interface SkillChipProps {
    label: string;
    color: string;
}

const SkillChip: React.FC<SkillChipProps> = ({ label, color }) => {
    return (
        <Chip
            className='skill-chip' 
            style={{
                backgroundColor: color, color: 'white',
                transition: 'transform 0.2s ease',
                fontSize: '18px'
            }} 
            label={label}
            onMouseOver={(event) => event.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(event) => event.currentTarget.style.transform = 'scale(1)'}
        />
    );
}

export default SkillChip;