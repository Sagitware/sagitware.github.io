import { lazy } from 'react';


const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
    return(
        <Container>
            <ScrollToTop />
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
            <p>Feel free to explore the features and functionalities.</p>

        </Container>
    );
};

export default Home;