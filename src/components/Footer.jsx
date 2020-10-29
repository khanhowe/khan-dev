import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
export default function Footer(props) {
    const d = new Date();
    const n = d.getFullYear();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                {n}
            </Typography>
            <Typography className={classes.text}>
                Icons made by <a className={classes.link} href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a className={classes.link} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </Typography>
        </div>
    )


}

const useStyles = makeStyles({
    root: {
        backgroundColor: '#144d53',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/purty-wood.png")',
    },
    text: {
        textAlign: 'center',
        color: '#e4eddb'
    },
    link: {
        color: '#e4eddb'
    }


});