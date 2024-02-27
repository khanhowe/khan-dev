import './styles/App.css';
import { ThemeProvider} from '@mui/material';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Background from './pages/Background';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className='view-paper'>
          <Router>
            <Header/>
            <div className='app-body'>
              <About/>
              <Background/>
              <Projects/>
            </div>
          </Router>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
