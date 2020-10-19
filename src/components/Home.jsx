import { Avatar, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React, {useState, useEffect, useRef} from 'react';
import useOnScreen from "../useOnScreen";
import About from "./About";
import {Experience } from "./Experience";
import Section from "./Section";
import content from '../content.js';
export default function Home(props) {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-300px');
    console.log(onScreen);
  return (
    <div>
      <HomePaper />
    </div>
  );
}

function HomePaper(props) {
  const useStyles = makeStyles({
    root: {
      backgroundColor: "#e4eddb",
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
      margin: "0.5% auto",
      // padding: "1%",
    },
  });
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
        <Intro/>
        <Section title="About" content={<About about={content.about}/>}/>
        <Section title="Experience" content={<Experience/>} />
        
    </Paper>
  );
}


function Intro(props) {
    const useStyles = makeStyles({
       root: {
           backgroundColor: "#307672",
           backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")`,
           margin: '1% none',
           padding: '1%'
       } 
    });
    const classes = useStyles();
    return (  
      <Grid container className={classes.root}>
          <Grid item lg={6} sm={12} xs={12}>
              <ProfilePicture />
          </Grid>
          <Grid item lg={6} sm={12} xs={12}>
              <Greeting />
          </Grid>
      </Grid>
    )
}

function ProfilePicture(props) {
  const useStyles = makeStyles({
    root: {
      backgroundColor: "#eeeeee",
      borderRadius: "50%",
      margin: "0% auto",
      padding: "0.5% 0.5%",
      width: "30vh",
      height: "30vh",
    },
    avatar: {
      width: "30vh",
      height: "30vh",
    },
  });
  const picSource = "https://i3.sndcdn.com/avatars-000353656214-27v5ay-t500x500.jpg";
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
      color: "#eeeeee",
      fontFamily: "Merriweather",
      textAlign: 'center'
    },
  });
  const classes = useStyles();

  return (
    <div>
        <h1 className={classes.root}>Khan Howe</h1>
        <h2 className={classes.root}>Full Stack Developer</h2>
    </div>

  )
}
