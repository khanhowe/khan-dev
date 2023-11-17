import { Typography } from "@mui/material";
import Page from "../components/Page";
import { useNavigate } from "react-router-dom";

const Home: React.FC  = () => {
    const navigate = useNavigate();
    return (
        <Page>
            <div className='home'>
                <div>
                    <Typography variant="h3">Hey there, I'm Khan.</Typography>
                    <Typography variant="h5">A Full-Stack Engineer.</Typography>
                    <Typography variant="h5" style={{marginTop: '10px'}}>Check out my <a href=''>resume</a> or learn more about me <span className='about-link' onClick={() => {navigate('/about')}}>here</span>.</Typography>
                </div>
            </div>
        </Page>
    );
}

export default Home;