import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Page from "../components/Page";
import useFadeInEffect from "../hooks/useFadeInEffect";
import '../styles/App.css';
import '../styles/Projects.css';

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
        url: 'https://www.khanhowe.dev'
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
      <Grid item xs={12} sm={6}>
          <Card style={{ minHeight: '400px', display: "flex", flexDirection: "column" }}>
            <CardActionArea href={url}>
              <CardMedia
                component="img"
                height="200px"
                image={imageSrc}
                alt="project-1"
              />
              <CardContent style={{ flex: 1 }}>
                <Typography gutterBottom className='project-title' variant="h6" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {repoUrl && <Button href={repoUrl}>GitHub</Button>}
            </CardActions>
          </Card>
      </Grid>
    );
  };

const Projects: React.FC = () => {
    const isVisible = useFadeInEffect();
    return (
        <Page>
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