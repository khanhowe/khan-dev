import Page from "../components/Page";
import '../styles/App.css';
import '../styles/About.scss';
import useFadeInEffect from "../hooks/useFadeInEffect";
import SectionTitle from "../components/SectionTitle";
import React from "react";
import SkillList from "../components/skills/SkillList";
import { Box } from "@mui/material";
import ResponsiveTypography from "../components/ResponsiveText";
import ProfilePicture from "../components/ProfilePicture";



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
        <ProfilePicture/>
        <ResponsiveTypography variant="h1">
            Hi there, I'm Khan.
        </ResponsiveTypography>
        <ResponsiveTypography variant="body1">
            A Software Engineer
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