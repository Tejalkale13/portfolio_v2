import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../projects/ProjectCard';

// Since we don't have the actual projects data, I'll create a temporary array
// You should replace this with your actual projects data or import it from a file
const projects = [
  {
    id: 1,
    title: "Continuous Delivery Pipeline",
    description: "Built and deployed an automated CD pipeline using GitHub, DockerHub, and AWS for seamless web application updates.",
    image: "/images/projects/cd-pipeline.jpg",
    tech: ["AWS", "Docker", "GitHub", "CI/CD"],
    featured: true,
    url: "/projects/cd-pipeline"
  },
  {
    id: 2,
    title: "Kubernetes Application Deployment",
    description: "Deployed a containerized web application on a Kubernetes cluster with high availability and scalability features.",
    image: "/images/projects/kubernetes-deploy.jpg",
    tech: ["Kubernetes", "Docker", "AWS", "Microservices"],
    featured: true,
    url: "/projects/kubernetes-deployment"
  },
  {
    id: 3,
    title: "AWS Infrastructure with Terraform",
    description: "Created and managed AWS infrastructure using Terraform for reliable and repeatable deployments.",
    image: "/images/projects/terraform-aws.jpg",
    tech: ["Terraform", "AWS", "IaC", "DevOps"],
    featured: true,
    url: "/projects/terraform-aws"
  }
];

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <FeaturedContainer>
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectGrid>
        {featuredProjects.map(project => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            <ProjectCardContainer>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechBadge key={index}>{tech}</TechBadge>
                  ))}
                </TechStack>
                <ViewProjectButton to={project.url}>View Project</ViewProjectButton>
              </ProjectContent>
            </ProjectCardContainer>
          </motion.div>
        ))}
      </ProjectGrid>
      <AllProjectsLink to="/projects">View All Projects</AllProjectsLink>
    </FeaturedContainer>
  );
};

const FeaturedContainer = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ProjectCardContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.8rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ViewProjectButton = styled(Link)`
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

const AllProjectsLink = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  text-decoration: none;
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primaryDark};
    transform: translateY(-2px);
  }
`;

export default FeaturedProjects;
