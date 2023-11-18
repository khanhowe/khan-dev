import { Typography } from "@mui/material";
import Page from "../components/Page";
import '../styles/App.css';
import '../styles/About.scss';
import SkillChip, { SkillChipProps } from "../components/SkillChip";
import useFadeInEffect from "../hooks/useFadeInEffect";
import { useIsSmScreen } from "../hooks/useScreenSize";
import SectionTitle from "../components/SectionTitle";

const skillChips: SkillChipProps[] = [
    {label: 'Node.js', color: 'rgb(67, 133, 61)'},
    {label: 'TypeScript', color: '#3178c6'},
    {label: 'React', color: 'rgba(8, 126, 164, 0.8)'},
    {label: 'AWS', color: 'rgb(255, 153, 0)'},
    {label: 'Serverless', color: 'rgb(253, 87, 80)'},
    {label: 'GitHub Actions', color: 'black'},
    {label: 'Docker', color: 'rgb(13, 183, 237)'},
    {label: 'Python', color: '#3776ab'},
    {label: 'Material UI', color: 'rgb(51, 153, 255)'},
    {label: 'Next.js', color: 'black'},
    {label: 'PostgreSQL', color: 'rgb(105, 158, 202)'},
    {label: 'MongoDB', color: 'rgb(0, 237, 100)'},
    {label: 'GraphQL', color: 'rgb(229, 53, 171)'},
    {label: 'Jest.js', color: 'rgb(21, 194, 19)'},
    {label: 'DataDog', color: 'rgb(99, 44, 166)'},
    {label: 'Jira', color: '#0052CC'}
];

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
                <div className='skills'>
                    <div className='skill-chip-list'>
                        {skillChips.map((skill, index) => <SkillChip key={index} label={skill.label} color={skill.color}/>)}
                    </div>
                </div>

            </div>
        </Page>
    );
}

export default About;