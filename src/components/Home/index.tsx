import { lazy } from 'react';
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../ContentBlock"));

const Home = () => {
    return(
        <Container>
            <ScrollToTop />
            <ContentBlock
                direction="right"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="developer.svg"
                id="intro"
            />
            
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
            <p>Feel free to explore the features and functionalities.</p>

        </Container>
    );
};

export default Home;