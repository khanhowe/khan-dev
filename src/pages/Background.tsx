import Page from "../components/Page"
import useFadeInEffect from "../hooks/useFadeInEffect";
import '../styles/App.css';
import Eductation from "./Education";
import Experience from "./Experience";

const Background: React.FC = () => {
    const isVisible = useFadeInEffect();
    return (
        <Page>
            <div className={isVisible ? 'fade-in' : 'fade-out'}>
                <Experience/>
                <Eductation/>
            </div>
        </Page>
    )
}

export default Background;