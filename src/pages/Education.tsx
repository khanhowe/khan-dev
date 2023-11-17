import { Typography } from "@mui/material";
import '../styles/Education.css';
import '../styles/Background.css';

const Eductation: React.FC = () => {
    console.log('education');
    return (
        <div className='education'>
            <div className='background-section-title'>
                <Typography variant='h4' >Education</Typography>
            </div>
            <div className='education-section'>
                <img src='uaf-westridge-aerial.jpg' alt="university-of-alaska-fairbanks-aerial" className='uaf-image'/>
                <div className='education-info'>
                    <Typography variant="h5">University of Alaska Fairbanks</Typography>
                    <div className="summary-text">
                        <Typography>B.S. Computational Physics ✅</Typography>
                        <Typography>Minor in Mathematics</Typography>
                        <Typography>Data Structures and Algorithms</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eductation;