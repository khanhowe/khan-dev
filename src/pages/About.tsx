import Page from "../components/Page";
import '../styles/App.css';
import '../styles/About.scss';
import useFadeInEffect from "../hooks/useFadeInEffect";
import SectionTitle from "../components/SectionTitle";
import React from "react";
import SkillList from "../components/skills/SkillList";
import { Box } from "@mui/material";
import ResponsiveTypography from "../components/ResponsiveText";
// import ProfilePicture from "../components/ProfilePicture";



const CenteredIntro: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                height: '100vh',
            }}
        >
            <ResponsiveTypography variant="h1">
                Hi there, I'm Khan.
            </ResponsiveTypography>
            <ResponsiveTypography variant="h2">
                A Software Engineer ↓
            </ResponsiveTypography>
            {/* <ProfilePicture/> */}
        </Box>
    );
};

const AboutSection: React.FC = () => {
    return (
        <Box>
            <ResponsiveTypography variant="h2">
                About <hr/>
            </ResponsiveTypography>
            <ResponsiveTypography variant="body1">
                Based in Tacoma, Washington, I have a passion for writing high-quality, unit-tested, and maintainable code.
            </ResponsiveTypography>
            <ResponsiveTypography 
                variant="body1"
                sx={{ marginTop: '1rem' }}
            >
                With 6+ years working in the tech industry and 10+ years writing code, I have experience in both front-end and back-end development.
            </ResponsiveTypography>
            <ResponsiveTypography 
                variant="body1"
                sx={{ marginTop: '1rem' }}
            >
                Strongly valuing communication, collaboration, and a friendly working environment. I am always looking for opportunities to learn and grow as a developer.
            </ResponsiveTypography>
        </Box>
    );
};


const About: React.FC  = () => {
    const isVisible = useFadeInEffect();
    return (
        <Page>
            <div id='About'>
                <div className={`about ${isVisible ? 'fade-in' : 'fade-out'}`}>
                    <CenteredIntro/>
                    <AboutSection/>
                </div>
            </div>
            <div id='Skills'>
                <SectionTitle title='Technologies and Languages'/>
                <SkillList/>
            </div>
        </Page>
    );
}

export default About;