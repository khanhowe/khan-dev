import { Skill, SkillTypes, skills } from "./skills";
import { useEffect, useState } from "react";
import SkillChip from "./SkillChip";
import SkillSelectButton from "./SkillSelectButton";

const SkillList: React.FC = () => {
    const [selectedSkillType, setSelectedSkillType] = useState<SkillTypes>(SkillTypes.All);
    const [skillList, setSkillList] = useState<Skill[]>(skills);

    const handleSkillTypeClick = (skillType: SkillTypes) => {
        setSelectedSkillType(skillType);
    };

    useEffect(() => {
        const selectedSkills = skills.filter((skill) => {
            if (selectedSkillType === SkillTypes.All) {
                return true;
            }
            return skill.type.includes(selectedSkillType);
        });
        setSkillList(selectedSkills);

    }, [selectedSkillType, setSkillList]);

    return (
        <div className='skills'>
            <div>
                {Object.values(SkillTypes).map((skillType, index) => (
                    <SkillSelectButton
                        key={index}
                        label={skillType}
                        onClick={() => handleSkillTypeClick(skillType)}
                    />
                ))}
            </div>
            <div className='skill-chip-list'>
                {skillList.map((skill, index) => <SkillChip key={index} label={skill.label} color={skill.color}/>)}
            </div>
        </div>
    );
}

export default SkillList;