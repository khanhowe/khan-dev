import './styles/App.css';
import NameTitle from './components/NameTitle';
import './styles/Home.css';
import { Paper, ThemeProvider } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';
import theme from './theme';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Grid container spacing={2}>
            <Grid xs={0} md={1}></Grid>
            <Grid xs={12} md={10}>
              <Paper elevation={3} className='view-paper'>
                <NameTitle name='Khan Howe'/>
                <NavBar/>
                  <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/About' element={<About/>}/>
                  </Routes>
              </Paper>
            </Grid>
            <Grid xs={0} md={1}></Grid>
          </Grid>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
