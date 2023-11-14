import { Typography } from "@mui/material";
import Page from "../components/Page";
import '../styles/About.css';

const About: React.FC  = () => {
    console.log('test');
    return (
        <Page>
            <img src='/khanhowe.jpeg' alt='khan-howe'/>
            <div className='about-text'>
                <Typography fontFamily='sans-serif' >
                    I am a passionate <b>Full-stack engineer</b> based in Tacoma, Washington with 8 years experience in SaaS application and product development. With a proven ability to produce <b>high-quality, test-driven, clean code</b>, I adapt to fit the requirements of many development practices and web-based technologies.
                </Typography>
                <Typography fontFamily='sans-serif'>
                    The way code is written is important to me, and helps me function better as a developer. I have a set of core-values, not just as a developer but as an effective team member and human being. Below are some of those values:
                </Typography>
            </div>
        </Page>
    );
}

export default About;