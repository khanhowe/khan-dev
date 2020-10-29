import { Grid, Hidden, makeStyles, Paper } from '@material-ui/core';
import React, {useState, useRef} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import content from '../content';
import About from './About';
import Education from './Education';
import { Experience } from './Experience';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Section from './Section';
import SideBar from './SideBar';
import Footer from './Footer';
import { useScrollPercentage } from 'react-scroll-percentage'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const [focus, setFocus] = useState("Home");
  const [clickedComponent, setClickedComponent] = useState({
    clicked: false,
    component: "Home"
  });

  

  const handleFocus = (newFocus) => {
    setFocus(newFocus);
  }



  const handleClick = (name) => {
    setClickedComponent({
      clicked: true,
      component: name,
    });
  }

  return (
    <Router>
      <Route exact path="/">
        <Grid container >
          <Hidden smDown>
            <Grid item lg={2} md={2} sm={false} xs={false}>
              <SideBar focus={focus} onClick={handleClick}/>
            </Grid>
          </Hidden>
          <Grid item lg={10} md={10} sm={12} xs={12}>
            <MainPage getFocus={handleFocus} clickedComponent={clickedComponent}/>
          </Grid>
        </Grid>
      </Route>
    </Router>
  );
}

export default App;

function MainPage(props) {
  let {clickedComponent} = props;
  
  

  const [homeRef, homePercentage] = useScrollPercentage({threshold:0});
  const [aboutRef, aboutPercentage] = useScrollPercentage({threshold:0});
  const [experienceRef, experiencePercentage] = useScrollPercentage({threshold:0});
  const [skillsRef, skillsPercentage] = useScrollPercentage({threshold:0});
  const [projectsRef, projectsPercentage] = useScrollPercentage({threshold:0});
  const [educationRef, educationPercentage] = useScrollPercentage({threshold:0});
  const [contactRef, contactPercentage] = useScrollPercentage({threshold:0});

  const pages = [
    {
      name: "Home", 
      ref: homeRef,
      clickRef: useRef(),
      percentage: homePercentage,
    },
    {
      name: "About",
      ref: aboutRef,
      clickRef: useRef(),
      percentage: aboutPercentage,
      content: <About about={content.about}/>
    },
    {
      name: "Experience",
      ref: experienceRef,
      clickRef: useRef(),
      percentage: experiencePercentage,
      content: <Experience/>
    },
    {
      name: "Skills",
      ref: skillsRef,
      clickRef: useRef(),
      percentage: skillsPercentage,
      content: <Skills skillSections={content.skillSections}/>
    },
    {
      name: "Projects",
      ref: projectsRef,
      clickRef: useRef(),
      percentage: projectsPercentage,
      content: <Projects/>
    },
    {
      name: "Education",
      ref: educationRef,
      clickRef: useRef(),
      percentage: educationPercentage,
      content: <Education educationList={content.education}/>
    },
    {
      name: "Contact",
      ref: contactRef,
      clickRef: useRef(),
      percentage: contactPercentage,
      content: <Contact/>
    },
  ];

  const classes = useStyles();

  const componentInFocus = () => {
    let focus = "Home";
    const components = [];
    
    pages.forEach(page => {
      if ((0 < page.percentage) && (page.percentage < 1)) {
        components.push(page);
      }
    });
    
    if (components.length) {
      let min = components[0].percentage;
      focus = components[0].name;
      components.forEach(page => {
        if (page.percentage < min) {
          focus= page.name;
        }
      })
      // if ( (components[0].name === "Home") && (components[0].percentage < 1) ) {
      //   focus = "Home";
      // }
    }
    return focus;
  }


  if (clickedComponent.clicked) {
    const component = clickedComponent.component;
    const page = pages.find(page => page.name === component);
    scrollToRef(page.clickRef);
    clickedComponent.clicked = false;
  } else {
    props.getFocus(componentInFocus);
  }

  

  return (
    <Paper elevation={3} className={classes.mainPage}>
      
      {pages.map( (page, index) => {

        if (index===0) {
          return (
            <div key={index} ref={page.clickRef}>
              <Home 
                ref={page.ref}
              />
            </div>
          )
        } else {
          return (
            <div key={index} ref={page.clickRef}>
              <Section 
                ref={page.ref}
                name={page.name} 
                content={page.content} 
                onScreen={props.onScreen} 
              />
            </div>
          )
        }
        
      })}

      <Footer/>
    </Paper>
  )
}




const useStyles = makeStyles({
  mainPage: {
    backgroundColor: "#144d53",
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-orchid.png")',
    margin: "0.5% auto"
  },
});
