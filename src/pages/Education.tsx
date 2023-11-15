import { Typography } from "@mui/material";
import Page from "../components/Page";

const Eductation: React.FC = () => {
    console.log('education');
    return (
        <Page>
            <div>
                <Typography>Education</Typography>
                <Typography>University of Alaska Fairbanks</Typography>
                <Typography>Physics Stuff</Typography>
                <Typography>Computer Science stuff</Typography>
            </div>
        </Page>
    );
};

export default Eductation;