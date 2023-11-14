import { Typography } from "@mui/material";
import Page from "../components/Page";
import '../styles/Experience.css';

interface ExperienceSectionProps {
    // LogoPath: string;
    // CompanyName: string;
    // JobTitle: string;

}

const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
    return (
        <div className='experience-div'>
            <div>
                <img src='/class.jpg' alt='class-logo' className='company-logo'/>
            </div>
            <div className='experience-text-div'>
                <Typography variant='h5'>Full-stack Engineer</Typography>
                <Typography variant='h6'>Class Technologies Inc.</Typography>
                <Typography>2021-2023</Typography>
                <Typography>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </Typography>
            </div>
        </div>  
    );
};

const Experience: React.FC = () => {
    console.log('test');
    return (
        <Page>
            <div className='card-list'>
                <ExperienceSection/>
                <hr/>
                <ExperienceSection/>
            </div>
        </Page>
    );
}

export default Experience;