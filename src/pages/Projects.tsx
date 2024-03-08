import { Box, Grid, Link } from '@mui/material';
import Page from '../components/Page';
import '../styles/App.css';
import SectionTitle from '../components/SectionTitle';
import ResponsiveTypography from '../components/ResponsiveText';
import { createStackIcon } from './Experience';
import { faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

interface ProjectCardProps {
    title: string;
    description: string;
    url: string;
    repoUrl?: string;
    year: number;
    icons: JSX.Element[];
}

const projects: ProjectCardProps[] = [
    {
        title: 'khanhowe.dev',
        description:
            "This is the page you're on now! Check out the repo to see how it was built!",
        url: 'https://www.khanhowe.dev',
        repoUrl: 'https://github.com/khanhowe/khan-dev',
        year: 2023,
        icons: [
            createStackIcon('React', 'rgba(8, 126, 164, 0.8)', faReact),
            createStackIcon('Node.js', 'rgb(67, 133, 61)', faNode),
        ],
    },
    {
        title: 'Robert Willcox Art',
        description:
            'An art portfolio. Built to highlight scenes of contemporary beauty products.',
        url: 'https://www.robertwillcox.com',
        year: 2021,
        icons: [
            createStackIcon('React', 'rgba(8, 126, 164, 0.8)', faReact),
            createStackIcon('Next.js', 'black', faNodeJs),
            createStackIcon('Node.js', 'rgb(67, 133, 61)', faNode),
        ],
    },
    {
        title: 'Legacy Portfolio',
        description:
            'My old portfolio. Certainly stylized, but I have learned much since.',
        url: 'https://khan-dev-legacy-5722516bc6f3.herokuapp.com',
        year: 2020,
        icons: [
            createStackIcon('React', 'rgba(8, 126, 164, 0.8)', faReact),
            createStackIcon('Node.js', 'rgb(67, 133, 61)', faNode),
        ],
    },
    {
        title: 'Xplicit',
        description:
            'Tool that identifies explicit language in song lyrics. This is an older project.',
        url: 'https://xplicit-website.herokuapp.com',
        year: 2020,
        icons: [
            createStackIcon('MongoDB', 'rgb(0, 237, 100)', faDatabase),
            createStackIcon('Express.js', 'black', faServer),
            createStackIcon('React', 'rgba(8, 126, 164, 0.8)', faReact),
            createStackIcon('Node.js', 'rgb(67, 133, 61)', faNode),
        ],
    },
];

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    url,
    repoUrl,
    year,
    icons,
}) => {
    return (
        <Box
            sx={{
                width: '100%',
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Link href={url}>
                    <ResponsiveTypography variant="body1" gutterBottom>
                        <b>{title}</b>
                    </ResponsiveTypography>
                </Link>
                <ResponsiveTypography variant="body2">
                    {year}
                </ResponsiveTypography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                }}
            >
                {icons?.map((icon) => icon)}
            </Box>
            <ResponsiveTypography variant="body2">
                {description}
            </ResponsiveTypography>
            {repoUrl && (
                <Link href={repoUrl}>
                    <ResponsiveTypography variant="body2">
                        GitHub
                    </ResponsiveTypography>
                </Link>
            )}
        </Box>
    );
};

const Projects: React.FC = () => {
    return (
        <Box id="Projects" sx={{ marginTop: '4rem' }}>
            <SectionTitle title="Projects" />
            <Page>
                <div>
                    <div>
                        <Grid container spacing={1}>
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    year={project.year}
                                    title={project.title}
                                    description={project.description}
                                    url={project.url}
                                    repoUrl={project.repoUrl}
                                    icons={project.icons}
                                />
                            ))}
                        </Grid>
                    </div>
                </div>
            </Page>
        </Box>
    );
};

export default Projects;
