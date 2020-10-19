import { Paper, Grid, makeStyles, Container, Button } from '@material-ui/core';
import React, {useState} from 'react';
import PersonIcon from '@material-ui/icons/Person';

export default function SideBar(props) {
    const useStyles = makeStyles({
        root: {
            backgroundColor: '#e4eddb',
            position: 'fixed',
            margin: '0.5% auto',
            width: '16%',
            height: '95vh',
            textAlign: 'center'

        },
    });
    const classes = useStyles();
    return (
        <Grid >
            <Paper elevation={3} className={classes.root}>
                <NavigationButton name="About" icon={<PersonIcon/>}/>
            </Paper>
        </Grid>
        
    )
}

function NavigationButton(props) {
    const {name, icon} = props;
    const [active, setActive] = useState(false);

    const useStyles = makeStyles({
        root: {
            // backgroundColor: '#19d3da',
            margin: 'None auto',
            width: "100%"
        }
    });
    const classes = useStyles();
    return (
        <Button elevation={2} className={classes.root}>
            <span>
                {icon}
                {name}
            </span>
        </Button>
    )
}