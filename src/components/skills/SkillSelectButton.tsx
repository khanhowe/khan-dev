import { Button } from '@mui/material';
import '../../styles/About.scss';
import { SkillTypes } from './SkillList';

interface SkillSelectButtonProps {
    label: SkillTypes;
    onClick: () => void;
}

const SkillSelectButton: React.FC<SkillSelectButtonProps> = ({
    label,
    onClick,
}) => {
    return (
        <Button
            className="skill-select-button"
            variant="outlined"
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default SkillSelectButton;
