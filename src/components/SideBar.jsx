import { Paper, Grid, makeStyles, Button, Typography } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ComputerIcon from '@material-ui/icons/Computer';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const buttonList = [
    { name: "Home", icon: <HomeIcon/>, },
    { name: "About", icon: <PersonIcon/> },
    { name: "Experience", icon: <WorkIcon/> },
    { name: "Skills", icon: <ComputerIcon/> },
    { name: "Projects", icon: <BuildIcon/> },
    { name: "Education", icon: <SchoolIcon/> },
    { name: "Contact", icon: <ContactSupportIcon/> },  
];


export default function SideBar(props) {
    const {focus} = props;

    const useStyles = makeStyles({
        root: {
            backgroundColor: '#e4eddb',
            position: 'fixed',
            margin: '0.5% auto',
            width: '16%',
            height: '95vh',
            textAlign: 'center'

        },
        barInfo: {
            padding: '2% 0% 5% 0%',
            backgroundColor: '#144d53',
            backgroundImage: `url("https://www.transparenttextures.com/patterns/purty-wood.png")`,
        },
        name: {
            margin: '2% auto 0% auto',
            color: '#e4eddb',
            fontFamily: 'Berkshire Swash, cursive',
            textShadow: '2px 2px black'
        },
        hr: {
            width: '40%',
            border: '1px solid #e4eddb'
        },
        title: {
            color: '#e4eddb',
            textShadow: '2px 2px black'
            
        }
    });
    const classes = useStyles();

    function checkIfSetActive(focus, name) {
        if (focus === name) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Grid>
            <Paper elevation={3} className={classes.root}>
                <div className={classes.barInfo}>
                    <Typography variant="h4" className={classes.name}>
                        Khan Howe
                    </Typography>
                    <hr className={classes.hr}/>
                    <Typography variant="h5" className={classes.title}>
                        Full Stack Developer
                    </Typography>
                </div>
                {buttonList.map( (button, index) => {
                    return <NavigationButton 
                        key={index} 
                        active={checkIfSetActive(focus, button.name)} 
                        name={button.name} 
                        icon={button.icon} 
                        onClick={props.onClick}   
                    /> 
                })}
            </Paper>
        </Grid>
        
    )
}

function NavigationButton(props) {
    let { active, name, icon} = props;
    
    const handleClick = () => {
        props.onClick(name);
        active=true;
    }
    const useStyles = makeStyles({
        root: {
            backgroundColor: active ? '#144d53' : 'none',
            backgroundImage: active ? 'url("https://www.transparenttextures.com/patterns/black-orchid.png")' : 'none',
            opacity: 1,
            margin: 'None auto',
            width: "100%",
            height: '12%',
            textTransform:'none',
            borderRadius: '0%',
        },
        buttonGrid: {
            margin: '0% 10%',
            textAlign: 'left'
        },
        buttonIcon: {
            color: active ? '#e4eddb' : '#1a3c40',
            opacity: 1,
            fontSize: '2rem',
            textAlign: 'center'
        },
        buttonText: {
            opacity: 1,
            color: active ? '#e4eddb' : '#1a3c40',
            fontSize: '1.2rem',
            margin: '10% 5%'
        }
    });
    const classes = useStyles();
    return (
        <Button elevation={2} className={classes.root} onClick={handleClick}>
            <Grid container className={classes.buttonGrid}>
                <Grid item lg={4} >
                    <div className={classes.buttonIcon}>
                        {icon}
                    </div>
                    
                </Grid>
                <Grid item lg={8}>
                    <div className={classes.buttonText}>
                        <Typography variant="p" >
                            {name}
                        </Typography>
                    </div>
                    
                </Grid>
            </Grid>
            
            
                
                
            
        </Button>
    )
}