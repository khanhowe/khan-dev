import { Typography } from "@mui/material";
import Page from "../components/Page";
import '../styles/App.css';
import '../styles/About.scss';
import useFadeInEffect from "../hooks/useFadeInEffect";
import { useIsSmScreen } from "../hooks/useScreenSize";
import SectionTitle from "../components/SectionTitle";
import React from "react";
import SkillList from "../components/skills/SkillList";



const About: React.FC  = () => {
    const isVisible = useFadeInEffect();
    const isSmScreen = useIsSmScreen();

    return (
        <Page>
            {isSmScreen && <SectionTitle title='About Me'/>}
            <div className={`about ${isVisible ? 'fade-in' : 'fade-out'}`}>
                <div className='about-bio'>
                    <img src='/khanhowe-pic.jpeg' alt='khan-howe' className='profile-image'/>
                    <div className='about-text'>
                        <Typography>
                            I am a <b>passionate</b> Full-stack Engineer based in Tacoma, Washington with 8 years experience in SaaS application and product development. With a proven ability to produce <b>high-quality, test-driven, clean code</b>, I adapt to fit the requirements of many development practices and web-based technologies.
                        </Typography>
                        <Typography style={{marginTop: '20px'}}>
                            The way code is written is important to me, and helps me function better as a developer. I strongly value <b>communication</b>, <b>effective problem solving</b>, and <b>continuous learning</b>. These values help me function not just as a developer but as an effective team-member and human being.
                        </Typography>
                        <Typography style={{marginTop: '20px'}}>
                            If you are interested in scheduling a meeting, please reachout via LinkedIn or by email posted in the footer below!
                        </Typography>
                    </div>
                </div>
                <SectionTitle title='Skills'/>
                <SkillList/>
            </div>
        </Page>
    );
}

export default About;