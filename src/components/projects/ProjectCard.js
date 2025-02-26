import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <CardContainer 
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <CardImageWrapper>
        <CardImage src={project.image} alt={project.title} />
        <CardOverlay>
          <ViewProject to={`/projects/${project.id}`}>View Details</ViewProject>
        </CardOverlay>
      </CardImageWrapper>
      
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.shortDescription}</CardDescription>
        
        <TechStack>
          {project.technologies.slice(0, 4).map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
          {project.technologies.length > 4 && (
            <TechTagMore>+{project.technologies.length - 4}</TechTagMore>
          )}
        </TechStack>
        
        <CardLinks>
          {project.githubLink && (
            <CardLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Code
            </CardLink>
          )}
          {project.demoLink && (
            <CardLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
              Demo
            </CardLink>
          )}
        </CardLinks>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${CardImageWrapper}:hover & {
    opacity: 1;
  }
  
  ${CardImageWrapper}:hover ${CardImage} {
    transform: scale(1.1);
  }
`;

const ViewProject = styled(Link)`
  padding: 0.7rem 1.2rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  border-radius: 20px;
  font-weight: 500;
`;

const TechTagMore = styled(TechTag)`
  background-color: ${({ theme }) => theme.secondaryLight};
  color: ${({ theme }) => theme.secondaryDark};
`;

const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const CardLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  svg {
    font-size: 1.1rem;
  }
`;

export default ProjectCard;
