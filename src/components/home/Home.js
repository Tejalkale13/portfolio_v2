import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import FeaturedProjects from './FeaturedProjects';
import About from './About';

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <FeaturedProjects />
      <About />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

export default Home;
