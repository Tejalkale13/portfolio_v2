import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import ProjectCard from '../projects/ProjectCard';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <FeaturedContainer>
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectGrid>
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </FeaturedContainer>
  );
};

const FeaturedContainer = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export default FeaturedProjects;
