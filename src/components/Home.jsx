import { Avatar, Grid, makeStyles, Paper} from "@material-ui/core";
import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage'

function Home(props, ref) {
  

  const useStyles = makeStyles({
      root: {
          backgroundColor: "#144d53",
          backgroundImage: `url("https://www.transparenttextures.com/patterns/purty-wood.png")`,
          margin: '1% none',
          padding: '5%'
      } 
  });
  const classes = useStyles();
  return (  
    <div ref={ref}>
      <Grid container className={classes.root}>
          <Grid item lg={2} sm={1} xs={false}/>
          <Grid item lg={8} sm={10} xs={12}>
            <ProfilePicture />
            <Greeting />
          </Grid>
          <Grid item lg={2} sm={1} xs={false}/>
      </Grid>
    </div>
  )
}

function ProfilePicture(props) {
  const useStyles = makeStyles({
    root: {
      backgroundColor: "#e4eddb",
      borderRadius: "50%",
      margin: "4% auto 10% auto",
      padding: "0.5% 0.5%",
      width: "40vh",
      height: "40vh",
    },
    avatar: {
      width: "40vh",
      height: "40vh",
    },
  });
  const picSource = "https://cdn.theorg.com/29782cad-beff-47bc-a560-3f5d07b0872e_small.jpg";
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <Avatar alt="Khan Howe" src={picSource} className={classes.avatar} />
    </Paper>
  );
}

function Greeting(props) {
  const useStyles = makeStyles({
    root: {
      margin: '1% auto 8% auto',
      
    },
    name: {
      color: '#e4eddb',
      fontSize: '4rem',
      fontFamily: 'Berkshire Swash, cursive',
      textAlign: 'center',
      textShadow: '2px 2px black'
    },
    title: {
      color: '#e4eddb',
      fontSize: '2.5rem',
      fontFamily: 'Berkshire Swash, cursive',
      textAlign: 'center',
      textShadow: '2px 2px black'
    },
    hr: {
      color: '#e4eddb',
      width: '20%'
    }

  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1 className={classes.name}>Khan Howe</h1>
        <hr className={classes.hr}/>
        <h2 className={classes.title}>Full Stack Developer</h2>
    </div>

  )
}


export default forwardRef(Home);


