import React from 'react';
import {Card, Paper, Grid, makeStyles, Typography} from '@material-ui/core';
import { Email} from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import Fab from '@material-ui/core/Fab';

export default function Contact(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.contactsContainer}>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <LinkedInTag name="Khan Howe" emailImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoivTndKzfti6J32wwJPwH3YAt0fKZEI2y3Q&usqp=CAU'/>
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <EmailTag email="khanhowe@gmail.com" name="Khan Howe" emailImg='https://cdn.theorg.com/29782cad-beff-47bc-a560-3f5d07b0872e_small.jpg'/>
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GitHubTag avatar="https://avatars3.githubusercontent.com/u/12534401?s=460&v=4"/>
                </Grid>

            </Grid>
        </div>
        
    )
}

function EmailTag(props) {
    const {emailImg, email} = props;
    const classes = useStyles();
    return (
        <Card className={classes.emailTagCard}>
            <Paper className={classes.emailImageCard}>
                <img src={emailImg} alt='khan' style={{borderRadius: '50%', width: "15vh",
        height: "15vh",}}/>
            </Paper>
            
            <div className={classes.infoBox}>
                <Typography className={classes.emailTagNameText}>
                    Email
                </Typography>
                <Typography>
                    <a href={'mailto: '+email}>
                        {email}
                    </a>
                </Typography>
            </div>
            <Fab variant='extended' className={classes.emailButton} href={'mailto: '+email}>
                    <Email fontSize='large'/>
            </Fab>
        </Card>
    )
}

function LinkedInTag(props) {
    const {emailImg} = props;
    const classes = useStyles();
    const info = (
        <div className={classes.infoBox}>
            <Typography className={classes.emailTagNameText}>
                LinkedIn
            </Typography>
            <Typography>
                Looking for work!
            </Typography>
        </div>
    );
    const button = (
        <Fab 
            variant='extended' 
            className={classes.emailButton} 
            href='https://www.linkedin.com/in/khan-howe-5a1055163/'
        >
            <LinkedInIcon fontSize='large'/>
        </Fab>

    );
    return (
        <ContactCard 
            info={info} 
            button={button} 
            imageSrc={emailImg} 
            imageAlt={"LinkedIn Avatar"} 
        />
    )
}

function GitHubTag(props) {
    const {avatar} = props;
    const classes = useStyles();
    const info = (
        <div className={classes.infoBox}>
            <Typography className={classes.emailTagNameText}>
                GitHub
            </Typography>
            <Typography>
                Portfolio
            </Typography>
        </div>
    );
    const button =(
        <Fab variant='extended' className={classes.emailButton} href='https://github.com/alaska113'>
            <GitHubIcon fontSize='large'/>
        </Fab>
    );
    return (
        <ContactCard imageSrc={avatar} info={info} button={button}/>
    )
}

function ContactCard(props) {
    const {imageSrc, imageAlt, info, button} = props;
    const classes = useStyles();
    return (
        <Card className={classes.emailTagCard}>
            <ContactImage src={imageSrc} alt={imageAlt}/>
            {info}
            {button}
        </Card>

    )
}

function ContactImage(props) {
    const {src, alt} = props;
    const classes = useStyles();
    return (
        <Paper className={classes.emailImageCard} elevation={3}>
            <img src={src} alt={alt} style={{borderRadius: '50%', width: "15vh",
                height: "15vh",}}/>
        </Paper>
    )
}


const useStyles = makeStyles({
    root: {
        width: '80%', 
        margin: '10% 10% 10% 10%'
    },
    linkedInTag: {
        margin: '1% auto'
    },
    emailTagCard: {
        margin: '1% 10%',
        textAlign: 'center',
        backgroundColor: "#e4eddb",
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/tileable-wood.png")'

    },
    contactCardImage: {
        borderRadius: '50%', 
        width: "15vh",
        height: "15vh",
    },
    emailImageCard: {
        borderRadius: "50%",
        margin: "4% auto",
        padding: "1% 1%",
        width: "15vh",
        height: "15vh",
        backgroundColor: '#1a3c40'
    },
    infoBox: {
        margin: '1% auto 10% auto'
    },
    emailTagNameText: {
        color: 'black',
        fontSize: '1.8rem'
    },
    emailButton: {
        margin: '0% auto 10% auto',
        color: '#e4eddb',
        backgroundColor: '#144d53',
        '&:hover': {
            color: '#144d53',
            backgroundColor: '#e4eddb',
        }
    }
});