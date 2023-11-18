import { Typography } from "@mui/material";
import '../styles/Education.css';
import '../styles/Background.css';
import { ExperienceSection } from "./Experience";

const Eductation: React.FC = () => {
    return (
        <div className='education'>
            <div className='background-section-title'>
                <Typography variant='h4' >Education</Typography>
            </div>
            <ExperienceSection 
                title='B.S. Computational Physics'
                company='University of Alaska Fairbanks'
                dateRange=''
                description='Graduated with honors. ✅'
                bulletPoints={[
                    'Minor in Mathematics',
                    'Data Structures and Algorithms'
                ]}
            />
            <ExperienceSection 
                title='The Complete Web Development Bootcamp'
                company='The App Brewery'
                dateRange=''
                description='Earned a certificate of course completion. ✅'
                bulletPoints={[
                    'Solidified my expertise in both front-end and back-end development.',
                    'Built applications to strengthen my knowledge in Full-Stack and rising technologies.'
                ]}
            />
        </div>
    );
};

export default Eductation;