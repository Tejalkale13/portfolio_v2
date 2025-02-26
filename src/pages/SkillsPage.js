// src/pages/SkillsPage.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import skills from '../data/skills';
import SkillRadarChart from '../components/skills/SkillRadarChart';
import TechStack from '../components/skills/TechStack';

const SkillsContainer = styled.div`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 2rem;
`;

const TechStackSection = styled(Section)``;

const ChartSection = styled(Section)``;

const SkillDetailsSection = styled(Section)``;

const SkillCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const SkillCategoryTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const SkillCategoryContent = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const SkillsList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 1rem;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ChartItem = styled(motion.div)`
  width: 100%;
`;

const SkillsPage = () => {
  return (
    <SkillsContainer>
      <PageHeader>
        <PageTitle>Skills & Expertise</PageTitle>
        <PageDescription>
          My technical expertise spans across various DevOps technologies, cloud platforms, and programming languages.
          Here's a comprehensive overview of my skillset.
        </PageDescription>
      </PageHeader>

      <TechStackSection>
        <SectionTitle>Technology Stack</SectionTitle>
        <TechStack />
      </TechStackSection>

      <ChartSection>
        <SectionTitle>Skill Proficiency</SectionTitle>
        
        <ChartGrid>
          <ChartItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SkillRadarChart 
              skills={skills.programmingLanguages} 
              title="Programming Languages" 
            />
          </ChartItem>
          
          <ChartItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SkillRadarChart 
              skills={skills.tools} 
              title="DevOps Tools" 
            />
          </ChartItem>
          
          <ChartItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SkillRadarChart 
              skills={skills.cloudTechnologies} 
              title="Cloud Technologies" 
            />
          </ChartItem>
          
          <ChartItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SkillRadarChart 
              skills={skills.technology.concat(skills.databases)} 
              title="Technologies & Databases" 
            />
          </ChartItem>
        </ChartGrid>
      </ChartSection>

      <SkillDetailsSection>
        <SectionTitle>Professional Competencies</SectionTitle>
        
        <SkillCategoriesGrid>
          <SkillCategory
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SkillCategoryTitle>Cloud Infrastructure</SkillCategoryTitle>
            <SkillCategoryContent>
              <p>Experienced in designing, implementing, and managing cloud infrastructure on major platforms including AWS, Azure, and Google Cloud. Proficient in:</p>
              <SkillsList>
                <SkillItem>Multi-cloud architecture design</SkillItem>
                <SkillItem>Virtual machine provisioning and management</SkillItem>
                <SkillItem>Container orchestration with Kubernetes</SkillItem>
                <SkillItem>Infrastructure as Code (IaC) using Terraform</SkillItem>
                <SkillItem>Cloud networking and security best practices</SkillItem>
                <SkillItem>Cost optimization and resource management</SkillItem>
              </SkillsList>
            </SkillCategoryContent>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SkillCategoryTitle>CI/CD & Automation</SkillCategoryTitle>
            <SkillCategoryContent>
              <p>Strong expertise in creating efficient CI/CD pipelines and automating development workflows using:</p>
              <SkillsList>
                <SkillItem>GitHub Actions for automated workflows</SkillItem>
                <SkillItem>Jenkins for continuous integration</SkillItem>
                <SkillItem>Docker for containerization</SkillItem>
                <SkillItem>Shell scripting for automation</SkillItem>
                <SkillItem>Blue-green deployment strategies</SkillItem>
                <SkillItem>Testing automation integration</SkillItem>
              </SkillsList>
            </SkillCategoryContent>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SkillCategoryTitle>Monitoring & DevOps</SkillCategoryTitle>
            <SkillCategoryContent>
              <p>Skilled in setting up comprehensive monitoring solutions and implementing DevOps best practices:</p>
              <SkillsList>
                <SkillItem>Prometheus for metrics collection</SkillItem>
                <SkillItem>Grafana for visualization and alerting</SkillItem>
                <SkillItem>Log management and analysis</SkillItem>
                <SkillItem>System and application performance monitoring</SkillItem>
                <SkillItem>Alert configuration and incident response</SkillItem>
                <SkillItem>Infrastructure troubleshooting</SkillItem>
              </SkillsList>
            </SkillCategoryContent>
          </SkillCategory>
          
          <SkillCategory
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SkillCategoryTitle>Development & Soft Skills</SkillCategoryTitle>
            <SkillCategoryContent>
              <p>Complementary development abilities and interpersonal skills:</p>
              <SkillsList>
                <SkillItem>Web development with HTML, CSS, and JavaScript</SkillItem>
                <SkillItem>Backend development with Python and Flask</SkillItem>
                <SkillItem>Database management with MySQL and MongoDB</SkillItem>
                <SkillItem>Effective communication and teamwork</SkillItem>
                <SkillItem>Problem-solving and creativity</SkillItem>
                <SkillItem>Agile development methodologies</SkillItem>
              </SkillsList>
            </SkillCategoryContent>
          </SkillCategory>
        </SkillCategoriesGrid>
      </SkillDetailsSection>
    </SkillsContainer>
  );
};

export default SkillsPage;
