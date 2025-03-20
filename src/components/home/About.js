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
          I am a motivated DevOps Engineer with a strong foundation in cloud computing and DevOps technologies. 
          I have experience in AWS, Azure, Docker, Kubernetes, and CI/CD pipelines. I am committed to designing 
          scalable infrastructures and driving innovation through continuous learning and cutting-edge technological solutions.
        </Description>
        
        <ExperienceList>
          <ExperienceItem>
            <ExperienceTitle>DevOps Engineer Intern</ExperienceTitle>
            <ExperienceCompany>Expert Cloud Consulting</ExperienceCompany>
            <ExperiencePeriod>2024 - Present</ExperiencePeriod>
            <ExperienceDescription>
              Conducted a comprehensive assessment of client workloads on AWS to evaluate compatibility, performance, and cost implications before migration. 
              Successfully migrated virtual machines from AWS to Azure using Azure Migration Service, ensuring minimal downtime and data integrity.
            </ExperienceDescription>
          </ExperienceItem>
          
          <ExperienceItem>
            <ExperienceTitle>Associate Software Engineer</ExperienceTitle>
            <ExperienceCompany>Apexon Corporation Pvt Ltd</ExperienceCompany>
            <ExperiencePeriod>September 2021 - April 2023</ExperiencePeriod>
            <ExperienceDescription>
              Collaborated with development and product management teams to transition and operate cloud and DevOps-based workloads.
              Implemented CI/CD pipelines and automated deployment processes for web applications.
              Worked on containerization using Docker and managed Kubernetes clusters for application deployment.
            </ExperienceDescription>
          </ExperienceItem>
        </ExperienceList>
        
        <SkillsSection>
          <SkillsTitle>Technical Skills</SkillsTitle>
          <SkillsGrid>
            <SkillCategory>
              <SkillCategoryTitle>Programming &amp; Scripting</SkillCategoryTitle>
              <SkillList>CPP, Java, Bash, Python, HTML</SkillList>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>Database Systems</SkillCategoryTitle>
              <SkillList>SQL (MySQL), NoSQL (MongoDB)</SkillList>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>Version Control</SkillCategoryTitle>
              <SkillList>Git, GitHub</SkillList>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>Container Orchestration</SkillCategoryTitle>
              <SkillList>Docker, Kubernetes</SkillList>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>Cloud Platforms</SkillCategoryTitle>
              <SkillList>AWS, Azure</SkillList>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>Infrastructure as Code</SkillCategoryTitle>
              <SkillList>Terraform, Ansible</SkillList>
            </SkillCategory>
          </SkillsGrid>
        </SkillsSection>
      </motion.div>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.background};
  max-width: 1200px;
  margin: 0 auto;
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
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ExperienceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 3rem;
`;

const ExperienceItem = styled.li`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const ExperiencePeriod = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

const SkillsSection = styled.div`
  margin-top: 3rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SkillCategory = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const SkillCategoryTitle = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.8rem;
`;

const SkillList = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

export default About;
