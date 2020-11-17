import { Card, Link, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

export default function About(props) {
    const {about} = props;

    const classes = useStyles();
    return (
        <Card elevation={3} className={classes.root}>
            <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12} style={{textAlign: 'center'}}>
                    <img src='../../icons/computer.png' alt='about-img' style={{width: '80%', position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)'}}/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <AboutText text={about.intro} className={classes.aboutText}/>    
                    <CurrentFocus className={classes.currentFocus}/>
                </Grid>
                
            </Grid>
            
        </Card>
    )
}

function AboutText(props) {
    const classes = useStyles();
 return (
     <div>
        <Typography variant="h5" component="h5" className={classes.aboutText}>
            Passionate full stack developer and problem solver with 6 years of experience in a variety of applications in product development, scientific research, and personal projects.
        </Typography>
        <Typography variant="h5" component="h5" className={classes.aboutText}>
            Proven ability to produce high-quality, intuitive code while adapting to different development practices and technologies in team-oriented tasks.
        </Typography>
    </div>
 )
}

function CurrentFocus(props) {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h5" className={classes.currentFocus} >
                Current Focus: 
            </Typography>
            <Typography variant="h5">
                <Link variant="h5" href='https://reactjs.org/' className={classes.focusLink}>
                    React
                </Link>/
                <Link variant="h5" href='https://www.w3schools.com/html/html_responsive.asp' className={classes.focusLink}>
                    Responsive Design
                </Link>
            </Typography>

        </div>
    )
}

const useStyles = makeStyles({
    root: {
        margin: '10% 4%',
        padding: '5% 8%',
        backgroundColor: '#e4eddb',
    },
    aboutText: {
        // textAlign: 'center',
        fontSize: '1.9rem',
        lineHeight: '2.5rem',
        textAlign: 'center',
        margin: '0% auto 5% auto'
    },
    currentFocus: {
        margin: '2% 1% 0% 0%',
        display: 'inline'

    },
    focusLink: {
        margin: '0% 1% 0% 1%',
        display: 'inline',
    }
});