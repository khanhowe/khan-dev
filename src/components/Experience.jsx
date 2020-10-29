import React from 'react';
import {Grid} from '@material-ui/core';
import ExperienceCard from './ExperienceCard';
import content from '../content.js';
export function Experience(props) {
    return (
        <Grid container>
            <Grid item lg={2} md={2} sm={1} xs={false}/>
            <Grid item lg={8} md={8} sm={10} xs={12}>
                {content.experience.map( (item, index) => {
                    return <ExperienceCard key={index} experience={item} />
                })}
            </Grid>
            <Grid item lg={2} md={2} sm={1} xs={false}/>
        </Grid>
    )
}

