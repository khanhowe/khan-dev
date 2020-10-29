import { makeStyles, Typography } from '@material-ui/core';
import React, { forwardRef} from 'react';
import {useIsVisible} from './useIsVisible';

const Section = (props, ref) => {
    const {name, content} = props;
    const onScreen = useIsVisible({element: ref});
    
    // if (onScreen) {
    //     props.onScreen(name);
    // }
    
    const classes = useStyles();    
    return (
        <div ref={ref} >
            <div className={classes.name}>
                <Typography className={classes.nameText} variant="h2">
                    {name}
                </Typography>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}


const useStyles = makeStyles({
    root: {},
    name: {
        backgroundColor: "#e4eddb",
        backgroundImage: `url("https://www.transparenttextures.com/patterns/tileable-wood.png")`,
        padding: '2% 0% 2% 0%'
    },
    nameText: {
        color: '#1a3c40',
        fontFamily: 'Berkshire Swash, cursive',
        margin: '0% 3%'
    }
});

export default forwardRef(Section);