import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAws, faDocker, faGithub, faJira, faJs, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faDog, faServer, faVectorSquare, faVial } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export enum SkillTypes {
    All = 'All',
    Backend = 'Backend',
    Frontend = 'Frontend',
    Other = 'Other'
}

export interface Skill {
    label: string;
    color: string;
    type: SkillTypes[];
    icon: (color: string) => JSX.Element;
}

const createSkill = (label: string, color: string, type: SkillTypes[], icon: IconDefinition): Skill => ({
    label,
    color,
    type,
    icon: (color) => <FontAwesomeIcon icon={icon} color={color} size='2x'/>
});

export const SkillList: Skill[] = [
    createSkill('TypeScript', '#3178c6', [SkillTypes.Backend, SkillTypes.Frontend], faJs),
    createSkill('Node.js', 'rgb(67, 133, 61)', [SkillTypes.Backend, SkillTypes.Frontend], faNodeJs),
    createSkill('React', 'rgba(8, 126, 164, 0.8)', [SkillTypes.Frontend], faReact),
    createSkill('Nest.js', '#ea2845', [SkillTypes.Backend], faServer),
    createSkill('AWS', 'rgb(255, 153, 0)', [SkillTypes.Backend], faAws),
    createSkill('MongoDB', 'rgb(0, 237, 100)', [SkillTypes.Backend], faDatabase),
    createSkill('PostgreSQL', 'rgb(105, 158, 202)', [SkillTypes.Backend], faDatabase),
    createSkill('Serverless', 'rgb(253, 87, 80)', [SkillTypes.Backend], faServer),
    createSkill('GitHub Actions', 'black', [SkillTypes.Other], faGithub),
    createSkill('Express.js', 'black', [SkillTypes.Backend], faServer),
    createSkill('Docker', 'rgb(13, 183, 237)', [SkillTypes.Backend, SkillTypes.Other], faDocker),
    createSkill('Python', '#3776ab', [SkillTypes.Backend], faPython),
];