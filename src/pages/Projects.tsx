import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Page from "../components/Page";
import { GitHub } from "@mui/icons-material";


interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    url: string;
}

const projects: ProjectCardProps[] = [
    {
        title: 'khanhowe.dev',
        description: 'This is the page you\'re on now! Check out the repo to see how it was built!',
        imageSrc: '/khanhowe.jpg',
        url: 'https://www.khanhowe.dev'
    },
    {
        title: 'Robert Willcox 3D Art',
        description: 'An art portfolio I built for a talented friend of mine.',
        imageSrc: '/robertwillcox.jpg',
        url: 'https://www.robertwillcox.com'
    },
    {
        title: 'Legacy Portfolio',
        description: 'My old portfolio. Certainly stylized, but I have learned much since.',
        imageSrc: '/khanhowelegacy.jpg',
        url: 'https://www.robertwillcox.com'
    },
    {
        title: 'Xplicit.io',
        description: 'Tool that identifies explicit language in song lyrics. This is an older project.',
        imageSrc: '/attently.jpeg',
        url: 'https://www.xplicit.io'
    },
];


const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, url}) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardActionArea href={url}>
                    <CardMedia
                        component='img'
                        height='200px'
                        image={imageSrc}
                        alt='project-1'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h6' component='div'>
                            {title}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a>
                        <GitHub/>
                    </a>
                </CardActions>
            </Card>
        </Grid>
    );
};

const Projects: React.FC = () => {
    console.log('projects');
    return (
        <Page>
            <div className='projects'>
                <div>
                    <Grid container spacing={1}>
                        {projects.map((project, index) => <ProjectCard 
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            url={project.url}
                        />)}
                    </Grid>
                </div>
            </div>
        </Page>
    );
};

export default Projects;