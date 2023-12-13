
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
}


export const skills: Skill[] = [
    {
        label: 'Node.js', 
        color: 'rgb(67, 133, 61)',
        type: [SkillTypes.Backend, SkillTypes.Frontend]
    },
    {
        label: 'TypeScript',
        color: '#3178c6',
        type: [SkillTypes.Backend, SkillTypes.Frontend]
    },
    {
        label: 'React', 
        color: 'rgba(8, 126, 164, 0.8)',
        type: [SkillTypes.Frontend]
    },
    {
        label: 'AWS', 
        color: 'rgb(255, 153, 0)',
        type: [SkillTypes.Backend]
    },
    {
        label: 'Serverless', 
        color: 'rgb(253, 87, 80)',
        type: [SkillTypes.Backend]
    },
    {
        label: 'GitHub Actions', 
        color: 'black',
        type: [SkillTypes.Other]
    },
    {
        label: 'Docker', 
        color: 'rgb(13, 183, 237)',
        type: [SkillTypes.Backend, SkillTypes.Other]
    },
    {
        label: 'Python', 
        color: '#3776ab',
        type: [SkillTypes.Backend]
    },
    {
        label: 'C++',
        color: 'blue',
        type: [SkillTypes.Backend]
    },
    {
        label: 'Python', 
        color: '#3776ab',
        type: [SkillTypes.Backend]
    },
    {
        label: 'Material UI', 
        color: 'rgb(51, 153, 255)',
        type: [SkillTypes.Frontend]
    },
    {
        label: 'Next.js',
        color: 'black',
        type: [SkillTypes.Frontend]
    },
    {
        label: 'PostgreSQL',
        color: 'rgb(105, 158, 202)',
        type: [SkillTypes.Backend]
    },
    {
        label: 'MongoDB',
        color: 'rgb(0, 237, 100)',
        type: [SkillTypes.Backend]
    },
    {
        label: 'GraphQL',
        color: 'rgb(229, 53, 171)',
        type: [SkillTypes.Backend]
    },
    {
        label: 'Jest.js', 
        color: 'rgb(21, 194, 19)',
        type: [SkillTypes.Frontend, SkillTypes.Backend]
    },
    {
        label: 'DataDog', 
        color: 'rgb(99, 44, 166)',
        type: [SkillTypes.Other, SkillTypes.Backend]
    },
    {
        label: 'Jira', 
        color: '#0052CC',
        type: [SkillTypes.Other]
    },
    {
        label: 'Nest.js', 
        color: '#ea2845',
        type: [SkillTypes.Backend]
    },
    {
        label: 'Express.js',
        color: '#010101',
        type: [SkillTypes.Backend]
    },
    {
        label: 'TypeORM',
        color: '#E83524',
        type: [SkillTypes.Backend]
    }
];