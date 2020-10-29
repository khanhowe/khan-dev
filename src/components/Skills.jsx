import { Card, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

export default function Skills(props) {
    const {skillSections} = props;
    return (
        <div>
            {
                skillSections.map( (section, index) => {
                    return <SkillBox key={index} name={section.name} skills={section.skills} />
                })
            }
        </div>
    )
}


function SkillBox(props) {
    const {name, skills} = props;
    const classes = useStyles();
    return (
        <Card className={classes.skillsCard} elevation={3}>
            <CardHeader title={name} className={classes.header}/>
            <Grid container className={classes.skillBox} justify="center">
                {skills.map((skill, index)=> {
                    return <Skill key={index} name={skill.name} icon={skill.iconDir} />
                })}
            </Grid>
        </Card>
    )
}

function Skill(props) {
    const {icon, name} = props;
    const classes = useStyles();
    return (
        <Grid item lg={2} md={4} sm={6} xs={6} >
            <img src={icon} alt={name} className={classes.skillIcon}/>
            <Typography className={classes.skillName}>
                {name}
            </Typography>
        </Grid>
    )
}


const useStyles = makeStyles({
    root: {

    },
    header: {
        color: '#e4eddb',
        textShadow: '2px 2px black',
        backgroundColor: '#144d53',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/purty-wood.png")',
        fontSize: '3rem'
    },
    skillsCard: {
        margin: '6% 15%',
        backgroundColor:'#e4eddb',
    },
    skillBox: {
        margin: '2% 0%',
        textAlign: 'center'
    },
    skillName: {
        fontSize: '1.2rem',
        
    },
    skillIcon: {
        width: '120px',
    }
})

/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */
