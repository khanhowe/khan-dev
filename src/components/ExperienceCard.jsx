import React from 'react';
import {Grid, makeStyles,Card, CardActions} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


export default function ExperienceCard(props) {
    const {
        experience: {
            title, 
            position, 
            imageSrc, 
            details, 
            period, 
            location
        }
    } = props;

    const classes = useStyles();
    
    return (
        <Card elevation={3} className={classes.root}>
            <Grid container className={classes.header}>
                <Grid item xs={4}>
                    <WorkIcon imageSrc={imageSrc}/>
                </Grid>

                <Grid item xs={8}>
                    <WorkTitle title={title} position={position} />
                </Grid>
            </Grid>
            <Grid container>
                <WorkDescription details={details}/>
            </Grid>
            <TimePlace period={period} location={location}/>
        </Card>
    )
}

function WorkTitle(props) {
    const {title, position} = props;
    const classes = useStyles();
    return (
        <div className={classes.title}>
            <Typography variant="h2" component="h3" >
                {title}
            </Typography>
            <Typography variant="h5" component="h6">
                {position}
            </Typography>
        </div>
    )
}

function WorkDescription(props) {
    const {details} = props;
    const classes = useStyles();

    return (
        <div className={classes.description}>
            <ul>
                {
                    details.map( (detail, index) => {
                        return (
                            <li key={index} className={classes.listItem}>
                                <Typography className={classes.descriptionText}>
                                    {detail}
                                </Typography>
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}

function TimePlace(props) {
    const {period, location} = props;
    const classes = useStyles();
    return(
        <CardActions className={classes.footer}>
            <Typography className={classes.footerText}>
                {period + '. ' + location}
            </Typography>
        </CardActions>
    )
}


function WorkIcon(props) {
    const {imageSrc} = props;
    const classes = useStyles();
    return (
        <div className={classes.logo}>
            <img 
                src={imageSrc} 
                style={{
                    width: "150px",
                    
                }}
                alt='attently'    
            />
        </div>
    )
}


const useStyles = makeStyles({
    root: {
        margin: '10% 0%',
        backgroundColor: '#e4eddb',
    },
    header: {
        padding: '2% 4%',
        backgroundColor: '#144d53',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/purty-wood.png")',
    },
    title: {
        margin: '0% 0% 0% 2%',
        fontSize: '2rem',
        color: '#e4eddb',
        textShadow: '2px 2px black'
    },
    logo: {
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        textAlign: 'center'
    },
    listItem: {
    },
    description: {
        margin: '0% auto 2% auto',
        padding: '0% 10%'
    },
    descriptionText: {
        fontSize: '1.5rem',
        lineHeight: 1.8
    },
    footer: {
        backgroundColor: '#144d53'
    },
    footerText: {
        color: '#e4eddb',
    }
});

