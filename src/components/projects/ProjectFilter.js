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
      setFilteredProjects(projects.filter(project => 
        project.technologies.includes(selectedCategory) || 
        project.category === selectedCategory
      ));
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
          onClick={() => handleCategoryClick('AWS')}
          isActive={selectedCategory === 'AWS'}
        >
          AWS
        </FilterItem>
        <FilterItem
          onClick={() => handleCategoryClick('Docker')}
          isActive={selectedCategory === 'Docker'}
        >
          Docker
        </FilterItem>
        <FilterItem
          onClick={() => handleCategoryClick('Kubernetes')}
          isActive={selectedCategory === 'Kubernetes'}
        >
          Kubernetes
        </FilterItem>
        <FilterItem
          onClick={() => handleCategoryClick('CI/CD')}
          isActive={selectedCategory === 'CI/CD'}
        >
          CI/CD
        </FilterItem>
        <FilterItem
          onClick={() => handleCategoryClick('Terraform')}
          isActive={selectedCategory === 'Terraform'}
        >
          Terraform
        </FilterItem>
      </FilterList>
      <ProjectGrid>
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <NoProjectsMessage>No projects found in this category.</NoProjectsMessage>
        )}
      </ProjectGrid>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  padding: 2rem;
`;

const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0;
  list-style: none;
`;

const FilterItem = styled.li`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: ${({ isActive, theme }) => isActive ? theme.primary : 'transparent'};
  color: ${({ isActive, theme }) => isActive ? '#fff' : theme.textSecondary};
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${({ isActive, theme }) => isActive ? theme.primary : theme.textSecondary};
  
  &:hover {
    color: ${({ isActive, theme }) => isActive ? '#fff' : theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const NoProjectsMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export default ProjectFilter;
