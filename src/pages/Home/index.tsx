import { lazy } from 'react';
import styled from 'styled-components';

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const BackToTopLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #18216d;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #667eea;
  }
`;

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return(
        <Container>
            <ScrollToTop />
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
            <p>Feel free to explore the features and functionalities.</p>
            
            <section id="about">
                <h2>About Us</h2>
                <p>Learn more about our company and what we do. We are committed to providing the best solutions for our customers.</p>
                <p>With years of experience in the industry, we understand the challenges you face and provide innovative solutions.</p>
                <BackToTopLink onClick={scrollToTop}>↑ Back to Top</BackToTopLink>
            </section>

            <section id="mission">
                <h2>Our Mission</h2>
                <p>Our mission is to deliver exceptional value and quality to our clients worldwide.</p>
                <p>We strive to be a leader in innovation, integrity, and customer satisfaction.</p>
                <BackToTopLink onClick={scrollToTop}>↑ Back to Top</BackToTopLink>
            </section>

            <section id="product">
                <h2>Our Products</h2>
                <p>We offer a comprehensive range of products designed to meet your needs:</p>
                <ul>
                    <li>Product 1 - High-quality solution</li>
                    <li>Product 2 - Innovative approach</li>
                    <li>Product 3 - Customer-focused</li>
                </ul>
                <BackToTopLink onClick={scrollToTop}>↑ Back to Top</BackToTopLink>
            </section>

            <section id="contact">
                <h2>Contact Us</h2>
                <p>We would love to hear from you! Get in touch with us:</p>
                <p>📧 Email: info@example.com</p>
                <p>📞 Phone: +1 (555) 123-4567</p>
                <p>📍 Address: 123 Main St, City, State 12345</p>
                <BackToTopLink onClick={scrollToTop}>↑ Back to Top</BackToTopLink>
            </section>
        </Container>
    );
};

export default Home;