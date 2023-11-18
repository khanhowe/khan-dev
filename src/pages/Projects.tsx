import { Grid, Typography } from "@mui/material";
import Page from "../components/Page";
import useFadeInEffect from "../hooks/useFadeInEffect";
import '../styles/App.css';
import '../styles/Projects.css';
import { useIsSmScreen } from "../hooks/useScreenSize";
import SectionTitle from "../components/SectionTitle";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    url: string;
    repoUrl?: string;
}

const projects: ProjectCardProps[] = [
    {
        title: 'khanhowe.dev',
        description: 'This is the page you\'re on now! Check out the repo to see how it was built!',
        imageSrc: '/khanhowe.jpg',
        url: 'https://www.khanhowe.dev',
        repoUrl: 'https://github.com/khanhowe/khan-dev'
    },
    {
        title: 'Robert Willcox Art',
        description: 'An art portfolio. Built to highlight scenes of contemporary beauty products.',
        imageSrc: '/robertwillcox.jpg',
        url: 'https://www.robertwillcox.com'
    },
    {
        title: 'Legacy Portfolio',
        description: 'My old portfolio. Certainly stylized, but I have learned much since.',
        imageSrc: '/khanhowelegacy.jpg',
        url: 'https://khan-dev.herokuapp.com'
    },
    {
        title: 'Xplicit',
        description: 'Tool that identifies explicit language in song lyrics. This is an older project.',
        imageSrc: '/xplicit.jpg',
        url: 'https://xplicit-website.herokuapp.com'
    },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, url, repoUrl }) => {
    return (
        <Grid item sm={12} md={6}>
            <div className='project-card'>
                <img src={imageSrc} alt='project-preview' className='project-preview-img'/>
                <Typography variant='h5' gutterBottom><a href={url}>{title}</a></Typography>
                <Typography>{description}</Typography>
                {repoUrl && <Typography className='github-link'><a href={repoUrl}>GitHub</a></Typography>}
            </div>
        </Grid>
    )
}

const Projects: React.FC = () => {
    const isVisible = useFadeInEffect();
    const isSmScreen = useIsSmScreen();
    return (
        <Page>
            {isSmScreen && <SectionTitle title='Projects'/>}
            <div className={`projects ${isVisible ? 'fade-in' : 'fade-out'}`}>
                <div>
                    <Grid container spacing={1}>
                        {projects.map((project, index) => <ProjectCard 
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            url={project.url}
                            repoUrl={project.repoUrl}
                        />)}
                    </Grid>
                </div>
            </div>
        </Page>
    );
};

export default Projects;