import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
export default function Section(props) {
    const {title, content} = props;
    const useStyles = makeStyles({
        root: {},
        title: {
            backgroundColor: "#307672",
            backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")`,
        },
        titleText: {
            color: '#e4eddb'
        }
    });
    const classes = useStyles();
    return (
        <div>
            <div className={classes.title}>
                <Typography className={classes.titleText} variant="h2">
                    {title}
                </Typography>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}