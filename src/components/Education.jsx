import React from 'react';
import { Card, Grid, makeStyles, Typography } from '@material-ui/core';


export default function Education(props) {
    const {educationList} = props;
    return (
        <Grid container>
            <Grid item lg={2} md={2} sm={1} xs={false}/>
            <Grid item lg={8} md={8} sm={10} xs={12}>
                {educationList.map((education, index) => (
                    <EducationCard 
                        key={index}
                        education={education}
                    />
                ))}
            </Grid>
            <Grid item lg={2} md={2} sm={1} xs={false}/>
        </Grid>
        
    )
}

function EducationCard(props) {
    const {
            education: {
                title, 
                imageSrc, 
                certification, 
                details, 
                location
            }
        } = props;

    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            
                <div className={classes.cardHeader}>
                <Grid container>

                
                    <Grid item xs={3}>
                        <EducationIcon imageSrc={imageSrc}/>
                    </Grid>
                    <Grid item xs={9}>
                        <EducationTitle title={title} certification={certification}/>
                    </Grid>
                </Grid>
                </div>

            <Grid container>
                <EducationDescription details={details} />
            </Grid>
        </Card>
    )
}


function EducationTitle(props) {
    const {title, certification} = props;
    const classes = useStyles();
    return (
        <div className={classes.title}>
            <Typography variant="h3" component="h3" >
                {title}
            </Typography>
            <Typography variant="h6" component="h6">
                {certification}
            </Typography>
        </div>
    )
}

function EducationIcon(props) {
    const {imageSrc} = props;
    const classes = useStyles();
    return (
        <div className={classes.logo}>
            <img 
                src={imageSrc} 
                style={{
                    width: "150px",
                    
                }}
                alt='edu'    
            />
        </div>
    )
}


function EducationDescription(props) {
    const {details} = props;
    const classes = useStyles();
    return (
        <div className={classes.description}>
            <ul>
                {
                    details.map( (detail, index) => {
                        return (
                            <li key={index}>
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

const useStyles = makeStyles({
    root: {
        margin: '10% 0%',
        backgroundColor: '#e4eddb',
        // padding: '2% 4%'

    },
    cardHeader:{
        backgroundColor: '#144d53',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/purty-wood.png")',
        padding: '2% 4%'
    },
    logo: {
        margin: '5% auto',
        textAlign: 'center'
    },
    title: {
        margin: '0% 0% 0% 2%',
        fontSize: '2rem',
        color: '#e4eddb',
        textShadow: '2px 2px black'
    },
    description: {
        margin: '0% auto 2% auto',
        padding: '0% 10%',
        // color: '#e4eddb'
    },
    descriptionText: {
        fontSize: '1.3rem',
        lineHeight: 1.8
    },

});