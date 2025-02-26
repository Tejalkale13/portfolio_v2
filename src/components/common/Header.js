import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ toggleTheme, currentTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <NavContent>
        <LogoSection>
          <Logo to="/">Prasad Bandagale</Logo>
        </LogoSection>
        
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        
        <DesktopMenu>
          <NavLink to="/" $isActive={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/projects" $isActive={location.pathname === '/projects' || location.pathname.startsWith('/projects/')}>Projects</NavLink>
          <NavLink to="/skills" $isActive={location.pathname === '/skills'}>Skills</NavLink>
          <NavLink to="/blog" $isActive={location.pathname === '/blog'}>Blog</NavLink>
          <NavLink to="/contact" $isActive={location.pathname === '/contact'}>Contact</NavLink>
          <ThemeToggle onClick={toggleTheme}>
            {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </DesktopMenu>
      </NavContent>
      
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink to="/" $isActive={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/projects" $isActive={location.pathname === '/projects' || location.pathname.startsWith('/projects/')}>Projects</NavLink>
            <NavLink to="/skills" $isActive={location.pathname === '/skills'}>Skills</NavLink>
            <NavLink to="/blog" $isActive={location.pathname === '/blog'}>Blog</NavLink>
            <NavLink to="/contact" $isActive={location.pathname === '/contact'}>Contact</NavLink>
            <ThemeToggle onClick={toggleTheme}>
              {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
            </ThemeToggle>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${({ isScrolled, theme }) => 
    isScrolled ? theme.headerBg : 'transparent'};
  backdrop-filter: ${({ isScrolled }) => 
    isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ isScrolled }) => 
    isScrolled ? '0 5px 20px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const DesktopMenu = styled.nav`
  display: none;
  align-items: center;
  gap: 2rem;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.primary : theme.text};
  font-weight: ${({ $isActive }) => 
    $isActive ? '600' : '400'};
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.25rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.headerBg};
  padding: 1rem 0;
  overflow: hidden;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  a {
    margin: 1rem 0;
  }
`;

export default Header;
