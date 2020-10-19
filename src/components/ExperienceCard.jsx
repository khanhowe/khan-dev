import React, { useState } from 'react';
import {Grid, makeStyles,Card, CardActions} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function ExperienceCard(props) {
    const {experience: {title, position, imageSrc, details, period, location}} = props;
    const useStyles = makeStyles({
        root: {
            margin: '2% 0%'
        }
    });
    const classes = useStyles();
    return (
        <Card elevation={3} className={classes.root}>
            <Grid container>
                <Grid xs={3}>
                    <WorkIcon imageSrc={imageSrc}/>
                </Grid>

                <Grid xs={9}>
                    <WorkTitle title={title} position={position} />
                </Grid>
            </Grid>
            <hr style={{width: '75%'}}/>
            <Grid container>
                <WorkDescription details={details}/>
            </Grid>
            <TimePlace period={period} location={location}/>
        </Card>
    )
}

function WorkTitle(props) {
    const {title, position} = props;
    return (
        <div>
            <Typography variant="h3" component="h3" >
                {title}
            </Typography>
            <Typography variant="h6" component="h6">
                {position}
            </Typography>
        </div>
    )
}

function WorkDescription(props) {
    const {details} = props;
    return (
        <div>
            <ul>
                {
                    details.map(detail => {
                        return (
                            <li>
                                <Typography>
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
    const useStyles = makeStyles({
        root: {
            backgroundColor: '#144d53'
        },
        text: {
            color: '#e4eddb',
        }
    });
    const classes = useStyles();
    return(
        <CardActions className={classes.root}>
            <Typography className={classes.text}>
                {period + '. ' + location}
            </Typography>
        </CardActions>
    )
}


function WorkIcon(props) {
    const {imageSrc} = props;
    return (
        <div style={{textAlign: 'center'}}>
            <img 
                src={imageSrc} 
                style={{
                    borderRadius: '50%',
                    width: "50%",
                    
                }}
                alt='attently'    
            />
        </div>
    )
}

