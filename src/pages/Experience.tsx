import { Typography } from "@mui/material";
import '../styles/Experience.css';

interface ExperienceItem {
    title: string;
    company: string;
    dateRange: string;
    logoSource: string;
    description: string[];
}

const experienceList: ExperienceItem[] = [
    {
        title: 'Full-Stack Engineer',
        company: 'Class Technologies Inc.',
        dateRange: '2021-2023',
        logoSource: '/class.jpg',
        description: [
            'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
        ]
    }
];



const ExperienceSection: React.FC<ExperienceItem> = ({ title, company, dateRange, logoSource, description }) => {
    return (
        <div className='experience-div'>
            <div>
                <img src={logoSource} alt='class-logo' className='company-logo'/>
            </div>
            <div className='experience-text-div'>
                <Typography variant='h5'>{title}</Typography>
                <Typography variant='h6'>{company}</Typography>
                <Typography>{dateRange}</Typography>
                {description.map((paragraph, index) => <Typography key={index}>{paragraph}</Typography>)}
            </div>
        </div>  
    );
};

const Experience: React.FC = () => {
    console.log('test');
    return (
        <div className='card-list'>
            {experienceList.map((item, index) => <ExperienceSection 
                key={index} 
                title={item.title}
                company={item.company}
                dateRange={item.dateRange}
                logoSource={item.logoSource}
                description={item.description}
            />)}
        </div>
    );
}

export default Experience;