import './styles/App.css';
import { ThemeProvider} from '@mui/material';
import theme from './theme';
import About from './pages/About';
import Projects from './pages/Projects';
import Background from './pages/Background';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
        <div className='view-paper'>
            {/* <Header/> */}
            <div className='app-body'>
              <About/>
              <Background/>
              <Projects/>
            </div>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
