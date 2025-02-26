import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>About Me</Title>
        <Description>
          I am a motivated Cloud and DevOps professional with a strong foundation in cloud computing and DevOps technologies. I am committed to designing scalable infrastructures and driving innovation through continuous learning and cutting-edge technological solutions.
        </Description>
        <ExperienceList>
          <ExperienceItem>
            <ExperienceTitle>DevOps Engineer Intern</ExperienceTitle>
            <ExperienceCompany>Expert Cloud Consulting</ExperienceCompany>
            <ExperiencePeriod>2024 - Present</ExperiencePeriod>
            <ExperienceDescription>
              Conducted a comprehensive assessment of client workloads on AWS to evaluate compatibility, performance, and cost implications before migration. Successfully migrated virtual machines from AWS to Azure using Azure Migration Service, ensuring minimal downtime and data integrity.
            </ExperienceDescription>
          </ExperienceItem>
        </ExperienceList>
      </motion.div>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.background};
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  margin-bottom: 2rem;
`;

const ExperienceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExperienceItem = styled.li`
  margin-bottom: 2rem;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.5rem;
`;

const ExperiencePeriod = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export default About;
