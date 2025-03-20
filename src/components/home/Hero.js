import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <LeftColumn>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Greeting>Hello, I'm</Greeting>
            <Name>Tejal Kale</Name>
            <Title>DevOps Engineer</Title>
            <Description>
              I build and optimize cloud infrastructure and DevOps workflows,
              specializing in AWS, Azure, Docker, Kubernetes, and CI/CD pipelines.
            </Description>
            <ButtonGroup>
              <PrimaryButton to="/projects">View Projects</PrimaryButton>
              <SecondaryButton to="/contact">Contact Me</SecondaryButton>
            </ButtonGroup>
          </motion.div>
        </LeftColumn>
        
        <RightColumn>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfileImageContainer>
              <ProfileImage src="/images/profile-image.jpg" alt="Tejal Kale" />
            </ProfileImageContainer>
          </motion.div>
        </RightColumn>
      </HeroContent>
      
      <TechBadges>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <TechBadge>AWS</TechBadge>
          <TechBadge>Azure</TechBadge>
          <TechBadge>Docker</TechBadge>
          <TechBadge>Kubernetes</TechBadge>
          <TechBadge>Terraform</TechBadge>
          <TechBadge>CI/CD</TechBadge>
          <TechBadge>Jenkins</TechBadge>
          <TechBadge>Git</TechBadge>
        </motion.div>
      </TechBadges>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  position: relative;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding-top: 4rem;
  
  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Greeting = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin: 0.5rem 0;
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2rem;
  max-width: 550px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Link)`
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primaryLight};
    transform: translateY(-2px);
  }
`;

const ProfileImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid ${({ theme }) => theme.primary};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TechBadges = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const TechBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
  }
`;

export default Hero;
