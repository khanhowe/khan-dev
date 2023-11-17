import Page from "../components/Page"
import '../styles/Background.css';
import Eductation from "./Education";
import Experience from "./Experience";

const Background: React.FC = () => {
    return (
        <Page>
            <Experience/>
            <Eductation/>
        </Page>
    )
}

export default Background;