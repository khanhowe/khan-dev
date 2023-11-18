import { Chip } from "@mui/material";
import '../styles/About.scss';
import { useIsSmScreen } from "../hooks/useScreenSize";

export interface SkillChipProps {
    label: string;
    color: string;
}

const SkillChip: React.FC<SkillChipProps> = ({ label, color }) => {
    const isSmScreen = useIsSmScreen();
    return (
        <Chip
            className='skill-chip' 
            style={{
                backgroundColor: color, color: 'white',
                transition: 'transform 0.2s ease'
            }} 
            sx={{ fontSize: isSmScreen ? '20px' : '16px'}}
            label={label}
            onMouseOver={(event) => event.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(event) => event.currentTarget.style.transform = 'scale(1)'}
        />
    );
}

export default SkillChip;