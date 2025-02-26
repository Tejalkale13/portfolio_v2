import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import { motion } from 'framer-motion';
//import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
const ProjectFilter = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <FilterContainer>
      <FilterList>
        <FilterItem
          onClick={() => handleCategoryClick('all')}
          isActive={selectedCategory === 'all'}
        >
          All
        </FilterItem>
        <FilterItem
          onClick={() => handleCategoryClick('kubernetes')}
          isActive={selectedCategory === 'kubernetes'}
        >
          Kubernetes
        </FilterItem>
        <FilterItem
          onClick={() => handleCategoryClick('aws')}
          isActive={selectedCategory === 'aws'}
        >
          AWS
        </FilterItem>
        <FilterItem
          onClick={() => handleCategoryClick('cicd')}
          isActive={selectedCategory === 'cicd'}
        >
          CI/CD
        </FilterItem>
      </FilterList>
      <ProjectGrid>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  padding: 2rem;
`;

const FilterList = styled.ul`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterItem = styled.li`
  font-size: 1rem;
  color: ${({ isActive, theme }) => isActive ? theme.primary : theme.textSecondary};
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export default ProjectFilter;
