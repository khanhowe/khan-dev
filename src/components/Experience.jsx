import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import ExperienceCard from './ExperienceCard';
import content from '../content.js';
export function Experience(props) {
    return (
        <>
            <ExperienceList/>
        </>       
    )
}



function ExperienceList(props) {
    return (
        <Grid container>
            <Grid lg={2} md={2} sm={1} xs={0}/>
            <Grid lg={8} md={8} sm={10} xs={12}>
                {content.experience.map(item => {
                    return <ExperienceCard experience={item} />
                })}
                {/* <ExperienceCard experience={content.experience[0]}/> */}
            </Grid>
            <Grid lg={2} md={2} sm={1} xs={0}/>

        </Grid>
    )
}


// function AttentlyCard(props) {
//     return (
//         <div>
//             <WorkIcon imageSrc='https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/mxfrod48tmw9ilt5fquv'/>
//             <h2>Attently Inc.</h2>
//             <hr/>
//             <p>Test</p>
//         </div>
                   
//     )
// }

function EpscorCard(props) {
    return(
        <div>

        </div>
    )
}

