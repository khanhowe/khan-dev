import './styles/App.css';
import NameTitle from './components/NameTitle';
import './styles/Home.css';
import { ThemeProvider} from '@mui/material';
import theme from './theme';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Background from './pages/Background';
import Footer from './components/Footer';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  return (
    <div>
      {!isHomeRoute && <NameTitle name='Khan Howe'/>}
      <NavBar/>
    </div>
  );
}

const AppBody: React.FC = () => {

  return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/background' element={<Background/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>

  );
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className='view-paper'>
          <Router>
            <AppBody/>
          </Router>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
