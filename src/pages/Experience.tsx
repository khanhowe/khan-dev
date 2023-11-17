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
            'As a Full Stack Engineer at Class Technologies, I excelled in both front-end and back-end development, creating and maintaining React.js-powered admin and in-app pages while seamlessly integrating web views for various client teams. My back-end expertise spanned designing and implementing TypeScript/Node.js API endpoints, optimizing legacy code, and efficiently managing PostgreSQL databases. Proficient in tools like AWS, I contributed to application integrations, front-end localization, and punctual deployments to production. In leadership roles, I led daily stand-ups, participated in hiring processes, and mentored new developers, showcasing my adaptability and commitment to project success.',
        ]
    },
    {
        title: 'Full-Stack Engineer',
        company: 'Attently Inc.',
        dateRange: '2018-2020',
        logoSource: '/attently.jpeg',
        description: [
            'At Attently, I took a lead role in crafting and implementing sophisticated data analysis tools and processing systems, which were instrumental in dissecting facial expression data for valuable customer feedback metrics. My tech stack included an array of AWS services like Kinesis, Rekognition, DynamoDB, S3, CloudWatch, and Cognito to efficiently handle and manipulate large volumes of customer data. I collaborated closely with cross-functional teams to engineer React.js web plugins, elevating the functionality and user experience of our web applications. Notably, I architected and brought to life fundamental video conferencing applications using cutting-edge WebRTC technology. In the dynamic startup environment, I thrived as a key contributor, readily adapting to shifting business priorities and playing a pivotal role in several strategic pivots.',
        ]
    },
];



const ExperienceSection: React.FC<ExperienceItem> = ({ title, company, dateRange, logoSource, description }) => {
    return (
        <div className='experience-section'>
            <div className='experience-header'>
                <div className='company-logo'>
                    <img src={logoSource} alt='class-logo' className='company-logo-img'/>
                </div>
                <div className='experience-info'>
                    <Typography variant='h5'>{title}</Typography>
                    <Typography variant='h6'>{company}</Typography>
                    <Typography>{dateRange}</Typography>
                </div>
            </div>
            <hr/>
            <div className='experience-text-div'>
                {description.map((paragraph, index) => <Typography key={index}>{paragraph}</Typography>)}
            </div>
        </div>  
    );
};

const Experience: React.FC = () => {
    console.log('test');
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
                logoSource={item.logoSource}
                description={item.description}
            />)}
        </div>
    );
}

export default Experience;