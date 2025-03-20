import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import { motion } from 'framer-motion';
//import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const ProjectFilter = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => project.category))];

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
        {categories.map((category) => (
          <FilterItem
            key={category}
            onClick={() => handleCategoryClick(category)}
            isActive={selectedCategory === category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterItem>
        ))}
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
  padding: 2rem 0;
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
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
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
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 2rem;
`;

const NoProjectsMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export default ProjectFilter;
