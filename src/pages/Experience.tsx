import { Typography } from "@mui/material";
import '../styles/Experience.css';

const ExperienceSection: React.FC = () => {
    return (
        <div className='experience-div'>
            <div>
                <img src='/class.jpg' alt='class-logo' className='company-logo'/>
            </div>
            <div className='experience-text-div'>
                <Typography variant='h5'>Full-stack Engineer</Typography>
                <Typography variant='h6'>Class Technologies Inc.</Typography>
                <Typography>2021-2023</Typography>
                <Typography>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</Typography>
            </div>
        </div>  
    );
};

const Experience: React.FC = () => {
    console.log('test');
    return (
        <div className='card-list'>
            <ExperienceSection/>
            <hr/>
            <ExperienceSection/>
        </div>
    );
}

export default Experience;