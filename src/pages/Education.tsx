import '../styles/Education.css';
import '../styles/Background.css';
import { ExperienceSection } from "./Experience";
import SectionTitle from "../components/SectionTitle";

const Eductation: React.FC = () => {
    return (
        <div className='education' id='Education'>
            <SectionTitle title='Education'/>
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
        </div>
    );
};

export default Eductation;