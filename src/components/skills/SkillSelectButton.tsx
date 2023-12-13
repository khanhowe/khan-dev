import { Button } from "@mui/material"
import { SkillTypes } from "./skills";
import '../../styles/About.scss';

interface SkillSelectButtonProps {
    label: SkillTypes;
    onClick: () => void;
}

const SkillSelectButton: React.FC<SkillSelectButtonProps> = ({ label, onClick }) => {
    return <Button 
        className='skill-select-button'
        variant="outlined" 
        onClick={onClick}
    >
        {label}
    </Button>
}

export default SkillSelectButton;
