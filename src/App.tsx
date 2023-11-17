import './styles/App.css';
import NameTitle from './components/NameTitle';
import './styles/Home.css';
import { Paper, ThemeProvider, useMediaQuery } from '@mui/material';
import theme from './theme';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Background from './pages/Background';
import Footer from './components/Footer';

const AppBody: React.FC = () => (
  <Router>
    <NameTitle name='Khan Howe'/>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/background' element={<Background/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  </Router>
);


function App() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className='view-paper'>
          <AppBody/>
        </div>
        {isSmallScreen && <Footer/>}
      </div>
    </ThemeProvider>
  );
}

export default App;
