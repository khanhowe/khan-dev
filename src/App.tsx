import './styles/App.css';
import NameTitle from './components/NameTitle';
import './styles/Home.css';
import { Paper, ThemeProvider } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';
import theme from './theme';
import NavBar from './components/NavBar';
import Page from './components/Page';
import { useState } from 'react';

function App() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container spacing={2}>
          <Grid xs={0} md={2}></Grid>
          <Grid xs={12} md={8}>
            <Paper elevation={3} className='view-paper'>
              <NameTitle name='Khan Howe'/>
              <NavBar pageNumber={pageNumber} setPageNumber={setPageNumber}/>
              <Page PageNumber={pageNumber}/>
            </Paper>
          </Grid>
          <Grid xs={0} md={2}></Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
