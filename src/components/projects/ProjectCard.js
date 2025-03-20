import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiTerraform, 
  SiJenkins, 
  SiDocker, 
  SiAmazonaws, 
  SiMicrosoftazure, 
  SiGooglecloud,
  SiPython,
  SiJavascript,
  SiReact,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiPrometheus,
  SiGrafana
} from 'react-icons/si';

const getTechIcon = (tech) => {
  const techLower = tech.toLowerCase();
  
  if (techLower.includes('kubernetes') || techLower.includes('gke')) return <SiKubernetes />;
  if (techLower.includes('terraform')) return <SiTerraform />;
  if (techLower.includes('jenkins')) return <SiJenkins />;
  if (techLower.includes('docker')) return <SiDocker />;
  if (techLower.includes('aws')) return <SiAmazonaws />;
  if (techLower.includes('azure')) return <SiMicrosoftazure />;
  if (techLower.includes('google cloud') || techLower.includes('gcp')) return <SiGooglecloud />;
  if (techLower.includes('python')) return <SiPython />;
  if (techLower.includes('javascript')) return <SiJavascript />;
  if (techLower.includes('react')) return <SiReact />;
  if (techLower.includes('flask')) return <SiFlask />;
  if (techLower.includes('postgres')) return <SiPostgresql />;
  if (techLower.includes('mongodb')) return <SiMongodb />;
  if (techLower.includes('git')) return <SiGit />;
  if (techLower.includes('prometheus')) return <SiPrometheus />;
  if (techLower.includes('grafana')) return <SiGrafana />;
  
  // Default icon for other technologies
  return <FaExternalLinkAlt />;
};

const ProjectCard = ({ project }) => {
  // Display a maximum of 5 technologies on the card
  const displayTechnologies = project.technologies.slice(0, 5);
  const remainingTechCount = project.technologies.length - 5;

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
      {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
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
          {displayTechnologies.map((tech, index) => {
            // For some technologies, display an abbreviated version
            const displayName = tech.length > 15 
              ? tech.split(' ')[0] // Display just the first word
              : tech;
              
            return (
              <TechTag key={index}>
                <TechIcon>{getTechIcon(tech)}</TechIcon>
                <TechName>{displayName}</TechName>
              </TechTag>
            );
          })}
          {remainingTechCount > 0 && (
            <TechTagMore>+{remainingTechCount}</TechTagMore>
          )}
        </TechStack>
        
        <CardLinks>
          {project.githubLink && (
            <CardLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Code
            </CardLink>
          )}
          {project.demoLink && project.demoLink !== "" && (
            <CardLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Demo
            </CardLink>
          )}
        </CardLinks>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  z-index: 2;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
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
  line-height: 1.4;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechIcon = styled.span`
  margin-right: 0.3rem;
  display: inline-flex;
  align-items: center;
`;

const TechName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TechTag = styled.span`
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  border-radius: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  max-width: 130px;
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
