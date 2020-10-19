import { Grid, Hidden } from '@material-ui/core';
import React, {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import SideBar from './SideBar';
function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Route exact path="/">
        <Grid container spacing={3}>
          <Grid item lg={2} md={2} sm={0} xs={0}>
            <Hidden only={['sm', 'xs']}>
              <SideBar/>
            </Hidden>
          </Grid>
          <Grid item lg={10} md={10} sm={12} xs={12}>
            <Home/>
          </Grid>
        </Grid>
        
      </Route>
    </Router>
  );
}

export default App;
