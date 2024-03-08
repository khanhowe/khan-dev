import { Box, Tooltip } from '@mui/material';
import '../styles/Experience.scss';
import SectionTitle from '../components/SectionTitle';
import ResponsiveTypography from '../components/ResponsiveText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    IconDefinition,
    faAws,
    faNode,
    faPython,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
    faBoltLightning,
    faDatabase,
    faServer,
} from '@fortawesome/free-solid-svg-icons';

interface ExperienceItem {
    title: string;
    company: string;
    dateRange: string;
    description: string;
    bulletPoints: string[];
    icons?: JSX.Element[];
}

export const createStackIcon = (
    label: string,
    color: string,
    icon: IconDefinition,
) => (
    <Tooltip title={label}>
        <FontAwesomeIcon
            icon={icon}
            color={color}
            size="2x"
            style={{ padding: '8px' }}
        />
    </Tooltip>
);

const experienceList: ExperienceItem[] = [
    {
        title: 'Full-Stack Engineer',
        company: 'Class Technologies Inc.',
        dateRange: 'January 2021 - May 2023',
        description:
            'Led both frontend and backend development for a fast-paced conferencing ed-tech company.',
        bulletPoints: [
            'Designed and implemented TypeScript API endpoints hosted on AWS Lambda via the Serverless framework.',
            'Refactored and optimized mountains of legacy code.',
            'Efficiently managed PostgreSQL databases.',
            'Contributed to application integrations, front-end localization, and punctual deployments to production.',
            'In leadership roles, I led daily stand-ups, participated in hiring processes, and mentored new developers.',
            'Excelled at adaptability and my commitment to project success.',
        ],
        icons: [
            createStackIcon('PostgreSQL', 'rgb(105, 158, 202)', faDatabase),
            createStackIcon('Serverless', 'rgb(253, 87, 80)', faBoltLightning),
            createStackIcon('React', 'rgba(8, 126, 164, 0.8)', faReact),
            createStackIcon('Node.js', 'rgb(67, 133, 61)', faNode),
            createStackIcon('AWS', 'rgb(255, 153, 0)', faAws),
        ],
    },
    {
        title: 'Full-Stack Engineer',
        company: 'Attently Inc.',
        dateRange: 'June 2018 - April 2020',
        description:
            'Designed, developed, and delivered computer vision web applications using data science metrics.',
        bulletPoints: [
            'Implemented AWS services like Kinesis, Rekognition, DynamoDB, S3, CloudWatch, and Cognito to efficiently handle and manipulate large volumes of customer data.',
            'Collaborated closely with cross-functional teams to build React web plugins, elevating the functionality of our web applications.',
            'Built fundamental video conferencing applications using WebRTC technology.',
            'Thrived as a key contributor, readily adapting to shifting business priorities and playing a pivotal role in several strategic pivots in an early startup environment.',
        ],
        icons: [
            createStackIcon('DynamoDB', 'rgb(255, 153, 0)', faAws),
            createStackIcon('Express.js', 'black', faServer),
            createStackIcon('React', 'rgba(8, 126, 164, 0.8)', faReact),
            createStackIcon('Node.js', 'rgb(67, 133, 61)', faNode),
            createStackIcon('Python', '#3776ab', faPython),
        ],
    },
];

export const ExperienceSection: React.FC<ExperienceItem> = ({
    title,
    company,
    dateRange,
    description,
    icons,
}) => {
    return (
        <Box
            sx={{
                padding: '3rem',
                marginBottom: '2rem',
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
                borderRadius: '10px',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
                },
            }}
        >
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}
                >
                    <ResponsiveTypography variant="body1">
                        <b>{company}</b>
                    </ResponsiveTypography>
                    <ResponsiveTypography variant="body2">
                        {dateRange}
                    </ResponsiveTypography>
                    <ResponsiveTypography
                        variant="body2"
                        sx={{
                            display: {
                                xs: 'inherit',
                                sm: 'none',
                            },
                        }}
                    >
                        {title}
                    </ResponsiveTypography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <ResponsiveTypography
                        variant="body2"
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'inherit',
                            },
                        }}
                    >
                        {title}
                    </ResponsiveTypography>
                    <Box>{icons?.map((icon) => icon)}</Box>
                </Box>
            </Box>
            <hr />
            <div className="experience-text-div">
                <ResponsiveTypography variant="body2">
                    {description}
                </ResponsiveTypography>
            </div>
        </Box>
    );
};

const Experience: React.FC = () => {
    return (
        <div style={{ marginTop: '4rem' }}>
            <SectionTitle title="Professional Experience" />
            <div className="card-list" id="Experience">
                {experienceList.map((item, index) => (
                    <ExperienceSection
                        key={index}
                        title={item.title}
                        company={item.company}
                        dateRange={item.dateRange}
                        description={item.description}
                        bulletPoints={item.bulletPoints}
                        icons={item.icons}
                    />
                ))}
            </div>
        </div>
    );
};

export default Experience;
