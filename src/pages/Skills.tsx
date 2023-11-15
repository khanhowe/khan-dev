import { Typography } from "@mui/material";
import Page from "../components/Page";

const Skills: React.FC = () => {
    console.log('skills');
    return (
        <Page>
            <div>
                <Typography>Skills</Typography>
                <Typography>Documentation over Comments</Typography>
                <Typography>Communication</Typography>
                <Typography>Honesty</Typography>
                <Typography>Clean Code</Typography>
                <Typography>Forever student</Typography>
                <Typography>Teamwork</Typography>
            </div>
        </Page>
    );
}

export default Skills;