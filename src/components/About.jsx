import { Card, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

export default function About(props) {
    const {about} = props;

    const classes = useStyles();
    return (
        <Card elevation={3} className={classes.root}>
            <AboutText text={about.intro} className={classes.aboutText}/>    
            <CurrentFocus className={classes.currentFocus}/>
        </Card>
    )
}

function AboutText(props) {
    const {text} = props;

    const classes = useStyles();
 return (
    <Typography variant="h5" component="h5" className={classes.aboutText} >
        {text}
    </Typography>
 )
}

function CurrentFocus(props) {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h5" className={classes.currentFocus} >
                Current Focus: 
            </Typography>
            <Link variant="h5" to="">
                React
            </Link>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        margin: '4% 4%',
        padding: '2% 2%'
    },
    aboutText: {
        textAlign: 'center'
    },
    currentFocus: {
        marginTop: '2%',
        textAlign: 'left',
        display: 'inline'

    },
    focusLink: {
        display: 'inline'
    }
});