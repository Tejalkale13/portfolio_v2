import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ toggleTheme, currentTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
    </ToggleContainer>
  );
};

const ToggleContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export default ThemeToggle;
