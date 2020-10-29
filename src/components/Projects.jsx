import { Grid, makeStyles, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import React from 'react';

export default function Projects(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <ProjectCard className={classes.project}/>
            </Grid>
        </div>
        
        
    )
}

function ProjectCard(props) {
    const classes = useStyles();
    return (
        <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card elevation={3} className={classes.project}>
                <CardMedia className={classes.media} image='https://i.kym-cdn.com/photos/images/newsfeed/001/392/888/1a0.jpg' title="Soup time"/>
                <CardContent className={classes.content}>
                    <Typography className={classes.projectTitle}>
                        Test
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
       
    )
}

const useStyles = makeStyles({
    root: {
        margin: '2% 5% 2% 5%'
    },
    project: {
        padding: '1% 1%',
        backgroundColor: '#144d53'
    },
    media: {
        height: '20%',
        paddingTop: '56.25%', // 16:9
    },
    content: {
        backgroundColor: '#144d53',
    },
    projectTitle: {
        color: '#e4eddb'
    }
});