import { Typography } from "@mui/material";
import '../styles/Education.css';

const Eductation: React.FC = () => {
    console.log('education');
    return (
        <div className='education'>
            <Typography variant="h5">University of Alaska Fairbanks</Typography>
            <img src='uaf-westridge-aerial.jpg' alt="university-of-alaska-fairbanks-aerial" className='uaf-image'/>
            <div className="summary-text">
                <Typography>B.S. Computational Physics ✅</Typography>
                <Typography>Minor in Mathematics</Typography>
                <Typography>Data Structures and Algorithms</Typography>
                <hr className="summary-divider"/>
            </div>
            <Typography>Test</Typography>
        </div>
    );
};

export default Eductation;