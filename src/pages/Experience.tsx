import { Typography } from "@mui/material";
import '../styles/Experience.css';

interface ExperienceItem {
    title: string;
    company: string;
    dateRange: string;
    description: string;
    bulletPoints: string[];
}

const experienceList: ExperienceItem[] = [
    {
        title: 'Full-Stack Engineer',
        company: 'Class Technologies Inc.',
        dateRange: '2021-2023',
        description: 'As a Full Stack Engineer at Class Technologies, I excelled in both the creation and maintenance of React-powered admin and in-app pages.',
        bulletPoints: [
            'Designed and implemented TypeScript API endpoints hosted on AWS Lambda via the Serverless framework.',
            'Refactored and optimized mountains of legacy code.',
            'Efficiently managed PostgreSQL databases.',
            'Contributed to application integrations, front-end localization, and punctual deployments to production.',
            'In leadership roles, I led daily stand-ups, participated in hiring processes, and mentored new developers.',
            'Excelled at adaptability and my commitment to project success.'
        ]
    },
    {
        title: 'Full-Stack Engineer',
        company: 'Attently Inc.',
        dateRange: '2018-2020',
        description: 'At Attently, I took a lead role in crafting and implementing sophisticated data analysis tools, which were instrumental in dissecting facial expression data for valuable customer feedback metrics.',
        bulletPoints: [
            'Implemented AWS services like Kinesis, Rekognition, DynamoDB, S3, CloudWatch, and Cognito to efficiently handle and manipulate large volumes of customer data.',
            'Collaborated closely with cross-functional teams to build React web plugins, elevating the functionality of our web applications.',
            'Built fundamental video conferencing applications using WebRTC technology.',
            'Thrived as a key contributor, readily adapting to shifting business priorities and playing a pivotal role in several strategic pivots in an early startup environment.'
        ]
    },
];



export const ExperienceSection: React.FC<ExperienceItem> = ({ title, company, dateRange, description, bulletPoints }) => {
    return (
        <div className='experience-section'>
            <div className='experience-header'>
                <div>
                    <Typography variant='h5'>{company}</Typography>
                </div>
                <div className='experience-info'>
                    <Typography>{title}</Typography>
                    <Typography>{dateRange}</Typography>
                </div>
            </div>
            <hr />
            <div className='experience-text-div'>
                <Typography>{description}</Typography>
                <div className='bullet-points'>
                    <Typography component='ul'>
                        {bulletPoints.map((point, index) => (
                            <li key={index}>
                                <Typography>{point}</Typography>
                            </li>
                        ))}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <div className='card-list'>
            <div className='background-section-title'>
                <Typography variant='h4' >Experience</Typography>
            </div>
            {experienceList.map((item, index) => <ExperienceSection 
                key={index} 
                title={item.title}
                company={item.company}
                dateRange={item.dateRange}
                description={item.description}
                bulletPoints={item.bulletPoints}
            />)}
        </div>
    );
}

export default Experience;