import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import projects from '../data/projects';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project by ID
    const foundProject = projects.find(p => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
      // Update document title
      document.title = `${foundProject.title} | Tejal Kale Portfolio`;
    }
    
    setLoading(false);
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <LoadingContainer>
        <div className="loader"></div>
      </LoadingContainer>
    );
  }

  if (!project) {
    return (
      <NotFoundContainer>
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <BackLink to="/projects">
          <FaArrowLeft /> Back to Projects
        </BackLink>
      </NotFoundContainer>
    );
  }

  return (
    <ProjectContainer>
      <Breadcrumbs>
        <BackLink to="/projects">
          <FaArrowLeft /> Back to Projects
        </BackLink>
      </Breadcrumbs>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          
          <ProjectLinks>
            {project.githubLink && (
              <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View Code
              </ProjectLink>
            )}
            {project.demoLink && (
              <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectHeader>
        
        <ProjectImage src={project.image} alt={project.title} />
        
        <ProjectContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <Description>{project.description}</Description>
          </Section>
          
          <TwoColumnSection>
            <Column>
              <Section>
                <SectionTitle>Challenges</SectionTitle>
                <List>
                  {project.challenges.map((challenge, index) => (
                    <ListItem key={index}>{challenge}</ListItem>
                  ))}
                </List>
              </Section>
            </Column>
            
            <Column>
              <Section>
                <SectionTitle>Solutions</SectionTitle>
                <List>
                  {project.solutions.map((solution, index) => (
                    <ListItem key={index}>{solution}</ListItem>
                  ))}
                </List>
              </Section>
            </Column>
          </TwoColumnSection>
          
          <Section>
            <SectionTitle>Technologies Used</SectionTitle>
            <TechList>
              {project.technologies.map((tech, index) => (
                <TechBadge key={index}>{tech}</TechBadge>
              ))}
            </TechList>
          </Section>
          
          {project.diagrams && project.diagrams.length > 0 && (
            <Section>
              <SectionTitle>Architecture Diagrams</SectionTitle>
              <DiagramsContainer>
                {project.diagrams.map((diagram, index) => (
                  <DiagramItem key={index}>
                    <DiagramTitle>{diagram.title}</DiagramTitle>
                    <DiagramImage src={diagram.image} alt={diagram.title} />
                  </DiagramItem>
                ))}
              </DiagramsContainer>
            </Section>
          )}
        </ProjectContent>
      </motion.div>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  
  .loader {
    border: 5px solid ${({ theme }) => theme.backgroundSecondary};
    border-top: 5px solid ${({ theme }) => theme.primary};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const Breadcrumbs = styled.div`
  margin-bottom: 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:first-child {
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.text};
    
    &:hover {
      background-color: ${({ theme }) => theme.backgroundSecondary};
    }
  }
  
  &:last-child {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    
    &:hover {
      background-color: ${({ theme }) => theme.primaryDark};
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ProjectContent = styled.div``;

const Section = styled.section`
  margin-bottom: 3rem;
  padding: 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.primary};
    margin-top: 0.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.textSecondary};
  white-space: pre-line;
`;

const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Column = styled.div``;

const List = styled.ul`
  list-style-position: inside;
  padding-left: 0.5rem;
`;

const ListItem = styled.li`
  font-size: 1.05rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
  
  &::marker {
    color: ${({ theme }) => theme.primary};
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechBadge = styled.span`
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
  }
`;

const DiagramsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DiagramItem = styled.div``;

const DiagramTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const DiagramImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export default ProjectDetailsPage;
